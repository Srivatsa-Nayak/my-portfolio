import { Container } from "@/components/layout/Container";
import { Paragraph } from "@/components/ui/Paragraph";
import { ArchitectureFlow } from "@/components/ui/ArchitectureFlow";
import {
  BulletList,
  CardGrid,
  CaseStudyFigure,
  CaseStudyFooter,
  CaseStudyHeader,
  CaseStudySection,
  NumberedList,
  caseStudyMetadata,
} from "@/components/case-study/CaseStudy";
import { githubProjects } from "@/constants/projects";
import { ArchNode } from "@/types/products";
import importDialog from "../../../../public/images/projects/sql-visualizer-import.webp";

const PATH = "/projects/sql-visualizer";

export const metadata = caseStudyMetadata({
  path: PATH,
  title: "SQL Visualizer case study — Srivatsa Nayak",
  description:
    "How I built an ER-diagram editor where every change on the canvas runs as real SQL against a live database: per-file database isolation, multi-dialect import and a Spring Boot API on Azure.",
});

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

// Drawn from the limits the README states (see TRADE_OFFS).
const NEXT_STEPS = [
  "Back anonymous workspaces with a signed session token instead of the browser-generated X-Client-Id header, so ownership holds even against callers that aren't browsers.",
  "Restrict CORS to the frontend's own origin; today it is wide open.",
  "Move workspace databases to durable storage, such as a managed MySQL instance, so files on the live demo survive restarts.",
];

export default function SqlVisualizerCaseStudy() {
  const hero = project.images[0];

  return (
    <Container>
      <article className="space-y-14">
        <CaseStudyHeader
          project={project}
          lead="An entity-relationship diagram editor where every change on the canvas runs as real SQL against a live database, so the diagram always shows actual state rather than a parsed copy."
        />

        <CaseStudyFigure src={hero.src} alt={hero.alt} caption={hero.caption} priority />

        <CaseStudySection id="problem" title="The problem">
          <Paragraph>
            A diagram drawn from a parsed copy of a SQL dump is a guess. It can
            show a foreign key the database would reject, and edits made on the
            canvas never reach a real database. I wanted to import a .sql or
            .csv file, see its schema, edit tables and rows directly on the
            diagram, and export the result — with the database as the single
            source of truth.
          </Paragraph>
        </CaseStudySection>

        <CaseStudySection id="constraints" title="Constraints">
          <CardGrid items={CONSTRAINTS} />
        </CaseStudySection>

        <CaseStudySection id="approach" title="Approach">
          <NumberedList items={DECISIONS} />
          {/* Captured from the live demo with a sample CSV; the analysis step
              creates nothing until "Import" is pressed. */}
          <CaseStudyFigure
            src={importDialog}
            alt="SQL Visualizer's import check dialog for a CSV file: each column shows its inferred type, the reason, and sample values; the postcode column stays VARCHAR because values like 01234 have a leading zero."
            caption="The import check on a sample CSV: postcode stays text, so 01234 keeps its leading zero"
            wide={false}
          />
        </CaseStudySection>

        <CaseStudySection id="architecture" title="Architecture">
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
        </CaseStudySection>

        <CaseStudySection id="results" title="What shipped">
          <BulletList items={RESULTS} />
        </CaseStudySection>

        <CaseStudySection id="trade-offs" title="Trade-offs">
          <BulletList items={TRADE_OFFS} muted />
        </CaseStudySection>

        <CaseStudySection id="next" title="What I'd do next">
          <BulletList items={NEXT_STEPS} />
        </CaseStudySection>

        <CaseStudyFooter />
      </article>
    </Container>
  );
}
