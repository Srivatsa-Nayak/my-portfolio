import React from "react";

import { twMerge } from "tailwind-merge";

export const Paragraph = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={twMerge("text-sm sm:text-base leading-relaxed text-ink-soft", className)}>
      {children}
    </p>
  );
};
