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
            <h2> Email </h2>
            <a href="mailto: info@mlrinstitutions.ac.in"> info@mlrinstitutions.ac.in</a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">☎</div>
            <h2>Contact No</h2>
            <a href="tel:+917751995740">+91 9652226061</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;