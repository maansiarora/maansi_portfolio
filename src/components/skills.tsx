const skills = [
  "AWS",
  "Kubernetes",
  "GitLab",
  "CloudFormation",
  "React",
  "TypeScript",
  "Backstage",
  "Developer Experience",
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-24">
      <h2 className="mb-12 text-4xl font-bold">
        Skills
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-full bg-zinc-800 px-5 py-2"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}