import { useState } from "react";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <nav className="container navigation" aria-label="Main navigation">
          <a className="wordmark" href="#home" aria-label="Maansi Arora, home">
            maansi<span>.</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="navigation-links"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <div id="navigation-links" className={`nav-links${menuOpen ? " is-open" : ""}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Featured work</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Expertise</a>
            <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
              Let's connect
            </a>
          </div>
        </nav>
      </header>
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="container footer">
        <a className="wordmark" href="#home">maansi<span>.</span></a>
        <a href="#home">Back to top </a>
      </footer>
    </>
  );
}

export default App;