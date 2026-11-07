import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ActiveSectionProvider } from "@/components/layout/ActiveSectionProvider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
});

const SITE_URL = "https://srivatsa-portfolio.vercel.app";
const TITLE = "Srivatsa Nayak - Software Engineer";
const DESCRIPTION =
  "Srivatsa Nayak — Software Engineer building cloud-native backend systems with Java, Spring Boot, microservices and Kubernetes.";

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
      <body className={twMerge(jetbrainsMono.variable)}>
        <ActiveSectionProvider>
          <Navbar />
          {children}
          <Footer />
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
