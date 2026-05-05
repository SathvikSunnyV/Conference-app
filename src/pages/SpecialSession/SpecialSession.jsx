import "./SpecialSession.css";

function PersonCard({ image, title, name, desc, email }) {
  return (
    <div className="person-card">
      <img src={image} alt={name} />
      <h3>{title}</h3>
      <p className="name">{name}</p>
      <p>{desc}</p>
      <p className="email">{email}</p>
    </div>
  );
}

function SpecialSession() {
  return (
    <div className="ss-container">

      {/* TITLE */}
      <div className="title-box">
        <h2>Special Session</h2>
      </div>

      {/* BASIC INFO */}
      <div className="ss-content">
        <h3>Special Session Call for papers</h3>

        <p><strong>Title:</strong> Next-Generation Augmented Intelligence</p>
        <p><strong>Venue:</strong> Asia Pacific University, Malaysia</p>
        <p><strong>Mode:</strong> Hybrid</p>

        <h3>Session Chair:</h3>

        {/* CHAIRS */}
        <div className="chairs">
          <PersonCard
            image="/chair1.jpg"
            title="Session Chair"
            name="Assoc. Prof. Dr. Muhammad Ehsan Rana"
            desc="Asia Pacific University of Technology & Innovation"
            email="muhd_ehsanrana@apu.edu.my"
          />

          <PersonCard
            image="/chair2.jpg"
            title="Session Co-Chair"
            name="Dr. Vazeerudeen Abdul Hameed"
            desc="Asia Pacific University of Technology & Innovation"
            email="vazeer@apu.edu.my"
          />
        </div>

        {/* AIM */}
        <h3>Aim and Scope:</h3>
        <p>
          The era of brute-force AI is reaching its limit. This session explores
          next-generation augmented intelligence systems combining human intuition
          with machine logic.
        </p>

        {/* TOPICS */}
        <h4>The scope includes:</h4>
        <ul>
          <li><strong>Algorithmic Innovations:</strong> Neuro-symbolic and causal models</li>
          <li><strong>Architectural Efficiency:</strong> Edge-native AI systems</li>
          <li><strong>Trust & Interpretability:</strong> Explainable AI</li>
          <li><strong>Emerging Paradigms:</strong> Quantum computing + AI</li>
          <li><strong>Robustness:</strong> Resilient intelligent systems</li>
          <li><strong>Ethical Foundations:</strong> Human-aligned AI systems</li>
        </ul>

      </div>

    </div>
  );
}

export default SpecialSession;