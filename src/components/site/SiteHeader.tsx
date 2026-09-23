import Link from "next/link";
import { siteName } from "@/lib/site";

const nav = [
  { label: "Work", href: "#work" },
  { label: "Builds", href: "#builds" },
  { label: "Profile", href: "#profile" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-obsidian/10 bg-ivory/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-display text-lg font-semibold text-obsidian">
          {siteName.split(" ")[0]}
          <span className="text-terracotta">.</span>
        </Link>
        <nav className="hidden items-center gap-6 sm:flex">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="font-mono text-sm text-obsidian/70 hover:text-terracotta"
            >
              {n.label}
            </a>
          ))}
          <a
            href="/pdf/deck"
            className="font-mono text-sm text-terracotta underline underline-offset-4"
          >
            Portfolio PDF
          </a>
        </nav>
      </div>
    </header>
  );
}
