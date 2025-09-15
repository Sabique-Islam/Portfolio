import { Metadata } from "next";
import Projects from "@/components/Pages/Projects";

export const metadata: Metadata = {
  title: "Projects | Sabique Islam",
  description: "Explore my latest projects in machine learning, web development, and software engineering.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Projects />
    </div>
  );
}