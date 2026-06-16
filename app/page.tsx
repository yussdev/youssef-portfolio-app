import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
