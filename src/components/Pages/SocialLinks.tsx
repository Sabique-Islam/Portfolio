"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ExternalLink, FileText } from "lucide-react";

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sabique-islam/",
      icon: Linkedin,
      description: "Professional network"
    },
    {
      name: "GitHub",
      url: "https://github.com/Sabique-Islam",
      icon: Github,
      description: "Code repositories"
    },
    {
      name: "X",
      url: "https://x.com/nopeJS",
      icon: Twitter,
      description: "Tech updates & thoughts"
    },
    {
      name: "Blog",
      url: "https://inscribe.studio/",
      icon: FileText,
      description: "Technical writing"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background text-foreground terminal">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Prompt */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="terminal-prompt text-sm sm:text-base">~/connect --social</span>
        </motion.div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-card group transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Icon className="w-6 h-6 text-primary" />
                  <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto" />
                </div>
                
                <h3 className="font-semibold text-foreground mb-1 terminal-text">
                  {link.name}
                </h3>
                
                <p className="text-sm text-muted-foreground terminal-text">
                  {link.description}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;