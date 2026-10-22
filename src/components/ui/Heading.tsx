import React from "react";

import { twMerge } from "tailwind-merge";

const SIZES: Partial<Record<keyof JSX.IntrinsicElements, string>> = {
  h1: "text-3xl sm:text-5xl",
  h2: "text-3xl sm:text-4xl",
  h3: "text-xl sm:text-2xl",
};

export const Heading = ({
  className,
  children,
  as: Tag = "h1",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}) => {
  return (
    <Tag
      className={twMerge(
        "font-display font-bold tracking-tight text-ink",
        SIZES[Tag] ?? "text-lg",
        className
      )}
    >
      {children}
    </Tag>
  );
};
