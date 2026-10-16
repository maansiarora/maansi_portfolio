export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-6xl items-center px-8 overflow-hidden">
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10">
        <p className="mb-4 text-[#7D8F69]">
          Software Engineer
        </p>

        <h1 className="mb-6 text-7xl font-bold">
          Maansi Arora
        </h1>

        <p className="max-w-2xl text-xl text-zinc-400">
          Building developer platforms, cloud automation,
          CI/CD solutions and developer experiences that
          help engineering teams move faster.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-medium text-black"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-zinc-700 px-6 py-3"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}