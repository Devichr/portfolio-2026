export default function JanovaDiagram() {
  const box = "rounded-sm border border-obsidian/25 bg-ivory px-4 py-3 font-mono text-sm text-obsidian text-center";
  const colLabel = "font-mono text-xs tracking-widest text-sage uppercase";
  return (
    <div className="rounded-sm border border-obsidian/20 bg-white/50 p-5">
      <p className="font-mono text-xs tracking-widest text-sage uppercase">
        JANOVA · SYSTEM ARCHITECTURE
      </p>
      <div className="mt-4 flex flex-col items-center gap-3">
        <div className={box}>JANOVA</div>
        <div aria-hidden className="h-4 w-px bg-terracotta" />
        <div className="flex w-full max-w-md items-start justify-between gap-3">
          <div className="flex flex-col items-center gap-2">
            <p className={colLabel}>Frontend</p>
            <div className={box}>Next.js · TypeScript</div>
            <div aria-hidden className="hidden h-6 w-px bg-terracotta sm:block" />
          </div>
          <div className="mt-10" aria-hidden>
            ▲
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className={colLabel}>Backend</p>
            <div className={box}>Go · REST API</div>
            <div aria-hidden className="hidden h-6 w-px bg-terracotta sm:block" />
          </div>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-8 pt-0">
          <div className={box}>PostgreSQL · Persistent Data</div>
          <div className={box}>Redis · Realtime Events</div>
        </div>
      </div>
    </div>
  );
}