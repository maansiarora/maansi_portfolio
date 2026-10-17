import heroPortrait from "../assets/image-maansi.png";

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
          Engineering and Full-stack Development, with a passion for creating meaningful
          user experiences that make complex technology feel simple.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work 
          </a>
          <a className="text-link" href="#about">A little about me </a>
        </div>
      </div>
      <div className="hero-art">
        <img className="hero-portrait" src={heroPortrait} alt="Illustrated portrait of Maansi" />
      </div>
      {/* <div className="hero-bottom">
        <span>Complex technology. <em>Simple experiences.</em></span>
        <a href="#about">Scroll to discover <span aria-hidden="true">↓</span></a>
      </div> */}
    </section>
  );
}
