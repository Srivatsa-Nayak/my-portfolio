"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const ActiveSectionContext = createContext<string>("home");

export const useActiveSection = () => useContext(ActiveSectionContext);

export const ActiveSectionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );
    if (sections.length === 0) return;

    // Shrink the observed area to a thin band across the middle of the
    // viewport: the section crossing it is the active one. A ratio threshold
    // would never fire for sections taller than the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { root: null, threshold: 0, rootMargin: "-45% 0px -54% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <ActiveSectionContext.Provider value={active}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
