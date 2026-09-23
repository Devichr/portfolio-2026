import Link from "next/link";
import type { HomeProject } from "@/content/types";
import Tag from "@/components/ui/Tag";
import ScreenshotPanel from "@/components/work/ScreenshotPanel";

export default function ProjectSlide({
  project,
  index,
}: {
  project: HomeProject;
  index: number;
}) {
  return (
    <div className="relative flex min-h-screen w-full shrink-0 items-center overflow-hidden py-28 sm:py-32">
      {project.image ? (
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden
        >
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center">
            <p className="font-mono text-xs tracking-widest text-sage uppercase">
              HERO BACKGROUND
            </p>
            <p className="font-mono text-[11px] text-ivory/60">
              {project.name.toUpperCase()} — COMING SOON
            </p>
          </div>
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(to right, rgba(27,36,54,0.95) 0%, rgba(27,36,54,0.84) 34%, rgba(27,36,54,0.58) 62%, rgba(27,36,54,0.42) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(to top, rgba(27,36,54,0.72) 0%, transparent 22%, transparent 72%, rgba(27,36,54,0.4) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)] lg:items-center">
        <div>
          <p className="font-mono text-xs tracking-widest text-sage uppercase">
            CASE STUDY 0{index + 1}
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-tight tracking-tight text-ivory md:text-6xl">
            {project.name}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ivory/85">
            {project.oneLineStory}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <Tag key={t} label={t} variant="onDark" />
            ))}
          </div>
          <Link
            href={`/work/${project.slug}`}
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-terracotta px-6 py-3 font-mono text-sm font-medium text-ivory transition-colors hover:bg-ivory hover:text-obsidian"
          >
            Read full case study →
          </Link>
        </div>

        <ScreenshotPanel name={project.name} screenshots={project.screenshots} />
      </div>
    </div>
  );
}