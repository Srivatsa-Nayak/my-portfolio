import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ActiveSectionProvider } from "@/components/layout/ActiveSectionProvider";
import { SITE_URL } from "@/constants/site";

// Fonts are self-hosted (Latin subset, variable weight; licences in
// ./fonts/OFL-*.txt). next/font/google in Next 13.4 downloads them on every
// dev start and build, and fails at random when Google returns font URLs
// without a file extension.
const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Variable-latin.woff2",
  weight: "400 800",
  style: "normal",
  display: "swap",
  variable: "--font-jetbrains-mono",
  fallback: ["ui-monospace", "Menlo", "Consolas", "monospace"],
  // The Arial-based metric override only suits proportional fonts.
  adjustFontFallback: false,
});

// Body text; JetBrains Mono stays on headings, labels, tags and buttons.
const plexSans = localFont({
  src: "./fonts/IBMPlexSans-Variable-latin.woff2",
  weight: "400 700",
  style: "normal",
  display: "swap",
  variable: "--font-plex-sans",
  fallback: ["system-ui", "Segoe UI", "Arial", "sans-serif"],
});

// Matches the hero positioning; shown as the browser tab title, in search
// results and on social link previews.
const TITLE = "Srivatsa Nayak — Java Backend Engineer";
const DESCRIPTION =
  "I build Java backends that bring mainframe workloads into the cloud: Spring Boot microservices, Kubernetes and CI/CD. Software engineer at CloudFrame, Bangalore.";

// The preview image itself comes from `opengraph-image.tsx`; Next.js adds the
// og:image tags, and X/Twitter falls back to og:image for the large card.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Srivatsa Nayak",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge(jetbrainsMono.variable, plexSans.variable)}>
        <ActiveSectionProvider>
          <Navbar />
          {children}
          <Footer />
        </ActiveSectionProvider>
        {/* Vercel Web Analytics: cookieless page views, only reported on
            Vercel deployments once Analytics is enabled for the project. */}
        <Analytics />
      </body>
    </html>
  );
}
