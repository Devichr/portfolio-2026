import { spawn, execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = 3100;
const base = `http://localhost:${port}`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForServer(url, timeoutMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      /* not up yet */
    }
    await sleep(500);
  }
  throw new Error(`Server not ready at ${url}`);
}

async function main() {
  console.log("▸ building…");
  execSync("npm run build", { cwd: root, stdio: "inherit" });

  console.log(`▸ starting server on :${port}…`);
  const server = spawn("npm", ["run", "start", "--", "-p", String(port)], {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, PORT: String(port) },
  });

  try {
    await waitForServer(`${base}/pdf/resume`);

    console.log("▸ launching headless chrome…");
    const { default: puppeteer } = await import("puppeteer");
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    fs.mkdirSync(path.join(root, "public/documents"), { recursive: true });

    const out = [
      { route: "/pdf/resume", file: "deviano-christian-resume.pdf" },
      { route: "/pdf/casestudies", file: "deviano-christian-case-studies.pdf" },
    ];

    for (const { route, file } of out) {
      await page.emulateMediaType("print");
      await page.goto(`${base}${route}`, { waitUntil: "networkidle0" });
      const target = path.join(root, "public/documents", file);
      await page.pdf({
        path: target,
        format: "A4",
        printBackground: true,
        preferCSSPageSize: true,
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
      });
      console.log(`✔ wrote ${file}`);
    }

    await browser.close();
  } finally {
    server.kill();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});