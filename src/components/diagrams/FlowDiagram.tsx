export default function FlowDiagram({
  title,
  steps,
}: {
  title: string;
  steps: string[];
}) {
  return (
    <div className="rounded-sm border border-obsidian/20 bg-white/50 p-5">
      <p className="font-mono text-xs tracking-widest text-sage uppercase">
        {title}
      </p>
      <div className="mt-4 flex flex-col items-start gap-0">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-start">
            <div className="rounded-sm border border-obsidian/25 bg-ivory px-4 py-2 font-mono text-sm text-obsidian">
              {step}
            </div>
            {i < steps.length - 1 && (
              <div aria-hidden="true" className="flex flex-col items-center py-1">
                <span className="h-4 w-px bg-terracotta" />
                <span className="mt-0.5 text-xs text-terracotta">▼</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}