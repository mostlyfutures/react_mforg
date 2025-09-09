import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Home from './components/Home';
import Landing from './components/Landing';
import Contact from './components/Contact';
import CryptoIntro from './components/CryptoIntro';
import TradingIntro from './components/TradingIntro';
import NFTs from './components/NFTs';
import GrantAI from './components/GrantAI';
import QuizGen from './components/QuizGen';
import MfSart from './components/MfSart';
import MfDex from './components/MfDex';
import MfExplore from './components/MfExplore';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/crypto-intro" element={<CryptoIntro />} />
          <Route path="/trading-intro" element={<TradingIntro />} />
          <Route path="/nfts" element={<NFTs />} />
          <Route path="/grant-ai" element={<GrantAI />} />
          <Route path="/quizgen" element={<QuizGen />} />
          <Route path="/mfSart" element={<MfSart />} />
          <Route path="/mfDex" element={<MfDex />} />
          <Route path="/mfExplore" element={<MfExplore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;