"use client";

import Footer from "@/components/Pages/Footer";
import Hero from "@/components/Pages/Hero";
import Projects from "@/components/Pages/Projects";
import Skills from "@/components/Pages/Skills";
import { ThemeToggle } from "@/components/theme-toggle";
import ScrollToTopOnReload from "@/components/ScrollToTopOnReload";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTopOnReload />
      <ThemeToggle />
      
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}