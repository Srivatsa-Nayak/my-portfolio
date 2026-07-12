import Image from "next/image";
import React from "react";
import { Heading } from "@/components/ui/Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "React.js",
      src: "/images/logos/React.svg",

      className: "h-10 w-14",
    },
    {
      title: "Java",
      src: "/images/logos/java.png",

      className: "h-10 w-10",
    },
    {
      title: "Spring Boot",
      src: "/images/logos/Spring.svg",

      className: "h-10 w-8",
    },
    {
      title: "Docker",
      src: "/images/logos/Docker.svg",

      className: "h-12 w-14",
    },
    {
      title: "Node",
      src: "/images/logos/Node.js.svg",

      className: "h-10 w-12",
    },
    {
      title: "Python",
      src: "/images/logos/Python.svg",

      className: "h-10 w-16",
    },
    {
      title: "Kubernetes",
      src: "/images/logos/Kubernetes.svg",

      className: "h-9 w-12",
    },
    {
      title: "AWS",
      src: "/images/logos/AWS.svg",

      className: "h-12 w-14",
    },
    {
      title: "MongoDB",
      src: "/images/logos/MongoDB.svg",

      className: "h-12 w-14",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap gap-3">
        {stack.map((item) => (
          <div
            key={item.src}
            title={item.title}
            className="flex items-center justify-center h-16 w-16 rounded-md border border-neutral-800 bg-neutral-900 p-2"
          >
            <Image
              src={item.src}
              width={200}
              height={200}
              alt={item.title}
              className={twMerge("object-contain", item.className)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
