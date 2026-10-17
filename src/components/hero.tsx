export default function Hero() {
  return (
    <section id="home" className="container hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Software engineer · Melbourne, AU</p>
        <h1 id="hero-title">Hi, I'm <em>Maansi.</em></h1>
        <p className="hero-statement">
          I build intuitive digital experiences backed by thoughtful engineering.
        </p>
        <p className="hero-description">
          Software Engineer specialising in Developer Experience, Platform
          Engineering and Cloud Automation, with a passion for creating meaningful
          user experiences that make complex technology feel simple.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#about">A little about me <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="hero-art" role="img" aria-label="An abstract stack of sage and cream platforms, representing design, engineering and experience working together">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <span className="art-spark spark-one">✳</span>
        <span className="art-spark spark-two">+</span>
        <div className="platform platform-bottom" />
        <div className="platform platform-middle" />
        <div className="platform platform-top"><span>m.</span></div>
        <span className="art-label label-top"><span /> Thoughtfully designed</span>
        <span className="art-label label-bottom"><span /> Built with purpose</span>
        <span className="art-caption">where engineering meets experience</span>
      </div>
      <div className="hero-bottom">
        <span>Complex technology. <em>Simple experiences.</em></span>
        <a href="#about">Scroll to discover <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
