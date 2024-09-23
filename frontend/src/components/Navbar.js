// src/components/Navbar.js
import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';


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
        <Link to="/login" button className="cta-button">Get Started</Link>
      </div>
    </nav>
  );
}

export default Navbar;
