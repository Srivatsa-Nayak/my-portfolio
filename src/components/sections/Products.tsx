"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Product } from "@/types/products";
import { githubProjects, otherProjects } from "@/constants/projects";
import { motion } from "framer-motion";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

// Holder-band colour for each featured project's strip, in display order.
const BANDS = ["bg-chart", "bg-magenta", "bg-go"];

export const Products = () => {
  return (
    <div>
      <div className="space-y-8">
        {githubProjects.map((product: Product, idx: number) => (
          <motion.article
            key={product.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.3 }}
            className="strip flex-col md:flex-row"
          >
            <div
              className={twMerge(
                "strip-band h-2 w-full md:h-auto md:w-3",
                BANDS[idx % BANDS.length]
              )}
              aria-hidden="true"
            />
            <div className="flex-1 min-w-0 grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-6 lg:gap-8 p-5">
              <Screenshots product={product} />
              <ProjectDetails product={product} />
            </div>
          </motion.article>
        ))}
      </div>

      <h3 className="mt-14 mb-4 text-xl font-bold">More on GitHub</h3>
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
              <p className="text-sm text-ink-soft mt-2">{project.description}</p>
            </div>
            <StackTags stack={project.stack} className="mt-4" />
          </a>
        ))}
      </div>
    </div>
  );
};

const Screenshots = ({ product }: { product: Product }) => {
  const [active, setActive] = useState(0);
  const current = product.images[active];

  return (
    <div>
      <figure className="m-0">
        <div className="border rounded-md bg-paper overflow-hidden">
          <Image
            src={current.src}
            alt={current.alt}
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="block w-full h-auto"
          />
        </div>
        <figcaption className="strip-label mt-2">{current.caption}</figcaption>
      </figure>
      {product.images.length > 1 && (
        <div className="mt-3 flex gap-2">
          {product.images.map((image, idx) => (
            <button
              key={image.caption}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Show screenshot: ${image.caption}`}
              aria-pressed={idx === active}
              className={twMerge(
                "w-20 sm:w-24 overflow-hidden rounded-md border-2 transition",
                idx === active
                  ? "border-ink"
                  : "border-rule opacity-70 hover:opacity-100 hover:border-ink-soft"
              )}
            >
              <Image
                src={image.src}
                alt=""
                sizes="96px"
                className="block w-full h-auto"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectDetails = ({ product }: { product: Product }) => (
  <div className="flex flex-col">
    <h3 className="text-2xl font-bold">{product.title}</h3>
    <p className="mt-1 font-medium text-chart">{product.tagline}</p>
    <p className="mt-3 text-sm leading-relaxed text-ink-soft">{product.description}</p>
    <ul className="mt-4 space-y-2 list-none p-0">
      {product.highlights.map((highlight) => (
        <li key={highlight} className="flex gap-2.5 text-sm">
          <WaypointMark />
          <span>{highlight}</span>
        </li>
      ))}
    </ul>
    <StackTags stack={product.stack} className="mt-5" />
    <div className="mt-5 lg:mt-auto lg:pt-5 flex flex-wrap gap-3">
      <ProjectLink href={product.href} icon={IconBrandGithub} label="Source code" />
      {product.live && (
        <ProjectLink href={product.live} icon={IconExternalLink} label="Live demo" />
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
    className="mt-1.5 flex-shrink-0"
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
}: {
  href: string;
  icon: typeof IconBrandGithub;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="btn-secondary"
  >
    <Icon className="h-4 w-4" />
    {label}
  </a>
);
