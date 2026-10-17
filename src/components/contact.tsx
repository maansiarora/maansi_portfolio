import linkedinQr from "../assets/linkedin-qr.png";

export default function Contact() {
  return (
    <section id="contact" className="container section" aria-labelledby="contact-title">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">04 / Let's connect</p>
          <h2 id="contact-title">Good things start<br />with <em>a conversation.</em></h2>
          <p className="contact-description">
            Whether you'd like to discuss platform engineering, developer experience,
            technology opportunities or simply connect, I'd love to hear from you.
          </p>
          <p className="contact-email-label">Email me at</p>
          <a className="contact-email" href="mailto:maansiarora02@gmail.com">maansiarora02@gmail.com</a>
          
        </div>
        <div className="contact-social">
          <h3>LinkedIn</h3>
          <p>Scan to connect with me on LinkedIn</p>
          <figure className="contact-qr">
            <img src={linkedinQr} alt="QR code for Maansi's LinkedIn profile" />
          </figure>
        </div>
      </div>
    </section>
  );
}
