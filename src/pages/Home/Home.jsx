import { useEffect, useState } from "react";
import "./Home.css";

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

      </div>
    </div>
  );
}

export default Home;