import React from 'react'
import "./HeroSection.css";
import eventsHand from '../../assets/Images/eventsHand.webp';





const HeroSection = () => {
  return (
    <div className="hero">
      
      <div className="hero-text">
        <h1 className="hero-title">EVENTS</h1>
        <p className="hero-description">
          Join Spandan 24 at GBPIET, Pauri-Garhwal, where we focus on <span className="highlight">"Rural Revive: Tech Solutions for Rural Challenges."</span> Our events offer a platform for innovation, collaboration, and problem-solving with a futuristic edge.
        </p>
      </div>
      <img src={eventsHand} alt="Robotic Hand" className="hero-image" />
    
    </div>
  )
}

export default HeroSection
