import type { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  IconArrowLeft,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Product } from "@/types/products";

// Building blocks shared by the case study pages in src/app/projects/*.

// The preview image comes from the case study route's own opengraph-image.tsx
// (see caseStudyOgImage.tsx); Next.js adds og:image and twitter:image for it.
export const caseStudyMetadata = ({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: { type: "article", url: path, title, description },
  twitter: { card: "summary_large_image", title, description },
});

const BackLink = () => (
  <Link
    href="/#projects"
    className="inline-flex items-center gap-1.5 font-display font-semibold text-sm text-chart hover:text-ink transition-colors"
  >
    <IconArrowLeft className="h-4 w-4" aria-hidden="true" />
    All projects
  </Link>
);

export const CaseStudyHeader = ({
  project,
  lead,
  children,
}: {
  project: Product;
  lead: string;
  // Extra content under the stack chips (e.g. a "My role" note).
  children?: React.ReactNode;
}) => (
  <header>
    <BackLink />
    <p className="strip-label mt-8">Case study</p>
    <Heading className="mt-1 text-3xl sm:text-4xl lg:text-5xl">{project.title}</Heading>
    <p className="mt-2 text-sm font-medium text-chart">{project.tagline}</p>
    <Paragraph className="mt-4 text-lg">{lead}</Paragraph>
    <div className="mt-6 flex flex-wrap gap-3">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary border border-transparent px-4 py-2 text-sm"
        >
          <IconExternalLink className="h-4 w-4" />
          Live demo
        </a>
      )}
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
        <IconBrandGithub className="h-4 w-4" />
        Source code
      </a>
    </div>
    <div className="mt-6 flex flex-wrap gap-2">
      {project.stack.map((tech) => (
        <span key={tech} className="chip">
          {tech}
        </span>
      ))}
    </div>
    {children}
  </header>
);

export const CaseStudyFigure = ({
  src,
  alt,
  caption,
  priority = false,
  wide = true,
}: {
  src: StaticImageData;
  alt: string;
  caption: string;
  priority?: boolean;
  // Full content width (1104px max) or a narrower 768px column.
  wide?: boolean;
}) => (
  <figure className={wide ? "m-0" : "m-0 max-w-3xl"}>
    <div className="border rounded-lg bg-sheet overflow-hidden">
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        priority={priority}
        sizes={
          wide
            ? "(min-width: 1200px) 1104px, calc(100vw - 32px)"
            : "(min-width: 800px) 768px, calc(100vw - 32px)"
        }
        className="block w-full h-auto"
      />
    </div>
    <figcaption className="strip-label mt-2">{caption}</figcaption>
  </figure>
);

export const CaseStudySection = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  // No id on the <section> itself: ActiveSectionProvider treats section[id]
  // as home-page nav sections.
  <section aria-labelledby={id} className="space-y-5">
    <Heading as="h2" className="text-2xl sm:text-3xl">
      <span id={id}>{title}</span>
    </Heading>
    {children}
  </section>
);

export const CardGrid = ({ items }: { items: { title: string; body: string }[] }) => (
  <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 m-0">
    {items.map((item) => (
      <li key={item.title} className="panel">
        <h3 className="text-base font-semibold">{item.title}</h3>
        <p className="mt-2 text-base leading-relaxed text-ink-soft">{item.body}</p>
      </li>
    ))}
  </ul>
);

export const NumberedList = ({ items }: { items: { title: string; body: string }[] }) => (
  <ol className="space-y-5 list-none p-0 m-0 max-w-3xl">
    {items.map((item, idx) => (
      <li key={item.title} className="flex gap-4">
        <span
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-ink font-display font-bold text-sm text-white"
          aria-hidden="true"
        >
          {idx + 1}
        </span>
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="mt-1 text-base leading-relaxed text-ink-soft">{item.body}</p>
        </div>
      </li>
    ))}
  </ol>
);

export const BulletList = ({ items, muted = false }: { items: string[]; muted?: boolean }) => (
  <ul className="space-y-3 list-none p-0 m-0 max-w-3xl">
    {items.map((item) => (
      <li
        key={item}
        className={`flex gap-2.5 text-base leading-relaxed ${muted ? "text-ink-soft" : ""}`}
      >
        <span
          className={`mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${muted ? "bg-ink-soft" : "bg-magenta"}`}
          aria-hidden="true"
        />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

// Shell commands with an optional comment per line (shown dimmed).
export const CommandBlock = ({
  lines,
  label,
}: {
  lines: { command: string; comment?: string }[];
  label: string;
}) => {
  // Pad commands to one width so the comments line up (monospace).
  const width = Math.max(...lines.map((line) => line.command.length));
  return (
    <figure className="m-0 max-w-3xl">
      <pre
        className="m-0 overflow-x-auto rounded-lg bg-ink px-5 py-4 font-mono text-sm leading-relaxed text-white"
        aria-label={label}
      >
        <code>
          {lines.map((line) => (
            <span key={line.command} className="block whitespace-pre">
              {line.comment ? line.command.padEnd(width) : line.command}
              {line.comment && <span className="text-rule/70">{`   # ${line.comment}`}</span>}
            </span>
          ))}
        </code>
      </pre>
      <figcaption className="strip-label mt-2">{label}</figcaption>
    </figure>
  );
};

export const CaseStudyFooter = () => (
  <footer className="border-t pt-8 flex flex-wrap items-center justify-between gap-4">
    <BackLink />
    <Link href="/#contact" className="btn-secondary">
      Get in touch
    </Link>
  </footer>
);
