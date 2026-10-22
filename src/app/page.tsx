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
          <div id="hero-identity" className="flex items-center gap-5">
            <Image
              src="/images/gallery/pic5.jpeg"
              alt="Srivatsa Nayak"
              width={88}
              height={88}
              priority
              className="h-16 w-16 sm:h-[88px] sm:w-[88px] rounded-full object-cover object-top ring-4 ring-sheet shadow-sm flex-shrink-0"
            />
            <Heading className="max-w-2xl">Hi, I&apos;m Srivatsa Nayak</Heading>
          </div>
          <Paragraph className="max-w-2xl mt-5">
            Software Engineer with 3+ years of experience building{" "}
            <Highlight>cloud-native backend systems</Highlight> in Java and
            Spring Boot — microservices, REST APIs, and the CI/CD, container
            and observability tooling that keeps them reliable in production.
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
            intro="Personal projects I've designed, built and deployed end to end, from the database and API through to the UI."
          />
          <Products />
        </section>

        <section id="experience" className="border-t pt-16">
          <SectionHeader
            title="Experience"
            intro="Roles I've held and the impact I've delivered."
          />
          <WorkHistory />
        </section>

        <section id="contact" className="border-t pt-16">
          <SectionHeader
            title="Contact Me"
            intro="I'm open to backend and full-stack opportunities and collaborations. Send a message below and I'll respond as soon as I can."
          />
          <Contact />
        </section>
      </div>
    </Container>
  );
}
