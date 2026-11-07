import { StaticImageData } from "next/image";

export type ProjectImage = {
  src: StaticImageData;
  alt: string;
  caption: string;
};

// One box in a project's architecture diagram.
export type ArchNode = {
  label: string;
  detail?: string;
  // Third-party services are drawn with a dashed border.
  external?: boolean;
};

export type Product = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  href: string;
  live?: string;
  // Path of an in-site case study page, if the project has one.
  caseStudy?: string;
  stack: string[];
  images: ProjectImage[];
  // Left-to-right tiers (e.g. UI → API → data); a tier with several nodes
  // means parallel dependencies.
  architecture: ArchNode[][];
  // Where it runs, shown under the diagram.
  hosting?: string;
};

export type OtherProject = {
  title: string;
  description: string;
  href: string;
  stack: string[];
};
