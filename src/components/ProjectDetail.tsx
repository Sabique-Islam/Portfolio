"use client";

import React from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

interface ProjectDetailProps {
  title: string;
  description: string;
  link: string;
  live?: string;
  tags: string[];
  content: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  title,
  description,
  link,
  live,
  tags,
  content,
}) => {
  return (
    <div className="min-h-screen bg-background text-foreground terminal">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/#projects" className="terminal-link flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-link flex items-center space-x-2"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-link flex items-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            {/* Terminal Prompt */}
            <div className="mb-6">
              <span className="terminal-prompt text-sm sm:text-base">
                sabique@portfolio:~$ cat projects/{title.toLowerCase().replace(/\s+/g, '-')}.md
              </span>
            </div>

            {/* Project Info */}
            <div className="terminal-card mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 terminal-text">
                {title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6 terminal-text">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary rounded text-sm font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-link flex items-center space-x-2 text-primary hover:underline"
                >
                  <Github className="w-4 h-4" />
                  <span>View Source Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                
                {live && (
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-link flex items-center space-x-2 text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Markdown Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                code({ className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  
                  return match ? (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-md !bg-card"
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code 
                      className="bg-card px-2 py-1 rounded text-primary font-mono text-sm" 
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                h1: ({ children }) => (
                  <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground terminal-text">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 mt-8 text-foreground terminal-text">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 mt-6 text-foreground terminal-text">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 text-muted-foreground leading-relaxed terminal-text">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-4 ml-6 space-y-2 text-muted-foreground">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="terminal-text">
                    <span className="text-primary mr-2">•</span>
                    {children}
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="pl-4 my-4 italic text-muted-foreground">
                    {children}
                  </blockquote>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-link text-primary hover:underline"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;