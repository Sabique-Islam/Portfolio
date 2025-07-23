"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import AnimatedHero from "@/components/ui/animated-hero";
import Particles from "@/components/ui/particles";
import Glow from "@/components/ui/glow";

const Hero: React.FC = () => {
  const [phase, setPhase] = useState<"loading" | "animatingOut" | "loaded">("loading");
  const { theme } = useTheme();

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

  return (
    <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <AnimatedHero phase={phase} />

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
              A full-stack{" "}
              <span className="text-black dark:text-white font-medium relative">
                developer
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black dark:bg-white" />
              </span>
              , based in Bangalore, Karnataka.
            </p>

            <Particles theme={theme} />
            <Glow theme={theme} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
