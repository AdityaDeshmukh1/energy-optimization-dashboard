// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">EnergyOptimize</a>
        <ul className="nav-menu">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="cta-button">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;
