import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      
      <div className="title-box">
        <h2>Information For Home</h2>
      </div>

      <div className="content">
        <h3>Submission Policies</h3>
        <p>
          The authors of ASSIC 2026 should pay attention to the following:
        </p>

        <ul>
          <li>
            Original, previously unpublished papers, and not simultaneously submitted
            to another journal or conference, with scientific and technical
            contributions, are expected.
          </li>

          <li>
            All submitted papers will be checked for plagiarism through the IEEE
            CrossCheck system or Turnitin software.
          </li>

          <li>
            Papers must be written in English with a maximum paper length of six (6)
            printed pages including figures for regular papers.
          </li>

          <li>
            Papers have to be formatted in IEEE template:
            <br />
            WORD: <a href="#">http://www.ieee.info/IEEE_template.docx</a>
            <br />
            LATEX: <a href="#">http://www.ieee.info/IEEE_latex.zip</a>
          </li>
        </ul>

        <h3>Paper Submission</h3>
        <p>
          Upload your paper <a href="#">here</a>
        </p>

        <h3>Camera-Ready Submission</h3>
        <p>
          Upon acceptance, at least one of the authors listed in the paper must
          attend the conference and present the paper.
        </p>

        <p>
          At least one author must register for ASSIC 2026 to upload the final
          manuscript.
        </p>

        <p>
          Only papers corrected according to reviewers' suggestions will be
          included in the final proceedings.
        </p>
      </div>

    </div>
  );
}

export default Home;