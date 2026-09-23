import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Hero from "@/components/hero/Hero";

afterEach(() => cleanup());

describe("Hero", () => {
  it("renders name, role, and full tagline", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "I BUILD SOFTWARE",
    );
    expect(
      screen.getByRole("heading", { level: 1 }),
    ).toHaveTextContent(/YOU CAN ACTUALLY FEEL\./);
    expect(screen.getByText("FEEL.")).toHaveClass("text-terracotta");
    expect(screen.getByText("FULL STACK SOFTWARE ENGINEER")).toBeInTheDocument();
  });

  it("renders the six feel-words and both CTAs", () => {
    render(<Hero />);
    expect(screen.getByText(/FAST · CLEAR · NATURAL · RELIABLE · ALIVE · USEFUL/i)).toBeInTheDocument();
    const explore = screen.getByRole("link", { name: /EXPLORE MY WORK/i });
    expect(explore).toHaveAttribute("href", "#work");
    const pdf = screen.getByRole("link", { name: /DOWNLOAD PORTFOLIO PDF/i });
    expect(pdf).toHaveAttribute("href", "/pdf/deck");
  });
});