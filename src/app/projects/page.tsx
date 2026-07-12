import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Products } from "@/components/sections/Products";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Srivatsa Nayak",
  description:
    "I am a Software Engineer that loves building productsand microservies that are well optimized",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
        {" "}
        What I&apos;ve worked on
      </Heading>

      <Products />
    </Container>
  );
}
