import React, { useEffect, useRef, useState } from "react";
import "./Workshop.css";

function Section({ title, children }) {
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
    <section
      ref={ref}
      className={`ws-section ${visible ? "visible" : ""}`}
    >
      <h3 className="ws-section-title">{title}</h3>

      <div className="ws-section-content">
        {children}
      </div>
    </section>
  );
}

function Workshop() {
  return (
    <div className="workshop-page">

      <div className="ws-title-wrap">
        <div className="ws-title-box">
          <h2>Workshop 2026</h2>
        </div>
      </div>

      <div className="ws-main-heading">
        International Workshop on: IoT &amp; Cybersecurity in Critical
        Infrastructure Systems
      </div>

      <div className="ws-container">

        <Section title="Abstract">
          <p>
            The integration of Internet of Things (IoT) technologies into
            critical infrastructure systems—including electrical power grids,
            transportation networks, healthcare, and water management—has
            significantly enhanced operational efficiency while introducing
            complex cybersecurity vulnerabilities.
          </p>

          <p>
            This workshop invites high-quality research paper submissions
            addressing theoretical advances, experimental studies, and applied
            solutions in securing IoT-enabled critical infrastructure.
          </p>
        </Section>

        <Section title="Scope and Topics of Interest">

          <p className="ws-intro">
            The workshop solicits original research papers on, but not limited
            to:
          </p>

          <ul className="ws-check-list">
            <li>Security architectures for IoT-enabled cyber-physical systems (CPS)</li>
            <li>Vulnerability analysis in ICS and SCADA environments</li>
            <li>AI and machine learning for intrusion and anomaly detection</li>
            <li>Cryptographic protocols for resource-constrained IoT devices</li>
            <li>Threat modeling and risk assessment in critical infrastructure</li>
            <li>Resilience, fault tolerance, and recovery strategies</li>
            <li>Security and IoT in smart grids, healthcare, and intelligent transportation systems</li>
            <li>Standards, governance, and regulatory frameworks</li>
            <li>Security Frameworks for IoT-enabled power grids: Challenges and solutions</li>
            <li>Risk assessment and management in industrial IoT (IIoT) systems</li>
            <li>Data privacy and integrity in healthcare IoT devices within critical infrastructures</li>
            <li>Intrusion detection and response mechanisms for IoT in transportation networks</li>
            <li>Blockchain-based security solutions for IoT devices in critical infrastructure</li>
            <li>The role of artificial intelligence in enhancing IoT security for critical systems</li>
            <li>Addressing supply chain security risks in IoT devices</li>
            <li>Quantum computing and its impact on IoT cybersecurity</li>
          </ul>

        </Section>

        <Section title="Format and Review Process">
          <p>
            The workshop will follow a peer-reviewed academic format involving
            the submission of original unpublished papers.
          </p>
        </Section>

        <Section title="Paper Submission">
          <p>
            Upload your paper <a href="/">here</a>
          </p>
        </Section>

        <Section title="Submission and Publication Policy">
          <p>
            All registered papers accepted to this workshop will be published
            in the main conference proceedings and indexed in IEEE Xplore.
            <a href="/"> here</a>
          </p>
        </Section>

        <Section title="Organisers">
          <ul className="ws-person-list">
            <li>Prof. Samir A. Elsagheer, Egypt-Japan University of Science and Technology (E-JUST), Egypt</li>
            <li>Prof. Tarek Gaber, University of Salford, UK</li>
            <li>Prof. Diaa-Eldin Mansour, Egypt-Japan University of Science and Technology (E-JUST), Egypt</li>
            <li>Prof. Ahmed Anter, Egypt-Japan University of Science and Technology (E-JUST), Egypt</li>
          </ul>
        </Section>

        <Section title="Technical Program Committee">
          <ul className="ws-person-list">
            <li>Prof. Ahmed Fares, Egypt-Japan University of Science and Technology (E-JUST), Egypt</li>
            <li>Prof. Hossam kasem, Egypt-Japan University of Science and Technology (E-JUST), Egypt</li>
            <li>Dr. Ahmed Arafa, Egypt-Japan University of Science and Technology (E-JUST), Egypt</li>
            <li>Dr. Mostafa Elsayed, Egypt-Japan University of Science and Technology (E-JUST),Egypt</li>
          </ul>
        </Section>

        <Section title="Important Notes">
          <ul className="ws-check-list">
            <li>Submission Date Open: 15 April 2026</li>
            <li>Submission Deadline Date: 15 May 2026</li>
            <li>Acceptance Notification: 25 May 2026</li>
          </ul>
        </Section>

      </div>
    </div>
  );
}

export default Workshop;