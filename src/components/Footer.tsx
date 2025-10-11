"use client";
import React from "react";

export const Footer = () => {
  return (
    <footer className="p-4 text-center justify-center text-xs text-neutral-500 border-t border-neutral-100">
    {/* <footer className="fixed bottom-0 left-0 w-full p-4 text-center text-xs text-neutral-500 border-t border-neutral-100 bg-white z-10"> */}
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; Built by Srivatsa Nayak
    </footer>
  );
};
