import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Profile from "@/components/profile/Profile";
import Contact from "@/components/contact/Contact";
import SiteHeader from "@/components/site/SiteHeader";

afterEach(() => cleanup());

describe("Profile", () => {
  it("shows the process line, skill groups, and three lessons", () => {
    render(<Profile />);
    expect(screen.getByText(/Understand the problem/)).toBeInTheDocument();
    expect(screen.getByText(/Frontend/)).toBeInTheDocument();
    expect(screen.getByText(/Infrastructure/)).toBeInTheDocument();
    expect(screen.getByText(/Data quality determines product quality/)).toBeInTheDocument();
  });

  it("renders the half-body portrait from the profile content", () => {
    render(<Profile />);
    const img = screen.getByAltText("Deviano Christian portrait");
    expect(img).toHaveAttribute("src", expect.stringContaining("half-body"));
  });
});

describe("Contact", () => {
  it("shows real contact links", () => {
    render(<Contact />);
    expect(screen.getByRole("link", { name: /Email/ })).toHaveAttribute(
      "href",
      "mailto:devianoananda@gmail.com",
    );
    expect(screen.getByRole("link", { name: /GitHub/ })).toHaveAttribute(
      "href",
      "https://github.com/devichr",
    );
    expect(screen.getByRole("link", { name: /WhatsApp/ })).toHaveAttribute(
      "href",
      "https://wa.me/6281322625155",
    );
    expect(screen.getByRole("link", { name: /DOWNLOAD PORTFOLIO PDF/ })).toHaveAttribute(
      "href",
      "/pdf/deck",
    );
  });
});

describe("SiteHeader", () => {
  it("navigates to sections and exposes the portfolio pdf deck", () => {
    render(<SiteHeader />);
    const work = screen.getByRole("link", { name: "Work" });
    expect(work).toHaveAttribute("href", "#work");
    expect(screen.getByRole("link", { name: /Portfolio PDF/ })).toHaveAttribute(
      "href",
      "/pdf/deck",
    );
  });
});
