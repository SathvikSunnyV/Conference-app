import "./Workshop.css";

function Section({ title, children }) {
  return (
    <section className="ws-section">
      <h3 className="ws-section-title">{title}</h3>
      <div className="ws-section-content">{children}</div>
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
            complex cybersecurity vulnerabilities. These systems, often
            characterized by legacy integration, distributed architectures, and
            resource-constrained devices, present expanded attack surfaces
            susceptible to advanced cyber threats. Major incidents, such as the
            Stuxnet cyberattack and the Colonial Pipeline ransomware attack,
            underscore the critical need for robust and adaptive security
            frameworks.
          </p>

          <p>
            This workshop invites high-quality research paper submissions
            addressing theoretical advances, experimental studies, and applied
            solutions in securing IoT-enabled critical infrastructure, aiming
            to advance interdisciplinary research, strengthen cyber-physical
            system resilience, and foster innovative approaches to threat
            detection, prevention, and response. Interdisciplinary approaches
            that integrate cybersecurity, artificial intelligence, and systems
            engineering to improve resilience, detection, and response
            capabilities are given a lot of attention.
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
            the submission of original unpublished papers, a review process
            conducted by an expert program committee, and the presentation of
            accepted papers in oral sessions. Papers should submit in IEEE
            format.
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
            in the main conference proceedings and indexed in IEEE Xplore. For
            further details, please refer to the main conference author
            information:
            <a href="/">here</a>
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
            <li>Dr. Mohamed Elaraby, Benha University, Egypt</li>
            <li>Prof. Rania Hodhod, Columbus State University, USA</li>
            <li>Dr. Ahmed Hamed, Canadian University, UAE</li>
            <li>Prof. Islam Amer, Portsmouth University, UK</li>
            <li>Dr. Tarek Ali, Manchester Metropolitan University, UK</li>
            <li>Dr. Alaa Othman, Bielefeld University of Applied Sciences and Arts, Germany</li>
            <li>Dr. Salem AlJanah, Imam Mohammad Ibn Saud Islamic University, KSA</li>
            <li>Dr. Mohamed Tahoun, Suez Canal University, Egypt</li>
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