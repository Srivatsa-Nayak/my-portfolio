import { Container } from "@/components/layout/Container";
import { Paragraph } from "@/components/ui/Paragraph";
import { ArchitectureFlow } from "@/components/ui/ArchitectureFlow";
import {
  BulletList,
  CaseStudyFigure,
  CaseStudyFooter,
  CaseStudyHeader,
  CaseStudySection,
  CommandBlock,
  NumberedList,
  caseStudyMetadata,
} from "@/components/case-study/CaseStudy";
import { githubProjects } from "@/constants/projects";
import { ArchNode } from "@/types/products";

const PATH = "/projects/route-check";

export const metadata = caseStudyMetadata({
  path: PATH,
  title: "Route Check case study — Srivatsa Nayak",
  description:
    "A weather-aware flight route checker built for Airbus Aerothon 6.0 (finalist): checking conditions along a route and finding the shortest safe alternate with Dijkstra's algorithm.",
});

// Facts on this page come from the project's README
// (github.com/Srivatsa-Nayak/Aerothon-6.0); the role note is from the author.
const project = githubProjects.find((p) => p.caseStudy === PATH)!;

const CHECK_STEPS = [
  {
    title: "Pick an aircraft and a route",
    body: "The user chooses an aircraft and origin and destination airport codes. The backend returns the distance and the known route, which lists the cities each leg passes over.",
  },
  {
    title: "Fetch the weather for every city",
    body: "For each city on the route, the backend calls the weather API and stores the reading in MySQL.",
  },
  {
    title: "Apply the flying limits",
    body: "Each reading is checked against two limits, simplified for the hackathon demo: visibility of at least 1 km and wind of at most 20 km/h. The route is safe only if every city passes.",
  },
];

const REROUTE_STEPS = [
  {
    title: "Find candidate airports",
    body: "Airports within 280 km of the destination become candidate stops.",
  },
  {
    title: "Build a graph of safe legs only",
    body: "Edges are added only for legs whose weather is within limits, using great-circle distances. An unsafe leg simply doesn't exist in the graph.",
  },
  {
    title: "Run Dijkstra",
    body: "Dijkstra's algorithm returns the shortest path through that graph, which by construction is the shortest safe route. The frontend shows it on a map with airport details and fuel estimates.",
  },
];

const ARCHITECTURE: ArchNode[][] = [
  [{ label: "React + Vite", detail: "served by nginx, which proxies /api" }],
  [{ label: "Express API", detail: "weather limits, route graph, Dijkstra" }],
  [
    { label: "MySQL", detail: "6 tables: aircraft, airports, weather, fuel…" },
    { label: "5 external APIs", detail: "weather, airports, distances, fuel", external: true },
  ],
];

const DEPLOYMENT = [
  "Mock mode (the default in containers) answers every external API call from built-in demo data, so the whole stack runs without API keys.",
  "Docker Compose runs the frontend, backend and MySQL as three containers; a Helm chart deploys the same stack to OpenShift or Kubernetes.",
  "A GitHub Actions workflow builds and publishes versioned images and the Helm chart to GitHub Container Registry.",
];

const TRADE_OFFS = [
  "Weather is checked at the cities a route passes over, not continuously along the path between them.",
  "Safety comes down to two fixed thresholds, visibility of 1 km and wind of 20 km/h, simplified for the hackathon demo. Real operating limits depend on the aircraft and the runway, and allow far stronger wind.",
  "The built-in demo data covers South Indian airports only (BLR, MAA, COK, HYD and a few others).",
];

// Each item answers one of the trade-offs above.
const NEXT_STEPS = [
  "Check the weather along the whole path between cities, not only at the cities themselves.",
  "Replace the two fixed thresholds with limits that depend on the aircraft and the runway, such as crosswind limits.",
  "Extend the demo data beyond South Indian airports, so mock mode can show routes anywhere.",
];

export default function RouteCheckCaseStudy() {
  const [verdict, alternate] = project.images;

  return (
    <Container>
      <article className="space-y-14">
        <CaseStudyHeader
          project={project}
          lead="A flight-planning tool that checks the weather at every city a route passes over and, when the route is unsafe, finds the shortest safe alternate with Dijkstra's algorithm. Built for Airbus Aerothon 6.0, where our team reached the finals."
        >
          <div className="panel mt-6 max-w-3xl">
            <p className="strip-label">My role</p>
            <p className="mt-1 text-base leading-relaxed">
              Team project. I owned the backend: the rerouting algorithm, the
              SQL queries behind it, and finding a weather API that returns
              conditions for each city on a selected route. Later I
              containerised the stack and added the OpenShift deployment and CI
              pipeline.
            </p>
          </div>
        </CaseStudyHeader>

        <CaseStudyFigure src={verdict.src} alt={verdict.alt} caption={verdict.caption} priority />

        <CaseStudySection id="problem" title="The problem">
          <Paragraph>
            Before a flight, the question is simple: is the weather within
            limits everywhere along the route — and if it isn&apos;t, what&apos;s
            the shortest route that is? The tool answers both from an aircraft,
            an origin and a destination.
          </Paragraph>
        </CaseStudySection>

        <CaseStudySection id="check" title="Checking a route">
          <NumberedList items={CHECK_STEPS} />
        </CaseStudySection>

        <CaseStudySection id="reroute" title="Finding a safe alternate">
          <Paragraph>
            This is the part I built. Instead of checking candidate routes one by
            one, unsafe legs are left out of the graph entirely, so the shortest
            path the algorithm finds is always a safe one.
          </Paragraph>
          <NumberedList items={REROUTE_STEPS} />
          <CaseStudyFigure
            src={alternate.src}
            alt={alternate.alt}
            caption={alternate.caption}
            wide={false}
          />
        </CaseStudySection>

        <CaseStudySection id="architecture" title="Architecture">
          <div className="panel bg-paper">
            <ArchitectureFlow
              tiers={ARCHITECTURE}
              size="lg"
              caption="Real mode calls weatherapi.com, Amadeus, airportgap.com, RapidAPI airport-info and a flight-fuel API · mock mode uses built-in demo data"
            />
          </div>
        </CaseStudySection>

        <CaseStudySection id="deployment" title="Running it anywhere">
          <BulletList items={DEPLOYMENT} />
        </CaseStudySection>

        <CaseStudySection id="try-it" title="Try it yourself">
          <Paragraph>
            There&apos;s no hosted demo: the whole stack runs on your own
            machine in a few minutes. With Docker installed, clone the repo and
            run:
          </Paragraph>
          <CommandBlock
            label="From the repository root · then open http://localhost:8080"
            lines={[
              { command: "docker compose pull", comment: "get the published images" },
              { command: "docker compose up", comment: "frontend, backend and MySQL" },
              { command: "docker compose down -v", comment: "stop and delete everything" },
            ]}
          />
          <Paragraph>
            Compose starts in mock mode, so no API keys are needed. Try a route
            like IXE to BLR. The database takes about a minute to load on first
            start; refresh if the first request fails.{" "}
            <a
              href={`${project.href}#run-with-docker`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-chart underline underline-offset-4 hover:text-ink"
            >
              Full setup in the README
            </a>
            , including running from source and deploying to OpenShift.
          </Paragraph>
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
