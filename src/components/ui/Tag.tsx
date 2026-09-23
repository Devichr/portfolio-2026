export default function Tag({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "default" | "onDark";
}) {
  if (variant === "onDark") {
    return (
      <span className="inline-block rounded-sm border border-ivory/30 bg-obsidian/40 px-2 py-0.5 font-mono text-xs text-ivory/90 backdrop-blur-sm">
        {label}
      </span>
    );
  }
  return (
    <span className="inline-block rounded-sm border border-obsidian/20 px-2 py-0.5 font-mono text-xs text-obsidian/70">
      {label}
    </span>
  );
}