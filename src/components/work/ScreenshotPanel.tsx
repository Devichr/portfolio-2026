"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Shot({
  src,
  label,
  index,
  showPlaceholder,
}: {
  src?: string;
  label: string;
  index: number;
  showPlaceholder: boolean;
}) {
  if (!src || showPlaceholder) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-ivory text-center">
        <p className="font-mono text-[11px] tracking-widest text-sage uppercase">
          {label}
        </p>
        <p className="font-mono text-[11px] text-obsidian/50">
          SCREENSHOT {String(index + 1).padStart(2, "0")} — COMING SOON
        </p>
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={`${label} screenshot ${index + 1}`} className="h-full w-full object-cover" />;
}

export default function ScreenshotPanel({
  name,
  screenshots = [],
}: {
  name: string;
  screenshots?: string[];
}) {
  const [active, setActive] = useState(0);
  const slots = Array.from({ length: 5 }, (_, i) => screenshots[i] ?? "");
  const showPlaceholder = slots.every((s) => !s);

  return (
    <div className="rounded-md bg-white/80 p-2.5 shadow-xl shadow-obsidian/25 backdrop-blur-md">
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Shot
              src={slots[active]}
              label={name}
              index={active}
              showPlaceholder={showPlaceholder}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="mt-3 grid grid-cols-5 gap-2"
        role="tablist"
        aria-label={`${name} screenshots`}
      >
        {slots.map((src, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`${name} screenshot ${i + 1}`}
            onClick={() => setActive(i)}
            className={`relative aspect-video overflow-hidden rounded-sm bg-ivory transition-opacity ${
              active === i ? "opacity-100" : "opacity-60 hover:opacity-90"
            }`}
          >
            {showPlaceholder || !src ? (
              <span className="flex h-full w-full items-center justify-center font-mono text-[9px] text-obsidian/40">
                {String(i + 1).padStart(2, "0")}
              </span>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}