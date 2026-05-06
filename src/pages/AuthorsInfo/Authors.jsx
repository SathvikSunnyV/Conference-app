import "./Authors.css";

function Authors() {
  return (
    <div className="authors-container">
      
      <div className="title-wrapper">
        <div className="title-box">
          <h2>Information For Authors</h2>
        </div>
      </div>

      <div className="authors-content">

        <h3>Submission Policies</h3>

        <p>
          The authors of ASSIC 2026 should pay attention to the following:
        </p>

        <div className="policy-list">
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
        </div>

        <div className="template-links">
          <p>
            WORD:
            <a
              href="http://www.ieee.info/IEEE_template.docx"
              target="_blank"
              rel="noreferrer"
            >
              http://www.ieee.info/IEEE_template.docx
            </a>
          </p>

          <p>
            LATEX:
            <a
              href="http://www.ieee.info/IEEE_latex.zip"
              target="_blank"
              rel="noreferrer"
            >
              http://www.ieee.info/IEEE_latex.zip
            </a>
          </p>
        </div>

        <h3 className="submission-title">Paper Submission</h3>

        <p className="submission-text">
          Upload your paper{" "}
          <a href="/">here</a>
        </p>

        <h3 className="camera-title">Camera-Ready Submission</h3>

        <p>
          Upon acceptance, at least one of the authors listed in the paper must
          attend the conference and present the paper according to the schedule
          of the conference. In the event that the presenter is unable to attend
          the conference for any reasons, your accepted paper will not be
          considered for submission of the proceeding.
        </p>

        <p>
          At least one of the authors listed on the paper must register for the
          ASSIC 2026 to upload the final manuscript. The final manuscript must
          be prepared based on reviewers’ comments and according to the final
          paper format.
        </p>

        <p>
          Only paper that have been corrected according to reviewer(s)
          suggestion will be considered to be included in the final proceedings.
        </p>

      </div>
    </div>
  );
}

export default Authors;