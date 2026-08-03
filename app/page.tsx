const PSYCHRO_URL =
  "https://psychro.omar-rojas.com";

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Omar Rojas HVAC resources home">
          <img className="brandLogo" src="/or-logo.png" alt="Omar Rojas logo" />
          <span>HVAC Resources</span>
        </a>
        <div className="navLinks">
          <a href="#resources">Resources</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span /> Engineering tools for the built environment</p>
          <h1>HVAC Design<br />Engineering <em>Resources.</em></h1>
          <p className="intro">
            Practical tools and references for engineers who design comfortable,
            efficient, and resilient buildings.
          </p>
          <a className="primaryButton" href="#resources">
            Explore resources <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="heroGraphic">
          <img
            className="refrigerationArtwork"
            src="/refrigeration-cycle.png"
            alt="Refrigeration cycle diagram with compressor, condenser, expansion valve, and evaporator"
          />
        </div>
      </section>

      <section className="resources" id="resources">
        <div className="sectionHead">
          <div>
            <p className="sectionNumber">01 / RESOURCES</p>
            <h2>Tools for better<br /><em>design decisions.</em></h2>
          </div>
          <p>Built from real engineering workflows, with an emphasis on clarity and usefulness.</p>
        </div>

        <a className="featureCard" href={PSYCHRO_URL} target="_blank" rel="noreferrer">
          <div className="cardIndex">01</div>
          <div className="miniChart">
            <img
              src="/psychrometric-chart.png"
              alt="Psychrometric chart showing room, supply, and outside air conditions"
            />
          </div>
          <div className="cardCopy">
            <p className="status"><span /> Live tool</p>
            <h3>Interactive<br />Psychrometric Chart</h3>
            <p>Plot air conditions, read psychrometric properties, connect state points, and calculate sensible, latent, and total capacity.</p>
            <span className="launch">Launch tool <ArrowIcon /></span>
          </div>
        </a>

        <div className="comingSoon">
          <p>MORE RESOURCES IN DEVELOPMENT</p>
          <div className="futureGrid">
            <article><span>02</span><h3>A2L Refrigerant Charge Calculations</h3><p>Coming soon</p></article>
            <article><span>03</span><h3>Reference Library</h3><p>Coming soon</p></article>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <p className="sectionNumber">02 / ABOUT</p>
        <div>
          <h2>Engineering knowledge,<br /><em>made useful.</em></h2>
          <p>This growing collection is created by <strong>Omar Rojas</strong> to make everyday HVAC design work faster, clearer, and more accessible.</p>
        </div>
      </section>

      <footer>
        <div className="wordmark"><img className="brandLogo" src="/or-logo.png" alt="Omar Rojas logo" /><span>HVAC Resources</span></div>
        <p>HVAC Design Engineering Resources by Omar Rojas</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
