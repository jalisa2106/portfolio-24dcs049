import React from 'react';

const Header = ({ name, themeColor }) => {
  return (
    <header id="home" className="hero-header" style={{ backgroundColor: themeColor }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-badge">Welcome to my portfolio</span>
        <h1 className="hero-title">
          Hi, I am <span className="highlight-text">{name || "Jalisa Malik"}</span>
        </h1>
        <p className="hero-subtitle">
          A passionate software engineer building premium web experiences with modern technologies.
        </p>
        <div className="hero-cta">
          <a href="#about" className="cta-primary">Learn More</a>
          <a href="#skills" className="cta-secondary">View Skills</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="gradient-sphere"></div>
        <div className="gradient-sphere-2"></div>
      </div>
    </header>
  );
};

export default Header;
