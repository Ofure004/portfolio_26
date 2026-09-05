"use client";

import { motion } from "motion/react";
import PortfolioNav from "@/components/PortfolioNav";
import HomeLink from "@/components/HomeLink";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-5 text-black sm:px-8 sm:py-7 lg:flex lg:h-screen lg:flex-col lg:overflow-hidden">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-start justify-between"
      >
        <HomeLink />
        <PortfolioNav />
      </motion.header>
      {/* 
      <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.65, ease: "easeOut" }} className="mt-24 text-[16vw] font-bold leading-none tracking-[-0.065em] lg:hidden">
        Meet Ofure
      </motion.h1> */}

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        className="mt-24 grid gap-14 pb-12 md:grid-cols-2 lg:my-auto lg:grid-cols-12 lg:items-start lg:gap-x-12 lg:pb-0 xl:gap-x-20"
      >
        <article className="lg:col-span-3">
          <h2 className="reference-label">About me</h2>
          <p className="reference-copy">
            I&apos;m Ofure, a software engineer, curious person, and chronic “I
            wonder if I can make that myself” enthusiast.
          </p>
          <p className="reference-copy mt-7">
            That curiosity is the thread connecting most things I enjoy. I love
            learning by doing, exploring unfamiliar ideas, and finding my way
            through complex problems.
          </p>
        </article>

        <article className="md:col-span-2 lg:col-span-5">
          <h2 className="reference-label">More about me</h2>
          <p className="reference-copy">
            I like creating things from scratch. Sometimes that means designing
            and building a product, figuring out a system architecture, or
            disappearing down a technical rabbit hole to understand the
            underlying mechanics.
          </p>
          <p className="reference-copy mt-7">
            Other times, my “maker” urge means trying a new recipe,
            experimenting with my hair or clothes, learning a new craft, or
            attempting a DIY project just for the fun of it. I&apos;m
            resourceful, willing to experiment, and I enjoy turning a vague idea
            into something tangible.
          </p>
        </article>

        <aside className="lg:col-span-4">
          <h2 className="reference-label">Curious things</h2>
          <div className="space-y-5">
            <p className="reference-copy">
              <strong>Outside of code:</strong>
              {
                " food & cooking, movies of all eras, musicals, and making things by hand."
              }
            </p>
            <p className="reference-copy">
              <strong>Music rotation:</strong> rock, classical, indie, house,
              and afrobeats.
            </p>
            <p className="reference-copy">
              <strong>Generally:</strong> open to new tools, hobbies, and
              genres—always curious to see where a new thread might lead.
            </p>
          </div>
        </aside>
      </motion.section>
    </main>
  );
}
