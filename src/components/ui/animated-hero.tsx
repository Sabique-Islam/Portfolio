"use client";

import { AnimatePresence, motion } from "framer-motion";

const letters = "PORTFOLIO".split("");

const letterVariants = {
  initial: { opacity: 0, y: 60, scale: 0.8 },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
  exit: (i: number) => {
    const dir = [
      { x: -1200, y: -800, rotate: -720 },
      { x: -800, y: -1200, rotate: 360 },
      { x: 0, y: -1500, rotate: -540 },
      { x: 800, y: -1200, rotate: 720 },
      { x: 1200, y: -800, rotate: -360 },
      { x: -1500, y: 500, rotate: 540 },
      { x: -800, y: 1200, rotate: -900 },
      { x: 800, y: 1200, rotate: 900 },
      { x: 1500, y: 800, rotate: -1080 },
    ][i % 9];
    return {
      ...dir,
      opacity: 0,
      scale: 0.2,
      transition: { duration: 2, delay: i * 0.1, ease: "easeOut" as const },
    };
  },
};

const loadingVariants = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, delay: 1.5, when: "afterChildren" },
  },
};

const AnimatedHero = ({
  phase,
}: {
  phase: "loading" | "animatingOut" | "loaded";
}) => {
  return (
    <AnimatePresence>
      {phase !== "loaded" && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-black"
          variants={loadingVariants}
          initial="show"
          animate="show"
          exit="exit"
        >
          <motion.div
            className="flex space-x-1 md:space-x-2"
            variants={loadingVariants}
            initial="show"
            animate={phase === "animatingOut" ? "exit" : "show"}
          >
            {letters.map((char, i) => (
              <motion.span
                key={i}
                className="text-6xl md:text-8xl font-bold text-black dark:text-white tracking-wider select-none"
                variants={letterVariants}
                initial="initial"
                animate={phase === "animatingOut" ? "exit" : "enter"}
                custom={i}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedHero;