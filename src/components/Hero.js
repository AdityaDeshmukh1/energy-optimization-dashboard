// src/components/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="headline">Optimize Your Industry’s Energy Usage</h1>
        <p>Track, analyze, and reduce your energy consumption to make your business sustainable.</p>
        <Link to="/charts" className="cta-button">Start Your Free Trial</Link>
      </div>
      <img src={`${process.env.PUBLIC_URL}/images/hero.jpg`} alt="Energy Optimization" className="hero-image" />
    </section>
  );
}

export default Hero;
