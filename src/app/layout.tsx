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

export const metadata: Metadata = {
  title: "Srivatsa Nayak - Software Engineer",
  description:
    "Srivatsa Nayak — Software Engineer building cloud-native backend systems with Java, Spring Boot, microservices and Kubernetes.",
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
