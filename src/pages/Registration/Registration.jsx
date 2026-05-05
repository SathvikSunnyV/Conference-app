import "./Registration.css";

function Registration() {
  return (
    <div className="registration-container">

      {/* HERO SECTION */}
      <div className="hero">
        <h1>Registration</h1>
        <p>Home | Registration</p>
      </div>

      {/* PAPER SUBMISSION */}
      <div className="section">
        <h2>PAPER SUBMISSION</h2>
        <h3>Paper Submission Method</h3>

        <ul className="bullet">
          <li>All papers must be submitted via Paper Submission Link.</li>
          <li>In case of uploading issue, email us.</li>
        </ul>

        {/* TABLE */}
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
              <td>Students (Non-IEEE Member)</td>
              <td>INR 11,500</td>
              <td>INR 12,500</td>
            </tr>
            <tr>
              <td>Students (IEEE Member)</td>
              <td>INR 10,500</td>
              <td>INR 11,500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* INCLUDES */}
      <div className="section">
        <h2>Registration Include</h2>
        <ul className="bullet">
          <li>Access to Keynote talks</li>
          <li>Access to paper presentation sessions</li>
          <li>Networking sessions</li>
          <li>Conference lunch and refreshment</li>
          <li>Tea and Coffee Breaks</li>
          <li>Conference kit</li>
          <li>Participation Certificate</li>
        </ul>
      </div>

      {/* INSTRUCTIONS */}
      <div className="section">
        <h2>INSTRUCTIONS FOR REGISTRATION</h2>
        <ul className="bullet">
          <li>Each paper can have up to 6 pages.</li>
          <li>At least one author must register.</li>
          <li>Each registration covers one paper.</li>
          <li>Registration fee includes all taxes.</li>
          <li>Fees are non-refundable.</li>
        </ul>
      </div>

      {/* BANK DETAILS */}
      <div className="section">
        <table className="bank-table">
          <tbody>
            <tr>
              <td>Bank Name</td>
              <td>Indian Bank</td>
            </tr>
            <tr>
              <td>Account Name</td>
              <td>KSOT PROJECTS</td>
            </tr>
            <tr>
              <td>Branch</td>
              <td>KIIT Branch</td>
            </tr>
            <tr>
              <td>Account Number</td>
              <td>50029573273</td>
            </tr>
            <tr>
              <td>IFSC Code</td>
              <td>IDIB000K717</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Registration;