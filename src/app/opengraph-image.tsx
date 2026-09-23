import { ImageResponse } from "next/og";
import { siteName, tagline } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteName} — ${tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "#FAF7F0",
          color: "#1B2436",
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#8A9A5B", display: "flex" }}>
          {siteName.toUpperCase()}
        </div>
        <div style={{ fontSize: 76, fontWeight: 600, maxWidth: 900, display: "flex" }}>
          {tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}