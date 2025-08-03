import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn-card";
import { Code, Layers, Wrench, Cloud } from "lucide-react";

type SkillCategory = "Languages" | "Frameworks" | "Tools" | "Platforms";

function Skills() {
  const skills: Record<SkillCategory, string[]> = {
    Languages: ["Python", "JavaScript", "TypeScript", "C", "C++"],
    Frameworks: ["React.js", "Next.js", "Flask"],
    Tools: ["Git", "Docker", "Jupyter", "Streamlit"],
    Platforms: ["GitHub", "Google Colab"],
  };

  const categoryIcons: Record<SkillCategory, React.ReactNode> = {
    Languages: <Code className="w-8 h-8" />,
    Frameworks: <Layers className="w-8 h-8" />,
    Tools: <Wrench className="w-8 h-8" />,
    Platforms: <Cloud className="w-8 h-8" />,
  };

  return (
    <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-16 px-4 sm:px-6 lg:px-12 relative overflow-hidden">

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-black dark:text-white">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {Object.entries(skills).map(([category, items]) => (
            <Card
              key={category}
              className="bg-white dark:bg-black border border-black dark:border-white rounded-3xl"
            >
              <CardHeader className="flex flex-col items-center justify-center space-y-5 py-10 px-8">
                <div className="relative">
                  <div className="p-5 rounded-2xl bg-black dark:bg-white">
                    <div className="text-white dark:text-black">
                      {categoryIcons[category as SkillCategory]}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-center tracking-tight text-black dark:text-white">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-10">
                <div className="flex flex-wrap gap-3 justify-center">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-black dark:bg-white text-white dark:text-black rounded-xl px-5 py-2.5 text-base font-semibold border border-black dark:border-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
