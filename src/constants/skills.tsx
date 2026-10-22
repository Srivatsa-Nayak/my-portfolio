export type Skill = {
  title: string;
  src: string;
};

export type SkillGroup = {
  group: string;
  items: Skill[];
};

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    items: [
      { title: "Java", src: "/images/logos/java.svg" },
      { title: "Python", src: "/images/logos/python.svg" },
      { title: "JavaScript", src: "/images/logos/javascript.svg" },
      { title: "TypeScript", src: "/images/logos/typescript.svg" },
    ],
  },
  {
    group: "Frameworks",
    items: [
      { title: "Spring Boot", src: "/images/logos/spring-boot.svg" },
      { title: "Spring Security", src: "/images/logos/spring-security.svg" },
      { title: "JPA / Hibernate", src: "/images/logos/hibernate.svg" },
      { title: "Node.js", src: "/images/logos/nodejs.svg" },
      { title: "React", src: "/images/logos/react.svg" },
      { title: "Next.js", src: "/images/logos/nextjs.svg" },
    ],
  },
  {
    group: "Cloud & CI/CD",
    items: [
      { title: "Docker", src: "/images/logos/docker.svg" },
      { title: "Kubernetes", src: "/images/logos/kubernetes.svg" },
      { title: "OpenShift", src: "/images/logos/openshift.svg" },
      { title: "Helm", src: "/images/logos/helm.svg" },
      { title: "Jenkins", src: "/images/logos/jenkins.svg" },
      { title: "GitHub Actions", src: "/images/logos/github-actions.svg" },
      { title: "Maven", src: "/images/logos/maven.svg" },
      { title: "Git", src: "/images/logos/git.svg" },
    ],
  },
  {
    group: "Observability",
    items: [
      { title: "Prometheus", src: "/images/logos/prometheus.svg" },
      { title: "Grafana", src: "/images/logos/grafana.svg" },
      { title: "Splunk", src: "/images/logos/splunk.svg" },
      { title: "Dynatrace", src: "/images/logos/dynatrace.svg" },
      { title: "SonarQube", src: "/images/logos/sonarqube.svg" },
    ],
  },
  {
    group: "Databases",
    items: [
      { title: "MySQL", src: "/images/logos/mysql.svg" },
      { title: "MongoDB", src: "/images/logos/mongodb.svg" },
      { title: "SQLite", src: "/images/logos/sqlite.svg" },
    ],
  },
];
