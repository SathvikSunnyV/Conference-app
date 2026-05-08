import "./Travel.css";

function Travel() {
  return (
    <div className="travel-page">
      <div className="travel-shell">
        <div className="travel-grid">
          <div className="travel-text">
            <div className="travel-kicker">Venue Guide</div>
            <h2>How to Reach MLRIT</h2>

            <p className="intro">
              MLR Institute of Technology, Hyderabad is located in a well-connected
              part of the city and can be reached easily by air, rail, and road.
              The campus is accessible from major transport hubs, making travel
              straightforward for outstation visitors and local commuters alike.
            </p>

            <section className="travel-section">
              <h3>Air Connection</h3>
              <p>
                The nearest major airport is <strong>Rajiv Gandhi International Airport</strong>.
                From the airport, visitors can reach MLRIT by cab, taxi, or app-based
                transport services. The route is well connected through city roads
                and usually takes around one to one and a half hours depending on traffic.
              </p>
            </section>

            <section className="travel-section">
              <h3>Rail Connection</h3>
              <p>
                Hyderabad is served by major railway stations such as{" "}
                <strong>Secunderabad</strong>, <strong>Hyderabad Deccan</strong>, and {}
                <strong>Kachiguda</strong>. From any of these stations, MLRIT can be
                reached by cab, city bus, or metro-linked road transport depending on
                your route.
              </p>
            </section>

            <section className="travel-section">
              <h3>Road Connection</h3>
              <p>
                MLRIT is well connected by the road network in Hyderabad. Visitors can
                travel by TSRTC buses, private cabs, autos, or personal vehicles.
                The campus route is easy to locate using Google Maps and is reachable
                from all major parts of the city.
              </p>
            </section>
          </div>

          <div className="map-card">
            <div className="map-frame">
              <iframe
                title="MLRIT Location"
                src="https://www.google.com/maps?q=MLR+Institute+of+Technology,+Hyderabad&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="map-caption">
              <h4>MLR Institute of Technology</h4>
              <p>Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travel;