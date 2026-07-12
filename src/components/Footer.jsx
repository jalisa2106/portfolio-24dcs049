import React from 'react';

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Jalisa Malik</h3>
          <p>Building ideas into digital reality.</p>
        </div>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#">Back to Top</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Jalisa Malik. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
