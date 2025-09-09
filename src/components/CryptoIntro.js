import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CryptoIntro = () => {
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const content = document.getElementById('content');
      if (content) {
        const contentPosition = content.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (contentPosition < screenPosition) {
          setContentVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-mf-blue to-mf-light-blue text-white p-8">
      <Link to="/" className="back-button">Back</Link>
      
      <div className="main-content">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fadeIn text-center">
          How to Buy Crypto
        </h1>
        
        <div className="text-center max-w-4xl mx-auto mb-8 leading-relaxed animate-fadeIn">
          <p>
            Buying crypto is simpler than most people think. Instead of complex exchanges or technical knowledge, 
            most people just need a user-friendly platform to get started. Cryptocurrency exchanges work similarly 
            to stock trading apps - you deposit money, select the crypto you want to buy, and confirm your purchase. 
            The most important thing for beginners is choosing a reputable exchange with strong security, easy-to-use 
            interface, and available customer support. Once you've made your first purchase, you can either hold your 
            crypto for long-term investment or actively trade it as prices fluctuate. Many exchanges also offer 
            educational resources to help you understand the technology behind different cryptocurrencies and make 
            more informed decisions about your investments.
          </p>
        </div>
        
        <div className="link-card max-w-md mx-auto">
          <a 
            href="https://www.amazon.com/dp/B0DXN4P2P4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block text-center"
          >
            Learn More About Crypto
          </a>
        </div>
      </div>

      <div 
        id="content" 
        className={`min-h-screen w-full flex flex-col items-center justify-center opacity-0 transform translate-y-12 transition-all duration-1000 ${
          contentVisible ? 'opacity-100 translate-y-0' : ''
        }`}
      >
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-mf-gradient-start to-mf-gradient-end bg-clip-text text-transparent">
          What is Crypto?
        </h1>
        <div className="text-center max-w-4xl mx-auto leading-relaxed">
          <p>
            The word "Crypto" is essentially an umbrella term for a new technology called Blockchain. 
            Blockchain technology uses code to facilitate an exchange of information instead of relying on 
            humans which can be prone to error, fraud, inefficiency problems, or just expensive in general. 
            For example, rather than one person trusting the other party not to scam them the code in 
            blockchain will ensure the transaction is "trust-less" making the merchant relinquish the goods 
            that money was sent for. Blockchain can also use this "code" to automate human actions to 
            eliminate human error. Imagine a world where instead of relying on a person to consistently 
            give you the goods you paid for, or information, a code makes sure you received what you paid 
            for instead of relying on a merchant. Blockchain technology can be used for data, voting systems, 
            or any exchange of information. The biggest names in finance are already invested and actively 
            using this technology. For example, Blackrock, JPMorgan, USB, Donald Trump, and Elon Musk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CryptoIntro;
