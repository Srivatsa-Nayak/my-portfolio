import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aeronautical-chart palette
        paper: "#EEF3F4",
        sheet: "#FFFFFF",
        ink: { DEFAULT: "#13293D", soft: "#4A5E70" },
        rule: "#C9D6DC",
        magenta: "#B0186A",
        chart: "#1F5F99",
        buff: "#C9A227",
        go: "#2E7D4F",
        hold: "#B4441C",
      },
      // JetBrains Mono everywhere; `display` is kept as the heading token so
      // headings can be given their own face again without touching components.
      fontFamily: {
        display: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
    },
  },
} satisfies Config;

export default config;
