import { Paragraph } from "@/components/ui/Paragraph";

export default function About() {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:gap-12">
      <div className="space-y-4">
        <Paragraph>
          I&apos;m a backend-focused Software Engineer with 3+ years of
          experience designing and building cloud-native applications in Java
          and Spring Boot. At CloudFrame, much of my work sits where mainframe
          systems meet modern Java — EBCDIC data, VSAM- and CICS-based
          applications, and Spring Batch workloads moving to microservices —
          where performance engineering and careful migration matter equally.
        </Paragraph>
        <Paragraph>
          I care about code quality and test-driven development, and about the
          operational side of software: containerising services, running them
          on Kubernetes and OpenShift, and making them observable with
          Prometheus, Grafana and Splunk so issues are caught before users
          notice them.
        </Paragraph>
        <Paragraph>
          Outside of work, I build full-stack side projects to explore new
          problems end to end — from a schema visualizer backed by a live
          database to a weather-aware flight routing tool that reached the
          finals of Airbus Aerothon. I&apos;m open to backend and full-stack
          roles and collaborations.
        </Paragraph>
      </div>

      <section className="panel self-start" aria-label="Education">
        <p className="strip-label">Education</p>
        <h3 className="text-xl font-bold mt-1">B.E., Information Science</h3>
        <p className="font-medium mt-1">
          Sahyadri College of Engineering and Management
        </p>
        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm num m-0">
          <dt className="text-ink-soft">Period</dt>
          <dd className="m-0">Aug 2019 – May 2023</dd>
          <dt className="text-ink-soft">CGPA</dt>
          <dd className="m-0">8.44 / 10</dd>
        </dl>
      </section>
    </div>
  );
}
