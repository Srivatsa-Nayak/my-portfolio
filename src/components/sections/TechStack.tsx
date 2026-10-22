import Image from "next/image";
import React from "react";
import { Heading } from "@/components/ui/Heading";
import { skills } from "@/constants/skills";

export const TechStack = () => {
  return (
    <div className="mt-16">
      <Heading as="h3" className="mb-4">
        Tech Stack
      </Heading>
      <div className="bg-sheet border rounded-lg overflow-hidden divide-y">
        {skills.map((group) => (
          <div
            key={group.group}
            className="grid grid-cols-1 md:grid-cols-[11rem_minmax(0,1fr)] gap-3 md:gap-6 md:items-center px-5 py-4"
          >
            <p className="font-display font-semibold text-base text-ink">
              {group.group}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-4">
              {group.items.map((item) => (
                <div
                  key={item.title}
                  title={item.title}
                  className="flex w-[4.75rem] flex-col items-center gap-1.5"
                >
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg border bg-paper p-2.5 transition-colors hover:border-ink">
                    <Image
                      src={item.src}
                      width={40}
                      height={40}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="text-[11px] leading-tight text-center text-ink-soft">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
