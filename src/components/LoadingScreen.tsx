"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [loadingText, setLoadingText] = useState("loading");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const loadingStates = [
      "loading",
      "loading.",
      "loading..",
      "loading...",
    ];

    let index = 0;
    const interval = setInterval(() => {
      setLoadingText(loadingStates[index]);
      index = (index + 1) % loadingStates.length;
    }, 500);

    // Complete loading after 3 seconds
    const timer = setTimeout(() => {
      clearInterval(interval);
      setIsComplete(true);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-background flex items-center justify-center terminal"
        >
          <div className="text-center">
            {/* Terminal Prompt */}
            <div className="mb-8">
              <span className="terminal-prompt text-sm sm:text-base">sabique@portfolio:~$</span>
            </div>
            
            {/* Loading Animation */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-primary text-xl sm:text-2xl font-mono"
            >
              {loadingText}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;