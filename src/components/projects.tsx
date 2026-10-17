import { useState } from "react";

const filters = ["All work", "Developer experience", "Platforms & cloud"] as const;
type Filter = (typeof filters)[number];

const projects = [
  {
    title: "Developer Marketplace",
    category: "Developer experience",
    description: "Making internal engineering products easier to discover, understand and use.",
    detail: "A marketplace-style experience for internal engineering products and templates, bringing product discovery and self-service into one place.",
    tech: ["React", "TypeScript", "Backstage"],
    motif: "marketplace",
    label: "Discover. Build. Create.",
  },
  {
    title: "Deployment Zone Expansion",
    category: "Platforms & cloud",
    description: "Connecting delivery pipelines with cloud deployment environments.",
    detail: "Deployment workflows connecting GitLab pipelines with Azure deployment zones, supporting the expansion of engineering delivery platforms.",
    tech: ["GitLab CI", "Azure", "Automation"],
    motif: "deployment",
    label: "From commit to cloud.",
  },
  {
    title: "CI/CD Modernisation",
    category: "Platforms & cloud",
    description: "Helping engineering teams move towards a more modern delivery experience.",
    detail: "Modernising delivery pipelines by migrating Bamboo workloads to GitLab, with a focus on maintainable workflows and the developer experience.",
    tech: ["GitLab", "Bamboo", "CI/CD"],
    motif: "pipeline",
    label: "A clearer path to delivery.",
  },
  {
    title: "Upgrade Automation",
    category: "Platforms & cloud",
    description: "Turning repetitive platform tasks into consistent, automated workflows.",
    detail: "Upgrade automation workflows focused on reducing manual effort and improving consistency across platform operations.",
    tech: ["AWS", "GitLab", "Automation"],
    motif: "automation",
    label: "Less repetition. More possibility.",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All work");
  const visibleProjects = projects.filter((project) => filter === "All work" || project.category === filter);

  return (
    <section id="projects" className="container section" aria-labelledby="projects-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / Selected work</p>
          <h2 id="projects-title">Built to make <em>a difference.</em></h2>
        </div>
        <p>A selection of the platforms and experiences<br className="desktop-break" /> I've helped bring to life.</p>
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
          <article className="project-card" key={project.title}>
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
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tags" aria-label="Technologies">{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul>
              <details>
                <summary>About this work <span className="details-icon" aria-hidden="true">+</span></summary>
                <p>{project.detail}</p>
                <p className="project-note">Internal work at Telstra. Source code is not public.</p>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
