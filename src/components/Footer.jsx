import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/committees">Committees</Link>
        <Link to="/cfp">Call For Papers</Link>
        <Link to="/authors">Information For Authors</Link>
        <Link to="/speakers">Keynote Speakers</Link>
        <Link to="/schedule">Program Schedule</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/travel">Lodging & Travel</Link>
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