"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<
    "loading" | "extend" | "drape" | "done"
  >("loading");

  // Simulate loading progress
  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const next = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(next);

      if (next < 100) {
        frame = requestAnimationFrame(animate);
      } else {
        // Brief pause at 100% before extending
        setTimeout(() => setPhase("extend"), 400);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Trigger onComplete when done
  useEffect(() => {
    if (phase === "done") onComplete();
  }, [phase, onComplete]);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* White background — fades during drape to reveal hero underneath */}
      <motion.div
        className="absolute inset-0 bg-white"
        animate={phase === "drape" ? { opacity: 0 } : { opacity: 1 }}
        transition={
          phase === "drape"
            ? { duration: 0.6, ease: "easeInOut", delay: 0.4 }
            : {}
        }
        onAnimationComplete={() => {
          if (phase === "drape") setPhase("done");
        }}
      />

      {/* Centered loading content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Percentage text — fades out when loading completes */}
        <motion.span
          className="absolute text-sm font-bold tracking-widest text-black uppercase"
          style={{ marginTop: -24 }}
          animate={
            phase === "loading"
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -10 }
          }
          transition={{ duration: 0.3 }}
        >
          {progress}%
        </motion.span>

        {/* Progress bar track — only visible during loading */}
        {phase === "loading" && (
          <div className="w-48 h-[2px] bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-black rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.05 }}
            />
          </div>
        )}
      </div>

      {/* Black bar — extends to full width, then drapes down to become the black section */}
      {(phase === "extend" || phase === "drape") && (
        <motion.div
          className="absolute bg-black"
          style={{ left: "50%", x: "-50%" }}
          initial={{
            width: "12rem",
            height: 2,
            top: "50%",
          }}
          animate={
            phase === "extend"
              ? { width: "100vw", height: 2, top: "50%" }
              : { width: "100vw", height: "25vh", top: "75vh" }
          }
          transition={{
            duration: phase === "extend" ? 0.5 : 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
          onAnimationComplete={() => {
            if (phase === "extend") setPhase("drape");
          }}
        />
      )}
    </div>
  );
}
