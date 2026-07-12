"use client";
import { Paragraph } from "@/components/ui/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "/images/gallery/pic1.jpg",
    "/images/gallery/pic2.jpg",
    "/images/gallery/pic3.jpg",
    "/images/gallery/pic4.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              sizes="(min-width: 768px) 25vw, 50vw"
              alt="about"
              className="rounded-md object-cover border border-neutral-800 transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Srivatsa Nayak - a passionate developer, with a strong foundation in programming, 
          problem-solving, and software design.
        </Paragraph>
        <Paragraph className=" mt-4">
          I have a particular interest in backend development and enjoy building scalable, efficient systems.
          Java is my programming language of choice, and I&apos;ve developed multiple applications using it.
          I am highly proficient with the Spring Boot framework, which I use to create robust RESTful APIs and microservices.
        </Paragraph>

        <Paragraph className=" mt-4">
          I enjoy exploring and integrating different technologies to improve application performance and developer productivity.
          Whether it&apos;s experimenting with new libraries or understanding how different components interact, I thrive on learning.
          I take pride in writing clean, maintainable code and following software development best practices.
          Solving complex problems and optimizing workflows through automation gives me a great sense of satisfaction.
        </Paragraph>
        <Paragraph className=" mt-4">
          I value collaboration and enjoy working with cross-functional teams to bring ideas to life. 
          I have experience with Git, Maven, Docker, and other tools that support modern development pipelines.
          In my free time, I stay up to date with emerging trends in software engineering and cloud technologies.
        </Paragraph>
        <Paragraph className=" mt-4">
          Through this website, I aim to share my insights, experiences, and my
          creations with you. I&apos; constantly looking to improve both my technical and 
          soft skills to become a more effective developer
        </Paragraph>
        <Paragraph className=" mt-4">
          I enjoy reading technical blogs, watching conference talks, and building side projects to test new ideas.
          I&aposm excited about contributing to meaningful software solutions that make a difference.
        </Paragraph>
        <Paragraph className=" mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this
          adventure with you.
        </Paragraph>
      </div>
    </div>
  );
}
