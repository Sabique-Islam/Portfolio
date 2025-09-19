"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "../../lib/project";

interface Project {
  title: string;
  slug: string;
  description: string;
  link: string;
  live?: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      className="terminal-card group transition-all duration-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Project Title */}
      <h3 className="text-xl sm:text-2xl font-bold mb-4 terminal-text">
        ### {project.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-4 terminal-text leading-relaxed">
        {project.description}
      </p>

      {/* Languages */}
      <div className="mb-6">
        <span className="text-primary terminal-text font-semibold">Languages: </span>
        <span className="text-muted-foreground terminal-text">
          {project.tags.join(", ")}
        </span>
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap gap-4">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="terminal-link flex items-center space-x-2 text-primary hover:underline"
        >
          <Github className="w-4 h-4" />
          <span>[View Code]</span>
          <ExternalLink className="w-3 h-3" />
        </a>
        
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-link flex items-center space-x-2 text-primary hover:underline"
          >
            <ExternalLink className="w-4 h-4" />
            <span>[Live Demo]</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}

        {project.slug && (
          <Link
            href={`/projects/${project.slug}`}
            className="terminal-link flex items-center space-x-2 text-primary hover:underline ml-auto"
          >
            <span>[Read More]</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section className="py-10 px-2 bg-background text-foreground terminal" id="projects">
      <div className="max-w-4xl mx-auto">
        {/* Terminal Prompt */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="terminal-prompt text-sm sm:text-base">sabique@portfolio:~$ ls -la ./projects/</span>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 terminal-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          ## Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;