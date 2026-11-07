import Image from "next/image";
import React from "react";
import { Heading } from "@/components/ui/Heading";
import { skills } from "@/constants/skills";

// Skills as compact, grouped chips (a small logo plus the name).
export const TechStack = () => {
  return (
    <div className="mt-14">
      <Heading as="h3" className="mb-4">
        Skills
      </Heading>
      <dl className="m-0 bg-sheet border rounded-lg divide-y">
        {skills.map((group) => (
          <div
            key={group.group}
            className="grid grid-cols-1 sm:grid-cols-[10rem_minmax(0,1fr)] gap-2 sm:gap-6 sm:items-center px-5 py-3"
          >
            <dt className="strip-label">{group.group}</dt>
            <dd className="m-0 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item.title} className="chip gap-1.5 py-1 text-sm text-ink">
                  <Image
                    src={item.src}
                    width={16}
                    height={16}
                    alt=""
                    className="h-4 w-4 object-contain"
                  />
                  {item.title}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
