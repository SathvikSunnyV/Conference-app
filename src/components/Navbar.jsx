import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import mlritlogo from "../assets/mlritlogo.png";
import assiclogo from "../assets/assiclogo.png";

function Navbar() {
  const [archiveOpen, setArchiveOpen] = useState(false);
  const archiveRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (archiveRef.current && !archiveRef.current.contains(event.target)) {
        setArchiveOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-section">
          {/* <img src={mlritlogo} alt="MLRIT" className="logo" height={45} /> */}
          <img src={assiclogo} alt="ASSIC" className="logo" height={45} />
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/committees">Committees</Link>
          </li>
          <li>
            <Link to="/cfp">Call For Papers</Link>
          </li>
          <li>
            <Link to="/authors">Authors Info</Link>
          </li>
          <li>
            <Link to="/speakers">Keynote Speakers</Link>
          </li>
          <li>
            <Link to="/schedule">Program Schedule</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/travel">Travel Plan</Link>
          </li>
          <li>
            <Link to="/workshop">Workshop 2026</Link>
          </li>
          <li>
            <Link to="/special">Special Session 2026</Link>
          </li>

          <li ref={archiveRef} className="archive-item">
            <button
              type="button"
              className="archive-trigger"
              onClick={() => setArchiveOpen((prev) => !prev)}
            >
              Archive ▼
            </button>

            {archiveOpen && (
              <div className="archive-dropdown">
                <Link to="/archive/2022" onClick={() => setArchiveOpen(false)}>
                  Assic 2022
                </Link>
                <Link to="/archive/2024" onClick={() => setArchiveOpen(false)}>
                  Assic 2024
                </Link>
                <Link to="/archive/2025" onClick={() => setArchiveOpen(false)}>
                  Assic 2025
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;