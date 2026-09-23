import type { Metadata } from "next";
import { projects } from "@/content/projects";
import CaseStudyView from "@/components/work/CaseStudyView";
import { siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Case Studies",
  robots: { index: false },
};

export default function CaseStudiesPage() {
  return (
    <main className="print-page mx-auto max-w-4xl">
      {projects.map((study, i) => (
        <section
          key={study.slug}
          className="page-break p-10"
          aria-label={study.name}
        >
          <p className="font-mono text-xs text-obsidian/50">
            {siteName} · Case Study 0{i + 1}
          </p>
          <div className="mt-6">
            <CaseStudyView study={study} />
          </div>
        </section>
      ))}
    </main>
  );
}