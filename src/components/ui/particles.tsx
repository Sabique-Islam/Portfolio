"use client";

import { motion } from "framer-motion";
import React from "react";

const Particles = ({ theme }: { theme: string | undefined }) => (
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
);

export default Particles;