import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-shell">
        <div className="contact-header">
          <span className="contact-kicker">Get in touch</span>
          <h1>Contact Us</h1>
          <p>Reach out for conference-related queries, submission support, and coordination.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">✉</div>
            <h2>Conference Email</h2>
            <a href="mailto:assic.conf@gmail.com">assic.conf@gmail.com</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">☎</div>
            <h2>Conference Contact No</h2>
            <a href="tel:+917751995740">+91-7751995740</a>
            <a href="tel:+919437432185">+91-9437432185</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;