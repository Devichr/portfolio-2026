import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Page from "@/app/page";

afterEach(() => cleanup());

describe("Home page", () => {
  it("shows hero, three carousel projects, five other builds", () => {
    render(<Page />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toMatch(
      /I BUILD SOFTWARE/,
    );
    for (const name of [
      "Janova",
      "FaS-Track Subsoil",
      "Smart Halter",
    ]) {
      expect(screen.getAllByRole("heading", { name })).not.toHaveLength(0);
    }
    for (const name of [
      "Bulldozer GPS Improvement",
      "Bulldozer Realtime Telemetry",
      "Operator Daily Activity App",
      "StudyMate",
      "Strawberry Disease Detection",
    ]) {
      expect(screen.getByRole("heading", { level: 3, name })).toBeInTheDocument();
    }
  });
});
