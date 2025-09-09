import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [navMenuActive, setNavMenuActive] = useState(false);

  const toggleNavMenu = () => {
    setNavMenuActive(!navMenuActive);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mf-blue to-mf-light-blue text-white">
      {/* Info Circle */}
      <Link to="/landing" className="info-circle">
        i
      </Link>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleNavMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <nav className={`nav-menu ${navMenuActive ? 'active' : ''}`}>
        <Link to="/crypto-intro">Crypto Introduction</Link>
        <Link to="/trading-intro">Trading</Link>
        <Link to="/mfSart">Sart</Link>
        <Link to="/grant-ai">Grant AI</Link>
        <Link to="/quizgen">QuizGen Flashcards</Link>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <div className="compass-container">
          {/* Compass animation can be added here */}
        </div>
        <h1 className="main-title">MostlyFutures</h1>
        <div className="link-card" style={{ marginTop: '32px' }}>
          {/* Empty link card as in original */}
        </div>
      </div>
    </div>
  );
};

export default Home;
