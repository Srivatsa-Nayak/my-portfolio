"use client";
import React from "react";
import { IconMail, IconMapPin, IconBuildingSkyscraper } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="p-4 text-center text-xs text-neutral-100 border-t border-neutral-700">
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-3">
        <a
          href="mailto:nayaksrivatsa15@gmail.com"
          className="flex items-center gap-1.5 hover:text-emerald-400 transition duration-200"
        >
          <IconMail className="h-3.5 w-3.5" />
          nayaksrivatsa15@gmail.com
        </a>
        <span className="flex items-center gap-1.5">
          <IconMapPin className="h-3.5 w-3.5" />
          Bangalore, India
        </span>
        <span className="flex items-center gap-1.5">
          <IconBuildingSkyscraper className="h-3.5 w-3.5" />
          CloudFrame Inc.
        </span>
      </div>
      <p>
        <span className="text-emerald-500">$</span> echo &quot;
        <span className="font-semibold text-neutral-100">
          {new Date().getFullYear()}
        </span>{" "}
        &#8212; built by Srivatsa Nayak&quot;
      </p>
    </footer>
  );
};
