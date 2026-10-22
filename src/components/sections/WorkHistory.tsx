import { timeline } from "@/constants/timeline";
import React from "react";
import { IconMapPin } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

// Roles drawn like stations on a route line: the current role gets the green
// "go" marker, earlier ones the neutral one.
export const WorkHistory = ({ className }: { className?: string }) => {
  return (
    <ol className={twMerge("relative m-0 p-0 list-none", className)}>
      {timeline.map((item, index) => (
        <li
          key={`timeline-${index}`}
          className="relative pl-10 sm:pl-12 pb-12 last:pb-0"
        >
          {index < timeline.length - 1 && (
            <span
              className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-magenta"
              aria-hidden="true"
            />
          )}
          <span
            className={twMerge(
              "absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-sheet",
              item.current ? "border-go" : "border-ink-soft"
            )}
            aria-hidden="true"
          >
            <span
              className={twMerge(
                "h-2.5 w-2.5 rounded-full",
                item.current ? "bg-go" : "bg-ink-soft"
              )}
            />
          </span>

          <div className="panel">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <div>
                <p className="strip-label">{item.company}</p>
                <h3 className="text-2xl font-bold mt-0.5">{item.title}</h3>
              </div>
              <div className="flex flex-col sm:items-end gap-0.5 text-sm text-ink-soft num">
                <span className="flex items-center gap-2 font-display font-semibold text-sm text-ink">
                  {item.current && (
                    <span className="inline-flex items-center gap-1.5 text-go">
                      <span className="h-2 w-2 rounded-full bg-go" />
                      Current
                    </span>
                  )}
                  {item.date}
                </span>
                <span className="flex items-center gap-1">
                  <IconMapPin className="h-3.5 w-3.5 flex-shrink-0" />
                  {item.location}
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">{item.summary}</p>

            <ul className="mt-4 max-w-3xl space-y-3 list-none p-0 border-t pt-4">
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility.title}>
                  <span className="font-display font-semibold text-base text-ink">
                    {responsibility.title}
                  </span>
                  <p className="text-sm leading-relaxed text-ink-soft">{responsibility.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
};
