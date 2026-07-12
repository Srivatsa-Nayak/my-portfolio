import React from "react";
import { twMerge } from "tailwind-merge";
import { IconDownload } from "@tabler/icons-react";

export const DownloadResumeButton = ({ className }: { className?: string }) => {
  return (
    <a
      href="/Resume_Srivatsa_Nayak.pdf"
      download
      className={twMerge(
        "no-underline group cursor-pointer relative flex items-center justify-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 py-2 px-4 text-xs font-semibold text-neutral-300 transition duration-200 hover:border-emerald-500 hover:text-emerald-400 hover:bg-neutral-800",
        className
      )}
    >
      <span className="text-emerald-500">$</span>
      <span>download resume</span>
      <IconDownload className="h-3.5 w-3.5" />
    </a>
  );
};
