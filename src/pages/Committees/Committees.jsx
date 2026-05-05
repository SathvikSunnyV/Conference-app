import "./Committees.css";

function Section({ title, items }) {
  return (
    <div className="section">
      <div className="section-title">{title}</div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Committees() {
  return (
    <div className="committees-container">

      <div className="grid">
        <Section
          title="General Chair"
          items={[
            "Jnyana Ranjan Mohanty, KIIT, India",
            "Khaled Fouad Sayed Shaalan, BUiD, Dubai",
            "Debashis Das, Birmingham City University, UK"
          ]}
        />

        <Section
          title="Program Chairs"
          items={[
            "Hrudaya Kumar Tripathy, KIIT, India",
            "Sambit Kumar Mishra, SRMU, India",
            "Tarek Gaber, University of Salford, UK"
          ]}
        />

        <Section
          title="Organizing Chairs"
          items={[
            "Sushruta Mishra, KIIT, India",
            "Kshira Sagar Sahoo, SRMU, India"
          ]}
        />

        <Section
          title="Publication Chairs"
          items={[
            "Junali Jasmine Jena, KIIT, India",
            "Satya Ranjan Dash, KIIT, India",
            "Anuja Kumar Acharya, KIIT, India"
          ]}
        />

        <Section
          title="Finance Chairs"
          items={[
            "N. Biraja Lasa, KIIT, India"
          ]}
        />

        <Section
          title="Publicity Chairs"
          items={[
            "Adyasha Dash, KIIT, India",
            "Kunal Anand, KIIT, India"
          ]}
        />

        <Section
          title="Registration Chairs"
          items={[
            "Suneeta Mohanty, KIIT, India",
            "Santwana Sagnika, KIIT, India",
            "Pratyusha Mukherjee, KIIT, India"
          ]}
        />

        <Section
          title="Session Management Chairs"
          items={[
            "Jagannath Singh, KIIT, India",
            "Partha Pratim Sarangi, KIIT, India",
            "Lalit Kumar Vashishtha, KIIT, India"
          ]}
        />

        <Section
          title="Workshop Chairs"
          items={[
            "Ajit Kumar Pasayat, KIIT, India",
            "Prabhu Prasad Dev, KIIT, India"
          ]}
        />

        <Section
          title="Special Session Chairs"
          items={[
            "Muhammad Ehsan Raza, Asia Pacific University, Malaysia",
            "Lambodar Jena, SOA, India",
            "Hiren Kumar Thakar, Pandit Deendayal Energy University, Gujarat, India"
          ]}
        />
      </div>

      <div className="full-section">
        <div className="section-title">Technical Program Committee</div>
        <h4>Chairs:</h4>
        <ul>
          <li>Abhaya Kumar Sahoo, KIIT, India</li>
          <li>Bhaswati Sahoo, KIIT, India</li>
          <li>Lipika Mohanty, KIIT, India</li>
          <li>Rabindra Bank, KIIT, India</li>
        </ul>

        <h4>Members:</h4>
        <div className="members-grid">
          <ul>
            <li>Xiaohui Tao, Australia</li>
            <li>Zakaria Bouloud, Morocco</li>
            <li>Mariya Oussa, Morocco</li>
            <li>Celestine IWENDI, USA</li>
            {/* add more from your image */}
          </ul>

          <ul>
            <li>Sung-Bae Cho, Korea</li>
            <li>Saud Alrabia, Saudi Arabia</li>
            <li>Dac-Nhuong Le, Vietnam</li>
            <li>Abiodun Moses, Nigeria</li>
            {/* continue list */}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default Committees;