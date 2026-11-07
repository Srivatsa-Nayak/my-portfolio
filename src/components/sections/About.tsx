import { Paragraph } from "@/components/ui/Paragraph";

export default function About() {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:gap-12">
      <div className="space-y-4">
        {/* The hero and results strip already cover role, years and the
            mainframe results, so this section adds background and evidence
            rather than repeating them. */}
        <Paragraph>
          I joined CloudFrame as an intern in February 2023, during the final
          semester of my B.E. in Information Science, and stayed on full time.
          Moving decades-old systems onto modern Java has been the thread
          running through that work ever since.
        </Paragraph>
        <Paragraph>
          My side projects ship with tests and CI: 171 backend tests on SQL
          Visualizer, 86 on Resume Builder, and GitHub Actions pipelines that
          deploy SQL Visualizer to Azure and publish Route Check&apos;s
          containers. At work I run services on Kubernetes and OpenShift,
          monitored with Prometheus, Grafana and Splunk.
        </Paragraph>
        <Paragraph>
          I&apos;m looking for a backend or full-stack role where I can keep
          building Java services and the infrastructure that keeps them
          running.
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
