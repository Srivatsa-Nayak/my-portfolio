"use client";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { EMAIL } from "@/constants/socials";

// A mailto: link opens whatever desktop mail app the visitor's OS defaults to
// (often Outlook on Windows, or nothing useful), so copy the address instead.
export const CopyEmailButton = ({
  className,
  underline = true,
}: {
  className?: string;
  underline?: boolean;
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      // Clipboard access can be blocked (insecure origin, permissions);
      // fall back to the mail app rather than doing nothing.
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      title="Copy email address"
      className={twMerge(
        "group inline-flex items-center gap-1.5 text-chart hover:text-ink transition-colors",
        className
      )}
    >
      <span
        className={
          underline
            ? "underline underline-offset-2"
            : "group-hover:underline underline-offset-2"
        }
      >
        {EMAIL}
      </span>
      {copied ? (
        <span className="inline-flex items-center gap-1 text-go">
          <IconCheck className="h-3.5 w-3.5" />
          Copied
        </span>
      ) : (
        <IconCopy className="h-3.5 w-3.5" aria-hidden="true" />
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </button>
  );
};
