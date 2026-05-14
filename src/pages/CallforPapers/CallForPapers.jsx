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
  const trackRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [visibleTracks, setVisibleTracks] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

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
        ICASSIC 2026 technical tracks span original research in the field of smart enabled systems, secure computing and intelligent technologies for applications in all fields of science and technology.
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
        title="Artificial Intelligence and Its Applications"
        items={[
          "Machine Learning and Deep Learning",
          "Explainable and Trustworthy AI",
          "Generative AI and Large Language Models",
          "AI in Agriculture and Smart Cities",
          "Reinforcement Learning",
          "AI Ethics and Responsible AI",
          "Intelligent Decision Support Systems",
        ]}
        trackRef={trackRefs[0]}
        isVisible={visibleTracks[0]}
      />

      <Track
        number="II"
        title="IoT and Smart Systems"
        items={[
          "Smart Sensors and Devices",
          "Industrial IoT (IIoT)",
          "Smart Homes and Smart Cities",
          "Edge and Fog Computing",
          "IoT Security and Privacy",
          "Wireless Sensor Networks",
          "Embedded Systems for IoT",
          "Cloud-Based IoT Applications",
        ]}
        trackRef={trackRefs[1]}
        isVisible={visibleTracks[1]}
      />

      <Track
        number="III"
        title="Digital Image, Video, Speech, and Audio Signal Processing"
        items={[
          "Image Enhancement and Restoration",
          "Computer Vision and Pattern Recognition",
          "Medical Image Processing",
          "Video Analytics and Surveillance",
          "Speech Recognition and Synthesis",
          "Emotion Recognition from Speech",
          "Audio Signal Analysis",
          "Multimedia Signal Processing",
        ]}
        trackRef={trackRefs[2]}
        isVisible={visibleTracks[2]}
      />

      <Track
        number="IV"
        title="Natural Language Processing and Technologies"
        items={[
          "Text Mining and Sentiment Analysis",
          "Machine Translation",
          "Conversational AI and Chatbots",
          "Information Retrieval Systems",
          "Speech-to-Text and Text-to-Speech",
          "Multilingual NLP",
          "Large Language Models",
          "Low-Resource Language Processing",
        ]}
        trackRef={trackRefs[3]}
        isVisible={visibleTracks[3]}
      />

      <Track
        number="V"
        title="Robotics and Intelligent Automation"
        items={[
          "Autonomous Robots",
          "Industrial Automation",
          "Drone and UAV Technologies",
          "Human–Robot Interaction",
          "Swarm Robotics",
          "Robotic Vision Systems",
          "Intelligent Control Systems",
          "AI-Based Automation",
        ]}
        trackRef={trackRefs[4]}
        isVisible={visibleTracks[4]}
      />

      <Track
        number="VI"
        title="Data Science and Advanced Analytics"
        items={[
          "Big Data Analytics",
          "Predictive and Prescriptive Analytics",
          "Data Visualization",
          "Business Intelligence",
          "Data Mining Techniques",
          "Time Series Analysis",
          "AI for Data Analytics",
          "Cloud Data Engineering",
        ]}
        trackRef={trackRefs[5]}
        isVisible={visibleTracks[5]}
      />

      <Track
        number="VII"
        title="Smart Healthcare Technologies"
        items={[
          "AI in Medical Diagnosis",
          "Wearable Health Devices",
          "Telemedicine and e-Health",
          "Medical Image Analysis",
          "Healthcare Data Analytics",
          "Remote Patient Monitoring",
          "Intelligent Healthcare Systems",
          "Biomedical Signal Processing",
        ]}
        trackRef={trackRefs[6]}
        isVisible={visibleTracks[6]}
      />

      <Track
        number="VIII"
        title="Cyber-Physical and Intelligent Systems"
        items={[
          "Smart Manufacturing Systems",
          "Autonomous Cyber-Physical Systems",
          "Digital Twins",
          "Intelligent Transportation Systems",
          "Real-Time Embedded Systems",
          "Smart Grid Technologies",
          "CPS Security and Reliability",
          "Human-in-the-Loop Systems",
        ]}
        trackRef={trackRefs[7]}
        isVisible={visibleTracks[7]}
      />

      <Track
        number="IX"
        title="Emerging Trends in Intelligent Computing Systems"
        items={[
          "Quantum Computing",
          "Neuromorphic Computing",
          "Edge AI and TinyML",
          "Green and Sustainable Computing",
          "Human-Centered Intelligent Systems",
          "Autonomous Intelligent Systems",
          "Intelligent Cloud Computing",
          "Industry 5.0 Technologies",
        ]}
        trackRef={trackRefs[8]}
        isVisible={visibleTracks[8]}
      />
    </div>
  );
}

export default CallForPapers;