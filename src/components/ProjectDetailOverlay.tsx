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
      className="fixed inset-0 z-50 bg-white text-black px-8 py-12 overflow-y-auto overscroll-contain"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Back button */}
      <motion.button
        onClick={onClose}
        className="relative text-sm after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 font-bold uppercase tracking-wide cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        Return to home
      </motion.button>

      <div className="mt-8 flex flex-col lg:flex-row gap-12 lg:gap-16 h-full">
        {/* Left column — title + image */}
        <motion.div
          className="lg:w-1/2 flex flex-col"
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold leading-none tracking-tight"
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
            <p className="font-bold text-2xl">{project.year}</p>
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
          className="lg:w-1/2 flex flex-col gap-4 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-4xl font-bold uppercase tracking-wide mb-4 mt-10">
              Description
            </h3>
            <p className="text-neutral-600 leading-relaxed text-2xl">
              {project.description}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-10 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            <div className="sm:w-1/2">
              <h4 className="text-3xl font-bold uppercase tracking-wide mb-3 ">
                Tech Stack
              </h4>
              <ul className="text-neutral-600 text-2xl leading-relaxed flex flex-col gap-2 flex-wrap h-50">
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
    </motion.div>
  );
}
