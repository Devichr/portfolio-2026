import type { ProjectDiagramId } from "@/content/types";
import FlowDiagram from "./FlowDiagram";
import JanovaDiagram from "./JanovaDiagram";

const flowSteps: Record<Exclude<ProjectDiagramId, "janova">, { title: string; steps: string[] }> = {
  "fas-track": {
    title: "FaS-Track · Data Flow",
    steps: [
      "FIELD ACTIVITY",
      "DEVICE DATA",
      "MQTT",
      "BACKEND",
      "DATA PROCESSING",
      "POSTGRESQL / POSTGIS",
      "REALTIME API",
      "WEB DASHBOARD",
      "OPERATIONAL DECISION",
    ],
  },
  "ble-config": {
    title: "BLE · User Flow",
    steps: [
      "OPEN APP",
      "DISCOVER DEVICE",
      "CONNECT VIA BLE",
      "READ DEVICE STATE",
      "CONFIGURE",
      "SEND CONFIGURATION",
      "VERIFY",
    ],
  },
  "smart-halter": {
    title: "Smart Halter · Data Pipeline",
    steps: [
      "SENSOR",
      "RAW SIGNAL",
      "PROCESSING",
      "VALIDATION",
      "TELEMETRY",
      "APPLICATION",
    ],
  },
};

export function renderDiagram(id: ProjectDiagramId) {
  if (id === "janova") return <JanovaDiagram />;
  const cfg = flowSteps[id];
  return <FlowDiagram title={cfg.title} steps={cfg.steps} />;
}