export const timeline = [
  {
    company: "CloudFrame Inc.",
    title: "Software Engineer",
    date: "Jul 2023 – Present",
    current: true,
    location: "Bangalore, Karnataka",
    summary:
      "CloudFrame builds tooling that modernises mainframe COBOL applications into Java. As a Software Engineer, I design and build the Java/Spring Boot services behind that work — improving performance on large mainframe data sets, automating migrations, and deploying and monitoring applications on Kubernetes.",
    responsibilities: [
      {
        title: "Mainframe file comparison at scale",
        description:
          "Built a comparison utility for EBCDIC mainframe files from scratch. Instead of loading entire files into memory, it reads them page by page as the user scrolls, so multi-gigabyte files can be compared reliably. This cut the memory footprint by 95%, and comparisons that previously timed out now complete.",
      },
      {
        title: "Multi-threaded VSAM processing",
        description:
          "Re-architected VSAM-based applications from a single-threaded to a multi-threaded model so that independent requests are processed in parallel, increasing throughput by 35%.",
      },
      {
        title: "Automated Spring Batch migration",
        description:
          "Designed a Spring Boot utility that automates the migration of Spring Batch jobs into microservices. Applied to more than 10 jobs, it reduced manual migration effort by 60% and shortened release cycles.",
      },
      {
        title: "Self-service sandbox platform",
        description:
          "Architected a WordPress sandbox application backed by REST APIs that gives customers secure, self-service access to product environments, reducing onboarding friction.",
      },
      {
        title: "Build-time DTO generation",
        description:
          "Researched and built a utility that converts serialized DTOs into compile-time DTOs, along with a Maven POM property that recalculates record lengths at build time whenever fields are added, removed or changed — removing a manual update step.",
      },
      {
        title: "Kubernetes deployment and observability",
        description:
          "Containerised a CICS-based Spring application and deployed it on Kubernetes, with Splunk for centralised logging and Prometheus/Grafana dashboards for metrics. This reduced mean time to debug and enabled proactive incident detection.",
      },
      {
        title: "Release quality",
        description:
          "Proactively identified and resolved defects in the code migration process, contributing to more reliable releases and fewer rollbacks.",
      },
    ],
  },
  {
    company: "CloudFrame Inc.",
    title: "Software Engineer Intern",
    date: "Feb 2023 – Jun 2023",
    current: false,
    location: "Bangalore, Karnataka",
    summary:
      "Joined CloudFrame's engineering team as an intern, building backend services and internal tools that help developers work faster.",
    responsibilities: [
      {
        title: "Internal tooling services",
        description:
          "Developed and maintained Java/Spring Boot backend services that automate internal tooling and support developer productivity workflows.",
      },
      {
        title: "Code analysis tool",
        description:
          "Built a full-stack text manipulation tool (React + Spring Boot) that automates parts of code analysis, significantly reducing the time needed to identify issues across projects.",
      },
    ],
  },
];
