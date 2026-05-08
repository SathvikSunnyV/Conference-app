import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/committees">Committees</a>
        <a href="/cfp">Call For Papers</a>
        <a href="/authors">Information For Authors</a>
        <a href="/speakers">Keynote Speakers</a>
        <a href="/schedule">Program Schedule</a>
        <a href="/registration">Registration</a>
        <a href="/travel">Lodging & Travel</a>
      </div>

      <p className="footer-text">
        2026 International Conference on Advance Smart, Secure and Intelligent Computing |
        Designed by <span className="highlight"> Sathvik V, student at MLRIT </span> |
        © Copyright All rights reserved
      </p>

      <div className="social-icons">
        <span>F</span>
        <span>X</span>
      </div>
    </footer>
  );
}

export default Footer;