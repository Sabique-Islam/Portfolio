import Footer from "@/components/Pages/Footer";
import Hero from "@/components/Pages/Hero";
import { Navbar } from "@/components/Pages/Navbar";
import Projects from "@/components/Pages/Projects";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Projects/>
      <Navbar/>
      <Footer/>
    </div>
  );
}