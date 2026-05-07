import React, { useEffect, useRef, useState } from "react";
import "./Authors.css";

function AnimatedSection({ children, className = "" }) {
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
      className={`fade-section ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function Authors() {
  return (
    <div className="authors-container">

      <div className="title-wrapper">
        <div className="title-box">
          <h2>Information For Authors</h2>
        </div>
      </div>

      <div className="authors-content">

        <AnimatedSection>
          <h3>Submission Policies</h3>

          <p>
            The authors of ASSIC 2026 should pay attention to the following:
          </p>
        </AnimatedSection>

        <AnimatedSection className="policy-list">
          <p>
            * Original, previously unpublished papers, and not simultaneously
            submitted to another journal or conference, with scientific and
            technical contributions, are expected.
          </p>

          <p>
            * All submitted papers will be checked for plagiarism through the
            IEEE CrossCheck system or Turnitin software.
          </p>

          <p>
            * Papers must be written in English with a maximum paper length of
            six (6) printed pages including figures for regular papers. If they
            exceed 6 pages, authors are required to pay additional fees as per
            IEEE guidelines.
          </p>

          <p>
            * Papers have to be formatted in the conference proceedings layout
            on A4 paper according to IEEE Template as follows:
          </p>
        </AnimatedSection>

        <AnimatedSection className="template-links">
          <p>
            WORD:
            <a
              href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx"
              target="_blank"
              rel="noreferrer"
            >
              Download Template
            </a>
          </p>

          <p>
            LATEX:
            <a
              href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/pubs/conference-latex-template_10-17-19.zip"
              target="_blank"
              rel="noreferrer"
            >
              Download Template
            </a>
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <h3 className="submission-title">Paper Submission</h3>

          <p className="submission-text">
            Upload your paper <a href="/">here</a>
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <h3 className="camera-title">Camera-Ready Submission</h3>

          <p>
            Upon acceptance, at least one of the authors listed in the paper must
            attend the conference and present the paper according to the schedule
            of the conference.
          </p>

          <p>
            At least one of the authors listed on the paper must register for the
            ASSIC 2026 to upload the final manuscript.
          </p>

          <p>
            Only paper that have been corrected according to reviewer(s)
            suggestion will be considered to be included in the final proceedings.
          </p>
        </AnimatedSection>

      </div>
    </div>
  );
}

export default Authors;