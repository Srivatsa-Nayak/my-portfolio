import React from "react";

const CELLS = [
  { label: "Role", value: "Software Engineer" },
  { label: "Company", value: "CloudFrame Inc." },
  { label: "Based in", value: "Bangalore, IN" },
  { label: "Experience", value: "3+ years" },
];

// The profile summary, laid out as a flight progress strip; the green holder
// band reads as "cleared", matching the status cell on the right.
export const ProfileStrip = () => {
  return (
    <div className="strip flex-col md:flex-row">
      <div
        className="strip-band h-2 w-full md:h-auto md:w-3 bg-go"
        aria-hidden="true"
      />
      <dl className="grid flex-1 grid-cols-2 md:grid-cols-[1.35fr_1.2fr_1.1fr_0.9fr_1.4fr] m-0">
        {CELLS.map((cell, idx) => (
          <div
            key={cell.label}
            className={`strip-cell border-b md:border-b-0 md:border-r ${
              idx % 2 === 0 ? "border-r" : ""
            }`}
          >
            <dt className="strip-label">{cell.label}</dt>
            <dd className="m-0 font-display font-semibold text-base lg:text-lg text-ink">
              {cell.value}
            </dd>
          </div>
        ))}
        <div className="strip-cell col-span-2 md:col-span-1">
          <dt className="strip-label">Status</dt>
          <dd className="m-0 flex items-center gap-2 font-display font-semibold text-sm text-go">
            <span className="h-2.5 w-2.5 rounded-full bg-go" aria-hidden="true" />
            Open to collaborations
          </dd>
        </div>
      </dl>
    </div>
  );
};
