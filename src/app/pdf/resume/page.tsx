import type { Metadata } from "next";
import { homeProjects } from "@/content/projects";
import { profile } from "@/content/profile";
import { contact } from "@/content/contact";
import { siteName, role, tagline, subline } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  robots: { index: false },
};

const words = subline.split(" ").map((w) => w.replace(/\.$/, ""));

export default function ResumePage() {
  return (
    <main className="print-page mx-auto max-w-3xl p-10">
      <header className="border-b-2 border-obsidian pb-6">
        <h1 className="font-display text-4xl font-semibold text-obsidian">
          {siteName}
        </h1>
        <p className="mt-1 font-mono text-sm text-obsidian/70">{role}</p>
        <p className="mt-3 font-display text-2xl font-semibold text-obsidian">
          {tagline}
        </p>
        <p className="mt-2 font-mono text-xs tracking-wider text-obsidian/60 uppercase">
          {words.join(" · ")}
        </p>
      </header>

      <section className="mt-8">
        <h2 className="font-mono text-xs tracking-widest text-obsidian/50 uppercase">
          Selected Work
        </h2>
        <div className="mt-4 space-y-4">
          {homeProjects.map((p) => (
            <div key={p.slug}>
              <p className="font-display text-lg font-semibold text-obsidian">
                {p.name}
              </p>
              <p className="mt-1 text-sm text-obsidian/70">{p.oneLineStory}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-xs tracking-widest text-obsidian/50 uppercase">
          Skills
        </h2>
        <div className="mt-4 space-y-2">
          {profile.skillGroups.map((g) => (
            <p key={g.title} className="text-sm text-obsidian/80">
              <span className="font-semibold text-obsidian">{g.title}:</span>{" "}
              {g.skills.join(", ")}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="font-mono text-xs tracking-widest text-obsidian/50 uppercase">
          How I work
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-obsidian/80">
          {profile.processLine}
        </p>
      </section>

      <footer className="mt-12 border-t border-obsidian/30 pt-4 font-mono text-xs text-obsidian/70">
        {contact.email} · {contact.linkedin} · {contact.github}
      </footer>
    </main>
  );
}