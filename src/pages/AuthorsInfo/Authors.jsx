import "./Authors.css";

function Authors() {
  return (
    <div className="authors-container">

      <div className="title-box">
        <h2>Information For Authors</h2>
      </div>

      <div className="content">

        <h3 className="section-heading">Submission Policies</h3>

        <p>
          The authors of ASSIC 2026 should pay attention to the following:
        </p>

        <ul>
          <li>
            Original, previously unpublished papers, and not simultaneously submitted
            to another journal or conference, with scientific and technical contributions,
            are expected.
          </li>

          <li>
            All submitted papers will be checked for plagiarism through the IEEE CrossCheck
            system or Turnitin software.
          </li>

          <li>
            Papers must be written in English with a maximum paper length of six (6)
            printed pages including figures for regular papers. If they exceed 6 pages,
            authors are required to pay additional fees as per IEEE guidelines.
          </li>

          <li>
            Papers have to be formatted in the conference proceedings layout on A4 paper
            according to IEEE Template as follows:
          </li>
        </ul>

        <div className="links">
          <p>
            <strong>WORD:</strong>{" "}
            <a href="http://www.ieee.info/IEEE_template.docx" target="_blank">
              http://www.ieee.info/IEEE_template.docx
            </a>
          </p>

          <p>
            <strong>LATEX:</strong>{" "}
            <a href="http://www.ieee.info/IEEE_latex.zip" target="_blank">
              http://www.ieee.info/IEEE_latex.zip
            </a>
          </p>
        </div>

      </div>

    </div>
  );
}

export default Authors;