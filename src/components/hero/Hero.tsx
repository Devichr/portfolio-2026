import { siteName, role, subline } from "@/lib/site";
import SkillGraph from "@/components/hero/SkillGraph";

const sublineWords = subline
  .split(" ")
  .map((w) => w.replace(/\.$/, ""));

export default function Hero() {
  return (
    <header className="snap-section relative flex items-center overflow-hidden pt-20 pb-10 sm:pt-24 md:pb-12">
      <SkillGraph />

      <div className="pointer-events-none relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-xs text-obsidian/80 uppercase sm:text-sm">
          <span className="text-sage">{siteName}</span>
          <span className="mx-2 text-obsidian/40">·</span>
          {role.toUpperCase()}
        </p>

        <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-obsidian sm:text-6xl md:text-7xl">
          I BUILD <span className="text-terracotta">SOFTWARE</span>
          <br />
          YOU CAN ACTUALLY <span className="text-terracotta">FEEL.</span>
        </h1>

        <p className="mt-6 max-w-md font-mono text-xs leading-relaxed text-obsidian/70 sm:text-sm">
          Web · Mobile · Backend · Realtime · Product
        </p>

        <p className="mt-3 font-mono text-[11px] tracking-wider text-sage uppercase sm:text-xs">
          {sublineWords.join(" · ")}
        </p>

        <div className="pointer-events-auto mt-7 flex flex-wrap gap-3 sm:gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-sm bg-terracotta px-5 py-2.5 font-mono text-xs font-medium text-ivory transition-colors hover:bg-obsidian sm:px-6 sm:py-3 sm:text-sm"
          >
            EXPLORE MY WORK →
          </a>
          <a
            href="/pdf/deck"
            className="inline-flex items-center gap-2 rounded-sm border border-obsidian/30 px-5 py-2.5 font-mono text-xs font-medium text-obsidian transition-colors hover:border-terracotta hover:text-terracotta sm:px-6 sm:py-3 sm:text-sm"
          >
            DOWNLOAD PORTFOLIO PDF
          </a>
        </div>
      </div>
    </header>
  );
}