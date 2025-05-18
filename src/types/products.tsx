import { StaticImageData } from "next/image";

export type Product = {
  title: string;
  description: string;
  href: string;
  slug?: string;
  stack?: string[];
  content?: React.ReactNode | string;
};
