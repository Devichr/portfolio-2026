"use client";

import { useAnimationFrame } from "framer-motion";
import { useMemo, useRef } from "react";
import { highlightSkills } from "@/content/profile";

const TILT = 0.28;
const GOLDEN = Math.PI * (3 - Math.sqrt(5));

const EDGES: Array<[number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 12],
  [12, 13],
  [13, 14],
  [0, 3],
  [1, 4],
  [2, 5],
  [3, 6],
  [4, 7],
  [5, 9],
  [6, 10],
  [7, 11],
  [8, 12],
  [10, 13],
  [11, 14],
  [0, 2],
];

const MASK =
  "linear-gradient(to right, transparent 0%, transparent 8%, rgba(0,0,0,0.4) 42%, rgba(0,0,0,0.72) 68%, black 90%)";

type Point = [number, number, number];

function fibonacciSphere(n: number): Point[] {
  const pts: Point[] = [];
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = GOLDEN * i;
    pts.push([Math.cos(theta) * radius, y, Math.sin(theta) * radius]);
  }
  return pts;
}

const SPHERE: Point[] = fibonacciSphere(highlightSkills.length);

export default function SkillGraph() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<Array<SVGLineElement | null>>([]);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const autoRef = useRef(0);
  const draggingRef = useRef(false);
  const dragIndexRef = useRef(-1);
  const rectRef = useRef<DOMRect | null>(null);

  const base = useRef<Point[]>(
    SPHERE.map((p): Point => [p[0], p[1], p[2]]),
  );

  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  const place = (angle: number, tilt: number, boosting: number) => {
    const el = containerRef.current;
    if (!el) return;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const cx = w / 2;
    const cy = h * 0.5;
    const R = Math.min(w, h) * 0.4;

    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const cosT = Math.cos(tilt);
    const sinT = Math.sin(tilt);

    const depth: number[] = [];

    base.current.forEach((p, i) => {
      const [x, y, z] = p;
      const x1 = x * cosA + z * sinA;
      const z1 = -x * sinA + z * cosA;
      const y2 = y * cosT - z1 * sinT;
      const z2 = y * sinT + z1 * cosT;
      const d = (z2 + 1) / 2;
      depth[i] = d;
      const nodeEl = nodeRefs.current[i];
      if (!nodeEl) return;
      const boost = draggingRef.current && dragIndexRef.current === i ? boosting : 1;
      nodeEl.style.transform = `translate(${cx + x1 * R}px, ${cy + y2 * R}px) translate(-50%, -50%) scale(${0.82 + d * 0.38})`;
      nodeEl.style.opacity = `${0.3 + d * 0.7}`;
      nodeEl.style.zIndex = boost > 1 ? "40" : "";
    });

    EDGES.forEach(([a, b], i) => {
      const line = lineRefs.current[i];
      if (!line) return;
      const avg = (depth[a]! + depth[b]!) / 2;
      if (avg < 0.18) {
        line.style.display = "none";
        return;
      }
      line.style.display = "";
      const [ax, ay, az] = base.current[a]!;
      const [bx, by, bz] = base.current[b]!;
      const ax1 = ax * cosA + az * sinA;
      const az1 = -ax * sinA + az * cosA;
      const aY = ay * cosT - az1 * sinT;
      const bx1 = bx * cosA + bz * sinA;
      const bz1 = -bx * sinA + bz * cosA;
      const bY = by * cosT - bz1 * sinT;
      line.setAttribute("x1", `${cx + ax1 * R}`);
      line.setAttribute("y1", `${cy + aY * R}`);
      line.setAttribute("x2", `${cx + bx1 * R}`);
      line.setAttribute("y2", `${cy + bY * R}`);
      line.style.opacity = `${(avg - 0.18) * 0.55 + 0.15}`;
    });
  };

  useAnimationFrame((_, delta) => {
    if (!reduced && !draggingRef.current) {
      autoRef.current += (delta / 1000) * 0.18;
    }
    place(autoRef.current, TILT, 1.25);
  });

  const unproject = (clientX: number, clientY: number, rect: DOMRect) => {
    const w = rect.width;
    const h = rect.height;
    const cx = w / 2;
    const cy = h * 0.5;
    const R = Math.min(w, h) * 0.4;
    const px = clientX - rect.left;
    const py = clientY - rect.top;
    let nx = (px - cx) / R;
    let ny = (py - cy) / R;
    const d2 = nx * nx + ny * ny;
    if (d2 > 1) {
      const s = 1 / Math.sqrt(d2);
      nx *= s;
      ny *= s;
    }
    const nz = Math.sqrt(Math.max(0, 1 - nx * nx - ny * ny));

    const angle = autoRef.current;
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const cosT = Math.cos(TILT);
    const sinT = Math.sin(TILT);

    const y1 = ny * cosT + nz * sinT;
    const z1 = -ny * sinT + nz * cosT;
    const x = nx * cosA - z1 * sinA;
    const z = nx * sinA + z1 * cosA;
    return [x, y1, z] as Point;
  };

  const handleDragMove = (i: number, clientX: number, clientY: number) => {
    const rect = rectRef.current;
    if (!rect || dragIndexRef.current !== i) return;
    base.current[i] = unproject(clientX, clientY, rect);
  };

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute top-0 bottom-0 right-0 my-auto h-80 w-[min(85vw,34rem)] md:h-[32rem] md:w-[min(68vw,50rem)]"
      style={{ maskImage: MASK, WebkitMaskImage: MASK }}
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full">
        {EDGES.map(([a, b], i) => (
          <line
            key={`${a}-${b}`}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            stroke="#C15A32"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {highlightSkills.map((node, i) => (
        <div
          key={node.name}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
          onPointerDown={(e) => {
            e.preventDefault();
            e.currentTarget.setPointerCapture(e.pointerId);
            draggingRef.current = true;
            dragIndexRef.current = i;
            rectRef.current = containerRef.current?.getBoundingClientRect() ?? null;
          }}
          onPointerMove={(e) => handleDragMove(i, e.clientX, e.clientY)}
          onPointerUp={() => {
            draggingRef.current = false;
            dragIndexRef.current = -1;
          }}
          onPointerCancel={() => {
            draggingRef.current = false;
            dragIndexRef.current = -1;
          }}
          className="pointer-events-auto absolute top-0 left-0 cursor-grab rounded-full bg-terracotta px-3 py-2 font-mono text-xs whitespace-nowrap text-ivory shadow-md select-none active:cursor-grabbing sm:text-sm"
          style={{ willChange: "transform", touchAction: "none" }}
        >
          {node.name}
        </div>
      ))}
    </div>
  );
}