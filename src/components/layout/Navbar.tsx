"use client";
import { navlinks } from "@/constants/navlinks";
import { socials } from "@/constants/socials";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { DownloadResumeButton } from "@/components/ui/DownloadResumeButton";
import { useActiveSection } from "@/components/layout/ActiveSectionProvider";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();
  const [heroIdentityVisible, setHeroIdentityVisible] = useState(true);

  // The hero already shows the photo and name, so the header only repeats
  // them once that block has scrolled up behind it.
  useEffect(() => {
    const heroIdentity = document.getElementById("hero-identity");
    if (!heroIdentity) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroIdentityVisible(entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px" }
    );
    observer.observe(heroIdentity);
    return () => observer.disconnect();
  }, []);

  const isActive = (href: string) => href.replace("#", "") === activeSection;

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document
      .getElementById(href.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-6">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          aria-label="Srivatsa Nayak — back to top"
          className="flex items-center h-9 flex-shrink-0"
        >
          <AnimatePresence mode="wait" initial={false}>
            {heroIdentityVisible ? (
              <motion.span
                key="monogram"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="flex h-9 w-9 items-center justify-center rounded-md bg-ink font-display font-bold text-sm text-white"
                aria-hidden="true"
              >
                SN
              </motion.span>
            ) : (
              <motion.span
                key="identity"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="flex items-center gap-2.5"
                aria-hidden="true"
              >
                <Image
                  src="/images/gallery/pic5.jpeg"
                  alt=""
                  height={36}
                  width={36}
                  className="object-cover object-top rounded-full flex-shrink-0 ring-2 ring-sheet"
                />
                <span className="font-display font-bold text-lg tracking-tight text-ink">
                  Srivatsa Nayak
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </a>

        <ul className="hidden md:flex gap-6 m-0 p-0 list-none ml-auto">
          {navlinks.map((link: Navlink) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={twMerge(
                  "font-display font-semibold text-sm pb-1 border-b-2 transition-colors",
                  isActive(link.href)
                    ? "border-magenta text-ink"
                    : "border-transparent text-ink-soft hover:text-ink"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
          {socials.map((link: Navlink) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-ink-soft hover:text-ink transition-colors"
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
          <DownloadResumeButton />
        </div>

        <button
          className="md:hidden ml-auto h-9 w-9 flex items-center justify-center rounded-md border border-ink text-ink flex-shrink-0"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <IconX className="h-5 w-5" />
          ) : (
            <IconMenu2 className="h-5 w-5" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="md:hidden overflow-hidden border-t bg-paper"
          >
            <div className="flex flex-col px-4 py-3">
              {navlinks.map((link: Navlink) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={twMerge(
                    "font-display font-semibold text-base py-2 pl-3 border-l-2 transition-colors",
                    isActive(link.href)
                      ? "border-magenta text-ink"
                      : "border-transparent text-ink-soft hover:text-ink"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-3 mt-2 border-t">
                {socials.map((link: Navlink) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-ink-soft hover:text-ink transition-colors"
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                ))}
                <DownloadResumeButton className="ml-auto" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
