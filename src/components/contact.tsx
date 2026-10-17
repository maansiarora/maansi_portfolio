export default function Contact() {
  return (
    <section id="contact" className="container section" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div>
          <p className="eyebrow">04 / Let's connect</p>
          <h2 id="contact-title">Good things start<br />with <em>a conversation.</em></h2>
          <p>Interested in developer experience, platforms, or making<br className="desktop-break" /> complex things feel simple? Let's connect.</p>
          <a className="button button-primary" href="https://github.com/maansiarora" target="_blank" rel="noopener noreferrer">
            Find me on GitHub <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <div className="contact-seal" aria-hidden="true"><span>thoughtfully</span><strong>m.</strong><span>built, always.</span></div>
        <p className="contact-location"><span className="status-dot" /> Melbourne, Australia</p>
      </div>
    </section>
  );
}
