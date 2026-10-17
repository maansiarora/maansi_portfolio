const areas = [
  {
    number: "01",
    title: "Platform Engineering & Cloud",
    description:
      "Building scalable platforms, cloud infrastructure and delivery capabilities that help teams ship software reliably and efficiently.",
    skills: [
      "AWS",
      "Kubernetes",
      "Docker",
      "GitLab CI/CD",
      "FluxCD",
      "IaC",
      "Monitoring",
      "Automation"
    ],
  },
  {
    number: "02",
    title: "Full-Stack Development",
    description:
      "Developing modern applications and user experiences with a focus on usability, performance and maintainability.",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "REST APIs",
      "HTML & CSS",
      "UI/UX",
      "Accessibility"
    ],
  },
  {
  number: "03",
  title: "Ways of Working",
  description:
    "Approaching challenges with curiosity, collaboration and a continuous learning mindset.",
  skills: [
    "Adaptability",
    "Problem Solving",
    "Collaboration",
    "Continuous Learning",
    "Mentoring",
    "Communication",
  ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="container">
        <p className="eyebrow">03 / Core strengths</p>
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
