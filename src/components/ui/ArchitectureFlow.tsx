import React from "react";
import { IconArrowDown, IconArrowRight } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";
import { ArchNode } from "@/types/products";

// A small left-to-right box diagram (top-to-bottom on phones). Each tier is
// one column; a tier with several nodes stacks them as parallel dependencies.
export const ArchitectureFlow = ({
  tiers,
  caption,
  size = "sm",
  className,
}: {
  tiers: ArchNode[][];
  caption?: string;
  size?: "sm" | "lg";
  className?: string;
}) => {
  const large = size === "lg";

  return (
    <figure className={twMerge("m-0", className)}>
      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2">
        {tiers.map((tier, tierIdx) => (
          <React.Fragment key={tierIdx}>
            {tierIdx > 0 && (
              <span
                className="flex justify-center text-magenta flex-shrink-0"
                aria-hidden="true"
              >
                <IconArrowDown className="h-4 w-4 sm:hidden" />
                <IconArrowRight className="hidden sm:block h-4 w-4" />
              </span>
            )}
            <div className="flex flex-1 min-w-0 flex-col gap-1.5">
              {tier.map((node) => (
                <div
                  key={node.label}
                  className={twMerge(
                    "rounded-md border bg-paper px-3 py-2",
                    large && "bg-sheet px-4 py-3",
                    node.external && "border-dashed border-ink-soft"
                  )}
                >
                  <p
                    className={twMerge(
                      "font-display font-semibold text-ink leading-tight",
                      large ? "text-base" : "text-sm"
                    )}
                  >
                    {node.label}
                  </p>
                  {node.detail && (
                    <p
                      className={twMerge(
                        "text-ink-soft leading-snug mt-0.5",
                        large ? "text-sm" : "text-xs"
                      )}
                    >
                      {node.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
      {caption && <figcaption className="strip-label mt-2">{caption}</figcaption>}
    </figure>
  );
};
