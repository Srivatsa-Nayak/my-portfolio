import { StaticImageData } from "next/image";

export type ProjectImage = {
  src: StaticImageData;
  alt: string;
  caption: string;
};

export type Product = {
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  href: string;
  live?: string;
  stack: string[];
  images: ProjectImage[];
};

export type OtherProject = {
  title: string;
  description: string;
  href: string;
  stack: string[];
};
