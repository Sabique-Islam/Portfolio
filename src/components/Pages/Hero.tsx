"use client";

import React from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/ui/particles";
import Glow from "@/components/ui/glow";
import { Twitter, Github, Linkedin } from "lucide-react";

const Hero: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-black dark:text-white mb-6 leading-tight select-none">
            Hey, I&apos;m{" "}
            <span className="relative text-black dark:text-white">
              Sabique
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-black dark:bg-white" />
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-10 font-light leading-relaxed max-w-3xl mx-auto">
            A CSE{" "}
            <span className="text-black dark:text-white font-medium relative">
              Student
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black dark:bg-white" />
            </span>
            , based in Bangalore, Karnataka.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12">
            <a
              href="https://www.linkedin.com/in/sabique-islam/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-transform duration-200 hover:scale-110"
            >
              <Linkedin size={28} />
              <span className="mt-1 text-xs sm:text-sm font-medium">LinkedIn</span>
            </a>

            <a
              href="https://github.com/Sabique-Islam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-transform duration-200 hover:scale-110"
            >
              <Github size={28} />
              <span className="mt-1 text-xs sm:text-sm font-medium">GitHub</span>
            </a>

            <a
              href="https://x.com/Sabique_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-sky-500 transition-transform duration-200 hover:scale-110"
            >
              <Twitter size={28} />
              <span className="mt-1 text-xs sm:text-sm font-medium">X</span>
            </a>
          </div>

          <Particles theme={theme} />
          <Glow theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Hero;