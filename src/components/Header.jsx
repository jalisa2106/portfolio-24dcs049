import React from 'react';

const Header = ({ name, themeColor }) => {
  return (
    <header id="home" className="hero-header" style={{ borderBottom: `1px solid ${themeColor || 'var(--primary)'}` }}>
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I am <span className="highlight-text">{name || "Jalisa Malik"}</span>
          </h1>
          <p className="hero-subtitle">
            Aspiring AI Engineer and Full-Stack Developer focused on bridging LLMs with functional, production-grade user interfaces.
          </p>
          <div className="hero-cta">
            <a href="#about" className="cta-primary">Initialize About</a>
            <a href="#skills" className="cta-secondary">View Core Arsenal</a>
          </div>
        </div>

        <div className="profile-photo-card">
          <div className="profile-photo-wrapper">
            <img src="/photo.jpeg" alt="Jalisa Malik" className="profile-photo" />
          </div>
          <p className="profile-photo-tag">AI & DS · FULL-STACK DEV</p>
        </div>
      </div>

      <div className="hero-visual">
        <div className="gradient-sphere" style={{ background: `radial-gradient(circle, ${themeColor || 'var(--primary)'}1a 0%, transparent 70%)` }}></div>
        <div className="gradient-sphere-2"></div>
      </div>
    </header>
  );
};

export default Header;
