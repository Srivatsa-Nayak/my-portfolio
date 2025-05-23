import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "Java",
      src: "/images/logos/java.png",

      className: "h-10 w-10",
    },
    {
      title: "Spring Boot",
      src: "/images/logos/springboot.png",

      className: "h-10 w-8",
    },
    {
      title: "Docker",
      src: "/images/logos/docker.png",

      className: "h-12 w-14",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "Python",
      src: "/images/logos/python.jpeg",

      className: "h-10 w-16",
    },
    {
      title: "Kubernetes",
      src: "/images/logos/kubernetes.png",

      className: "h-9 w-12",
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
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
