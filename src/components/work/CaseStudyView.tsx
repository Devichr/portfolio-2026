import type { CaseStudy } from "@/content/types";
import Tag from "@/components/ui/Tag";
import SectionHeading from "@/components/ui/SectionHeading";
import ArrowLink from "@/components/ui/ArrowLink";
import { renderDiagram } from "@/components/diagrams/diagrams";
import { contact } from "@/content/contact";

export default function CaseStudyView({ study }: { study: CaseStudy }) {
  return (
    <article>
      <header className="border-b border-obsidian/15 pb-12">
        <p className="font-mono text-sm text-sage">{study.role}</p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-obsidian md:text-6xl">
          {study.name}
        </h1>
        <p className="mt-3 font-display text-2xl text-obsidian/80">
          {study.subtitle}
        </p>
        <blockquote className="mt-6 max-w-2xl border-l-4 border-terracotta pl-5 font-display text-2xl italic text-obsidian">
          {study.heroQuote}
        </blockquote>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="space-y-12">
          <section>
            <SectionHeading index="Story" title="The Story" />
            <div className="space-y-4 leading-relaxed text-obsidian/80">
              {study.intro.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading index="System" title="Architecture" />
            {renderDiagram(study.diagram)}
          </section>

          <section>
            <SectionHeading index="Stack" title="Tech Stack" />
            <div className="space-y-6">
              {study.stack.map((s) => (
                <div key={s.layer}>
                  <p className="font-mono text-xs tracking-widest text-sage uppercase">
                    {s.layer}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <Tag key={item} label={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading index="Contribution" title="What I Did" />
            <ul className="space-y-3">
              {study.contribution.map((c) => (
                <li key={c} className="flex gap-3 text-obsidian/80">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  {c}
                </li>
              ))}
            </ul>
          </section>

          {study.keyResult && (
            <section className="rounded-sm border border-obsidian/20 bg-white/50 p-6">
              <p className="font-mono text-xs tracking-widest text-sage uppercase">
                Key result · {study.keyResult.label}
              </p>
              <p className="mt-4 font-display text-3xl font-semibold text-obsidian">
                <span>{study.keyResult.before}</span>
                <span className="mx-3 text-terracotta" aria-hidden>
                  →
                </span>
                <span>{study.keyResult.after}</span>
              </p>
            </section>
          )}
        </div>

        <aside className="space-y-8">
          <section className="rounded-sm border border-obsidian/20 p-5">
            <p className="font-mono text-xs tracking-widest text-sage uppercase">
              Portfolio story
            </p>
            <p className="mt-3 font-display text-xl italic leading-snug text-obsidian">
              {study.centralQuestion}
            </p>
          </section>
          <section className="rounded-sm border border-dashed border-obsidian/25 p-5">
            <p className="font-mono text-xs tracking-widest text-sage uppercase">
              Deep dive
            </p>
            <div className="mt-3 flex flex-col gap-3">
              <ArrowLink href={contact.resumePdf} external>
                Download resume PDF
              </ArrowLink>
              <ArrowLink href="/pdf/casestudies">
                Full case-study doc
              </ArrowLink>
            </div>
          </section>
        </aside>
      </div>
    </article>
  );
}