import React from 'react';

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Jalisa Malik</h3>
          <p>AI & DS | FULL-STACK DEV</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
            <a href="mailto:jalisamalik21@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', marginRight: '1rem', textDecoration: 'none' }}>Email</a>
            <a href="https://github.com/jalisa2106" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', marginRight: '1rem', textDecoration: 'none' }}>GitHub</a>
            <a href="https://www.linkedin.com/in/jalisa-malik/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>LinkedIn</a>
          </p>
        </div>
        <div className="footer-links">
          <a href="#home" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }}>Back to Top</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Jalisa Malik. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
