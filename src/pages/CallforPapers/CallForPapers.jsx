import "./CallForPapers.css";

function InfoCard({ title, subtitle }) {
  return (
    <div className="info-card">
      <div>
        <h4>{title}</h4>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <button className="arrow-btn">→</button>
    </div>
  );
}

function Track({ title, subtitle, items }) {
  return (
    <div className="track">
      <h3 className="track-title">{title}</h3>
      <h4 className="track-subtitle">{subtitle}</h4>
      <ul>
        {items.map((item, i) => (
          <li key={i}>→ {item}</li>
        ))}
      </ul>
    </div>
  );
}

function CallForPapers() {
  return (
    <div className="cfp-container">

      <div className="title-box">
        <h2>Call For Papers</h2>
      </div>

      <p className="intro">
        ASSIC 2026 technical tracks span original research in the field of smart enabled systems,
        secure computing and intelligent technologies.
      </p>

      <div className="card-row">
        <InfoCard title="Full Paper Submission is closed" />
        <InfoCard title="Notification Of Acceptance" subtitle="April 25, 2026" />
      </div>

      <p className="description">
        The International Conference on Advancements in Smart, Secure and Intelligent Computing aims to
        attract high-quality, original research papers that go beyond incremental improvements.
      </p>

      <Track
        title="TRACK I:"
        subtitle="Cognitive-Aware Intelligent Systems"
        items={[
          "Cognitive computing and reasoning-driven AI",
          "Cognitive architectures for autonomous intelligence",
          "Incremental learning models",
          "Self-adaptive AI systems",
          "Meta-learning frameworks",
          "Context-aware intelligence",
          "Explainable AI",
          "Brain-inspired computing models",
          "Autonomous decision-making under uncertainty"
        ]}
      />

      <Track
        title="TRACK II:"
        subtitle="Trust-Centric Secure Autonomous Systems"
        items={[
          "Trust modeling in AI systems",
          "Secure autonomous agents",
          "AI assurance techniques",
          "Secure federated learning",
          "Privacy-preserving analytics",
          "Blockchain-enabled trust frameworks",
          "Zero-trust architectures",
          "AI-driven cyber defense"
        ]}
      />

      <Track
        title="TRACK III:"
        subtitle="Smart and Sustainable Computing"
        items={[
          "Green intelligent computing",
          "Sustainable cloud, edge, and IoT",
          "Smart cities and infrastructure",
          "AI for assistive technologies",
          "Data-driven decision systems",
          "AI for learning analytics",
          "Smart agriculture systems",
          "Ethics and fairness in AI"
        ]}
      />

    </div>
  );
}

export default CallForPapers;