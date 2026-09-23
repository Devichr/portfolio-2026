import type { OtherBuild } from "./types";

export const otherBuilds: OtherBuild[] = [
  {
    name: "Bulldozer GPS Improvement",
    oneLine: "Kalman filter + Haversine, <5m error (from >15m).",
    tags: ["Kalman filter", "Haversine", "GPS processing"],
    about:
      "Field machines reported GPS positions drifting by more than 15 metres. This pipeline smooths raw readings with a Kalman filter and computes distances with Haversine math so operators see a position they can trust.",
    contribution: [
      "Implemented the Kalman filter smoothing and Haversine distance logic that cut reported error from >15m to <5m.",
      "Kept the processing light enough to run continuously on incoming position streams.",
    ],
  },
  {
    name: "Bulldozer Realtime Telemetry",
    oneLine: "NestJS / MQTT telemetry pipeline with realtime delivery.",
    tags: ["NestJS", "MQTT", "Redis"],
    about:
      "A telemetry pipeline that ingests machine signals over MQTT and delivers them live to dashboards through NestJS and Redis, so field activity is visible the moment it happens.",
    contribution: [
      "Built the NestJS service that consumes MQTT telemetry and fans it out over WebSocket.",
      "Used Redis as the fast buffer and pub/sub layer to keep delivery realtime under load.",
    ],
  },
  {
    name: "Operator Daily Activity App",
    oneLine: "Replacing manual field processes with a tablet workflow.",
    tags: ["Tablet UX", "Offline-aware", "Workflows"],
    about:
      "A tablet app that replaces paper-based field reporting. Operators log daily activity through a guided workflow that stays usable even when the network drops on site.",
    contribution: [
      "Designed the guided logging flow so field staff can finish a report in a few taps.",
      "Made the flow offline-aware so entries queue locally and sync when connectivity returns.",
    ],
  },
  {
    name: "StudyMate",
    oneLine:
      "Android study app (Kotlin, Jetpack Compose, Spring Boot) with AI priority suggestions.",
    tags: ["Kotlin", "Jetpack Compose", "Spring Boot"],
    about:
      "An Android study planner built with Kotlin and Jetpack Compose on a Spring Boot backend. It suggests which subjects to tackle first using AI, so students spend time where it counts.",
    contribution: [
      "Built the Android UI with Jetpack Compose, covering the planner and progress views.",
      "Wired the app to a Spring Boot API and added AI-driven priority suggestions for study order.",
    ],
  },
  {
    name: "Strawberry Disease Detection",
    oneLine: "Offline computer vision app (YOLOv8, TFLite, MediaPipe).",
    tags: ["YOLOv8", "TensorFlow Lite", "MediaPipe"],
    about:
      "An offline computer vision app that flags strawberry disease from a photo on-device, with no cloud round-trip needed, so it works in the field.",
    contribution: [
      "Trained and integrated a YOLOv8 model, then compressed it to TFLite for on-device inference.",
      "Used MediaPipe for image handling and kept the whole pipeline fully offline.",
    ],
  },
];
