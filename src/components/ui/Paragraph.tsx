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
    <p className={twMerge("max-w-prose text-base leading-relaxed text-ink-soft", className)}>
      {children}
    </p>
  );
};
