import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowLeft,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { ArchitectureFlow } from "@/components/ui/ArchitectureFlow";
import { githubProjects } from "@/constants/projects";
import { ArchNode } from "@/types/products";

const PATH = "/projects/sql-visualizer";
const TITLE = "SQL Visualizer case study — Srivatsa Nayak";
const DESCRIPTION =
  "How I built an ER-diagram editor where every change on the canvas runs as real SQL against a live database: per-file database isolation, multi-dialect import and a Spring Boot API on Azure.";

// Setting openGraph here replaces the root one, which drops the file-based
// preview image, so point at it explicitly.
const PREVIEW_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Srivatsa Nayak — I build Java backends that bring mainframe workloads into the cloud.",
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    type: "article",
    url: PATH,
    title: TITLE,
    description: DESCRIPTION,
    images: [PREVIEW_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [PREVIEW_IMAGE],
  },
};

// Facts on this page come from the project's README and test suite
// (github.com/Srivatsa-Nayak/db-viewer); card data is shared with the home page.
const project = githubProjects.find((p) => p.caseStudy === PATH)!;

// The request path inside the Spring Boot API, from the README's system diagram.
const REQUEST_FLOW: ArchNode[][] = [
  [{ label: "Next.js SPA", detail: "React Flow canvas; tags every request with X-Workspace-Id" }],
  [{ label: "WorkspaceFilter", detail: "reads the workspace id" }],
  [{ label: "DatabaseService", detail: "builds the DDL / DML" }],
  [{ label: "WorkspaceManager", detail: "one cached DataSource per file" }],
  [
    { label: "ws_<fileA>.db", detail: "SQLite file or MySQL schema" },
    { label: "ws_<fileB>.db", detail: "isolated from file A" },
  ],
];

const CONSTRAINTS = [
  {
    title: "The schema is unknown at compile time",
    body: "Users bring their own tables, so there are no entity classes to map. Data access uses Spring's JdbcTemplate rather than an ORM.",
  },
  {
    title: "Dumps come from four different engines",
    body: "MySQL, MariaDB, PostgreSQL and SQL Server each write types and keys differently — SERIAL, IDENTITY(1,1), AUTO_INCREMENT, keys added later by ALTER TABLE, GO batches, pg_dump COPY blocks.",
  },
  {
    title: "Open files must not see each other",
    body: "Two files can each define a users table with different columns, and neither may read the other's rows.",
  },
  {
    title: "Type inference can destroy data",
    body: "A postcode column of 01234 is all digits, so the obvious type is INT — and the leading zeros would be lost for good.",
  },
];

const DECISIONS = [
  {
    title: "The database is the model",
    body: "There is no in-memory copy of the schema. Every action on the canvas becomes real DDL or DML, and the diagram is redrawn from a fresh metadata query (sqlite_master and PRAGMA table_info / foreign_key_list, or the MySQL equivalents). If the database accepts a foreign key, the canvas shows it; if it refuses, the user sees why.",
  },
  {
    title: "One physical database per open file",
    body: "The frontend tags each request with an X-Workspace-Id header. The backend lazily creates and caches a DataSource per id — a separate .db file on SQLite, a separate schema on MySQL. Requests without an id fall back to a shared default database, which is what Swagger and curl see.",
  },
  {
    title: "Translate dialects instead of rejecting them",
    body: "An import detects its source engine from fingerprints in the file, maps vendor types, turns every auto-increment style into a working key, and folds ALTER TABLE keys back into CREATE TABLE. Anything that cannot be represented is skipped with a note rather than failing the whole import.",
  },
  {
    title: "Stage imports before running them",
    body: "POST /import/analyze parses a file and creates nothing. A dialog shows each table, the inferred types, why each was chosen and real sample values, and lets the user correct them before any DDL runs.",
  },
];

const RESULTS = [
  "Imports dumps from MySQL, MariaDB, PostgreSQL and SQL Server; exports to six SQL dialects (MySQL, MariaDB, PostgreSQL, SQL Server, SQLite, ANSI), Mermaid, DBML and PNG.",
  "171 backend tests across 14 JUnit 5 / MockMvc suites. Each asserts an effect, not just a status code — for example, that two workspaces with the same table name never leak rows.",
  "Path-filtered GitHub Actions deploy the API and the frontend to Azure App Service independently. Every merge bumps and tags the patch version, and the running app reports its build via GET /version.",
  "A live demo with twelve starter templates, share links and optional accounts — everything except export and sharing works signed out.",
];

