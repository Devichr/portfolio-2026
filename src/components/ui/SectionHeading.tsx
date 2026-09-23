export default function SectionHeading({
  index,
  title,
  className = "",
}: {
  index?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`mb-8 md:mb-12 ${className}`}>
      {index && (
        <p className="font-mono text-xs tracking-widest text-sage uppercase">
          {index}
        </p>
      )}
      <h2 className="mt-2 font-display text-4xl font-semibold text-obsidian md:text-5xl">
        {title}
      </h2>
    </div>
  );
}