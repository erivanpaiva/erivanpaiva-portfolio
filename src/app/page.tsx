import Navbar from "@/src/components/Navbar";
import Hero from "@/src/sections/Hero";
import About from "@/src/sections/About";
import Projects from "@/src/sections/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
