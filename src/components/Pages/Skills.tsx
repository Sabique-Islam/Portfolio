"use client";

import React from "react";
import { motion } from "framer-motion";

type SkillCategory = "Languages" | "Frameworks" | "Tools" | "Platforms";

function Skills() {
  const skills: Record<SkillCategory, string[]> = {
    Languages: ["Python", "JavaScript", "TypeScript", "C", "C++"],
    Frameworks: ["React.js", "Next.js", "Flask"],
    Tools: ["Git", "Docker", "Jupyter", "Streamlit"],
    Platforms: ["GitHub", "Google Colab"],
  };

  return (
    <section className="py-16 px-4 bg-background text-foreground terminal" id="skills">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Prompt */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="terminal-prompt text-sm sm:text-base">sabique@portfolio:~$ cat skills.json</span>
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 terminal-text">
            ## Skills
          </h2>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Row: Languages and Frameworks */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-primary terminal-text">
                Languages:
              </h3>
              <div className="ml-4 space-y-1">
                {skills.Languages.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-muted-foreground terminal-text"
                  >
                    <span className="text-primary">•</span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-primary terminal-text">
                Frameworks:
              </h3>
              <div className="ml-4 space-y-1">
                {skills.Frameworks.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.2 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-muted-foreground terminal-text"
                  >
                    <span className="text-primary">•</span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Second Row: Tools and Platforms */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-primary terminal-text">
                Tools:
              </h3>
              <div className="ml-4 space-y-1">
                {skills.Tools.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.3 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-muted-foreground terminal-text"
                  >
                    <span className="text-primary">•</span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-primary terminal-text">
                Platforms:
              </h3>
              <div className="ml-4 space-y-1">
                {skills.Platforms.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.4 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-muted-foreground terminal-text"
                  >
                    <span className="text-primary">•</span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;