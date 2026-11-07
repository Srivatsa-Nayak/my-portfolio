"use client";
import React, { useId, useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

// A collapsed continuation of a list: `children` are the extra <li> items,
// rendered (hidden) into the HTML so they stay indexable.
export const ShowMore = ({
  count,
  listClassName,
  children,
}: {
  count: number;
  listClassName?: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <>
      <ul id={id} hidden={!open} className={listClassName}>
        {children}
      </ul>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((value) => !value)}
        className="mt-4 inline-flex items-center gap-1.5 font-display font-semibold text-sm text-chart hover:text-ink transition-colors"
      >
        {open ? "Show less" : `Show ${count} more`}
        <IconChevronDown
          className={twMerge("h-4 w-4 transition-transform", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>
    </>
  );
};
