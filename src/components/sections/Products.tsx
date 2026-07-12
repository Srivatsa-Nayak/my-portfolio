"use client";
import React from "react";
import { Product } from "@/types/products";
import Link from "next/link";
import { githubProjects } from "@/constants/projects";
import { motion } from "framer-motion";
import { IconArrowUpRight } from "@tabler/icons-react";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {githubProjects.map((product: Product, idx: number) => (
          <motion.div
            key={product.href}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full rounded-md border border-neutral-800 bg-neutral-900 hover:border-emerald-600/60 hover:bg-neutral-800/60 transition duration-200 p-4"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h4 className="font-bold text-lg text-neutral-100 flex items-center gap-2">
                    <span className="text-emerald-500">$</span>
                    <span>{product.title}</span>
                    <IconArrowUpRight className="h-4 w-4 text-neutral-600 group-hover:text-emerald-400 transition flex-shrink-0" />
                  </h4>
                  <p className="text-sm text-neutral-400 mt-2">
                    {product.description}
                  </p>
                </div>
                <div className="flex space-x-2 mt-3 flex-wrap gap-y-2">
                  {product.stack?.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-emerald-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
