import React from "react";

import { twMerge } from "tailwind-merge";

const PROMPT_PREFIX: Partial<Record<keyof JSX.IntrinsicElements, string>> = {
  h1: "$",
  h2: "#",
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
  const prefix = PROMPT_PREFIX[Tag];

  return (
    <Tag
      className={twMerge(
        "text-base md:text-xl lg:text-4xl font-bold text-neutral-100",
        className
      )}
    >
      {prefix && (
        <span className="text-emerald-500 drop-shadow-[0_0_6px_rgba(52,211,153,0.35)] mr-2 select-none">
          {prefix}
        </span>
      )}
      {children}
    </Tag>
  );
};
