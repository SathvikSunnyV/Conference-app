import "./Travel.css";

function Travel() {
  return (
    <div className="travel-container">

      <div className="travel-content">

        {/* LEFT SIDE */}
        <div className="travel-text">

          <h2>How to Reach Bhubaneswar</h2>

          <p>
            Bhubaneswar, the capital city of Orissa state is located in the East part
            of India and is well connected through Air, Rail and Road Network.
          </p>

          <h3>Air Connection</h3>
          <p>
            The Biju Patnaik Airport of Bhubaneswar is well linked by air to major
            cities like Delhi, Mumbai, Chennai, Kolkata, Hyderabad, and Bangalore.
            Visit <a href="https://www.airindia.in">www.airindia.in</a> or{" "}
            <a href="https://www.goindigo.in">www.goindigo.in</a>.
          </p>

          <h3>Rail Connection</h3>
          <p>
            Bhubaneswar is well connected by Indian Railways to major cities.
            Visit <a href="https://www.indianrail.gov.in">www.indianrail.gov.in</a>{" "}
            or <a href="https://www.irctc.co.in">www.irctc.co.in</a>.
          </p>

          <h3>Road Connection</h3>
          <p>
            Bhubaneswar is connected via national highways. The bus stand is
            located near NH-5 and connects major cities.
          </p>

        </div>

        {/* RIGHT SIDE (MAP) */}
        <div className="map-container">
          <iframe
            title="KIIT Location"
            src="https://www.google.com/maps?q=MLRIT+Hyderabad&output=embed"
            loading="fast"
          ></iframe>
        </div>

      </div>

    </div>
  );
}

export default Travel;