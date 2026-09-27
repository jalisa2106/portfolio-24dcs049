import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">JM</Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${path === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/projects" className={`nav-link ${path === '/projects' ? 'active' : ''}`}>Projects</Link>
          <Link to="/analytics" className={`nav-link ${path === '/analytics' ? 'active' : ''}`}>Analytics</Link>
          <Link to="/contact" className={`nav-link ${path === '/contact' ? 'active' : ''}`}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
