import type { HighlightSkill, ProfileContent, SkillGroup } from "./types";
import halfBody from "@assets/deviano/half-body.png";
import headshot from "@assets/deviano/headshot.png";

const toSrc = (img: string | { src: string }): string =>
  typeof img === "string" ? img : img.src;

export const highlightSkills: HighlightSkill[] = [
  { name: "React", group: "Frontend" },
  { name: "Next.js", group: "Frontend" },
  { name: "TypeScript", group: "Frontend" },
  { name: "Vite", group: "Frontend" },
  { name: "Flutter", group: "Mobile" },
  { name: "Kotlin", group: "Mobile" },
  { name: "Go", group: "Backend" },
  { name: "NestJS", group: "Backend" },
  { name: "Node.js", group: "Backend" },
  { name: "PostgreSQL", group: "Data" },
  { name: "Redis", group: "Data" },
  { name: "WebSocket", group: "Realtime" },
  { name: "MQTT", group: "Realtime" },
  { name: "YOLOv8", group: "AI / CV" },
  { name: "Docker", group: "Infrastructure" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Vite", "HTML/CSS", "Responsive UI"],
  },
  {
    title: "Mobile",
    skills: ["Flutter", "Dart", "Kotlin", "Jetpack Compose", "Android"],
  },
  {
    title: "Backend",
    skills: ["Go", "NestJS", "Node.js", "REST API", "WebSocket", "Auth"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "PostGIS", "Redis", "SQL", "sqlc", "pgx", "TypeORM"],
  },
  {
    title: "Realtime",
    skills: ["WebSocket", "MQTT", "BLE", "Event-driven architecture"],
  },
  {
    title: "AI / CV",
    skills: ["YOLOv8", "TensorFlow Lite", "MediaPipe", "AI API integration"],
  },
  {
    title: "Infrastructure",
    skills: ["Linux", "Docker", "Nginx", "PM2", "Git", "CI/CD concepts", "VPS deployment"],
  },
];

export const profile: ProfileContent = {
  name: "Deviano Christian",
  role: "Full Stack Software Engineer",
  processLine:
    "Understand the problem → design the system → build and ship it → watch how it behaves in production → improve it.",
  lessons: [
    "A feature isn't finished when the code works — it's finished when someone can actually use it.",
    "Data quality determines product quality; a beautiful interface can't fix unreliable data.",
    "Shipping teaches you things a local dev environment can't.",
  ],
  skillGroups,
  portrait: toSrc(halfBody),
  headshot: toSrc(headshot),
};
