import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";
import { githubProjects } from "@/constants/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = githubProjects
    .filter((project) => project.caseStudy)
    .map((project) => ({ url: `${SITE_URL}${project.caseStudy}` }));

  return [{ url: SITE_URL }, ...caseStudies];
}