const TRADE_OFFS = [
  "Anonymous workspace ownership rests on a browser-generated X-Client-Id header. That isolates honest sessions but is not a security boundary, so the README says to run it locally or behind your own access control.",
  "The live demo runs on Azure's free F1 plan, whose filesystem is not durable across restarts — workspace databases there are effectively session-scoped, and users should export what they want to keep.",
];

const SectionTitle = ({ id, children }: { id: string; children: string }) => (
  <Heading as="h2" className="text-2xl sm:text-3xl">
    <span id={id}>{children}</span>
  </Heading>
);

export default function SqlVisualizerCaseStudy() {
  const hero = project.images[0];

  return (
    <Container>
      <article className="space-y-14">
        <header>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 font-display font-semibold text-sm text-chart hover:text-ink transition-colors"
          >
            <IconArrowLeft className="h-4 w-4" aria-hidden="true" />
            All projects
          </Link>
          <p className="strip-label mt-8">Case study</p>
          <Heading className="mt-1 text-3xl sm:text-4xl lg:text-5xl">SQL Visualizer</Heading>
          <Paragraph className="mt-4 text-lg">
            An entity-relationship diagram editor where every change on the
            canvas runs as real SQL against a live database, so the diagram
            always shows actual state rather than a parsed copy.
          </Paragraph>
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
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
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
        </header>

        <figure className="m-0">
          <div className="border rounded-lg bg-sheet overflow-hidden">
            <Image
              src={hero.src}
              alt={hero.alt}
              placeholder="blur"
              priority
              sizes="(min-width: 1200px) 1104px, calc(100vw - 32px)"
              className="block w-full h-auto"
            />
          </div>
          <figcaption className="strip-label mt-2">{hero.caption}</figcaption>
        </figure>

        <section aria-labelledby="problem" className="space-y-4">
          <SectionTitle id="problem">The problem</SectionTitle>
          <Paragraph>
            A diagram drawn from a parsed copy of a SQL dump is a guess. It can
            show a foreign key the database would reject, and edits made on the
            canvas never reach a real database. I wanted to import a .sql or
            .csv file, see its schema, edit tables and rows directly on the
            diagram, and export the result — with the database as the single
            source of truth.
          </Paragraph>
        </section>

        <section aria-labelledby="constraints" className="space-y-5">
          <SectionTitle id="constraints">Constraints</SectionTitle>
          <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 m-0">
            {CONSTRAINTS.map((item) => (
              <li key={item.title} className="panel">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-ink-soft">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="approach" className="space-y-5">
          <SectionTitle id="approach">Approach</SectionTitle>
          <ol className="space-y-5 list-none p-0 m-0 max-w-3xl">
            {DECISIONS.map((item, idx) => (
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
        </section>

        <section aria-labelledby="architecture" className="space-y-5">
          <SectionTitle id="architecture">Architecture</SectionTitle>
          <Paragraph>
            One request, from a change on the canvas to the database that backs
            that file. After every write, the canvas re-reads the schema from
            the same database.
          </Paragraph>
          <div className="panel bg-paper">
            <ArchitectureFlow
              tiers={REQUEST_FLOW}
              size="lg"
              caption="Spring Boot API in the middle three boxes · frontend and API on Azure App Service"
            />
          </div>
        </section>

        <section aria-labelledby="results" className="space-y-5">
          <SectionTitle id="results">What shipped</SectionTitle>
          <ul className="space-y-3 list-none p-0 m-0 max-w-3xl">
            {RESULTS.map((item) => (
              <li key={item} className="flex gap-2.5 text-base leading-relaxed">
                <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-magenta" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="trade-offs" className="space-y-5">
          <SectionTitle id="trade-offs">Trade-offs</SectionTitle>
          <ul className="space-y-3 list-none p-0 m-0 max-w-3xl">
            {TRADE_OFFS.map((item) => (
              <li key={item} className="flex gap-2.5 text-base leading-relaxed text-ink-soft">
                <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink-soft" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="border-t pt-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 font-display font-semibold text-sm text-chart hover:text-ink transition-colors"
          >
            <IconArrowLeft className="h-4 w-4" aria-hidden="true" />
            All projects
          </Link>
          <Link href="/#contact" className="btn-secondary">
            Get in touch
          </Link>
        </footer>
      </article>
    </Container>
  );
}
