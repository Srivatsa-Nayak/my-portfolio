"use client";
import React, { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { ProjectImage } from "@/types/products";

// The only interactive part of a project card (thumbnail switcher), kept as
// its own client component so the rest of the Projects section renders on the
// server and isn't hydrated.
export const ProjectScreenshots = ({ images }: { images: ProjectImage[] }) => {
  const [active, setActive] = useState(0);
  const current = images[active];

  return (
    <div>
      <figure className="m-0">
        <div className="border rounded-md bg-paper overflow-hidden">
          <Image
            src={current.src}
            alt={current.alt}
            placeholder="blur"
            // Rendered width: left card column on desktop (capped by the
            // max-w-6xl container), else the card minus its padding.
            sizes="(min-width: 1200px) 545px, (min-width: 1024px) 50vw, (min-width: 768px) calc(100vw - 100px), calc(100vw - 72px)"
            className="block w-full h-auto"
          />
        </div>
        <figcaption className="strip-label mt-2">{current.caption}</figcaption>
      </figure>
      {images.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {images.map((image, idx) => (
            <button
              key={image.caption}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`Show screenshot ${idx + 1} of ${images.length}: ${image.caption}`}
              aria-pressed={idx === active}
              className={twMerge(
                "w-20 sm:w-24 overflow-hidden rounded-md border-2 transition",
                idx === active
                  ? "border-ink"
                  : "border-rule opacity-70 hover:opacity-100 hover:border-ink-soft"
              )}
            >
              <Image
                src={image.src}
                alt=""
                sizes="96px"
                className="block w-full h-auto"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
