import type { CaseStudy } from "./types";
import janovaHero from "@assets/janova/Hero.webp";
import janovaShot1 from "@assets/janova/1.webp";
import janovaShot2 from "@assets/janova/2.webp";
import janovaShot3 from "@assets/janova/3.webp";
import janovaShot4 from "@assets/janova/4.webp";
import janovaShot5 from "@assets/janova/5.webp";
import fasTrackHero from "@assets/fas_track/hero.webp";
import fasTrackShot1 from "@assets/fas_track/1.webp";
import fasTrackShot2 from "@assets/fas_track/2.webp";
import fasTrackShot3 from "@assets/fas_track/3.webp";
import fasTrackShot4 from "@assets/fas_track/4.webp";
import fasTrackShot5 from "@assets/fas_track/5.webp";
import smartHalterHero from "@assets/smart_halter/Hero.webp";
import smartHalterShot1 from "@assets/smart_halter/1.webp";
import smartHalterShot2 from "@assets/smart_halter/2.webp";
import smartHalterShot3 from "@assets/smart_halter/3.webp";
import smartHalterShot4 from "@assets/smart_halter/4.webp";
import smartHalterShot5 from "@assets/smart_halter/5.webp";

const toSrc = (img: string | { src: string }): string =>
  typeof img === "string" ? img : img.src;

