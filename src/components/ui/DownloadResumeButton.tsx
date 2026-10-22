import React from "react";
import { twMerge } from "tailwind-merge";
import { IconDownload } from "@tabler/icons-react";

export const DownloadResumeButton = ({ className }: { className?: string }) => {
  return (
    <a
      href="/Resume_Srivatsa_Nayak.pdf"
      download
      className={twMerge("btn-secondary py-1.5", className)}
    >
      <IconDownload className="h-4 w-4" />
      Résumé
    </a>
  );
};
