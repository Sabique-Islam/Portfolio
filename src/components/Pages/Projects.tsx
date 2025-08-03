import React from "react";
import { projects } from "../../lib/project";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Projects: React.FC = () => {
  return (
    <section className="relative w-full bg-white dark:bg-black transition-colors duration-500">
      {/* Title (Sticky)*/}
      <div className="sticky top-0 z-[100] bg-white dark:bg-black">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white text-center select-none w-full pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-4 sm:pb-6 md:pb-8">
          Featured Projects
        </h2>
      </div>

      {/* Desktop: Stacked Cards | Mobile: Regular Grid */}
      <div className="lg:block hidden">
        {/* Desktop Sticky Stack */}
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="h-screen w-full sticky top-0 z-10 flex items-start pt-20"
            style={{ zIndex: i + 1 }}
          >
            <Card
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              className="h-[90%] w-full bg-white dark:bg-black mx-4 xl:mx-8"
            >
              <div className="flex flex-col gap-6 xl:gap-8 items-center justify-center h-full w-full px-6 xl:px-8">
                <h3 className="text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black dark:text-white text-center">
                  {project.title}
                </h3>
                <p className="text-lg xl:text-xl 2xl:text-2xl text-gray-700 dark:text-gray-300 text-center max-w-4xl leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 xl:gap-4 justify-center max-w-4xl">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 xl:px-5 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm xl:text-lg font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 xl:gap-6 flex-wrap justify-center mt-4">
                  <Button
                    asChild
                    variant="secondary"
                    className="text-base xl:text-lg px-6 xl:px-8 py-3 xl:py-4"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      View Code <span aria-hidden>↗</span>
                    </a>
                  </Button>
                  {project.live && (
                    <Button
                      asChild
                      variant="default"
                      className="text-base xl:text-lg px-6 xl:px-8 py-3 xl:py-4"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
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
      </div>

      {/* Mobile & Tablet (Regular Grid Layout) */}
      <div className="lg:hidden block px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="w-full bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg"
            >
              {/* Image at top */}
              <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Project Content below image (Mobile Screens)*/}
              <div className="flex flex-col gap-4 sm:gap-6 items-center justify-center w-full p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white text-center">
                  {project.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs sm:text-sm md:text-base font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 sm:gap-4 flex-col sm:flex-row justify-center mt-4 w-full sm:w-auto">
                  <Button
                    asChild
                    variant="secondary"
                    className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Code <span aria-hidden>↗</span>
                    </a>
                  </Button>
                  {project.live && (
                    <Button
                      asChild
                      variant="default"
                      className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        Live Demo <span aria-hidden>↗</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
