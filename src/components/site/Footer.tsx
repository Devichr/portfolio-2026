import { siteName, tagline } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-obsidian/15 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display text-lg font-semibold text-obsidian">
          {tagline}
        </p>
        <p className="font-mono text-xs text-obsidian/50">
          © {new Date().getFullYear()} {siteName}
        </p>
      </div>
    </footer>
  );
}
