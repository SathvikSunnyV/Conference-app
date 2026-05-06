import "./SpecialSession.css";
import rana from "../../assets/rana.png";
import hameed from "../../assets/hameed.png";

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

      {/* TOP TITLE */}
      <div className="ss-title-wrapper">
        <div className="title-box">
          <h2>Special Session</h2>
        </div>
      </div>

      <div className="ss-content">

        {/* HEADING */}
        <h3 className="main-title">
          Special Session Call for papers
        </h3>

        {/* DETAILS */}
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

        {/* SESSION CHAIR */}
        <h3 className="section-title">
          Session Chair:
        </h3>

        <div className="chairs">

          <PersonCard
            image={rana}
            title="Session Chair"
            name="Assoc. Prof. Dr. Muhammad Ehsan Rana"
            desc="Associate Professor, School of Computing
Asia Pacific University of Technology & Innovation, Malaysia"
            email="muhd_ehsanrana@apu.edu.my"
          />

          <div className="dividerss"></div>

          <PersonCard
            image={hameed}
            title="Session Co-Chair"
            name="Dr. Vazeerudeen Abdul Hameed"
            desc="Assistant Professor, School of Computing
Asia Pacific University of Technology & Innovation, Malaysia"
            email="vazeer@apu.edu.my"
          />

        </div>

        {/* AIM */}
        <h3 className="section-title">
          Aim and Scope:
        </h3>

        <p>
          The era of "brute-force" AI is reaching its limit. As we face global
          challenges in sustainability, security, and complexity, the next leap
          in technology won't just come from more data but from smarter
          foundations. The aim of this special session is to move beyond
          traditional "Black Box" models and explore the Next-Generation of
          Augmented Intelligence.
        </p>

        <p>
          We are looking for pioneers who are redesigning the very DNA of
          intelligent systems. Whether you are merging human intuition with
          machine logic, building hardware that thinks like a brain, or
          preparing for the quantum-computing revolution, this session is your
          platform.
        </p>

        <p>
          Our goal is to spark a collision of ideas between Architectures
          (how we build it), Foundations (how it learns), and Paradigms
          (how it interacts with us) to create a roadmap for intelligence
          that is not just "Artificial," but truly Augmented.
        </p>

        {/* TOPICS */}
        <h4 className="topics-heading">
          The scope of this special session encompasses AI in
          (but not limited to) the following themes:
        </h4>

        <ul className="topics-list">

          <li>
            <strong>Algorithmic Innovations:</strong> Development of
            neuro-symbolic, causal, and logic-based models that improve
            upon pure statistical learning.
          </li>

          <li>
            <strong>Architectural Efficiency:</strong> Novel hardware-software
            co-design strategies, including edge-native AI and low-power
            neuromorphic computing.
          </li>

          <li>
            <strong>Trust and Interpretability:</strong> New paradigms for
            Explainable AI (XAI) that foster human trust and allow seamless
            human-AI collaboration.
          </li>

          <li>
            <strong>Emerging Computing Paradigms:</strong> Exploration of
            near-term quantum computing and biologically-inspired computing.
          </li>

          <li>
            <strong>Robustness and Resilience:</strong> Strategies for
            building intelligent systems that remain functional under
            adversarial conditions.
          </li>

          <li>
            <strong>Ethical and Societal Foundations:</strong> Frameworks
            for ensuring that augmented intelligence remains aligned with
            human values and societal safety.
          </li>

        </ul>

        <p className="closing-text">
          We encourage authors to submit papers discussing theoretical
          advancements, novel AI techniques, real-world applications,
          and interdisciplinary innovations related to next-generation
          augmented intelligence.
        </p>

      </div>

    </div>
  );
}

export default SpecialSession;