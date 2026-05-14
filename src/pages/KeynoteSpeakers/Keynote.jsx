import "./Keynote.css";

import speaker1 from "../../assets/dre.png";
import speaker2 from "../../assets/smt.png";
import speaker3 from "../../assets/ckm.png";
import speaker4 from "../../assets/rp.png";

const keynoteSpeakers = [
  {
    id: 1,
    image: speaker1,
    name: "Dr. Damodar Reddy Edla",
    designation:
      "Associate Professor, Department of Computer Science and Engineering",
    institution: "National Institute of Technology Goa",
    expertise:
      "Artificial Intelligence, Brain Computer Interface, Medical Imaging, IoMT",
  },

  {
    id: 2,
    image: speaker2,
    name: "Dr. Sabu M. Thampi",
    designation:
      "Professor, School of Computer Science & Engineering",
    institution:
      "Kerala University of Digital Sciences, Innovation and Technology (KUDSIT)",
    expertise:
      "Connected Systems, Cyber Intelligence, AI Systems & Smart Computing",
  },

  {
    id: 3,
    image: speaker3,
    name: "Prof. C. Krishna Mohan",
    designation:
      "Professor (HAG), Department of Computer Science and Engineering",
    institution: "Indian Institute of Technology Hyderabad",
    expertise:
      "Visual Learning, Image & Video Analysis, Representation Learning, AI/ML",
  },

  {
    id: 4,
    image: speaker4,
    name: "Prof. R. Padmavathy",
    designation:
      "Professor, Department of Computer Science and Engineering",
    institution: "National Institute of Technology Warangal",
    expertise:
      "Computer Science Research, AI & Advanced Computing",
  },
];

function KeynoteSpeakerCard({ speaker }) {
  return (
    <div className="keynote-card">
      <div className="keynote-card-image-wrapper">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="keynote-card-image"
        />
      </div>

      <div className="keynote-card-body">
        <h3>{speaker.name}</h3>

        <p className="keynote-card-designation">
          {speaker.designation}
        </p>

        <p className="keynote-card-expertise">
          {speaker.expertise}
        </p>

        <div className="keynote-card-divider" />

        <div className="keynote-card-institution-row">
          <svg
            className="keynote-card-institution-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 21h18" />
            <path d="M5 21V7l7-4 7 4v14" />
            <path d="M9 21v-6h6v6" />
            <path d="M9 9h1m4 0h1M9 13h1m4 0h1" />
          </svg>

          <p className="keynote-card-institution">
            {speaker.institution}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Keynote() {
  return (
    <div className="keynote-page">
      <div className="keynote-title-row">
        <div className="keynote-title-line" />

        <div className="title-box">
          <h2>Keynote Speakers</h2>
        </div>

        <div className="keynote-title-line right" />
      </div>

      <div className="keynote-grid">
        {keynoteSpeakers.map((speaker) => (
          <KeynoteSpeakerCard
            key={speaker.id}
            speaker={speaker}
          />
        ))}
      </div>
    </div>
  );
}