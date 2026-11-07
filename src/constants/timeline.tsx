export const timeline = [
  {
    company: "CloudFrame Inc.",
    title: "Software Engineer",
    date: "Jul 2023 – Present",
    current: true,
    location: "Bangalore, India",
    summary:
      "CloudFrame builds tooling that modernises mainframe COBOL applications into Java. As a Software Engineer, I design and build the Java/Spring Boot services behind that work — improving performance on large mainframe data sets, automating migrations, and deploying and monitoring applications on Kubernetes.",
    // Titles are topics; each description leads with what was done and ends
    // with the result. The first three are kept to one line because the hero
    // results strip (sections/ImpactStrip.tsx) already explains them.
    responsibilities: [
      {
        title: "Mainframe file comparison at scale",
        description:
          "Built an EBCDIC file comparison utility from scratch that pages through multi-gigabyte files instead of loading them whole: 95% less memory, and comparisons that timed out now complete.",
      },
      {
        title: "Multi-threaded VSAM processing",
        description:
          "Re-architected VSAM-based applications from single- to multi-threaded so independent requests run in parallel: 35% more throughput.",
      },
      {
        title: "Automated Spring Batch migration",
        description:
          "Designed a Spring Boot utility that migrates Spring Batch jobs to microservices, applied to 10+ jobs: 60% less manual migration effort and shorter release cycles.",
      },
      {
        title: "Kubernetes deployment and observability",
        description:
          "Containerised a CICS-based Spring application and deployed it on Kubernetes, with Splunk for centralised logging and Prometheus/Grafana dashboards for metrics. This reduced mean time to debug and enabled proactive incident detection.",
      },
      {
        title: "Self-service sandbox platform",
        description:
          "Architected a WordPress sandbox application backed by REST APIs that gives new customers secure, self-service access to product environments, so they can try the product on their own from day one.",
      },
      {
        title: "Build-time record lengths",
        description:
          "Researched and built a utility that converts serialized DTOs into compile-time DTOs, along with a Maven POM property that recalculates record lengths at build time whenever fields change — removing a manual step from every record-layout change.",
      },
    ],
  },
  {
    company: "CloudFrame Inc.",
    title: "Software Engineer Intern",
    date: "Feb 2023 – Jun 2023",
    current: false,
    location: "Bangalore, India",
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
          "Built a full-stack text manipulation tool (React + Spring Boot) that automates parts of code analysis. Issues it finds are fixed automatically instead of by hand, saving about half a day on every analysis.",
      },
    ],
  },
];
