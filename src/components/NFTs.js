import React from 'react';
import { Link } from 'react-router-dom';

const NFTs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mf-blue to-mf-light-blue text-white p-8">
      <Link to="/" className="back-button">Back</Link>
      
      <div className="main-content">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fadeIn text-center">
          NFTs
        </h1>
        <p className="text-center max-w-2xl mx-auto mb-8 leading-relaxed animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          a collection of my life digitized
        </p>
        
        <div className="link-card max-w-md mx-auto">
          <a 
            href="https://opensea.io/mostlyfutures" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-center"
          >
            NFT Gallery
          </a>
        </div>
      </div>
    </div>
  );
};

export default NFTs;
