import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/layout/Footer";
import { TerminalWindow } from "@/components/layout/TerminalWindow";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Srivatsa Nayak - Software Engineer",
  description:
    "I am a Software Engineer that loves building productsand microservies that are well optimized",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          jetbrainsMono.variable,
          "font-mono antialiased h-screen overflow-hidden bg-neutral-950 text-neutral-200"
        )}
      >
        <div className="h-screen w-screen p-0 lg:p-3">
          <TerminalWindow>
            {children}
            <Footer />
          </TerminalWindow>
        </div>
      </body>
    </html>
  );
}
