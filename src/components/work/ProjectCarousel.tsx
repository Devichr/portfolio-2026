"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { carouselProjects } from "@/content/projects";
import ProjectSlide from "@/components/work/ProjectSlide";

const AUTOPLAY_MS = 6000;

export default function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [width, setWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const count = carouselProjects.length;

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    setWidth(el.offsetWidth);
    const onResize = () => setWidth(el.offsetWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    animate(x, -index * el.offsetWidth, {
      type: "spring",
      duration: 0.55,
      bounce: 0,
    });
  }, [index, x]);

  useEffect(() => {
    if (paused) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  const goTo = useCallback((i: number) => {
    setIndex((i + count) % count);
  }, [count]);

  const onDragEnd = useCallback(
    (_: unknown, info: { offset: { x: number } }) => {
      const w = width || viewportRef.current?.offsetWidth || 0;
      const threshold = w * 0.18;
      if (info.offset.x < -threshold) {
        setIndex((i) => (i + 1) % count);
      } else if (info.offset.x > threshold) {
        setIndex((i) => (i - 1 + count) % count);
      } else {
        animate(x, -index * w, {
          type: "spring",
          duration: 0.4,
          bounce: 0,
        });
      }
    },
    [count, index, width, x],
  );

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Selected work"
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        ref={viewportRef}
        className="flex cursor-grab active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -(count - 1) * width, right: 0 }}
        dragElastic={0.08}
        dragMomentum={false}
        onDragEnd={onDragEnd}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        {carouselProjects.map((p, i) => (
          <div
            key={p.slug}
            className="w-full shrink-0"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${count}: ${p.name}`}
          >
            <ProjectSlide project={p} index={i} />
          </div>
        ))}
      </motion.div>

      <button
        type="button"
        aria-label="Previous project"
        onClick={() => goTo(index - 1)}
        className="absolute top-1/2 left-3 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-obsidian/25 bg-ivory/80 font-mono text-lg text-obsidian backdrop-blur-sm transition-colors hover:border-terracotta hover:text-terracotta sm:left-6"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Next project"
        onClick={() => goTo(index + 1)}
        className="absolute top-1/2 right-3 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-obsidian/25 bg-ivory/80 font-mono text-lg text-obsidian backdrop-blur-sm transition-colors hover:border-terracotta hover:text-terracotta sm:right-6"
      >
        →
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {carouselProjects.map((p, i) => (
          <button
            key={p.slug}
            type="button"
            aria-label={`Go to ${p.name}`}
            aria-current={index === i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              index === i
                ? "w-8 bg-terracotta"
                : "w-2 bg-obsidian/30 hover:bg-obsidian/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}