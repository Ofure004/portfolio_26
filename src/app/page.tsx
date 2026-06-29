"use client";

import { useState, useCallback, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import ProjectDetailOverlay from "@/components/ProjectDetailOverlay";
import Footer from "@/components/footer";
import Preloader from "@/components/Preloader";
import { projects } from "@/components/projects/data";
import { Download } from "lucide-react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const handleProjectSelect = useCallback((slug: string) => {
    setSelectedSlug(slug);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedSlug(null);
  }, []);

  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out over the first 200px of scrolling
      const opacity = Math.max(0, 1 - window.scrollY / 200);
      setScrollOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const selectedProject = selectedSlug
    ? (projects.find((p) => p.slug === selectedSlug) ?? null)
    : null;

  return (
    <div>
      {/* Preloader */}
      <AnimatePresence>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Hero — sticky so it stays fixed while dark sections scroll over it */}
      <section className="sticky top-0 z-0 h-[75vh] text-black px-4 sm:px-8 pt-6 pb-0 flex flex-col justify-between bg-white">
        {/* Navbar */}
        <motion.nav
          className="flex justify-between items-start mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          {/* Logo placeholder */}
          <div></div>
          <ul className="flex flex-col items-end gap-1.5 sm:gap-2 text-base sm:text-xl font-bold tracking-wide uppercase text-[#666]/70">
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("work")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="uppercase relative after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-black"
              >
                Work
              </button>
            </li>
            {/* <li>
              <a
                href="#about"
                className="relative after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-black"
              >
                About
              </a>
            </li> */}
            <li>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="cursor-pointer uppercase relative after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100 hover:text-black"
              >
                Contact
              </button>
            </li>
            <li>
              <a
                href="/EHIREMHEN OFURE RESUME.pdf"
                download
                className="lowercase text-black cursor-pointer flex gap-1 relative after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                resume
                <Download size={24} />
              </a>
            </li>
          </ul>
        </motion.nav>
        {/* Hero Content */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12 gap-6 md:gap-16"
          initial={{ opacity: 0, y: 30 }}
          animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-5xl leading-tight font-bold">
            Frontend Engineer
          </h2>
          <p className="text-lg sm:text-xl md:text-3xl leading-tight max-w-3xl font-bold">
            Hi, I&apos;m Ofure — a Lagos-based Frontend Engineer dedicated to
            crafting interfaces that feel natural and intuitive. With two years
            of professional experience, I focus on the subtle, meaningful
            details that define a premium user experience and bring products to
            life.
          </p>
        </motion.div>
        {/* Large Name */}
        <motion.h1
          className="text-[11vw] sm:text-[12vw] font-bold leading-none tracking-tighter mb-0"
          initial={{ opacity: 0, y: 40 }}
          animate={!isLoading ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        >
          Ehiremhen Ofure
        </motion.h1>
      </section>

      {/* Everything below scrolls over the hero */}
      <div className="relative z-10">
        {/* Black Section */}
        <section className="bg-black text-white flex flex-col items-center justify-center py-16 h-[23vh] -mb-px">
          <div
            className="animate-bounce-slow flex flex-col items-center gap-2 transition-opacity duration-150"
            style={{ opacity: scrollOpacity }}
          >
            <p className="text-sm uppercase tracking-widest">Scroll down</p>
            <ArrowDown size={24} />
          </div>
        </section>

        {/* Selected Projects */}
        <LayoutGroup>
          <ProjectsCarousel
            onProjectSelect={handleProjectSelect}
            overlayActive={!!selectedProject}
          />

          {/* Project detail overlay — fixed, covers entire viewport */}
          <AnimatePresence>
            {selectedProject && (
              <ProjectDetailOverlay
                project={selectedProject}
                onClose={handleClose}
              />
            )}
          </AnimatePresence>
        </LayoutGroup>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
