"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const ActiveSectionContext = createContext<string>("home");

export const useActiveSection = () => useContext(ActiveSectionContext);

// A section becomes active once its top passes this line (fraction of the
// viewport height from the top). It sits below the sticky header and the
// section's scroll-margin, so a nav click always lands on the clicked section.
const ACTIVATION_LINE = 0.3;

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

    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;

      // The last section is often shorter than the screen, so its top may
      // never reach the line: at the bottom of the page, it is the active one.
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
        setActive(sections[sections.length - 1].id);
        return;
      }

      const line = window.innerHeight * ACTIVATION_LINE;
      let current = sections[0].id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top > line) break;
        current = section.id;
      }
      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <ActiveSectionContext.Provider value={active}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
