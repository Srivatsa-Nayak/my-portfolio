import React from "react";

const IMPACT = [
  { value: "95%", label: "less memory comparing multi-GB mainframe files" },
  { value: "35%", label: "more throughput from multi-threaded VSAM processing" },
  { value: "60%", label: "less manual effort migrating Spring Batch jobs" },
];

// The three headline results from CloudFrame, laid out as a flight progress
// strip. Details sit in the Experience section.
export const ImpactStrip = () => {
  return (
    <div className="strip flex-col sm:flex-row">
      <div
        className="strip-band h-2 w-full sm:h-auto sm:w-3 bg-go"
        aria-hidden="true"
      />
      <dl className="grid flex-1 grid-cols-1 sm:grid-cols-3 m-0">
        {IMPACT.map((item, idx) => (
          <div
            key={item.value}
            className={`strip-cell justify-start py-4 ${
              idx < IMPACT.length - 1 ? "border-b sm:border-b-0 sm:border-r" : ""
            }`}
          >
            <dt className="order-2 text-sm leading-snug text-ink-soft">
              {item.label}
            </dt>
            <dd className="order-1 m-0 font-display font-bold text-3xl sm:text-4xl text-ink num">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
