import "./Workshop.css";

function Section({ title, children }) {
  return (
    <div className="ws-section">
      <h3>{title}</h3>
      <div className="ws-content">{children}</div>
    </div>
  );
}

function Workshop() {
  return (
    <div className="workshop-container">

      {/* TITLE */}
      <div className="title-box">
        <h2>Workshop 2026</h2>
      </div>

      <h2 className="main-heading">
        International Workshop on: IoT & Cybersecurity in Critical Infrastructure Systems
      </h2>

      {/* ABSTRACT */}
      <Section title="Abstract">
        <p>
          The integration of IoT technologies into critical infrastructure systems
          has significantly enhanced operational efficiency while introducing new
          cybersecurity challenges.
        </p>
        <p>
          This workshop invites high-quality research addressing security,
          resilience, and intelligent system design.
        </p>
      </Section>

      {/* TOPICS */}
      <Section title="Scope and Topics of Interest">
        <ul>
          <li>Security architectures for IoT-enabled systems</li>
          <li>Vulnerability analysis in ICS and SCADA</li>
          <li>AI for intrusion detection</li>
          <li>Cryptographic protocols for IoT devices</li>
          <li>Threat modeling and risk assessment</li>
          <li>Blockchain-based security solutions</li>
          <li>Quantum computing impact on IoT security</li>
        </ul>
      </Section>

      {/* FORMAT */}
      <Section title="Format and Review Process">
        <p>
          Papers will follow a peer-reviewed academic format with expert committee review.
        </p>
      </Section>

      {/* SUBMISSION */}
      <Section title="Paper Submission">
        <p>
          Upload your paper <a href="#">here</a>
        </p>
      </Section>

      {/* POLICY */}
      <Section title="Submission and Publication Policy">
        <p>
          Accepted papers will be published in conference proceedings and indexed in IEEE Xplore.
        </p>
      </Section>

      {/* ORGANISERS */}
      <Section title="Organisers">
        <ul>
          <li>Prof. Samir A. Elsagheer</li>
          <li>Prof. Tarek Gaber</li>
          <li>Prof. Diaa-Eldin Mansour</li>
        </ul>
      </Section>

      {/* COMMITTEE */}
      <Section title="Technical Program Committee">
        <ul>
          <li>Prof. Ahmed Fares</li>
          <li>Dr. Ahmed Arafa</li>
          <li>Dr. Mostafa Elsayed</li>
          <li>Dr. Mohamed Tahoun</li>
        </ul>
      </Section>

      {/* NOTES */}
      <Section title="Important Notes">
        <ul>
          <li>Submission Opens: 15 April 2026</li>
          <li>Deadline: 15 May 2026</li>
          <li>Acceptance: 25 May 2026</li>
        </ul>
      </Section>

    </div>
  );
}

export default Workshop;