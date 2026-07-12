"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";

export const TerminalWindow = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const path = pathname === "/" ? "~" : `~${pathname}`;

  return (
    <div className="h-full w-full flex flex-col bg-neutral-950 border border-neutral-800 lg:rounded-xl overflow-hidden">
      <div className="flex-shrink-0 flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-neutral-800">
        <div className="flex gap-1.5 flex-shrink-0">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>
        <p className="flex-1 text-center text-xs text-neutral-500 truncate pr-6">
          srivatsa@portfolio:{" "}
          <span className="text-neutral-300">{path}</span>
        </p>
      </div>
      <Navbar />
      <div className="flex-1 overflow-y-auto bg-neutral-800">{children}</div>
    </div>
  );
};
