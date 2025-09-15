"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypingAnimation } from "@/components/ui/TypingAnimation";
import { Github, Linkedin, Twitter, ExternalLink, FileText } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-background text-foreground flex items-start justify-center px-4 pt-16 terminal">
      <div className="max-w-4xl mx-auto text-left">
        {/* Terminal Prompt */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="terminal-prompt text-sm sm:text-base">sabique@portfolio:~$</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 terminal-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          # Sabique Islam
        </motion.h1>

        {/* Sub-heading with typing animation */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-2 terminal-text">
            ## <TypingAnimation 
              text="A CSE Student, based in Bangalore, Karnataka." 
              delay={1200}
              speed={100}
            />
          </h2>

        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.button
            onClick={scrollToProjects}
            className="px-6 py-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 terminal-link font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Work
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            className="px-6 py-3 bg-primary text-primary-foreground hover:opacity-80 transition-all duration-200 font-mono"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
        </motion.div>

        {/* About Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          {/* Terminal Prompt for About */}
          <div className="mb-4">
            <span className="terminal-prompt text-sm sm:text-base">sabique@portfolio:~$ cat about.txt</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 terminal-text">
            ## About Me
          </h2>

          {/* Description */}
          <div className="space-y-4 text-base sm:text-lg text-muted-foreground terminal-text">
            <p>
              I build web apps, and occasionally tinker with machine learning and low-level programming.
            </p>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {/* Terminal Prompt for Social */}
          <div className="mb-6">
            <span className="terminal-prompt text-sm sm:text-base">~/connect --social</span>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/sabique-islam/",
                icon: "linkedin",
                description: "Professional network"
              },
              {
                name: "GitHub",
                url: "https://github.com/Sabique-Islam",
                icon: "github",
                description: "Code repositories"
              },
              {
                name: "X",
                url: "https://x.com/nopeJS",
                icon: "twitter",
                description: "Tech updates & thoughts"
              },
              {
                name: "Blog",
                url: "https://inscribe.studio/",
                icon: "fileText",
                description: "Technical writing"
              }
            ].map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-card group transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  {link.icon === "linkedin" && <Linkedin className="w-6 h-6 text-primary" />}
                  {link.icon === "github" && <Github className="w-6 h-6 text-primary" />}
                  {link.icon === "twitter" && <Twitter className="w-6 h-6 text-primary" />}
                  {link.icon === "fileText" && <FileText className="w-6 h-6 text-primary" />}
                  <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                </div>
                
                <h3 className="font-semibold text-foreground mb-1 terminal-text">
                  {link.name}
                </h3>
                
                <p className="text-sm text-muted-foreground terminal-text">
                  {link.description}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
