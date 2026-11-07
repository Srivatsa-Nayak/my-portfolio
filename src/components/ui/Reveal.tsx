"use client";
import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

// Fades a block in (200ms) the first time it scrolls into view. Content is
// rendered visible; it is only hidden after hydration, and only when it
// starts below the fold and the visitor hasn't asked for reduced motion.
export const Reveal = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("reveal-pending");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.remove("reveal-pending");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -5% 0px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      el.classList.remove("reveal-pending");
    };
  }, []);

  return (
    <div ref={ref} className={twMerge("reveal", className)}>
      {children}
    </div>
  );
};
