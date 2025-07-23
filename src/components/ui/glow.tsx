"use client";

import { motion } from "framer-motion";
import React from "react";

const Glow = ({ theme }: { theme: string | undefined }) => (
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
);

export default Glow;