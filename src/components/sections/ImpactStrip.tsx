import React from "react";
import { IconArrowDown } from "@tabler/icons-react";

// Each result reads on its own: the number and what it measures, then what I
// did to get it, in plain words. The full bullets are in constants/timeline.tsx.
const IMPACT = [
  {
    value: "95%",
    metric: "less memory",
    context:
      "I built a tool that compares multi-GB mainframe files page by page instead of loading them whole, so comparisons that used to time out now finish.",
  },
  {
    value: "35%",
    metric: "more throughput",
    context:
      "I re-architected mainframe (VSAM) file processing from single- to multi-threaded, so independent requests run in parallel.",
  },
  {
    value: "60%",
    metric: "less manual work",
    context:
      "I designed a Spring Boot tool that automates moving Spring Batch jobs to microservices, and applied it to 10+ jobs.",
  },
];

// The three headline results from CloudFrame, laid out as a flight progress
// strip, with a pointer to the full details in the Experience section.
export const ImpactStrip = () => {
  return (
    <section aria-labelledby="impact-title">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h2 id="impact-title" className="strip-label">
          Results from my work at CloudFrame
        </h2>
        <a
          href="#experience"
          className="inline-flex items-center gap-1 font-display font-semibold text-sm text-chart hover:text-ink transition-colors"
        >
          Details in Experience
          <IconArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      <div className="strip flex-col sm:flex-row">
        <div
          className="strip-band h-2 w-full sm:h-auto sm:w-3 bg-go"
          aria-hidden="true"
        />
        <ul className="grid flex-1 grid-cols-1 sm:grid-cols-3 m-0 p-0 list-none">
          {IMPACT.map((item, idx) => (
            <li
              key={item.value}
              className={`strip-cell justify-start gap-2 py-4 ${
                idx < IMPACT.length - 1 ? "border-b sm:border-b-0 sm:border-r" : ""
              }`}
            >
              <p className="flex flex-wrap items-baseline gap-x-2 text-ink">
                <span className="font-display font-bold text-3xl sm:text-4xl num">
                  {item.value}
                </span>
                <span className="font-display font-semibold text-base">
                  {item.metric}
                </span>
              </p>
              <p className="text-sm leading-relaxed text-ink-soft">{item.context}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
