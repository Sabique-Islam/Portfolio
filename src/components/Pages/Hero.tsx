"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const Hero: React.FC = () => {
  const [phase, setPhase] = useState<"loading" | "animatingOut" | "loaded">("loading");
  const { theme } = useTheme();
  const letters = "PORTFOLIO".split("");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const startExit = setTimeout(() => setPhase("animatingOut"), 1500);
    const finishLoading = setTimeout(() => {
      setPhase("loaded");
      document.body.style.overflow = "unset";
    }, 2000);

    return () => {
      clearTimeout(startExit);
      clearTimeout(finishLoading);
      document.body.style.overflow = "unset";
    };
  }, []);

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

  return (
    <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-500">
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

      {phase === "loaded" && (
        <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black dark:text-white mb-6 leading-tight select-none">
              Hey, I&apos;m{" "}
              <span className="relative text-black dark:text-white">
                Sabique
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-black dark:bg-white" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              A curious mind with a{" "}
              <span className="text-black dark:text-white font-medium relative">
                compiler
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black dark:bg-white" />
              </span>
              .
            </p>

            {/* Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: Math.random() * 4 + 2,
                    height: Math.random() * 4 + 2,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    backgroundColor: theme === "dark" ? "white" : "black",
                  }}
                  animate={{
                    x: [0, (Math.random() - 0.5) * 150],
                    y: [0, (Math.random() - 0.5) * 150],
                    opacity: [0.2, 0.5, 0.2],
                    scale: [1, Math.random() * 1.5 + 0.8, 1],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Glow */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 2, delay: 1 }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
                style={{
                  backgroundColor:
                    theme === "dark"
                      ? "rgba(255,255,255,0.2)"
                      : "rgba(0,0,0,0.2)",
                }}
              />
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;