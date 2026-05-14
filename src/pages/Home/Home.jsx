// import srk from "../../assets/srk.png";
// import sr from "../../assets/sr.png";
// import kfs from "../../assets/kfs.png";
// import tg from "../../assets/tg.png";
import { useEffect, useState } from "react";
import "./Home.css";
import kiit from "../../assets/kiit.png";
import salford from "../../assets/salford.png";
import bu from "../../assets/british-university.png";
import ieeeapu from "../../assets/ieee-apu.png";
import ieee from "../../assets/ieee.png";
import a from "../../assets/1.png";
import b from "../../assets/2.png";
import c from "../../assets/3.png";
import d from "../../assets/4.png";
import e from "../../assets/5.png";
import f from "../../assets/6.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import mlritlogo from "../../assets/mlritlogo.png";
import ss from "../../assets/ss.png";
import vs from "../../assets/vs.png";
import rs from "../../assets/rs.png";
import dre from "../../assets/dre.png";
import smt from "../../assets/smt.png";
import ckm from "../../assets/ckm.png";
import rp from "../../assets/rp.png";

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
    <div className="assic-home-container">
      <div className="assic-home-title-box">
        <div className="assic-home-hero-section">
          <div className="assic-home-conference-box">
            <p className="assic-home-top-text">
              International Conference on Advancements in Smart, Secure and Intelligent Computing
            </p>

            <p className="assic-home-sub-text">
              MLRIT Campus, Hyderabad, India
            </p>

            <h1 className="assic-home-main-title" style={{ color: "white" }}>
              ICASSIC 2026
            </h1>

            <div className="assic-home-divider"></div>

            <h2 className="assic-home-university">MLR Institute of Technology</h2>
            <p className="assic-home-country">India</p>

            <button className="assic-home-mode-btn">HYBRID MODE</button>

            <div className="assic-home-info-row">
              <div>
                <p className="assic-home-label">WHEN</p>
                <p className="assic-home-value">
                  08<sup>th</sup> – 10<sup>th</sup> Aug, 2026
                </p>
              </div>

              <div>
                <p className="assic-home-label">WHERE</p>
                <p className="assic-home-value">Hyderabad, India</p>
              </div>

              <div>
                <p className="assic-home-label">HOSTED BY</p>
                <p className="assic-home-value">MLRIT </p>
              </div>
            </div>
          </div>

          <div className="assic-home-timer-box">
            <div className="assic-home-time-item">
              <h1>{time.days}</h1>
              <span>Days</span>
            </div>

            <div className="assic-home-time-item">
              <h1>{time.hours}</h1>
              <span>Hours</span>
            </div>

            <div className="assic-home-time-item">
              <h1>{time.minutes}</h1>
              <span>Minutes</span>
            </div>

            <div className="assic-home-time-item">
              <h1>{time.seconds}</h1>
              <span>Seconds</span>
            </div>
          </div>
        </div>

        <div className="assic-home-partners-section">
          <div className="assic-home-partners-grid">
            <div className="assic-home-partner-card assic-home-sponsor-card">
              <img src={ieee} alt="IEEE Sponsors" className="assic-home-sponsor-image" />
            </div>

            <div className="assic-home-partner-card assic-home-association-card">
              <h2 className="assic-home-section-heading">In Association with</h2>

              <div className="assic-home-assoc-stack">
                <img src={salford} alt="University of Salford" className="assic-home-assoc-logo assic-home-assoc-logo-top" />
                <img src={bu} alt="British University in Dubai" className="assic-home-assoc-logo assic-home-assoc-logo-mid" />
                <img src={ieeeapu} alt="IEEE APU Student Branch" className="assic-home-assoc-logo assic-home-assoc-logo-bottom" />
              </div>

              <p className="assic-home-association-text">
                (Asia Pacific University IEEE Student Branch, MALAYSIA)
              </p>

              <a
                href="https://cmt3.research.microsoft.com/ASSIC2026/Submission/Index"
                target="_blank"
                rel="noopener noreferrer"
                className="assic-home-callpapers-link"
              >
                Call For Papers
              </a>
            </div>

            <div className="assic-home-partner-card assic-home-hosted-card">
              <h2 className="assic-home-section-heading assic-home-hosted-heading">Hosted By</h2>

              <div className="assic-home-host-wrap">
                <img src={mlritlogo} alt="KIIT University" className="assic-home-host-image" />
                <div className="assic-home-kiit-pill">MLRIT</div>
              </div>
            </div>
          </div>

          <div className="assic-home-feature-section">
            <div className="assic-home-feature-grid">
              <div className="assic-home-feature-card assic-home-side-card">
                <div className="assic-home-feature-head">Speakers details of ICASSIC 2026</div>

                <div className="assic-home-marquee-viewport">
                  <div className="assic-home-marquee-track assic-home-speaker-track">

                    {/* ORIGINAL SET */}
                    <div className="assic-home-media-item">
                      <img src={vs} alt="Speaker" />
                      <div className="assic-home-media-caption">
                        <strong>Dr. Velagapudi Sreenivas</strong>
                        <span>
                          Professor & HOD, Department of CSE( Data Science), SRK Institute
                          of Technology, Vijayawada
                        </span>
                      </div>
                    </div>

                    <div className="assic-home-media-item">
                      <img src={ss} alt="Speaker" />
                      <div className="assic-home-media-caption">
                        <strong>Dr. C. Syamsundar</strong>
                        <span>
                          Director – Research and Development Sreenidhi University,
                          Hyderabad, Telangana
                        </span>
                      </div>
                    </div>

                    <div className="assic-home-media-item">
                      <img src={rs} alt="Speaker" />
                      <div className="assic-home-media-caption">
                        <strong>Dr. M. RajaSekar</strong>
                        <span>
                          Professor, Department of CSE(DataScience), VNR Vignana Jyothi
                          Institute of Engineering & Technology, Hyderabad, Telangana
                        </span>
                      </div>
                    </div>

                    <div className="assic-home-media-item">
                      <img src={dre} alt="Speaker" />
                      <div className="assic-home-media-caption">
                        <strong>Dr. Damodar Reddy Edla</strong>
                        <span>
                          Associate Professor, Department of Computer Science and Engineering,
                          National Institute of Technology, Goa
                        </span>
                      </div>
                    </div>

                    <div className="assic-home-media-item">
                      <img src={smt} alt="Speaker" />
                      <div className="assic-home-media-caption">
                        <strong>Dr. Sabu M. Thampi</strong>
                        <span>
                          Professor, School of Computer Science & Engineering (SoCSE), On
                          sabbatical (2026) Coordinator, Connected Systems & Intelligence Lab
                        </span>
                      </div>
                    </div>

                    <div className="assic-home-media-item">
                      <img src={ckm} alt="Speaker" />
                      <div className="assic-home-media-caption">
                        <strong>C Krishna Mohan</strong>
                        <span>
                          Professor (HAG), Department of Computer Science and Engineering,
                          Former Dean of Public and Corporate Relations, Indian Institute of
                          Technology, Hyderabad
                        </span>
                      </div>
                    </div>

                    <div className="assic-home-media-item">
                      <img src={rp} alt="Speaker" />
                      <div className="assic-home-media-caption">
                        <strong>Prof. R Padmavathy</strong>
                        <span>
                          Professor Department of Computer Science and Engineering Information
                          NIT Warangal
                        </span>
                      </div>
                    </div>

                    {/* DUPLICATE SET FOR SEAMLESS LOOP */}

                    <div className="assic-home-media-item">
                      <img src={vs} alt="Speaker" />
                      <div className="assic-home-media-caption">
                        <strong>Dr. Velagapudi Sreenivas</strong>
                        <span>
                          Professor & HOD, Department of CSE( Data Science), SRK Institute
                          of Technology, Vijayawada
                        </span>
                      </div>
                    </div>

                    <div className="assic-home-media-item">
                      <img src={ss} alt="Speaker" />
                      <div className="assic-home-media-caption">
                        <strong>Dr. C. Syamsundar</strong>
                        <span>
                          Director – Research and Development Sreenidhi University,
                          Hyderabad, Telangana
                        </span>
                      </div>
                    </div>

                    <div className="assic-home-media-item">
                      <img src={rs} alt="Speaker" />
                      <div className="assic-home-media-caption">
                        <strong>Dr. M. RajaSekar</strong>
                        <span>
                          Professor, Department of CSE(DataScience), VNR Vignana Jyothi
                          Institute of Engineering & Technology, Hyderabad, Telangana
                        </span>
                      </div>
                    </div>

                    <div className="assic-home-media-item">
                      <img src={dre} alt="Speaker" />
                      <div className="assic-home-media-caption">
                        <strong>Dr. Damodar Reddy Edla</strong>
                        <span>
                          Associate Professor, Department of Computer Science and Engineering,
                          National Institute of Technology, Goa
                        </span>
                      </div>
                    </div>

                    <div className="assic-home-media-item">
                      <img src={smt} alt="Speaker" />
                      <div className="assic-home-media-caption">
                        <strong>Dr. Sabu M. Thampi</strong>
                        <span>
                          Professor, School of Computer Science & Engineering (SoCSE), On
                          sabbatical (2026) Coordinator, Connected Systems & Intelligence Lab
                        </span>
                      </div>
                    </div>

                    <div className="assic-home-media-item">
                      <img src={ckm} alt="Speaker" />
                      <div className="assic-home-media-caption">
                        <strong>C Krishna Mohan</strong>
                        <span>
                          Professor (HAG), Department of Computer Science and Engineering,
                          Former Dean of Public and Corporate Relations, Indian Institute of
                          Technology, Hyderabad
                        </span>
                      </div>
                    </div>

                    <div className="assic-home-media-item">
                      <img src={rp} alt="Speaker" />
                      <div className="assic-home-media-caption">
                        <strong>Prof. R Padmavathy</strong>
                        <span>
                          Professor Department of Computer Science and Engineering Information
                          NIT Warangal
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="assic-home-welcome-panel">
                <div className="assic-home-welcome-badge">Welcome</div>
                <p>
                  <strong>International Conference on Advancements in Smart, Secure and Intelligent Computing (ICASSIC)</strong> <br /> aims to highlight recent development research works in Information and Communication Technologies so as to create intelligent systems driven by automation capabilities thereby addressing prevailing concerns faced by humanity. It aims to integrate the capabilities of computer units, social media, security methods and communication networks together with smart devices, internet technologies, big data analytics, computational intelligence and intelligent systems to realize various innovative applications. ICASSIC can provide a platform in not only designing smart computing systems but also in incorporating machine intelligence based hi-tech system models with advanced security measures. It provides a premier interdisciplinary platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in modern technologies like Internet-of-Things, edge computing, cloud computing, secure intelligent frameworks and ubiquitous computing.
                </p>
              </div>

              <div className="assic-home-feature-card assic-home-side-card">
                <div className="assic-home-feature-head">Glimpse of previous editions of conference</div>
                <div className="assic-home-marquee-viewport">
                  <div className="assic-home-marquee-track">
                    <div className="assic-home-media-item"><img src={a} alt="Conference glimpse" /></div>
                    <div className="assic-home-media-item"><img src={b} alt="Conference glimpse" /></div>
                    <div className="assic-home-media-item"><img src={c} alt="Conference glimpse" /></div>
                    <div className="assic-home-media-item"><img src={d} alt="Conference glimpse" /></div>
                    <div className="assic-home-media-item"><img src={e} alt="Conference glimpse" /></div>
                    <div className="assic-home-media-item"><img src={f} alt="Conference glimpse" /></div>

                    <div className="assic-home-media-item"><img src={a} alt="Conference glimpse" /></div>
                    <div className="assic-home-media-item"><img src={b} alt="Conference glimpse" /></div>
                    <div className="assic-home-media-item"><img src={c} alt="Conference glimpse" /></div>
                    <div className="assic-home-media-item"><img src={d} alt="Conference glimpse" /></div>
                    <div className="assic-home-media-item"><img src={e} alt="Conference glimpse" /></div>
                    <div className="assic-home-media-item"><img src={f} alt="Conference glimpse" /></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="assic-home-highlight-section">
              <div className="assic-home-highlight-grid">
                <div className="assic-home-highlight-card">
                  <img src={card1} alt="MLRIT Campus" />
                  <div className="assic-home-highlight-body">
                    <h3>Marri Laxman Reddy Institute of Technology (MLRIT)</h3>
                    <p>Engineering ideas, Engineering Careers</p>
                  </div>
                </div>

                <div className="assic-home-highlight-card">
                  <img src={card2} alt="MLRIT Campus" />
                  <div className="assic-home-highlight-body">
                    <h3>Marri Laxman Reddy Group of Institutions </h3>
                    <p>A Multidisciplinary Hub for Engineering, Medical and Pharmacy Education</p>
                  </div>
                </div>

                <div className="assic-home-highlight-card">
                  <img src={card3} alt="MLR" />
                  <div className="assic-home-highlight-body">
                    <h3>Marri Laxman Reddy</h3>
                    <p>founder-chairman of the MLR Group of Institutions </p>
                  </div>
                </div>
              </div>

              <p className="assic-home-cmt-note">
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
