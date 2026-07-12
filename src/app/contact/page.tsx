import { Contact } from "@/components/sections/Contact";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Srivatsa Nayak",
  description:
    "I am a Software Engineer that loves building productsand microservies that are well optimized",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Have a project in mind, a role you think I&apos;d be a good fit for, or
        just want to say hi? Drop me a message below and I&apos;ll get back to
        you as soon as I can.
      </Paragraph>
      <Contact />
    </Container>
  );
}
