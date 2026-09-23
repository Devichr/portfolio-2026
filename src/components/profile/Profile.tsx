import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { profile } from "@/content/profile";

export default function Profile() {
  return (
    <div>
      <Reveal>
        <SectionHeading title="Profile" />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-obsidian sm:text-4xl">
              Hi, I am {profile.name}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-obsidian/80">
              {profile.processLine}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {profile.skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={0.08 + i * 0.05}>
                <div>
                  <p className="font-mono text-xs tracking-widest text-sage uppercase">
                    {g.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-obsidian/80">
                    {g.skills.join(" · ")}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-sm border border-dashed border-obsidian/25 p-6">
              <p className="font-mono text-xs tracking-widest text-sage uppercase">
                Things I learned the hard way
              </p>
              <ol className="mt-4 space-y-3">
                {profile.lessons.map((lesson, i) => (
                  <li key={lesson} className="flex gap-3 font-display text-lg italic text-obsidian">
                    <span className="font-mono text-sm text-terracotta not-italic">
                      0{i + 1}
                    </span>
                    {lesson}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="order-first md:order-last">
          <aside>
            {profile.portrait ? (
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-obsidian/20">
                <Image
                  src={profile.portrait}
                  alt={`${profile.name} portrait`}
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-obsidian/25 bg-white/40 text-center"
                role="img"
                aria-label={`${profile.name} portrait slot`}
              >
                <p className="font-mono text-xs tracking-widest text-sage uppercase">
                  Portrait
                </p>
                <p className="font-mono text-[11px] text-obsidian/50">
                  COMING SOON
                </p>
              </div>
            )}
          </aside>
        </Reveal>
      </div>
    </div>
  );
}
