import React from "react";
import Link from "next/link";
import { Product } from "@/types/products";
import { githubProjects, otherProjects } from "@/constants/projects";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconExternalLink,
  IconFileText,
} from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";
import { ArchitectureFlow } from "@/components/ui/ArchitectureFlow";
import { ProjectScreenshots } from "@/components/sections/ProjectScreenshots";

export const Products = () => {
  return (
    <div>
      <div className="space-y-8">
        {githubProjects.map((product: Product) => (
          <article key={product.href} className="strip flex-col md:flex-row">
            <div
              className="strip-band h-2 w-full md:h-auto md:w-3 bg-magenta"
              aria-hidden="true"
            />
            {/* Phones: screenshots, details, diagram. Desktop: screenshots and
                diagram in the left column, details on the right. */}
            <div className="flex-1 min-w-0 grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:grid-rows-[auto_1fr] gap-6 lg:gap-x-8 p-5">
              <ProjectScreenshots images={product.images} />
              <div className="lg:row-span-2">
                <ProjectDetails product={product} />
              </div>
              <div className="lg:col-start-1">
                <p className="strip-label mb-2">Architecture</p>
                <ArchitectureFlow tiers={product.architecture} caption={product.hosting} />
              </div>
            </div>
          </article>
        ))}
      </div>

      <h3 className="mt-14 mb-4 text-xl font-bold">Earlier work</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {otherProjects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group panel flex flex-col justify-between transition-colors hover:border-ink"
          >
            <div>
              <h4 className="text-lg font-semibold flex items-center gap-2">
                <span>{project.title}</span>
                <IconArrowUpRight className="h-5 w-5 text-ink-soft group-hover:text-magenta transition-colors flex-shrink-0" />
              </h4>
              <p className="text-base leading-relaxed text-ink-soft mt-2">{project.description}</p>
            </div>
            <StackTags stack={project.stack} className="mt-4" />
          </a>
        ))}
      </div>
    </div>
  );
};

const ProjectDetails = ({ product }: { product: Product }) => (
  <div className="flex flex-col h-full">
    <h3 className="text-2xl font-bold">{product.title}</h3>
    <p className="mt-1 text-sm font-medium text-chart">{product.tagline}</p>
    <p className="mt-3 text-base leading-relaxed text-ink-soft">{product.description}</p>
    <ul className="mt-4 space-y-2 list-none p-0">
      {product.highlights.map((highlight) => (
        <li key={highlight} className="flex gap-2.5 text-base leading-relaxed">
          <WaypointMark />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
    <StackTags stack={product.stack} className="mt-5" />
    <div className="mt-5 lg:mt-auto lg:pt-5 flex flex-wrap gap-3">
      {/* A demo is what most visitors try first, so it gets the filled button. */}
      {product.live && (
        <ProjectLink href={product.live} icon={IconExternalLink} label="Live demo" primary />
      )}
      <ProjectLink href={product.href} icon={IconBrandGithub} label="Source code" />
      {product.caseStudy && (
        <Link href={product.caseStudy} className="btn-secondary">
          <IconFileText className="h-4 w-4" />
          Case study
        </Link>
      )}
    </div>
  </div>
);

// The four-point waypoint star from aeronautical charts.
const WaypointMark = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="mt-2 flex-shrink-0"
  >
    <path
      d="M12 1 L14.5 9.5 L23 12 L14.5 14.5 L12 23 L9.5 14.5 L1 12 L9.5 9.5 Z"
      fill="#B0186A"
    />
  </svg>
);

const StackTags = ({
  stack,
  className,
}: {
  stack: string[];
  className?: string;
}) => (
  <div className={twMerge("flex flex-wrap gap-2", className)}>
    {stack.map((tech) => (
      <span key={tech} className="chip">
        {tech}
      </span>
    ))}
  </div>
);

const ProjectLink = ({
  href,
  icon: Icon,
  label,
  primary = false,
}: {
  href: string;
  icon: typeof IconBrandGithub;
  label: string;
  primary?: boolean;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={primary ? "btn-primary border border-transparent px-4 py-2 text-sm" : "btn-secondary"}
  >
    <Icon className="h-4 w-4" />
    {label}
  </a>
);