export const projects: CaseStudy[] = [
  {
    slug: "janova",
    name: "Janova",
    subtitle: "Project Management SaaS",
    oneLineStory:
      "Turns messy project workflows into something people can actually use",
    role: "Product / Full Stack",
    tags: ["Next.js", "Go", "PostgreSQL", "Redis"],
    heroQuote:
      "From planning to progress, one place to make projects feel manageable.",
    intro: [
      "Janova is a project management platform designed around the complete lifecycle of a project.",
      "Instead of treating project management as a collection of disconnected tools, Janova brings planning, budgeting, tasks, timelines, progress, collaboration, and files into one system.",
    ],
    diagram: "janova",
    stack: [
      {
        layer: "Frontend",
        items: [
          "Next.js",
          "TypeScript",
          "Interactive Kanban",
          "Drag & drop",
          "Realtime UI updates",
        ],
      },
      {
        layer: "Backend",
        items: [
          "Go",
          "REST API",
          "Authentication",
          "Authorization",
          "Multi-tenant architecture",
          "Project and company scoping",
        ],
      },
      {
        layer: "Data",
        items: ["PostgreSQL", "sqlc", "pgx", "Structured relational data"],
      },
      {
        layer: "Infrastructure",
        items: ["Docker", "Redis", "WebSocket / realtime architecture"],
      },
    ],
    contribution: [
      "Shaped the product end to end: user problem → product design → application → API → database → realtime system → deployment.",
      "Designed multi-tenant organizational scoping so projects and companies stay isolated.",
      "Built the interactive Kanban with drag & drop and realtime UI updates.",
      "Architected the Go REST API with authentication and authorization.",
    ],
    centralQuestion:
      "How do you turn a messy project workflow into software that people can actually use?",
    image: toSrc(janovaHero),
    screenshots: [janovaShot1, janovaShot2, janovaShot3, janovaShot4, janovaShot5].map(toSrc),
  },
  {
    slug: "fas-track",
    name: "FaS-Track Subsoil",
    subtitle: "Realtime Operational Software",
    oneLineStory:
      "Turns continuously changing field data into software people can understand and act on",
    role: "Full Stack / Systems",
    tags: ["NestJS", "PostGIS", "MQTT", "React"],
    heroQuote:
      "Turning field activity into software people can understand and act on.",
    intro: [
      "FaS-Track Subsoil is an operational monitoring system developed for field machinery and subsoil operations.",
      "Although the system involves connected devices, the focus here is a software and realtime data problem: machine activity and geospatial data flowing from the field into dashboards people act on.",
    ],
    diagram: "fas-track",
    stack: [
      {
        layer: "Backend",
        items: [
          "NestJS",
          "TypeORM",
          "REST API",
          "MQTT",
          "WebSocket",
          "Redis",
        ],
      },
      {
        layer: "Data",
        items: [
          "PostgreSQL",
          "PostGIS",
          "Geospatial queries",
          "Telemetry data",
        ],
      },
      {
        layer: "Frontend",
        items: ["React", "Vite", "Operational dashboards"],
      },
      {
        layer: "Infrastructure",
        items: ["Docker", "Nginx", "PM2", "Linux"],
      },
    ],
    contribution: [
      "Developed backend functionality for telemetry data.",
      "Worked with MQTT-based device communication.",
      "Designed and implemented data processing flows.",
      "Worked with PostgreSQL and PostGIS.",
      "Developed realtime application functionality.",
      "Built and improved operational dashboards.",
      "Worked with machine activity and geospatial data.",
      "Helped digitize operational processes.",
      "Worked across the system from incoming data to user-facing application.",
    ],
    keyResult: {
      label: "GPS accuracy",
      before: "> 15 m error",
      after: "< 5 m error",
    },
    centralQuestion:
      "How do you turn continuously changing real-world data into software that people can actually understand?",
    image: toSrc(fasTrackHero),
    screenshots: [fasTrackShot1, fasTrackShot2, fasTrackShot3, fasTrackShot4, fasTrackShot5].map(toSrc),
  },
  {
    slug: "ble-config",
    name: "BLE IoT Configuration App",
    subtitle: "Mobile Application × Connected Devices",
    oneLineStory:
      "Turns a complicated device-config process into a simple mobile flow",
    role: "Mobile / Software",
    tags: ["Flutter", "BLE", "ESP32"],
    heroQuote:
      "Making device configuration feel like using an app instead of debugging hardware.",
    intro: [
      "A Flutter mobile application for configuring IoT devices through Bluetooth Low Energy.",
      "The important story is not the ESP32 itself — it is how a complicated device configuration process can become a simple mobile experience.",
    ],
    diagram: "ble-config",
    stack: [
      {
        layer: "Mobile",
        items: ["Flutter", "FlutterBlue", "BLE", "UUID-based communication"],
      },
      {
        layer: "Device",
        items: [
          "ESP32 BLE Server",
          "BLE Services",
          "BLE Characteristics",
        ],
      },
      {
        layer: "Configuration",
        items: [
          "Wi-Fi SSID",
          "Wi-Fi password",
          "Endpoint URL",
          "Device state",
          "BLE serial monitoring",
        ],
      },
    ],
    contribution: [
      "Handled asynchronous BLE communication and device state gracefully: disconnected → scanning → connecting → connected → discovering services → ready → writing → verifying.",
      "Discovered services and characteristics via UUID-based protocols.",
      "Read device state and sent configuration reliably, with verification.",
    ],
    centralQuestion:
      "How can a complicated device configuration process become a simple mobile experience?",
  },
  {
    slug: "smart-halter",
    name: "Smart Halter",
    subtitle: "Turning Sensor Data Into Useful Information",
    oneLineStory: "Turns imperfect sensor data into useful information",
    role: "Data / Software",
    tags: ["Data processing", "Signal validation", "Telemetry"],
    heroQuote: "Raw data is not the product. Useful information is.",
    intro: [
      "Smart Halter improves the accuracy and usability of telemetry collected from a horse health monitoring system.",
      "The system deals with measurements including heart rate, respiration, temperature, and SpO₂ — then turns those raw signals into information an application can act on.",
    ],
    diagram: "smart-halter",
    stack: [
      {
        layer: "Pipeline",
        items: [
          "Sensor integration",
          "Raw signal processing",
          "Validation",
          "Telemetry output",
        ],
      },
      {
        layer: "Software",
        items: [
          "Signal quality analysis",
          "Data processing",
          "Transforming raw measurements into usable application data",
        ],
      },
    ],
    contribution: [
      "Improved sensor accuracy and usability of telemetry.",
      "Designed signal validation so bad readings are rejected before they reach the application.",
      "Worked across data processing, signal quality, and sensor integration.",
    ],
    keyResult: {
      label: "Sensor accuracy",
      before: "raw sensor output",
      after: "~60% improvement in sensor accuracy",
    },
    centralQuestion: "How do you make imperfect real-world data useful?",
    image: toSrc(smartHalterHero),
    screenshots: [smartHalterShot1, smartHalterShot2, smartHalterShot3, smartHalterShot4, smartHalterShot5].map(toSrc),
  },
];

const pick = ({ slug, name, oneLineStory, tags, image, screenshots }: CaseStudy) => ({
  slug,
  name,
  oneLineStory,
  tags,
  image,
  screenshots,
});

export const homeProjects = projects.map(pick);

export const carouselProjects = projects
  .filter((p) => p.slug !== "ble-config")
  .map(pick);

export const projectSlugs = projects.map((p) => p.slug);

export function getProject(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}
