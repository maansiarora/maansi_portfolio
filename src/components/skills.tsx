const areas = [
  { number: "01", title: "Developer Experience", description: "Putting engineers at the centre of the tools they use every day.", skills: ["Backstage", "React", "TypeScript", "Internal products"] },
  { number: "02", title: "Platform Engineering", description: "Building dependable foundations for better software delivery.", skills: ["GitLab CI/CD", "Kubernetes", "Delivery platforms"] },
  { number: "03", title: "Cloud & Automation", description: "Simplifying complexity with repeatable, thoughtful automation.", skills: ["AWS", "Azure", "CloudFormation", "Automation"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="container">
        <p className="eyebrow">03 / What I bring</p>
        <h2 id="skills-title">The tools change.<br /><em>The intention stays.</em></h2>
        <div className="skills-grid">
          {areas.map((area) => (
            <article className="skill-card" key={area.number}>
              <span className="skill-number">{area.number} /</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
              <ul className="tags" aria-label={`${area.title} skills`}>
                {area.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
