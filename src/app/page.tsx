import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Srivatsa</Heading>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        About Me
      </Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Software Engineer that loves{" "}
        <Highlight>building products</Highlight> and web apps tthat solve real-world problems with elegance and efficiency.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a software engineer with{" "}
        <Highlight>2 years of experience</Highlight> building scalable microservies
        that are performance optimized and production-ready.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a Driven software engineer with a strong track record in building scalable and reliable products, experienced in both frontend and backend. 
        Adept at modern <Highlight> JavaScript, Java frameworks, DevOps tools, cloud infrastructure</Highlight>, and leading engineering initiatives.
      </Paragraph>
      {/* <Products /> */}
      <TechStack />
    </Container>
  );
}
