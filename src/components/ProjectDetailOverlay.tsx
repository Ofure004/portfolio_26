"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Project } from "./projects/types";
import { ArrowUpRight } from "lucide-react";

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetailOverlay({ project, onClose }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white text-black px-4 sm:px-8 py-6 sm:py-12 overflow-y-auto overscroll-contain flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Content — vertically centered in remaining space */}
      <div className="flex-1 flex items-start">
        <div className="w-full flex flex-col xl:flex-row xl:items-end gap-8 sm:gap-12 xl:gap-16">
          {/* Left column — title + image */}
          <motion.div
            className="xl:w-[60%] flex flex-col"
            initial={{ y: "-10%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.button
              onClick={onClose}
              className="self-start relative text-sm after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 font-bold uppercase tracking-wide cursor-pointer my-4 3xl:my-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              Return to home
            </motion.button>
            <motion.h2
              className="text-3xl sm:text-5xl md:text-7xl font-bold leading-none tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            >
              {project.name}
            </motion.h2>

            <motion.div
              className="flex items-center gap-6 mt-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            >
              <p className="font-bold text-lg sm:text-2xl">{project.year}</p>
            </motion.div>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            >
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-lg after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 font-bold uppercase tracking-wide"
              >
                Live Link
                <ArrowUpRight className="inline-block w-6 h-6 mr-1 mb-1 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            <motion.div
              layoutId={`project-image-${project.slug}`}
              className="relative w-full rounded-2xl overflow-hidden bg-neutral-200 mt-6"
              style={{ aspectRatio: "16 / 10" }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-fit object-center"
              />
            </motion.div>
          </motion.div>

          {/* Right column — text content */}
          <motion.div
            className="xl:w-[40%] flex flex-col gap-1"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-lg sm:text-2xl 3xl:text-4xl font-bold uppercase tracking-wide mb-2 sm:mb-4">
                Description
              </h3>
              <p className="text-neutral-600 text-base sm:text-lg 3xl:text-2xl">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-10 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            >
              <div className="md:w-[40%] xl:w-[60%]">
                <h4 className="sm:text-xl 3xl:text-3xl font-bold uppercase tracking-wide mb-3 ">
                  Tech Stack
                </h4>
                <ul className="text-neutral-600 sm:text-base 3xl:text-2xl grid grid-rows-3 grid-flow-col gap-2">
                  {project.techStack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
              {/* <div className="sm:w-1/2">
              <h4 className="text-3xl font-bold uppercase tracking-wide mb-3">
                Highlights
              </h4>
              <ul className="text-neutral-600 text-2xl leading-relaxed">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div> */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
