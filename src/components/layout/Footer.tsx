import React from "react";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-sm text-ink-soft flex flex-wrap justify-between gap-x-6 gap-y-2">
        <span>
          © {new Date().getFullYear()} Srivatsa Nayak · Software Engineer,
          Bangalore
        </span>
        <CopyEmailButton className="text-ink-soft" underline={false} />
      </div>
    </footer>
  );
};
