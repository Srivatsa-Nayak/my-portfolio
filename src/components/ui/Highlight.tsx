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
        "font-medium text-ink underline decoration-magenta decoration-2 underline-offset-4",
        className
      )}
    >
      {children}
    </span>
  );
};
