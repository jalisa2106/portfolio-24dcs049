import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="section-header">
        <h2>Developer Profile</h2>
        <div className="accent-line"></div>
      </div>
      <div className="about-grid">
        <div className="about-card intro-card">
          <h3>Who I Am</h3>
          <p>
            I am an aspiring AI Engineer and Full-Stack Developer focused on bridging LLMs with functional, production-grade user interfaces.
            I am the creator of a published browser extension that automates TypeScript generation from JSON to streamline workflows.
          </p>
          <p style={{ marginTop: '1rem' }}>
            I am experienced in building scalable Next.js applications, FastAPI backends, and integrating LLM APIs for automated data processing.
          </p>
        </div>
        <div className="about-card details-card">
          <h3>Core Telemetry</h3>
          <ul className="details-list">
            <li><strong>Education:</strong> BTech – CS (DEPSTAR, CHARUSAT, 2024–2028)</li>
            <li><strong>Focus Areas:</strong> AI & DS, Full-Stack Development, LLM Integrations</li>
            <li><strong>Location:</strong> Gujarat, India</li>
            <li><strong>Philosophy:</strong> Bridging LLMs with functional, production-grade interfaces.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
