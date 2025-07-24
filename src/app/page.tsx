import Footer from "@/components/Pages/Footer";
import Hero from "@/components/Pages/Hero";
import { Navbar } from "@/components/Pages/Navbar";
import Projects from "@/components/Pages/Projects";
import Skills from "@/components/Pages/Skills";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Skills/>
      <Navbar/>
      <Footer/>
    </div>
  );
}