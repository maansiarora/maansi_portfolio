import { projects } from "../data/projects";
import { caseStudies } from "../data/case-studies";

function CaseStudySections({ slug }: { slug: string }) {
  const content = caseStudies[slug];
  return (
    <div className="case-study-sections">
      <section className="case-study-section" aria-labelledby="architecture-title">
        <h2 id="architecture-title">Framework</h2>
        {content.architectureContent && (
          <div className="case-study-content">{content.architectureContent.trim()}</div>
        )}
        {content.architectureImage ? (
          <figure className="architecture-diagram">
            <a href={content.architectureImage.src} target="_blank" rel="noopener noreferrer" aria-label="View full-size architecture diagram (opens in a new tab)">
              <img src={content.architectureImage.src} alt={content.architectureImage.alt} />
            </a>
            <figcaption>
              <a className="text-link" href={content.architectureImage.src} target="_blank" rel="noopener noreferrer">
                View full-size diagram (opens in a new tab)
              </a>
            </figcaption>
          </figure>
        ) : (
          <figure className="architecture-placeholder">
            <div className="architecture-placeholder-art" aria-hidden="true">
              <span /><span /><span />
            </div>
            <figcaption>
              <span className="placeholder-label">Diagram placeholder</span>
              <p>{content.architecturePrompt}</p>
              <p className="architecture-placeholder-note">The shapes above are layout placeholders, not a representation of the actual architecture.</p>
            </figcaption>
          </figure>
        )}
      </section>
      {content.sections.map((section) => (
        <section className="case-study-section" key={section.id} aria-labelledby={`${section.id}-title`}>
          <h2 id={`${section.id}-title`}>{section.title}</h2>
          {section.content ? (
            <div className="case-study-content">{section.content.trim()}</div>
          ) : (
            <div className="case-study-placeholder">
              <span className="placeholder-label">Content placeholder</span>
              <p>{section.prompt}</p>
            </div>
          )}
        </section>
      ))}
      <a className="button button-primary" href="#projects">Back to featured work</a>
    </div>
  );
}

export default function CaseStudy({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  const content = project ? caseStudies[project.slug] : undefined;

  return (
    <section className="container section case-study" aria-labelledby="case-study-title">
      <a className="button button-primary" href="#projects">Back to featured work</a>
      <header className="case-study-hero">
        <p className="eyebrow">Case study{project ? ` / ${project.category}` : ""}</p>
        <h1 id="case-study-title">{project?.title ?? "Case study not found"}</h1>
        {project ? (
          <>
            <p className="case-study-description">{project.description}</p>
            {content?.duration && (
              <p className="case-study-duration"><span>Project duration</span> {content.duration}</p>
            )}
            <ul className="tags" aria-label="Technologies">
              {project.tech.map((tech) => <li key={tech}>{tech}</li>)}
            </ul>
          </>
        ) : (
          <p className="case-study-description">This case study does not exist. Return to selected work to explore the projects.</p>
        )}
      </header>
      {project && <CaseStudySections slug={project.slug} />}
    </section>
  );
}
