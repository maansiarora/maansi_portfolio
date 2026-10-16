const projects = [
  {
    title: "Developer Marketplace",
    tech: "React • TypeScript • Backstage",
    description:
      "Designed and developed a marketplace-style experience to improve discovery of internal engineering products and templates.",
  },
  {
    title: "GitLab → Azure Deployment Zone",
    tech: "GitLab CI • Azure • Automation",
    description:
      "Built deployment workflows connecting GitLab pipelines with Azure deployment zones.",
  },
  {
    title: "QB Upgrade Automation",
    tech: "AWS • GitLab • Automation",
    description:
      "Reduced manual effort and improved consistency through upgrade automation workflows.",
  },
  {
    title: "CI/CD Migration",
    tech: "GitLab • Bamboo • DevOps",
    description:
      "Modernized delivery pipelines by migrating Bamboo workloads to GitLab.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-8 py-24">
      <h2 className="mb-12 text-4xl font-bold">
        Featured Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <div
  key={project.title}
  className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-400"
>
  <h3 className="mb-2 text-2xl font-semibold">
    {project.title}
  </h3>

  <p className="mb-4 text-sm text-cyan-400">
    {project.tech}
  </p>

  <p className="text-zinc-400">
    {project.description}
  </p>
</div>

            <p className="text-zinc-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}