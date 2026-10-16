import Hero from "./components/Hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <main className="min-h-screen bg-[#F8F6F0] text-[#2F2A24]">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;