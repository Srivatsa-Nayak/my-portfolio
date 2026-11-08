import { OG_SIZE, renderCaseStudyOgImage } from "@/components/case-study/caseStudyOgImage";

// Edge runtime: see src/app/opengraph-image.tsx.
export const runtime = "edge";
export const alt = "Route Check case study by Srivatsa Nayak: weather-aware flight rerouting, Airbus Aerothon 6.0 finalist";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function OpengraphImage() {
  const screenshot = await fetch(new URL("./og-screenshot.jpg", import.meta.url)).then((res) =>
    res.arrayBuffer()
  );
  return renderCaseStudyOgImage({
    title: "Route Check",
    tagline: "Weather-aware flight rerouting, Airbus Aerothon 6.0 finalist",
    screenshot,
  });
}
