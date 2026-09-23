import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import CaseStudyView from "@/components/work/CaseStudyView";
import { getProject } from "@/content/projects";

afterEach(() => cleanup());

describe("CaseStudyView", () => {
  it("renders the Smart Halter case study fully", () => {
    const study = getProject("smart-halter")!;
    render(<CaseStudyView study={study} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Smart Halter",
    );
    expect(screen.getByText("Turning Sensor Data Into Useful Information")).toBeInTheDocument();
    expect(
      screen.getByText("Raw data is not the product. Useful information is."),
    ).toBeInTheDocument();
    expect(screen.getByText(/~60% improvement in sensor accuracy/)).toBeInTheDocument();
    expect(screen.getByText(/How do you make imperfect real-world data useful/)).toBeInTheDocument();
  });

  it("renders the FaS-Track key result before → after", () => {
    const study = getProject("fas-track")!;
    render(<CaseStudyView study={study} />);
    expect(screen.getByText("> 15 m error")).toBeInTheDocument();
    expect(screen.getByText("< 5 m error")).toBeInTheDocument();
    expect(screen.getByText("OPERATIONAL DECISION")).toBeInTheDocument();
  });
});