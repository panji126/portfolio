"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface IntroLoaderProps {
  onLoadingComplete?: () => void;
}

const words = [
  { text: "LOADING SYSTEM...", type: "mono" as const },
  { text: "PANJI ADHIKARA", type: "brutal" as const },
  { text: "AUTOMATION & SCADA ENGINEER", type: "sub" as const },
];

export default function IntroLoader({ onLoadingComplete }: IntroLoaderProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentWordIndex < words.length - 1) {
      const timer = window.setTimeout(() => {
        setCurrentWordIndex((prev) => prev + 1);
      }, 1200);
      return () => window.clearTimeout(timer);
    }

    if (!isCurtainOpen) {
      const timer = window.setTimeout(() => {
        setIsCurtainOpen(true);
      }, 1000);
      return () => window.clearTimeout(timer);
    }
  }, [currentWordIndex, isCurtainOpen]);

  useEffect(() => {
    if (isCurtainOpen) {
      const timer = window.setTimeout(() => {
        setIsVisible(false);
      }, 1300);
      return () => window.clearTimeout(timer);
    }
  }, [isCurtainOpen]);

  const handleExitComplete = () => {
    if (onLoadingComplete) {
      onLoadingComplete();
    }
  };

  const currentWord = words[currentWordIndex];

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-[#060606]"
        >
          <motion.div
            initial={{ y: "0%" }}
            animate={isCurtainOpen ? { y: "-100%" } : { y: "0%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 left-0 h-1/2 w-full border-b border-[#222] bg-[#0d0d0d]"
          />
          <motion.div
            initial={{ y: "0%" }}
            animate={isCurtainOpen ? { y: "100%" } : { y: "0%" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 h-1/2 w-full border-t border-[#222] bg-[#0d0d0d]"
          />

          <div className="relative z-10 px-4 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentWord.text}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {currentWord.type === "mono" && (
                  <h2 className="font-mono text-sm sm:text-lg md:text-xl uppercase tracking-[0.35em] text-[#00ff66] drop-shadow-[0_0_12px_rgba(0,255,102,0.45)]">
                    {currentWord.text}
                  </h2>
                )}

                {currentWord.type === "brutal" && (
                  <div className="inline-flex items-center rounded-md border border-[#00ff66]/40 bg-[#0a0a0a] px-4 py-2 sm:px-5 sm:py-2.5 shadow-[0_0_18px_rgba(0,255,102,0.12)]">
                    <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-[#00ff66] sm:text-sm md:text-base">
                      {currentWord.text}
                    </span>
                  </div>
                )}

                {currentWord.type === "sub" && (
                  <h2 className="font-sans text-xl font-semibold uppercase tracking-[0.35em] text-zinc-400 sm:text-2xl md:text-3xl">
                    {currentWord.text}
                  </h2>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
