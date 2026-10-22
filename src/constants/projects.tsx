import { OtherProject, Product } from "@/types/products";

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
      "Import a .sql or .csv file and its schema is rendered as an editable entity-relationship diagram. Every change on the canvas — new tables, columns, foreign keys, row edits — runs as real DDL/DML against a database, so the diagram always reflects actual state rather than a parsed copy.",
    highlights: [
      "Reads MySQL, MariaDB, PostgreSQL and SQL Server dumps, translating vendor types and keys into a working schema",
      "Isolates every open file in its own database via a per-workspace DataSource, created lazily and cached",
      "Exports to six SQL dialects, Mermaid and DBML; includes an AI schema assistant that sees structure, never data",
      "81 JUnit 5 / MockMvc tests and path-filtered GitHub Actions CI/CD deploying to Azure",
    ],
    href: "https://github.com/Srivatsa-Nayak/db-viewer",
    live: "https://db-viewer-ui-srivatsa.azurewebsites.net",
    stack: ["Java 17", "Spring Boot", "JdbcTemplate", "SQLite / MySQL", "Next.js", "TypeScript", "React Flow"],
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
    title: "Route Check — Flight Navigation",
    tagline: "Weather-aware route safety and rerouting · Finalist, Airbus Aerothon 6.0",
    description:
      "A flight-planning tool that checks wind and visibility at the departure airport, every city along the route and the destination, then returns a go / hold / reroute / divert verdict. When a route is unsafe, it builds a graph of nearby airports using only legs within weather limits and finds the shortest safe alternate with Dijkstra's algorithm.",
    highlights: [
      "Express REST API aggregating weather, airport and fuel-burn data from five external services",
      "Mock mode with built-in demo data so the full stack runs without API keys",
      "Containerised frontend, backend and MySQL; Helm chart deploys the stack to OpenShift",
      "GitHub Actions pipeline publishes versioned images and the Helm chart to GHCR",
    ],
    href: "https://github.com/Srivatsa-Nayak/Aerothon-6.0",
    stack: ["React", "Node.js", "Express", "MySQL", "Leaflet", "Docker", "Helm", "OpenShift"],
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
      "A full-stack blogging platform where visitors read posts, registered users comment, and administrators manage posts and categories. The Spring Boot API is secured with stateless JWT authentication and role-based access control, and is documented end to end with OpenAPI.",
    highlights: [
      "Versioned /api/v1 endpoints with pagination, sorting, Bean Validation and consistent error responses",
      "Spring Security + JWT with ROLE_USER / ROLE_ADMIN authorisation enforced per endpoint",
      "Runs on embedded H2 out of the box, or MySQL via Spring profiles and Docker Compose",
      "Next.js frontend proxies /api to Spring Boot, so no CORS configuration is required",
    ],
    href: "https://github.com/Srivatsa-Nayak/springboot-restful-webservices",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "JPA / Hibernate", "MySQL", "Next.js", "Docker"],
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
