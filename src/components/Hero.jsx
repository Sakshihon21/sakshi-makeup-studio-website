import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>SAKSHI NAIKWADE</h1>
        <h2>Best Bridal Makeup Artist</h2>
        <p>Bridal | Engagement | Part Makeup | Sider </p>
      </div>
      <div className="hero-image">
        <img src={`${process.env.PUBLIC_URL}/images/sakshi.jpg`} alt="Sakshi Naikwade" />
      </div>
    </section>
  );
}

export default Hero;
