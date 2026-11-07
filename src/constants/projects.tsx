import { OtherProject, Product } from "@/types/products";

import resumeBuilderLanding from "../../public/images/projects/resume-builder-landing.webp";
import resumeBuilderEditor from "../../public/images/projects/resume-builder-editor.webp";
import resumeBuilderAts from "../../public/images/projects/resume-builder-ats.webp";
import resumeBuilderTemplates from "../../public/images/projects/resume-builder-templates.webp";
import resumeBuilderLogin from "../../public/images/projects/resume-builder-login.webp";
import sqlVisualizerCanvas from "../../public/images/projects/sql-visualizer-canvas.webp";
import sqlVisualizerLanding from "../../public/images/projects/sql-visualizer-landing.webp";
import routeCheckVerdict from "../../public/images/projects/route-check-verdict.webp";
import routeCheckAlternate from "../../public/images/projects/route-check-alternate.webp";
import blogPlatformHome from "../../public/images/projects/blog-platform-home.webp";
import blogPlatformApi from "../../public/images/projects/blog-platform-api.webp";
import blogPlatformEditor from "../../public/images/projects/blog-platform-editor.webp";

export const githubProjects: Product[] = [
  {
    title: "SQL Visualizer",
    tagline: "Interactive ER-diagram editor backed by a live database",
    description:
      "Import a .sql or .csv file and edit its schema as an entity-relationship diagram — every change on the canvas runs as real DDL/DML against a live database.",
    highlights: [
      "Reads MySQL, MariaDB, PostgreSQL and SQL Server dumps, translating vendor types and keys into a working schema",
      "Isolates every open file in its own database via a per-workspace DataSource, created lazily and cached",
      "81 JUnit 5 / MockMvc tests and path-filtered GitHub Actions CI/CD deploying to Azure",
    ],
    href: "https://github.com/Srivatsa-Nayak/db-viewer",
    live: "https://db-viewer-ui-srivatsa.azurewebsites.net",
    stack: ["Java 17", "Spring Boot", "JdbcTemplate", "SQLite / MySQL", "Next.js", "React Flow"],
    images: [
      {
        src: sqlVisualizerCanvas,
        alt: "SQL Visualizer editor showing an online-store schema as an ER diagram with foreign-key relationships",
        caption: "Editor — schema rendered from live database metadata",
      },
      {
        src: sqlVisualizerLanding,
        alt: "SQL Visualizer landing page with an animated interactive schema canvas",
        caption: "Landing page with a live, draggable demo canvas",
      },
    ],
  },
  {
    title: "Resume Builder",
    tagline: "AI-assisted resume builder with ATS scoring and PDF import/export",
    description:
      "A full-stack app for writing ATS-friendly resumes: a step-by-step editor with live preview, 28 templates, PDF import, and scoring against a job description.",
    highlights: [
      "ATS scoring engine: job-description keyword extraction with aliases (k8s → Kubernetes), required vs. nice-to-have weighting and 17 structural checks",
      "AI features use the user's own encrypted key (AES-256-GCM), fall back to a rate-limited shared key, then to an offline mode",
      "PDF import with OCR fallback for scanned files, and export with selectable text; 86 Vitest tests, including a PDF round trip for all 28 templates",
    ],
    href: "https://github.com/Srivatsa-Nayak/resume-builder",
    live: "https://resume-builder-green-beta-85.vercel.app/",
    stack: ["Next.js 16", "React 19", "TypeScript", "Prisma", "PostgreSQL", "Vitest"],
    images: [
      {
        src: resumeBuilderEditor,
        alt: "Resume Builder editor with a step-by-step form on the left and a live resume preview on the right",
        caption: "Editor — step-by-step form with a live preview",
      },
      {
        src: resumeBuilderAts,
        alt: "ATS check tab showing a resume health score of 100 with category breakdowns and a checklist",
        caption: "ATS check — health score, job-description match and checklist",
      },
      {
        src: resumeBuilderLanding,
        alt: "Resume Builder landing page with keyword-highlighted resume and a job match score",
        caption: "Landing page",
      },
      {
        src: resumeBuilderTemplates,
        alt: "Template gallery with search, category filters and resume template previews",
        caption: "Template gallery — 28 templates with search and filters",
      },
      {
        src: resumeBuilderLogin,
        alt: "Resume Builder sign-in page with email and password fields beside a template preview",
        caption: "Sign-in page",
      },
    ],
  },
  {
    title: "Route Check — Flight Navigation",
    tagline: "Weather-aware route safety and rerouting · Finalist, Airbus Aerothon 6.0",
    description:
      "Checks wind and visibility at every stop on a flight route, returns a go / hold / reroute / divert verdict, and finds the shortest safe alternate with Dijkstra's algorithm.",
    highlights: [
      "Express REST API aggregating weather, airport and fuel-burn data from five external services",
      "Containerised frontend, backend and MySQL; Helm chart deploys the stack to OpenShift",
      "GitHub Actions pipeline publishes versioned images and the Helm chart to GHCR",
    ],
    href: "https://github.com/Srivatsa-Nayak/Aerothon-6.0",
    stack: ["React", "Node.js", "Express", "Docker", "Helm", "OpenShift"],
    images: [
      {
        src: routeCheckVerdict,
        alt: "Route Check result for Mangalore to Bangalore flagging low visibility at Vellore and recommending a reroute",
        caption: "Route check — station-by-station weather and verdict",
      },
      {
        src: routeCheckAlternate,
        alt: "Alternate route from Mangalore to Bangalore via Coimbatore plotted on a map",
        caption: "Shortest safe alternate route via Dijkstra",
      },
    ],
  },
  {
    title: "Blog Platform",
    tagline: "Secure Spring Boot REST API with a Next.js frontend",
    description:
      "A blogging platform whose Spring Boot REST API is secured with stateless JWT and role-based access, documented with OpenAPI, and served through a Next.js frontend.",
    highlights: [
      "Versioned /api/v1 endpoints with pagination, sorting, Bean Validation and consistent error responses",
      "Spring Security + JWT with ROLE_USER / ROLE_ADMIN authorisation enforced per endpoint",
      "Runs on embedded H2 out of the box, or MySQL via Spring profiles and Docker Compose",
    ],
    href: "https://github.com/Srivatsa-Nayak/springboot-restful-webservices",
    stack: ["Java", "Spring Boot", "Spring Security", "JPA / Hibernate", "MySQL", "Next.js"],
    images: [
      {
        src: blogPlatformHome,
        alt: "Blog Platform home page listing posts with category filters and sorting",
        caption: "Home — posts with category filter, sorting and paging",
      },
      {
        src: blogPlatformApi,
        alt: "Swagger UI documenting the Blog Platform REST API",
        caption: "OpenAPI / Swagger documentation for the REST API",
      },
      {
        src: blogPlatformEditor,
        alt: "Admin view of the post editor in the Blog Platform",
        caption: "Admin-only post editor",
      },
    ],
  },
];

export const otherProjects: OtherProject[] = [
  {
    title: "Multi-Modal Bank Authentication",
    description:
      "Bank authentication combining facial and voice recognition with deep learning; 96.38% accuracy on the Labeled Faces in the Wild benchmark.",
    href: "https://github.com/Srivatsa-Nayak/Mutli-Modal-Auth-Project",
    stack: ["Python", "Deep Learning"],
  },
  {
    title: "Worker Hiring App",
    description:
      "Android application that lets job seekers search for and apply to local jobs, backed by Firebase.",
    href: "https://github.com/Srivatsa-Nayak/Worker-Hiring-App",
    stack: ["Java", "Android", "Firebase"],
  },
];
