import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>SAKSHI NAIKWADE</h1>
          <h3>Best Bridal Makeup Artist</h3>
          <p>Bridal | Engagement | Party Makeup | Sider</p>
        </div>
        <div className="hero-image">
          <img src={`${process.env.PUBLIC_URL}/images/sakshi.jpg`} alt="Sakshi Naikwade" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
