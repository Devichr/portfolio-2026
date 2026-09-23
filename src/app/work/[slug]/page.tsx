import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectSlugs, getProject } from "@/content/projects";
import CaseStudyView from "@/components/work/CaseStudyView";
import Container from "@/components/ui/Container";
import ArrowLink from "@/components/ui/ArrowLink";
import Reveal from "@/components/ui/Reveal";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getProject(slug);
  if (!study) return {};
  return {
    title: study.name,
    description: study.oneLineStory,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getProject(slug);
  if (!study) notFound();
  return (
    <main>
      <Container className="py-16">
        <nav className="mb-10">
          <ArrowLink href="/#work">Back to work</ArrowLink>
        </nav>
        <Reveal>
          <CaseStudyView study={study} />
        </Reveal>
      </Container>
    </main>
  );
}

export const dynamicParams = false;