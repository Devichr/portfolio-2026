import { describe, expect, it } from "vitest";
import {
  projects,
  homeProjects,
  carouselProjects,
  projectSlugs,
  getProject,
} from "./projects";
import { otherBuilds } from "./otherBuilds";
import { highlightSkills, profile } from "./profile";
import { contact } from "./contact";

describe("flagship projects", () => {
  it("has exactly the four approved flagships", () => {
    expect(projectSlugs).toEqual([
      "janova",
      "fas-track",
      "ble-config",
      "smart-halter",
    ]);
  });

  it("carousel keeps exactly the three featured projects", () => {
    expect(carouselProjects.map((p) => p.slug)).toEqual([
      "janova",
      "fas-track",
      "smart-halter",
    ]);
    for (const c of carouselProjects) {
      expect(c.screenshots?.length).toBe(5);
      expect(c.image).toBeTruthy();
    }
  });

  it("wires hero and five screenshot assets per featured project", () => {
    const folder: Record<string, string> = {
      janova: "janova",
      "fas-track": "fas_track",
      "smart-halter": "smart_halter",
    };
    for (const name of ["janova", "fas-track", "smart-halter"]) {
      const p = getProject(name);
      expect(p?.image).toMatch(/\.png$/);
      expect(p?.image).toContain(`assets/${folder[name]}`);
      expect(p?.screenshots?.length).toBe(5);
      for (const shot of p?.screenshots ?? []) {
        expect(shot).toMatch(/\.png$/);
        expect(shot).toContain(`assets/${folder[name]}`);
      }
    }
  });

  it("has the approved names and slugs unique", () => {
    const names = projects.map((p) => p.name);
    expect(new Set(names).size).toBe(4);
    expect(new Set(projectSlugs).size).toBe(4);
    expect(projects.find((p) => p.slug === "smart-halter")?.name).toBe(
      "Smart Halter",
    );
  });

  it("completes every required field per project", () => {
    for (const p of projects) {
      expect(p.subtitle.length).toBeGreaterThan(0);
      expect(p.oneLineStory.length).toBeGreaterThan(0);
      expect(p.role.length).toBeGreaterThan(0);
      expect(p.heroQuote.length).toBeGreaterThan(0);
      expect(p.intro.length).toBeGreaterThanOrEqual(1);
      expect(p.stack.length).toBeGreaterThanOrEqual(1);
      expect(p.contribution.length).toBeGreaterThanOrEqual(1);
      expect(p.centralQuestion.length).toBeGreaterThan(0);
      expect(p.tags.length).toBeGreaterThanOrEqual(3);
      for (const s of p.stack) {
        expect(s.layer.length).toBeGreaterThan(0);
        expect(s.items.length).toBeGreaterThan(0);
      }
    }
  });

  it("getProject resolves every slug", () => {
    for (const slug of projectSlugs) {
      expect(getProject(slug)?.slug).toBe(slug);
    }
    expect(getProject("nope")).toBeUndefined();
  });

  it("homeProjects are flat one-liner cards", () => {
    expect(homeProjects).toHaveLength(4);
    for (const h of homeProjects) {
      expect(h).not.toHaveProperty("intro");
    }
  });
});

describe("other builds", () => {
  it("has the five approved builds with brief explanations", () => {
    expect(otherBuilds).toHaveLength(5);
    for (const b of otherBuilds) {
      expect(b.name.length).toBeGreaterThan(0);
      expect(b.oneLine.length).toBeGreaterThan(0);
      expect(b.tags.length).toBeGreaterThanOrEqual(1);
      expect(b.about.length).toBeGreaterThan(40);
      expect(b.contribution.length).toBeGreaterThanOrEqual(1);
      for (const c of b.contribution) {
        expect(c.length).toBeGreaterThan(20);
      }
    }
  });
});

describe("profile", () => {
  it("has the approved process line and skill groups", () => {
    expect(profile.name).toBe("Deviano Christian");
    expect(profile.processLine).toContain("Understand the problem");
    expect(profile.skillGroups.length).toBeGreaterThanOrEqual(7);
    for (const g of profile.skillGroups) {
      expect(g.title.length).toBeGreaterThan(0);
      expect(g.skills.length).toBeGreaterThan(0);
    }
  });

  it("keeps lessons to the three strongest", () => {
    expect(profile.lessons).toHaveLength(3);
  });

  it("highlights exactly 15 real skills that exist in the groups", () => {
    const allSkills = new Set(
      profile.skillGroups.map((g) => g.skills).flat(),
    );
    expect(highlightSkills).toHaveLength(15);
    for (const h of highlightSkills) {
      expect(h.name.length).toBeGreaterThan(0);
      expect(allSkills.has(h.name)).toBe(true);
      expect(
        profile.skillGroups.some((g) => g.title === h.group),
      ).toBe(true);
    }
  });
});

describe("contact", () => {
  it("uses real contact data", () => {
    expect(contact.email).toBe("devianoananda@gmail.com");
    expect(contact.github).toBe("https://github.com/devichr");
    expect(contact.linkedin).toContain("linkedin.com");
    expect(contact.resumePdf).toContain("/documents/");
  });
});