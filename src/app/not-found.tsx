import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";

// Shown for any unknown URL (Next.js serves it with a 404 status).
export default function NotFound() {
  return (
    <Container>
      <div className="strip flex-col sm:flex-row max-w-2xl">
        <div className="strip-band h-2 w-full sm:h-auto sm:w-3 bg-hold" aria-hidden="true" />
        <div className="p-6 sm:p-8">
          <p className="strip-label">Error 404</p>
          <Heading className="mt-1 text-3xl sm:text-4xl">Off the chart</Heading>
          <Paragraph className="mt-4">
            There&apos;s nothing at this address. The link may be mistyped, or
            the page may have moved.
          </Paragraph>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/" className="btn-primary border border-transparent px-4 py-2 text-sm">
              <IconArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back home
            </Link>
            <Link href="/#projects" className="btn-secondary">
              See projects
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
