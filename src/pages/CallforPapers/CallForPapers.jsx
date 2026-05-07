import React, { useEffect, useRef, useState } from "react";
import "./CallForPapers.css";

/* ── Inline SVG Icons ── */
const SubmissionIcon = () => (
  <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="48" height="34" rx="3" fill="#5b8dee" />
    <rect x="11" y="11" width="42" height="28" rx="2" fill="#e8f0fe" />
    <rect x="15" y="16" width="28" height="3" rx="1.5" fill="#5b8dee" opacity="0.5" />
    <rect x="15" y="22" width="20" height="3" rx="1.5" fill="#5b8dee" opacity="0.35" />
    <rect x="28" y="42" width="8" height="6" rx="1" fill="#a0aec0" />
    <rect x="22" y="47" width="20" height="3" rx="1.5" fill="#a0aec0" />
    <circle cx="46" cy="36" r="5" fill="#f6ad55" />
    <path d="M38 52 Q42 44 46 44 Q50 44 54 52" fill="#5b8dee" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="16" width="52" height="36" rx="3" fill="#5b8dee" />
    <rect x="8" y="18" width="48" height="32" rx="2" fill="#e8f0fe" />
    <path d="M8 20 L32 38 L56 20" stroke="#5b8dee" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    <circle cx="48" cy="20" r="9" fill="#e53e3e" />
    <text x="48" y="24" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">1</text>
  </svg>
);

function InfoCard({ title, subtitle, icon }) {
  return (
    <div className="cfp-card">
      <div className="cfp-card-left">
        <div className="cfp-card-icon" aria-hidden="true">
          {icon}
        </div>

        <div className="cfp-card-text">
          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>

      <button className="cfp-arrow" aria-label={title} type="button">
        →
      </button>
    </div>
  );
}

function Track({ number, title, items, trackRef, isVisible }) {
  return (
    <section ref={trackRef} className={`track-section ${isVisible ? "visible" : ""}`}>
      <h2 className="track-number">TRACK {number}:</h2>
      <h3 className="track-title">{title}</h3>
      <ul className="track-list">
        {items.map((item, index) => (
          <li key={index} style={{ "--i": index }}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function CallForPapers() {
  const trackRefs = [useRef(null), useRef(null), useRef(null)];
  const [visibleTracks, setVisibleTracks] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleTracks((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    trackRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.dataset.index = index;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="cfp-page">
      <div className="page-title-wrap">
        <div className="page-title">Call For Papers</div>
      </div>

      <p className="cfp-intro">
        ASSIC 2026 technical tracks span original research in the field of smart enabled systems, secure computing and intelligent technologies for applications in all fields of science and technology.
      </p>

      <div className="cfp-card-row">
        <InfoCard
          title={"Full Paper Submission is\nclosed"}
          icon={<SubmissionIcon />}
        />
        <InfoCard
          title="Notification Of Acceptance"
          subtitle="April 25 , 2026"
          icon={<EnvelopeIcon />}
        />
      </div>

      <div className="cfp-description">
        <p>
          <strong>
            The International Conference on Advancements in Smart, Secure and Intelligent Computing
          </strong>{" "}
          aims to attract high-quality, original research papers that go beyond incremental improvements to existing algorithms or routine applications of artificial intelligence and computing technologies.
        </p>
        <p>
          Unlike conventional conferences that focus primarily on isolated AI models, performance benchmarks, or narrow application use cases, this conference emphasizes holistic intelligent systems—where intelligence, security, trust, sustainability, and human-centric considerations are treated as core design principles rather than afterthoughts.
        </p>
      </div>

      <Track
        number="I"
        title="Cognitive-Aware Intelligent Systems"
        items={[
          "Cognitive computing and reasoning-driven AI",
          "Cognitive architectures for autonomous intelligence",
          "Incremental learning models",
          "Self-adaptive AI systems",
          "Meta-learning frameworks",
          "Context-aware intelligence",
          "Emotion-aware models",
          "Explainable and introspective AI",
          "Self-healing and fault-tolerant intelligent systems",
          "Dynamic knowledge graphs",
          "Collaborative intelligence",
          "Brain-inspired computing models",
          "Multi-modal and cross-domain intelligence",
          "Autonomous decision-making under uncertainty",
          "Ethical cognition intelligence",
        ]}
        trackRef={trackRefs[0]}
        isVisible={visibleTracks[0]}
      />

      <Track
        number="II"
        title="Trust-Centric Secure Autonomous Systems"
        items={[
          "Trust modeling in AI systems",
          "Secure autonomous agents",
          "Self-defending computing systems",
          "AI assurance techniques",
          "Secure federated learning",
          "Privacy-preserving analytics",
          "Decentralized access management",
          "Blockchain-enabled trust frameworks",
          "Secure edge and fog intelligence architectures",
          "Zero-trust architectures for intelligent systems",
          "AI-driven cyber defense",
          "Secure digital twins systems",
          "Governance and regulation-aware AI",
          "Forensic-ready systems",
          "Ethical AI system design",
        ]}
        trackRef={trackRefs[1]}
        isVisible={visibleTracks[1]}
      />

      <Track
        number="III"
        title="Smart and Sustainable Computing for Societal Intelligence"
        items={[
          "Green intelligent computing",
          "Sustainable cloud, edge, and IoT systems",
          "Smart computing for environmental monitoring",
          "Human-centric and inclusive intelligent systems",
          "AI for assistive technologies",
          "Smart cities and intelligent urban infrastructure",
          "Intelligent mobility systems",
          "AI-enabled disaster prediction and response",
          "Digital twins for societal and environmental systems",
          "Data-driven decision-making systems",
          "AI for learning analytics",
          "Smart agriculture and food security systems",
          "Socially aligned intelligent systems",
          "Sustainable industrial and manufacturing intelligence",
          "Ethics, fairness, and social impact of intelligent computing",
        ]}
        trackRef={trackRefs[2]}
        isVisible={visibleTracks[2]}
      />
    </div>
  );
}

export default CallForPapers;