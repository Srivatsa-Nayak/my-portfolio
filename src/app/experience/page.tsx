import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Highlight } from "@/components/ui/Highlight";
import { Paragraph } from "@/components/ui/Paragraph";
import { WorkHistory } from "@/components/sections/WorkHistory";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        A timeline of the teams I&apos;ve worked with and the{" "}
        <Highlight>impact I&apos;ve driven</Highlight> along the way, from
        early-career roles to my current position.
      </Paragraph>
      <WorkHistory className="mt-14" />
    </Container>
  );
}
