export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">01 / A little about me</p>
          <h2 id="about-title">An engineer's mind.<br /><em>A human-first approach.</em></h2>
          {/* <div className="location-note"><span className="status-dot" /> Based in Melbourne, Australia</div> */}
        </div>
        <div className="about-copy">
          <p className="lead">
            I'm a Software Engineer based in Melbourne working at Telstra, where I
            help build and support platforms that enable engineers to deliver
            software efficiently and securely.
          </p>
          <p>
            My work spans Developer Experience, CI/CD platforms, cloud
            infrastructure, automation and internal product development. What
            excites me most is combining technical problem solving with thoughtful
            design to create experiences that are intuitive, scalable and genuinely useful.
          </p>
          <p>
            Recently I've worked on expansion of deployment zones, developer
            marketplace, CI/CD modernisation and platform reliability initiatives
            used by engineering teams across the organisation.
          </p>
        </div>
      </div>
    </section>
  );
}
