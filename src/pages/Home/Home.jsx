import { useEffect, useState } from "react";
import "./Home.css";
import kiit from "../../assets/kiit.png";
import salford from "../../assets/salford.png";
import bu from "../../assets/british-university.png";
import ieeeapu from "../../assets/ieee-apu.png";
import ieee from "../../assets/ieee.png";
function Home() {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2026-08-08T00:00:00");
    const now = new Date();
    const diff = targetDate - now;

    return {
      days: diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : 0,
      hours: diff > 0 ? Math.floor((diff / (1000 * 60 * 60)) % 24) : 0,
      minutes: diff > 0 ? Math.floor((diff / 1000 / 60) % 60) : 0,
      seconds: diff > 0 ? Math.floor((diff / 1000) % 60) : 0,
    };
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container">
      <div className="title-box">

        <div className="conference-box">
          <p className="top-text">
            International Conference on Advancements in Smart, Secure and Intelligent Computing
          </p>

          <p className="sub-text">
            KIIT-DU Campus, Bhubaneswar, India
          </p>

          <h1 className="main-title">ASSIC 2026</h1>

          <div className="divider"></div>

          <h2 className="university">KIIT UNIVERSITY</h2>
          <p className="country">India</p>

          <button className="mode-btn">HYBRID MODE</button>

          <div className="info-row">
            <div>
              <p className="label">WHEN</p>
              <p className="value">08<sup>th</sup> – 10<sup>th</sup> Aug, 2026</p>
            </div>

            <div>
              <p className="label">WHERE</p>
              <p className="value">Bhubaneswar, India</p>
            </div>

            <div>
              <p className="label">HOSTED BY</p>
              <p className="value">KIIT University</p>
            </div>
          </div>
        </div>

        <div className="timer-box">
          <div className="time-item">
            <h1>{time.days}</h1>
            <span>Days</span>
          </div>

          <div className="time-item">
            <h1>{time.hours}</h1>
            <span>Hours</span>
          </div>

          <div className="time-item">
            <h1>{time.minutes}</h1>
            <span>Minutes</span>
          </div>

          <div className="time-item">
            <h1>{time.seconds}</h1>
            <span>Seconds</span>
          </div>
        </div>
        <div className="partners-section">
          <div className="partners-grid">
            <div className="partner-card sponsor-card">
              <img src={ieee} alt="IEEE Sponsors" className="sponsor-image" />
            </div>

            <div className="partner-card association-card">
              <h2 className="section-heading">In Association with</h2>

              <div className="assoc-stack">
                <img src={salford} alt="University of Salford" className="assoc-logo assoc-logo-top" />
                <img src={bu} alt="British University in Dubai" className="assoc-logo assoc-logo-mid" />
                <img src={ieeeapu} alt="IEEE APU Student Branch" className="assoc-logo assoc-logo-bottom" />
              </div>

              <p className="association-text">
                (Asia Pacific University IEEE Student Branch, MALAYSIA)
              </p>

              <a
                href="https://cmt3.research.microsoft.com/ASSIC2026/Submission/Index"
                target="_blank"
                rel="noopener noreferrer"
                className="callpapers-link"
              >
                Call For Papers
              </a>
            </div>

            <div className="partner-card hosted-card">
              <h2 className="section-heading hosted-heading">Hosted By</h2>

              <div className="host-wrap">
                <img src={kiit} alt="KIIT University" className="host-image" />
                <div className="kiit-pill">KIIT University</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;