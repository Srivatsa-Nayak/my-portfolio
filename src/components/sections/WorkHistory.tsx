"use client";
import { timeline } from "@/constants/timeline";
import React from "react";
import { Paragraph } from "@/components/ui/Paragraph";
import { Heading } from "@/components/ui/Heading";
import { IconCircleCheckFilled, IconMapPin } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

export const WorkHistory = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge("relative pl-7 md:pl-8", className)}>
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-neutral-700" />
      {timeline.map((item, index) => (
        <div className="relative pb-14 last:pb-0" key={`timeline-${index}`}>
          <span className="absolute -left-7 md:-left-8 top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-neutral-800" />
          <span className="inline-block text-xs text-emerald-400 bg-neutral-900 border border-neutral-700 rounded px-2 py-1 mb-3">
            {item.date}
          </span>
          <div className="space-y-1.5">
            <Heading
              as="h5"
              className="text-lg md:text-lg lg:text-lg text-emerald-500"
            >
              {item.company}
            </Heading>
            <Paragraph className="text-base md:text-base lg:text-base font-semibold">
              {item.title}
            </Paragraph>
            <Paragraph className="text-sm md:text-sm lg:text-sm flex items-center gap-1.5">
              <IconMapPin className="h-3.5 w-3.5 flex-shrink-0" />
              {item.location}
            </Paragraph>
          </div>

          <div className="mt-4">
            {item.responsibilities.map((responsibility) => (
              <Step key={responsibility}>{responsibility}</Step>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex space-x-1 items-start my-2">
      <IconCircleCheckFilled className="h-3 w-3 mt-1 text-neutral-300" />
      <Paragraph className="text-sm md:text-sm lg:text-sm">
        {children}
      </Paragraph>
    </div>
  );
};
