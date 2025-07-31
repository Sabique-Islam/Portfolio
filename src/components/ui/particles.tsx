"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface ParticleData {
  width: number;
  height: number;
  left: string;
  top: string;
  x: number;
  y: number;
  scale: number;
  delay: number;
  duration: number;
}

const Particles = ({ theme }: { theme: string | undefined }) => {
  const [particles, setParticles] = useState<ParticleData[]>([]);

  useEffect(() => {
    // Generate particles only on client (fix: Hydration failed because the server rendered HTML didn't match the client)
    const generated = [...Array(30)].map(() => ({
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      x: (Math.random() - 0.5) * 150,
      y: (Math.random() - 0.5) * 150,
      scale: Math.random() * 1.5 + 0.8,
      delay: Math.random() * 2,
      duration: Math.random() * 5 + 3,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.width,
            height: p.height,
            left: p.left,
            top: p.top,
            backgroundColor: theme === "dark" ? "white" : "black",
          }}
          animate={{
            x: [0, p.x],
            y: [0, p.y],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, p.scale, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: "reverse",
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Particles;