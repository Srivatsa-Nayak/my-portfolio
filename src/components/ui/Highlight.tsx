import React from "react";

import { twMerge } from "tailwind-merge";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span
      className={twMerge(
        "bg-neutral-800/70 border border-neutral-700 rounded px-1.5 py-0.5 text-emerald-400",
        className
      )}
    >
      {children}
    </span>
  );
};
