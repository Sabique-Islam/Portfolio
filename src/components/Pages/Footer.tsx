import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-muted-foreground/20 text-muted-foreground py-6 px-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-left">
          <p className="text-sm mb-1">
            &copy; {new Date().getFullYear()} Sabique. All rights reserved.
          </p>
          <p className="text-xs italic">
            &quot;Building ideas into reality.&quot;
          </p>
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com/Sabique-Islam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/sabique-islam/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/Sabique_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;