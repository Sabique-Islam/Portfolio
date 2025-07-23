import React from "react";
import { projects } from "../../lib/project";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Projects: React.FC = () => {
  return (
    <section className="relative w-full bg-white dark:bg-black transition-colors duration-500">
      <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-0 text-center select-none w-full pt-14 pb-8 top-0 z-[100]">
        Featured Projects
      </h2>

      {/* Cards */}
      {projects.map((project, i) => (
        <div
          key={project.title}
          className="h-screen w-full sticky top-0 z-10 flex items-start pt-26"
          style={{ zIndex: i + 1 }}
        >
          <Card
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            className="h-[90%] w-full bg-white dark:bg-black"
          >
            <div className="flex flex-col gap-8 items-center justify-center h-full w-full px-4">
              <h3 className="text-3xl md:text-5xl font-bold text-black dark:text-white text-center">
                {project.title}
              </h3>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 text-center max-w-2xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-5 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-lg font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            {/* Code View */}

              <div className="flex gap-4 flex-wrap justify-center mt-4">
                <Button
                  asChild
                  variant="secondary"
                  className="text-lg px-8 py-4"
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-lg"
                  >
                    View Code <span aria-hidden>↗</span>
                  </a>
                </Button>

            {/* Live Links */}
                {project.live && (
                  <Button
                    asChild
                    variant="default"
                    className="text-lg px-8 py-4"
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-lg"
                    >
                      Live Demo <span aria-hidden>↗</span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      ))}
    </section>
  );
};

export default Projects;