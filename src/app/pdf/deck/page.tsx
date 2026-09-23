import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { otherBuilds } from "@/content/otherBuilds";
import { profile } from "@/content/profile";
import { contact } from "@/content/contact";
import { siteName, role, tagline, subline } from "@/lib/site";
import Tag from "@/components/ui/Tag";
import type { HomeProject } from "@/content/types";

export const metadata: Metadata = {
  title: "Portfolio Deck",
  robots: { index: false },
};

const words = subline.split(" ").map((w) => w.replace(/\.$/, ""));

const mainProjects = projects.filter((p) => p.slug !== "ble-config");
const ble = projects.find((p) => p.slug === "ble-config");

type MiniProject = {
  name: string;
  tags: string[];
  about: string;
  contribution: string[];
};

const moreProjects: MiniProject[] = [
  ...(ble
    ? [
        {
          name: ble.name,
          tags: ble.tags,
          about: ble.intro.join(" "),
          contribution: ble.contribution,
        },
      ]
    : []),
  ...otherBuilds.map((b) => ({
    name: b.name,
    tags: b.tags,
    about: b.about,
    contribution: b.contribution,
  })),
];

const moreSlides: MiniProject[][] = [];
for (let i = 0; i < moreProjects.length; i += 2) {
  moreSlides.push(moreProjects.slice(i, i + 2));
}

function SlideHeader({ label }: { label: string }) {
  return (
    <p className="font-mono text-[11px] tracking-widest text-obsidian/50 uppercase">
      {siteName} · {label}
    </p>
  );
}

function Gallery({ project }: { project: HomeProject }) {
  const shots = (project.screenshots ?? []).filter(Boolean);
  return (
    <div className="grid content-start gap-2">
      {project.image && (
        <div className="overflow-hidden rounded-sm border border-obsidian/15">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.name} hero`}
            className="aspect-video w-full object-cover"
          />
        </div>
      )}
      <div className="grid grid-cols-3 gap-2">
        {shots.map((src, i) => (
          <div
            key={src}
            className="overflow-hidden rounded-sm border border-obsidian/15"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${project.name} screenshot ${i + 1}`}
              className="aspect-video w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniProjectCard({ project }: { project: MiniProject }) {
  return (
    <div className="flex flex-col">
      <h3 className="font-display text-xl font-semibold text-obsidian">
        {project.name}
      </h3>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
      <div className="mt-3">
        <p className="font-mono text-[10px] tracking-widest text-obsidian/50 uppercase">
          What it is
        </p>
        <p className="mt-1 text-[12px] leading-relaxed text-obsidian/80">
          {project.about}
        </p>
      </div>
      <div className="mt-3">
        <p className="font-mono text-[10px] tracking-widest text-obsidian/50 uppercase">
          How I contributed
        </p>
        <ul className="mt-1 space-y-1">
          {project.contribution.map((item) => (
            <li
              key={item}
              className="flex gap-1.5 text-[12px] leading-snug text-obsidian/80"
            >
              <span className="text-terracotta">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function DeckPage() {
  return (
    <main className="print-page">
      <section className="deck-slide" aria-label="Profile">
        <SlideHeader label="Profile" />
        <div className="mt-6 flex flex-1 items-center gap-10">
          {profile.headshot ? (
            <div className="h-44 w-44 shrink-0 overflow-hidden rounded-full border-4 border-obsidian">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.headshot}
                alt={profile.name}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-full border-4 border-dashed border-obsidian/30 font-mono text-[11px] text-obsidian/40 uppercase">
              Photo
            </div>
          )}
          <div>
            <h1 className="font-display text-5xl font-semibold text-obsidian">
              {profile.name}
            </h1>
            <p className="mt-2 font-mono text-sm tracking-wider text-obsidian/70 uppercase">
              {role}
            </p>
            <p className="mt-5 max-w-xl font-display text-xl font-semibold leading-snug text-obsidian">
              {tagline}
            </p>
            <p className="mt-2 font-mono text-xs tracking-wider text-obsidian/60 uppercase">
              {words.join(" · ")}
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-obsidian/80">
              {profile.processLine}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <p className="font-mono text-[11px] tracking-widest text-obsidian/50 uppercase">
            Skills
          </p>
          <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-1.5">
            {profile.skillGroups.map((g) => (
              <p key={g.title} className="text-xs leading-snug text-obsidian/80">
                <span className="font-semibold text-obsidian">{g.title}:</span>{" "}
                {g.skills.join(", ")}
              </p>
            ))}
          </div>
        </div>
        <footer className="mt-8 border-t border-obsidian/20 pt-3 font-mono text-[11px] text-obsidian/70">
          {contact.email} · {contact.linkedin} · {contact.github}
        </footer>
      </section>

      {mainProjects.map((p, i) => (
        <section key={p.slug} className="deck-slide" aria-label={p.name}>
          <SlideHeader label={`Project 0${i + 1} of ${mainProjects.length}`} />
          <div className="mt-5 grid flex-1 grid-cols-[minmax(0,1fr)_340px] gap-6">
            <div className="flex flex-col">
              <div>
                <p className="font-mono text-xs tracking-widest text-sage uppercase">
                  {p.role}
                </p>
                <div className="mt-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="font-display text-3xl font-semibold text-obsidian">
                    {p.name}
                  </h2>
                  <p className="font-mono text-sm tracking-wider text-obsidian/60 uppercase">
                    {p.subtitle}
                  </p>
                </div>
                <p className="mt-2 max-w-2xl font-display text-lg font-medium italic leading-snug text-obsidian/80">
                  “{p.heroQuote}”
                </p>
              </div>

              <div className="mt-4">
                <p className="font-mono text-[11px] tracking-widest text-obsidian/50 uppercase">
                  What it is
                </p>
                <div className="mt-1.5 space-y-1.5">
                  {p.intro.map((para) => (
                    <p
                      key={para}
                      className="text-[12.5px] leading-relaxed text-obsidian/80"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <p className="mt-3 font-mono text-[11px] tracking-widest text-obsidian/50 uppercase">
                  How I contributed
                </p>
                <ul className="mt-1.5 space-y-1">
                  {p.contribution.map((item) => (
                    <li
                      key={item}
                      className="flex gap-1.5 text-[12.5px] leading-snug text-obsidian/80"
                    >
                      <span className="text-terracotta">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
                {p.keyResult && (
                  <div className="ml-auto inline-flex items-center gap-2 rounded-sm border border-obsidian/25 px-3 py-1.5">
                    <span className="font-mono text-[11px] tracking-widest text-obsidian/60 uppercase">
                      {p.keyResult.label}
                    </span>
                    <span className="text-sm text-obsidian/60 line-through">
                      {p.keyResult.before}
                    </span>
                    <span className="text-sm font-semibold text-terracotta">
                      {p.keyResult.after}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <Gallery project={p} />
          </div>
        </section>
      ))}

      {moreSlides.map((pair, i) => (
        <section
          key={`more-${i}`}
          className="deck-slide"
          aria-label={`More work ${i + 1}`}
        >
          <SlideHeader label={`More Work ${i + 1} of ${moreSlides.length}`} />
          <div className="mt-5 grid flex-1 grid-cols-2 gap-6">
            {pair.map((project, j) => (
              <div
                key={project.name}
                className={j === 1 ? "border-l border-obsidian/20 pl-6" : ""}
              >
                <MiniProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}