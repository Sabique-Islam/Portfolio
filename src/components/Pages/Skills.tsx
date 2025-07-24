import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/shadcn-card";
import { Code, Layers, Wrench, Cloud } from 'lucide-react';

type SkillCategory = 'Languages' | 'Frameworks' | 'Tools' | 'Platforms';

function Skills() {
  const skills: Record<SkillCategory, string[]> = {
    Languages: ['Python', 'JavaScript', 'TypeScript', 'C', 'C++'],
    Frameworks: ['React.js', 'Next.js', 'Flask'],
    Tools: ['Git', 'Docker', 'Jupyter', 'Streamlit'],
    Platforms: ['GitHub', 'Google Colab'],
  };

  const categoryIcons: Record<SkillCategory, React.ReactNode> = {
    Languages: <Code className="w-6 h-6 text-black dark:text-white" />,
    Frameworks: <Layers className="w-6 h-6 text-black dark:text-white" />,
    Tools: <Wrench className="w-6 h-6 text-black dark:text-white" />,
    Platforms: <Cloud className="w-6 h-6 text-black dark:text-white" />,
  };

  return (
    <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <Card
              key={category}
              className="bg-gray-100 dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-2xl transition-colors"
            >
              <CardHeader className="flex flex-col items-center justify-center space-y-3 py-6">
                <div className="p-3 rounded-full bg-gray-200 dark:bg-zinc-800">
                  {categoryIcons[category as SkillCategory]}
                </div>
                <CardTitle className="text-lg font-semibold">{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2 justify-center p-6">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-200 dark:bg-zinc-800 text-black dark:text-white rounded-full px-3 py-1 text-sm font-medium cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;