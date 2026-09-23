import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import SkillGraph from "@/components/hero/SkillGraph";
import { highlightSkills } from "@/content/profile";

afterEach(() => cleanup());

describe("SkillGraph", () => {
  it("renders one draggable node per highlighted skill", () => {
    render(<SkillGraph />);
    for (const skill of highlightSkills) {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
    }
  });

  it("draws a connection network between nodes", () => {
    const { container } = render(<SkillGraph />);
    expect(container.querySelectorAll("svg line")).toHaveLength(26);
  });
});