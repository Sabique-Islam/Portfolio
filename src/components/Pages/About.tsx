"use client";

import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-background text-foreground py-16 px-4 terminal" id="about">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Prompt */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="terminal-prompt text-sm sm:text-base">sabique@portfolio:~$ cat about.txt</span>
        </motion.div>

        {/* Content Block */}
        <motion.div 
          className="terminal-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 terminal-text">
            ## About Me
          </h2>

          {/* Description */}
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground terminal-text">
            <p>
              I&apos;m Sabique, studying Computer Science at PES University in Bangalore.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;