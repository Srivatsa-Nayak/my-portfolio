"use client";
import { navlinks } from "@/constants/navlinks";
import { socials } from "@/constants/socials";
import { Navlink } from "@/types/navlink";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { DownloadResumeButton } from "@/components/ui/DownloadResumeButton";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex-shrink-0 border-b border-neutral-800 bg-neutral-900/60">
      <div className="flex items-center gap-4 px-4 py-2.5">
        <div className="flex items-center gap-2 min-w-0 flex-shrink-0">
          <Image
            src="/images/gallery/pic5.jpeg"
            alt="Avatar"
            height={32}
            width={32}
            className="object-cover object-top rounded-full flex-shrink-0 ring-1 ring-neutral-700"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <p className="font-bold text-primary text-xs">Srivatsa Nayak</p>
            <p className="text-[11px] text-secondary">Software Engineer</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1 flex-1 min-w-0 overflow-x-auto">
          {navlinks.map((link: Navlink) => (
            <Link
              key={link.href}
              href={link.href}
              className={twMerge(
                "text-secondary hover:text-primary hover:bg-neutral-800/60 transition duration-200 flex items-center gap-1.5 py-1.5 px-2.5 rounded-md text-sm whitespace-nowrap",
                isActive(link.href) && "bg-neutral-800 text-emerald-400"
              )}
            >
              <link.icon
                className={twMerge(
                  "h-3.5 w-3.5 flex-shrink-0",
                  isActive(link.href) && "text-emerald-400"
                )}
              />
              <span className="text-neutral-600 select-none">$</span>
              <span>{link.label.toLowerCase()}</span>
              {isActive(link.href) && (
                <span className="inline-block w-1.5 h-3.5 bg-emerald-400 animate-cursor-blink" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 flex-shrink-0 ml-auto">
          {socials.map((link: Navlink) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-emerald-400 transition duration-200"
            >
              <link.icon className="h-4 w-4" />
            </Link>
          ))}
          <DownloadResumeButton />
        </div>

        <button
          className="md:hidden ml-auto h-8 w-8 flex items-center justify-center rounded-md border border-neutral-700 text-neutral-400 flex-shrink-0"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? (
            <IconX className="h-4 w-4" />
          ) : (
            <IconMenu2 className="h-4 w-4" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="md:hidden overflow-hidden border-t border-neutral-800"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {navlinks.map((link: Navlink) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={twMerge(
                    "text-secondary hover:text-primary hover:bg-neutral-800/60 transition duration-200 flex items-center gap-2 py-2 px-2 rounded-md text-sm",
                    isActive(link.href) && "bg-neutral-800 text-emerald-400"
                  )}
                >
                  <link.icon
                    className={twMerge(
                      "h-4 w-4 flex-shrink-0",
                      isActive(link.href) && "text-emerald-400"
                    )}
                  />
                  <span className="text-neutral-600 select-none">$</span>
                  <span>{link.label.toLowerCase()}</span>
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-3 mt-2 border-t border-neutral-800">
                {socials.map((link: Navlink) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-emerald-400 transition duration-200"
                  >
                    <link.icon className="h-4 w-4" />
                  </Link>
                ))}
                <DownloadResumeButton className="ml-auto" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
