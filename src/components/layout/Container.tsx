import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-6xl w-full mx-auto pt-12 pb-20 px-4 sm:px-6">
      {children}
    </main>
  );
};
