import { useEffect, useState } from "react";
import "./Home.css";
import kiit from "../../assets/kiit.png";
import salford from "../../assets/salford.png";
import bu from "../../assets/british-university.png";
import ieeeapu from "../../assets/ieee-apu.png";
import ieee from "../../assets/ieee.png";
import srk from "../../assets/srk.png";
import ss from "../../assets/ss.png";
import sr from "../../assets/sr.png";
import kfs from "../../assets/kfs.png";
import tg from "../../assets/tg.png";
import a from "../../assets/1.png";
import b from "../../assets/2.png";
import c from "../../assets/3.png";
import d from "../../assets/4.png";
import e from "../../assets/5.png";
import f from "../../assets/6.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";

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

        {/* HERO SECTION with background image */}
        <div className="hero-section">
          <div className="conference-box">
            <p className="top-text">
              International Conference on Advancements in Smart, Secure and Intelligent Computing
            </p>

            <p className="sub-text">
              KIIT-DU Campus, Bhubaneswar, India
            </p>

            <h1 className="main-title" style={{ color: 'white' }}>ASSIC 2026</h1>

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

          {/* TIMER — sits right below the card, still inside hero bg */}
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
        </div>

        {/* PARTNERS SECTION */}
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

          {/* FEATURE SECTION */}
          <div className="feature-section">
            <div className="feature-grid">
              {/* SPEAKERS CAROUSEL */}
              <div className="feature-card side-card">
                <div className="feature-head">Speakers details of ASSIC 2026</div>
                <div className="marquee-viewport">
                  <div className="marquee-track">
                    <div className="media-item">
                      <img src={srk} alt="Speaker" />
                      <div className="media-caption">
                        <strong>Dr. Sivaramakrishnan R</strong>
                        <span>Guruvayur, Chief AI Scientist, aaquarian.ai, Dubai</span>
                      </div>
                    </div>
                    <div className="media-item">
                      <img src={ss} alt="Speaker" />
                      <div className="media-caption">
                        <strong>Mr. Sunil Sabat</strong>
                        <span>Microsoft</span>
                      </div>
                    </div>
                    <div className="media-item">
                      <img src={sr} alt="Speaker" />
                      <div className="media-caption">
                        <strong>Dr. Shashidhar R</strong>
                        <span>Researcher, Samsung R & D, India</span>
                      </div>
                    </div>
                    <div className="media-item">
                      <img src={kfs} alt="Speaker" />
                      <div className="media-caption">
                        <strong>Prof. (Dr.) Khaled Fouad Sayed</strong>
                        <span></span>
                      </div>
                    </div>
                    <div className="media-item">
                      <img src={tg} alt="Speaker" />
                      <div className="media-caption">
                        <strong>Tarek Gaber</strong>
                        <span></span>
                      </div>
                    </div>

                    {/* duplicate set for smooth loop */}
                    <div className="media-item">
                      <img src={srk} alt="Speaker" />
                      <div className="media-caption">
                        <strong>Dr. Sivaramakrishnan R</strong>
                        <span>Guruvayur, Chief AI Scientist, aaquarian.ai, Dubai</span>
                      </div>
                    </div>
                    <div className="media-item">
                      <img src={ss} alt="Speaker" />
                      <div className="media-caption">
                        <strong>Mr. Sunil Sabat</strong>
                        <span>Microsoft</span>
                      </div>
                    </div>
                    <div className="media-item">
                      <img src={sr} alt="Speaker" />
                      <div className="media-caption">
                        <strong>Dr. Shashidhar R</strong>
                        <span>Researcher, Samsung R & D, India</span>
                      </div>
                    </div>
                    <div className="media-item">
                      <img src={kfs} alt="Speaker" />
                      <div className="media-caption">
                        <strong>Prof. (Dr.) Khaled Fouad Sayed</strong>
                        <span></span>
                      </div>
                    </div>
                    <div className="media-item">
                      <img src={tg} alt="Speaker" />
                      <div className="media-caption">
                        <strong>Tarek Gaber</strong>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="welcome-panel">
                <div className="welcome-badge">Welcome</div>
                <p>
                  <strong>Advancements in Smart, Secure and Intelligent Computing (ASSIC)</strong> aims to highlight recent development research works in Information and Communication Technologies so as to create intelligent systems driven by automation capabilities thereby addressing prevailing concerns faced by humanity. It aims to integrate the capabilities of computer units, social media, security methods and communication networks together with smart devices, internet technologies, big data analytics, computational intelligence and intelligent systems to realize various innovative applications. ASSIC can provide a platform in not only designing smart computing systems but also in incorporating machine intelligence based hi-tech system models with advanced security measures. It provides a premier interdisciplinary platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in modern technologies like Internet-of-Things, edge computing, cloud computing, secure intelligent frameworks and ubiquitous computing.
                </p>
              </div>

              {/* GLIMPSE CAROUSEL */}
              <div className="feature-card side-card">
                <div className="feature-head">Glimpse of previous editions of conference</div>
                <div className="marquee-viewport">
                  <div className="marquee-track">
                    <div className="media-item"><img src={a} alt="Conference glimpse" /></div>
                    <div className="media-item"><img src={b} alt="Conference glimpse" /></div>
                    <div className="media-item"><img src={c} alt="Conference glimpse" /></div>
                    <div className="media-item"><img src={d} alt="Conference glimpse" /></div>
                    <div className="media-item"><img src={e} alt="Conference glimpse" /></div>
                    <div className="media-item"><img src={f} alt="Conference glimpse" /></div>

                    {/* duplicate set for smooth loop */}
                    <div className="media-item"><img src={a} alt="Conference glimpse" /></div>
                    <div className="media-item"><img src={b} alt="Conference glimpse" /></div>
                    <div className="media-item"><img src={c} alt="Conference glimpse" /></div>
                    <div className="media-item"><img src={d} alt="Conference glimpse" /></div>
                    <div className="media-item"><img src={e} alt="Conference glimpse" /></div>
                    <div className="media-item"><img src={f} alt="Conference glimpse" /></div>
                  </div>
                </div>
              </div>
            </div>

            {/* HIGHLIGHT SECTION */}
            <div className="highlight-section">
              <div className="highlight-grid">
                <div className="highlight-card">
                  <img src={card1} alt="KIIT Campus" />
                  <div className="highlight-body">
                    <h3>Kalinga Institute Of Industrial Technology (KIIT)</h3>
                    <p>Deemed to be University</p>
                  </div>
                </div>

                <div className="highlight-card">
                  <img src={card2} alt="KISS Campus" />
                  <div className="highlight-body">
                    <h3>Kalinga Institute Of Social Sciences (KISS)</h3>
                    <p>A home for 30,000 indigenous children</p>
                  </div>
                </div>

                <div className="highlight-card">
                  <img src={card3} alt="Achyuta Samanta" />
                  <div className="highlight-body">
                    <h3>Achyuta Samanta</h3>
                    <p>Founder, KIIT &amp; KISS</p>
                  </div>
                </div>
              </div>

              <p className="cmt-note">
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;