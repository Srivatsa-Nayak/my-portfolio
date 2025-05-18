"use client";
import React from "react";
import { Heading } from "./Heading";
import { Product } from "@/types/products";
import { products } from "@/constants/products";
import Link from "next/link";
import Image from "next/image";
import { Paragraph } from "./Paragraph";
import { githubProjects } from "@/constants/projects";
import { motion } from "framer-motion";

export const Products = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
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
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 p-4"
            >
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-lg">{product.title}</h4>
                  <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                </div>
                <div className="flex space-x-2 mt-3 flex-wrap">
                  {product.stack?.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-sm"
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
