import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const siteName = "Deviano Christian";
export const handle = "devichr";
export const role = "Full Stack Software Engineer";
export const tagline = "I BUILD SOFTWARE YOU CAN ACTUALLY FEEL.";
export const subline = "Fast. Clear. Natural. Reliable. Alive. Useful.";

export const baseMetadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteName} — ${role}`,
    template: `%s · ${siteName}`,
  },
  description:
    "Deviano Christian — full stack software engineer. Product, backend, realtime systems, and mobile. I build software you can actually feel.",
  keywords: [
    "Deviano Christian",
    handle,
    "full stack software engineer",
    "software engineer",
    "product engineering",
    "realtime systems",
    "mobile development",
    "Go",
    "Next.js",
    "NestJS",
    "Flutter",
  ],
  openGraph: {
    title: `${siteName} — ${role}`,
    description:
      "I build software you can actually feel. Product, backend, realtime systems, mobile.",
    url: SITE_URL,
    siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — ${role}`,
    description: "I build software you can actually feel.",
  },
} satisfies Metadata;