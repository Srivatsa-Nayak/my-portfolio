import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Metadata } from "next";

import About from "@/components/sections/About";

export const metadata: Metadata = {
  title: "About | Srivatsa Nayak",
  description:
    "I am a Software Engineer that loves building products and microservies that are well optimized",
};

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
    </Container>
  );
}
