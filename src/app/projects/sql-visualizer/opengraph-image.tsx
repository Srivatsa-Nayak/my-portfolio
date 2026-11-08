import { OG_SIZE, renderCaseStudyOgImage } from "@/components/case-study/caseStudyOgImage";

// Edge runtime: see src/app/opengraph-image.tsx.
export const runtime = "edge";
export const alt = "SQL Visualizer case study by Srivatsa Nayak: an ER-diagram editor backed by a live database";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpengraphImage() {
  const screenshot = await fetch(new URL("./og-screenshot.jpg", import.meta.url)).then((res) =>
    res.arrayBuffer()
  );
  return renderCaseStudyOgImage({
    title: "SQL Visualizer",
    tagline: "ER-diagram editor where every change runs as real SQL",
    screenshot,
  });
}
