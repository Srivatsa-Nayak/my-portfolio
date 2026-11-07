import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Highlight } from "@/components/ui/Highlight";
import { Paragraph } from "@/components/ui/Paragraph";
import { TechStack } from "@/components/sections/TechStack";
import { Products } from "@/components/sections/Products";
import { WorkHistory } from "@/components/sections/WorkHistory";
import About from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { ProfileStrip } from "@/components/sections/ProfileStrip";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";

const SectionHeader = ({
  title,
  intro,
}: {
  title: string;
  intro?: React.ReactNode;
}) => (
  <div className="mb-10">
    <Heading as="h2">{title}</Heading>
    {intro && <Paragraph className="mt-3 max-w-2xl">{intro}</Paragraph>}
  </div>
);

export default function Home() {
  return (
    <Container>
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
          <Paragraph className="max-w-2xl mt-5">
            Software engineer at CloudFrame with 3+ years in{" "}
            <Highlight>Java and Spring Boot</Highlight>. I build microservices
            and the CI/CD, container and monitoring setup that keeps them
            running.
          </Paragraph>

          <div className="mt-8">
            <ProfileStrip />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View projects
              <IconArrowRight className="h-5 w-5" />
            </a>
            <a href="#contact" className="btn-secondary py-3 text-base">
              Get in touch
            </a>
          </div>

          <TechStack />
        </section>

        <section id="about" className="border-t pt-16">
          <SectionHeader title="About Me" />
          <About />
        </section>

        <section id="projects" className="border-t pt-16">
          <SectionHeader
            title="Projects"
            intro="Side projects I built end to end, from database to UI."
          />
          <Products />
        </section>

        <section id="experience" className="border-t pt-16">
          <SectionHeader title="Experience" />
          <WorkHistory />
        </section>

        <section id="contact" className="border-t pt-16">
          <SectionHeader
            title="Contact Me"
            intro="I'm open to backend and full-stack roles. Send a message below and I usually reply within two days."
          />
          <Contact />
        </section>
      </div>
    </Container>
  );
}
