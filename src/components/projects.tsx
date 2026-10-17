import { useState } from "react";
import { projects } from "../data/projects";

const filters = ["All work", "Platforms & cloud", "Full-Stack Development", "DevOps"] as const;
type Filter = (typeof filters)[number];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All work");
  const visibleProjects = projects.filter((project) => filter === "All work" || project.category === filter);

  return (
    <section id="projects" className="container section" aria-labelledby="projects-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / Featured work</p>
          <h2 id="projects-title">Built to make <em>a difference.</em></h2>
        </div>
        <p>A selection of the platforms and experiences I've helped bring to life.</p>
      </div>
      <div className="project-filters" role="group" aria-label="Filter selected work">
        {filters.map((item) => (
          <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">{visibleProjects.length} projects shown</p>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article className="project-card" key={project.slug}>
            <a className="project-link" href={`#/case-studies/${project.slug}`} aria-labelledby={`${project.slug}-title ${project.slug}-cta`}>
              <div className={`project-art ${project.motif}`} aria-hidden="true">
                <div className="mini-window">
                  <div className="window-bar"><i /><i /><i /></div>
                  <div className="window-content">
                    <span className="window-symbol">{project.motif === "marketplace" ? "m." : project.motif === "deployment" ? "↗" : project.motif === "pipeline" ? "→" : "✳"}</span>
                    <div className="window-lines"><span /><span /><span /></div>
                    <div className="window-tiles"><span /><span /><span /></div>
                  </div>
                </div>
                <span className="project-art-caption">{project.label}</span>
              </div>
              <div className="project-body">
                <h3 id={`${project.slug}-title`}>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tags" aria-label="Technologies">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
                <span className="button button-primary project-cta" id={`${project.slug}-cta`}>
                  View case study <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
