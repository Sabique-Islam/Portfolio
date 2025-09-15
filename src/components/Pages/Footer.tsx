"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 bg-background text-foreground terminal" id="contact">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Prompt */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="terminal-prompt text-sm sm:text-base">sabique@portfolio:~$ echo &quot;Thanks for visiting!&quot;</span>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 terminal-text">
            ## Contact
          </h2>
          
          <p className="text-muted-foreground mb-6 terminal-text">
            Let&apos;s connect and build something amazing together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="mailto:sabiqueislam@proton.me"
              className="px-6 py-3 bg-primary text-primary-foreground hover:opacity-80 transition-all duration-200 font-mono flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sabique-islam/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-mono flex items-center space-x-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Footer Info */}
        <motion.div 
          className="pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Copyright */}
            <div className="text-left">
              <p className="text-sm text-muted-foreground terminal-text mb-2">
                © {currentYear} Sabique. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://github.com/Sabique-Islam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors terminal-link"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sabique-islam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors terminal-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/nopeJS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors terminal-link"
                aria-label="X (Twitter)"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
