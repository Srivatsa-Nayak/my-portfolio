import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Highlight } from "@/components/ui/Highlight";
import { Paragraph } from "@/components/ui/Paragraph";
import { Reveal } from "@/components/ui/Reveal";
import { TechStack } from "@/components/sections/TechStack";
import { Products } from "@/components/sections/Products";
import { WorkHistory } from "@/components/sections/WorkHistory";
import About from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { ImpactStrip } from "@/components/sections/ImpactStrip";
import Image from "next/image";
import type { Metadata } from "next";
import { IconArrowRight } from "@tabler/icons-react";
import { SITE_URL } from "@/constants/site";
import { socials } from "@/constants/socials";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Structured data so search engines can show a profile card.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Srivatsa Nayak",
  url: SITE_URL,
  image: `${SITE_URL}/images/gallery/pic5.jpeg`,
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: "CloudFrame Inc." },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "IN",
  },
  knowsAbout: ["Java", "Spring Boot", "Microservices", "Kubernetes", "Mainframe modernisation"],
  sameAs: socials.map((link) => link.href),
};

const SectionHeader = ({
  title,
  intro,
}: {
  title: string;
  intro?: React.ReactNode;
}) => (
  <div className="mb-10">
    <Heading as="h2">{title}</Heading>
    {intro && <Paragraph className="mt-3">{intro}</Paragraph>}
  </div>
);

export default function Home() {
  return (
    <Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="space-y-20 md:space-y-24">
        <section id="home">
          {/* Navbar watches this block: it shows the name only once this has scrolled away. */}
          <div id="hero-identity" className="flex items-center gap-4">
            <Image
              src="/images/gallery/pic5.jpeg"
              alt="Srivatsa Nayak"
              width={64}
              height={64}
              priority
              className="h-12 w-12 sm:h-16 sm:w-16 rounded-full object-cover object-top ring-4 ring-sheet shadow-sm flex-shrink-0"
            />
            <p className="font-display font-semibold text-base sm:text-lg text-ink">
              Srivatsa Nayak
            </p>
          </div>
          <Heading className="mt-6 max-w-3xl text-3xl sm:text-4xl lg:text-5xl">
            I build Java backends that bring mainframe workloads into the cloud.
          </Heading>
          <Paragraph className="mt-5 text-lg">
            Software engineer at CloudFrame with 3+ years in{" "}
            <Highlight>Java and Spring Boot</Highlight>. I build microservices
            and the CI/CD, container and monitoring setup that keeps them
            running.
          </Paragraph>
          <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-sm">
            <span className="flex items-center gap-2 font-semibold text-go">
              <span className="h-2.5 w-2.5 rounded-full bg-go" aria-hidden="true" />
              Open to backend and full-stack roles
            </span>
            {/* On phones this wraps to its own line, so the separator is dropped. */}
            <span className="text-ink-soft">
              <span className="hidden sm:inline" aria-hidden="true">· </span>
              Bangalore, India
            </span>
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
            <a href="#projects" className="btn-primary px-3 text-sm sm:px-5 sm:text-base">
              View projects
              <IconArrowRight className="h-5 w-5" />
            </a>
            <a href="#contact" className="btn-secondary px-3 py-3 text-sm sm:px-5 sm:text-base">
              Get in touch
            </a>
          </div>

          <div className="mt-10">
            <ImpactStrip />
          </div>
        </section>

        <section id="projects" className="border-t pt-16">
          <Reveal>
            <SectionHeader
              title="Projects"
              intro="Side projects I built end to end, from database to UI."
            />
            <Products />
          </Reveal>
        </section>

        <section id="experience" className="border-t pt-16">
          <Reveal>
            <SectionHeader title="Experience" />
            <WorkHistory />
          </Reveal>
        </section>

        <section id="about" className="border-t pt-16">
          <Reveal>
            <SectionHeader title="About Me" />
            <About />
            <TechStack />
          </Reveal>
        </section>

        <section id="contact" className="border-t pt-16">
          <Reveal>
            <SectionHeader
              title="Contact Me"
              intro="I'm open to backend and full-stack roles. Send a message below and I usually reply within two days."
            />
            <Contact />
          </Reveal>
        </section>
      </div>
    </Container>
  );
}
