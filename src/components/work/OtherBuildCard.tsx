import type { OtherBuild } from "@/content/types";
import Tag from "@/components/ui/Tag";

export default function OtherBuildCard({ build }: { build: OtherBuild }) {
  return (
    <div className="flex h-full flex-col rounded-sm border border-dashed border-obsidian/25 p-5 transition-colors hover:border-sage/70">
      <h3 className="font-display text-xl font-semibold text-obsidian">
        {build.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-obsidian/70">
        {build.oneLine}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {build.tags.map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
    </div>
  );
}
