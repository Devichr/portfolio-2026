import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import DeckPage from "@/app/pdf/deck/page";

afterEach(() => cleanup());

describe("Portfolio deck", () => {
  it("renders the profile slide with the headshot", () => {
    render(<DeckPage />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Deviano Christian" }),
    ).toBeInTheDocument();
    expect(screen.getByAltText("Deviano Christian")).toHaveAttribute(
      "src",
      expect.stringContaining("headshot"),
    );
  });

  it("shows the three main projects with a gallery each, without BLE as a main slide", () => {
    render(<DeckPage />);
    const mains = [
      screen.getByRole("heading", { level: 2, name: "Janova" }),
      screen.getByRole("heading", { level: 2, name: "FaS-Track Subsoil" }),
      screen.getByRole("heading", { level: 2, name: "Smart Halter" }),
    ];
    for (const h of mains) {
      expect(h).toBeInTheDocument();
    }
    expect(screen.queryByRole("heading", { level: 2, name: "BLE IoT Configuration App" })).toBeNull();
    expect(screen.getByAltText("Janova hero")).toBeInTheDocument();
    expect(screen.getAllByAltText(/Janova screenshot/)).toHaveLength(5);
  });

  it("packs BLE and other builds into two-per-slide more work sections", () => {
    render(<DeckPage />);
    expect(
      screen.getByRole("heading", { level: 3, name: "BLE IoT Configuration App" }),
    ).toBeInTheDocument();
    for (const name of [
      "Bulldozer GPS Improvement",
      "Bulldozer Realtime Telemetry",
      "Operator Daily Activity App",
      "StudyMate",
      "Strawberry Disease Detection",
    ]) {
      expect(screen.getByRole("heading", { level: 3, name })).toBeInTheDocument();
    }
    expect(screen.getAllByText("What it is").length).toBeGreaterThanOrEqual(7);
    expect(screen.getAllByText("How I contributed").length).toBeGreaterThanOrEqual(7);
  });
});