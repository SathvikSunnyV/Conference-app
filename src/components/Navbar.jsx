// Navbar.jsx
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <div className="logo-section">
        <img src="/logo1.png" alt="SSIC" className="logo" />
        <img src="/logo2.png" alt="KIIT" className="logo" />
      </div>

      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/committees">Committees</Link></li>
          <li><Link to="/cfp">Call For Papers</Link></li>
          <li><Link to="/authors">Authors Info</Link></li>
          <li><Link to="/speakers">Keynote Speakers</Link></li>
          <li><Link to="/schedule">Program Schedule</Link></li>
          <li><Link to="/registration">Registration</Link></li>
          <li><Link to="/travel">Travel Plan</Link></li>
          <li><Link to="/workshop">Workshop 2026</Link></li>
          <li><Link to="/special">Special Session 2026</Link></li>
          <li><Link to="/archive">Archive ▼</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;