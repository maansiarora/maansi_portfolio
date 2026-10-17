import { useEffect, useRef, useState } from "react";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/about";
import Contact from "./components/contact";
import CaseStudy from "./components/case-study";
import { projects } from "./data/projects";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState(() => window.location.hash);
  const mainRef = useRef<HTMLElement>(null);
  const caseStudySlug = hash.startsWith("#/case-studies/")
    ? hash.slice("#/case-studies/".length)
    : null;

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const project = projects.find((item) => item.slug === caseStudySlug);
    document.title = caseStudySlug !== null
      ? `${project?.title ?? "Case study not found"} | Maansi Arora`
      : "Maansi Arora | Portfolio";
    if (caseStudySlug !== null) {
      mainRef.current?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: "instant" });
    } else if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [caseStudySlug, hash]);

  return (
    <>
      <a className="skip-link" href="#main" onClick={(event) => {
        event.preventDefault();
        mainRef.current?.focus();
        mainRef.current?.scrollIntoView();
      }}>Skip to content</a>
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
      <main id="main" ref={mainRef} tabIndex={-1}>
        {caseStudySlug !== null ? <CaseStudy slug={caseStudySlug} /> : (
          <>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </>
        )}
      </main>
      <footer className="container footer">
        <a className="wordmark" href="#home">maansi<span>.</span></a>
        <a href="#home">Back to top </a>
      </footer>
    </>
  );
}

export default App;