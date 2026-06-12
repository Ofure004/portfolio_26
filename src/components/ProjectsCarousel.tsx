"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { projects } from "./projects/data";

function getOffset(index: number, current: number, total: number) {
  let diff = index - current;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

interface CarouselProps {
  onProjectSelect: (slug: string) => void;
  overlayActive?: boolean;
}

export default function ProjectsCarousel({
  onProjectSelect,
  overlayActive = false,
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    const rect = carouselRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % projects.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(next, 5000);
  }, [next]);

  useEffect(() => {
    if (overlayActive) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return;
    }
    resetTimer();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, resetTimer, overlayActive]);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-black text-white"
      style={{
        minHeight: "auto",
        padding: "6rem 2rem",
      }}
    >
      <div>
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Selected Projects
        </h2>

        <div className="relative flex items-center justify-center mt-12 lg:mt-16">
          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-0 z-20 border border-white/30 rounded-full p-2 hover:bg-white/10 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards */}
          <div
            ref={carouselRef}
            className="relative w-full cursor-none overflow-hidden"
            style={{ height: "60vh" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setCursorVisible(true)}
            onMouseLeave={() => setCursorVisible(false)}
          >
            {projects.map((project, i) => {
              const offset = getOffset(i, current, projects.length);
              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 1;
              const centerLeft = 50;
              let translateX: string;
              let width: string;

              if (offset === 0) {
                width = "45%";
                translateX = `calc(${centerLeft}% - 22.5%)`;
              } else if (offset === -1) {
                width = "28%";
                translateX = `calc(${centerLeft}% - 22.5% - 28% - 2%)`;
              } else if (offset === 1) {
                width = "28%";
                translateX = `calc(${centerLeft}% + 22.5% + 2%)`;
              } else if (offset < -1) {
                width = "28%";
                translateX = `calc(${centerLeft}% - 22.5% - 58% - 4%)`;
              } else {
                width = "28%";
                translateX = `calc(${centerLeft}% + 22.5% + 32% + 4%)`;
              }

              const cardOpacity = isVisible ? (isActive ? 1 : 0.5) : 0;

              return (
                <div
                  key={i}
                  className="absolute top-0 h-full cursor-none"
                  style={{
                    width,
                    left: translateX,
                    opacity: cardOpacity,
                    transform: isActive ? "scale(1)" : "scale(0.92)",
                    transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                    zIndex: isActive ? 2 : 1,
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                  onClick={() => {
                    if (overlayActive) return;
                    if (isActive) onProjectSelect(project.slug);
                    else if (offset === -1) prev();
                    else if (offset === 1) next();
                  }}
                >
                  <motion.div
                    layoutId={`project-image-${project.slug}`}
                    className="relative h-full rounded-2xl overflow-hidden bg-neutral-800"
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <p className="text-white text-lg md:text-2xl font-bold drop-shadow-lg">
                        {project.name}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}

            {/* Custom cursor */}
            {!overlayActive && (
              <div
                className="pointer-events-none absolute z-30 flex items-center justify-center rounded-full bg-white"
                style={{
                  width: 100,
                  height: 100,
                  left: cursorPos.x,
                  top: cursorPos.y,
                  transform: `translate(-50%, -50%) scale(${cursorVisible ? 1 : 0})`,
                  opacity: cursorVisible ? 1 : 0,
                  transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
                }}
              >
                <span className="text-black text-xs font-bold text-center leading-tight">
                  Click to
                  <br />
                  see more
                </span>
              </div>
            )}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Next project"
            className="absolute right-0 z-20 border border-white/30 rounded-full p-2 hover:bg-white/10 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12 lg:mt-16">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === current ? "w-8 bg-white" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
