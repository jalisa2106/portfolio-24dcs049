import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2>About Me</h2>
        <div className="accent-line"></div>
      </div>
      <div className="about-grid">
        <div className="about-card intro-card">
          <h3>Who I Am</h3>
          <p>
            I am a full stack developer dedicated to crafting clean, high-performance web applications.
            My coding journey revolves around creating intuitive user experiences coupled with robust, scalable backends.
          </p>
          <p style={{ marginTop: '1rem' }}>
            I love learning new frameworks, exploring system designs, and turning complex ideas into functional products.
          </p>
        </div>
        <div className="about-card details-card">
          <h3>Quick Facts</h3>
          <ul className="details-list">
            <li><strong>Education:</strong> B.Tech in Computer Science & Engineering</li>
            <li><strong>Interests:</strong> Cloud Architecture, UI/UX Design, Open Source</li>
            <li><strong>Location:</strong> Delhi, India</li>
            <li><strong>Passions:</strong> Crafting pixel-perfect UI & web performance optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
