import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import ResumePage from "@/app/pdf/resume/page";
import CaseStudiesPage from "@/app/pdf/casestudies/page";

afterEach(() => cleanup());

describe("PDF routes", () => {
  it("resume page is a one-pager with all flagships + contact", () => {
    render(<ResumePage />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Deviano Christian",
    );
    expect(screen.getByText("I BUILD SOFTWARE YOU CAN ACTUALLY FEEL.")).toBeInTheDocument();
    for (const name of [
      "Janova",
      "FaS-Track Subsoil",
      "BLE IoT Configuration App",
      "Smart Halter",
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument();
    }
    expect(screen.getByText(/devianoananda@gmail.com/)).toBeInTheDocument();
    expect(screen.getByText(/github\.com\/devichr/)).toBeInTheDocument();
  });

  it("case-studies page renders all four studies", () => {
    render(<CaseStudiesPage />);
    for (const name of [
      "Janova",
      "FaS-Track Subsoil",
      "BLE IoT Configuration App",
      "Smart Halter",
    ]) {
      expect(screen.getByRole("heading", { level: 1, name })).toBeInTheDocument();
    }
  });
});