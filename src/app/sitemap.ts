import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { projectSlugs } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/pdf/resume", "/pdf/casestudies"].map(
    (p) => ({
      url: `${SITE_URL}${p}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }),
  );
  const workRoutes = projectSlugs.map((slug) => ({
    url: `${SITE_URL}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
  }));
  return [...staticRoutes, ...workRoutes];
}