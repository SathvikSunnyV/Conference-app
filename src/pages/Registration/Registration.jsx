import "./Registration.css";

function Registration() {
  return (
    <div className="registration-page">
      {/* Hero Section */}
      <section className="registration-hero">
        <div className="registration-hero__inner">
          <h1>Registration</h1>
          <p>Home &nbsp; | &nbsp; Registration</p>
        </div>
      </section>
<>
  {false && (
      <main className="registration-content">
        
        {/* Paper Submission */}
        <section className="content-block">
          <h2 className="page-title">PAPER SUBMISSION</h2>
          <br />
          <h3 className="section-title">Paper Submission Method</h3>

          <ul className="check-list">
            <li>
              All papers must be submitted via{" "}
              <a href="/">Paper Submission Link</a>.
            </li>
            <li>In case of any uploading issue, please email us.</li>
          </ul>

          <div className="table-wrap">
            <table className="fee-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Online</th>
                  <th>Offline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Academician (Non-IEEE Member)</td>
                  <td>INR 12,000</td>
                  <td>INR 13,000</td>
                </tr>
                <tr>
                  <td>Academician (IEEE Member)</td>
                  <td>INR 11,000</td>
                  <td>INR 12,000</td>
                </tr>
                <tr>
                  <td>Industry (Non-IEEE Member)</td>
                  <td>INR 13,000</td>
                  <td>INR 14,000</td>
                </tr>
                <tr>
                  <td>Industry (IEEE Member)</td>
                  <td>INR 12,000</td>
                  <td>INR 13,000</td>
                </tr>
                <tr>
                  <td>Foreign (Non-IEEE Member)</td>
                  <td>USD 250</td>
                  <td>USD 300</td>
                </tr>
                <tr>
                  <td>Foreign (IEEE Member)</td>
                  <td>USD 200</td>
                  <td>USD 250</td>
                </tr>
                <tr>
                  <td>Research Scholars / UG / PG Students (Non-IEEE)</td>
                  <td>INR 11,500</td>
                  <td>INR 12,500</td>
                </tr>
                <tr>
                  <td>Research Scholars / UG / PG Students (IEEE)</td>
                  <td>INR 10,500</td>
                  <td>INR 11,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* What Registration Includes */}
        <section className="content-block">
          <h2 className="subsection-title">Registration Includes</h2>
          <ul className="check-list">
            <li>Access to all Keynote talks</li>
            <li>Access to paper presentation sessions</li>
            <li>Networking sessions with experts</li>
            <li>Conference lunch and refreshments</li>
            <li>Tea and Coffee Breaks</li>
            <li>Conference kit and materials</li>
            <li>Participation / Presentation Certificate</li>
          </ul>
        </section>

        {/* Instructions */}
        <section className="content-block">
          <h2 className="subsection-title">Instructions for Registration</h2>
          <ul className="check-list">
            <li>Every accepted paper can have up to 6 pages. Additional pages (max 2) can be added at INR 500 per page during registration.</li>
            <li>At least one author must register and present the paper for inclusion in the proceedings and IEEE Xplore.</li>
            <li>Each registration covers only one accepted paper.</li>
            <li>The presenter must be a registered author.</li>
            <li>Registration fee is inclusive of all taxes.</li>
            <li>Students must upload Institute ID proof during registration.</li>
            <li>IEEE members must upload valid IEEE Membership card.</li>
            <li>Registration fees are non-refundable and non-transferable.</li>
          </ul>
        </section>

        {/* Bank Details */}
        <section className="content-block">
          <h2 className="subsection-title">Bank Details</h2>
          <div className="table-wrap">
            <table className="bank-table">
              <tbody>
                <tr><td>Bank Name</td><td>Indian Bank</td></tr>
                <tr><td>Name of Account</td><td>KSOT PROJECTS</td></tr>
                <tr><td>Branch Name</td><td>KIIT Branch</td></tr>
                <tr><td>Contact Address</td><td>Campus-1, Chandrasekharpur, Patia, Bhubaneswar, 751024</td></tr>
                <tr><td>Account Number</td><td>50029573273</td></tr>
                <tr><td>Account Type</td><td>Saving</td></tr>
                <tr><td>IFSC Code</td><td>IDIB000K717</td></tr>
                <tr><td>Swift Code</td><td>IDIBINBBBWR</td></tr>
              </tbody>
            </table>
          </div>
        </section>

      </main>
      )}
</>

      <div className="simple-page">

      <div className="title-box">
        <h2>Registration</h2>
      </div>

      <p className="placeholder">To be updated soon.</p>

    </div>
    </div>

    
  );
}

export default Registration;