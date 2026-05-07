import React, { useEffect, useRef, useState } from "react";
import "./SpecialSession.css";

import rana from "../../assets/rana.png";
import hameed from "../../assets/hameed.png";

function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`ss-reveal ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function PersonCard({ image, title, name, desc, email }) {
  return (
    <div className="person-card">
      <img src={image} alt={name} />

      <h3>{title}</h3>

      <p className="name">{name}</p>

      <p className="desc">{desc}</p>

      <p className="email">
        Email: {email}
      </p>
    </div>
  );
}

function SpecialSession() {
  return (
    <div className="ss-page">

      {/* TITLE */}
      <div className="ss-title-wrapper">
        <div className="title-box">
          <h2>Special Session</h2>
        </div>
      </div>

      <div className="ss-content">

        <Reveal>
          <h3 className="main-title">
            Special Session Call for papers
          </h3>

          <div className="session-details">

            <p>
              <strong>Title:</strong> Next-Generation Augmented Intelligence:
              Foundations, Architectures, and Emerging Paradigms
            </p>

            <p>
              <strong>Venue:</strong> Asia Pacific University of Technology &
              Innovation, Kuala Lumpur, Malaysia
            </p>

            <p>
              <strong>Mode:</strong> Hybrid
            </p>

          </div>
        </Reveal>

        {/* CHAIRS */}
        <Reveal>

          <h3 className="section-title">
            Session Chair:
          </h3>

          <div className="chairs">

            <PersonCard
              image={rana}
              title="Session Chair"
              name="Assoc. Prof. Dr. Muhammad Ehsan Rana"
              desc={`Associate Professor, School of Computing
Asia Pacific University of Technology & Innovation, Malaysia`}
              email="muhd_ehsanrana@apu.edu.my"
            />

            <div className="dividerss"></div>

            <PersonCard
              image={hameed}
              title="Session Co-Chair"
              name="Dr. Vazeerudeen Abdul Hameed"
              desc={`Assistant Professor, School of Computing
Asia Pacific University of Technology & Innovation, Malaysia`}
              email="vazeer@apu.edu.my"
            />

          </div>

        </Reveal>

        {/* AIM */}
        <Reveal>

          <h3 className="section-title">
            Aim and Scope:
          </h3>

          <p>
            The era of "brute-force" AI is reaching its limit.
          </p>

          <p>
            We are looking for pioneers who are redesigning the very DNA of
            intelligent systems.
          </p>

          <p>
            Our goal is to spark a collision of ideas between Architectures,
            Foundations, and Paradigms.
          </p>

        </Reveal>

        {/* TOPICS */}
        <Reveal>

          <h4 className="topics-heading">
            The scope of this special session encompasses AI in
            (but not limited to) the following themes:
          </h4>

          <ul className="topics-list">

            <li>
              <strong>Algorithmic Innovations:</strong> Development of
              neuro-symbolic, causal, and logic-based models.
            </li>

            <li>
              <strong>Architectural Efficiency:</strong> Novel hardware-software
              co-design strategies.
            </li>

            <li>
              <strong>Trust and Interpretability:</strong> New paradigms for
              Explainable AI (XAI).
            </li>

            <li>
              <strong>Emerging Computing Paradigms:</strong> Exploration of
              quantum computing and biologically-inspired computing.
            </li>

            <li>
              <strong>Robustness and Resilience:</strong> Strategies for
              intelligent systems under adversarial conditions.
            </li>

            <li>
              <strong>Ethical and Societal Foundations:</strong> Frameworks
              ensuring alignment with human values.
            </li>

          </ul>

        </Reveal>

        <Reveal>

          <p className="closing-text">
            We encourage authors to submit papers discussing theoretical
            advancements, novel AI techniques, real-world applications,
            and interdisciplinary innovations related to next-generation
            augmented intelligence.
          </p>

        </Reveal>

      </div>
    </div>
  );
}

export default SpecialSession;