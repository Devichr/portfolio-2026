import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ProjectCarousel from "@/components/work/ProjectCarousel";
import { carouselProjects } from "@/content/projects";

afterEach(() => cleanup());

describe("ProjectCarousel", () => {
  it("shows the first project slide with a screenshot panel", () => {
    render(<ProjectCarousel />);
    expect(screen.getAllByRole("heading", { level: 2, name: "Janova" }).length).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: /Read full case study/ }).some(
        (el) => el.getAttribute("href") === "/work/janova",
      ),
    ).toBe(true);
    expect(carouselProjects).toHaveLength(3);
  });

  it("navigates with the next arrow and dot controls", () => {
    render(<ProjectCarousel />);
    expect(
      screen.getByRole("button", { name: "Go to Janova" }),
    ).toHaveAttribute("aria-current", "true");
    fireEvent.click(screen.getByRole("button", { name: "Next project" }));
    expect(
      screen.getByRole("button", { name: "Go to FaS-Track Subsoil" }),
    ).toHaveAttribute("aria-current", "true");
    fireEvent.click(screen.getByRole("button", { name: "Go to Smart Halter" }));
    expect(
      screen.getByRole("button", { name: "Go to Smart Halter" }),
    ).toHaveAttribute("aria-current", "true");
  });

  it("renders five screenshot tabs per project slide", () => {
    render(<ProjectCarousel />);
    expect(screen.getAllByRole("tab", { name: /Janova screenshot/ })).toHaveLength(5);
  });
});