import React from 'react';

const MfDex = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center">
      {/* Navbar */}
      <div className="absolute top-0 w-full flex justify-between p-8 bg-gray-900 shadow-lg">
        <div className="text-3xl font-black italic text-blue-400" style={{ textShadow: '0px 0px 3px #9daac9' }}>
          mF
        </div>
        <div className="flex gap-8">
          <a href="#stats" className="text-gray-400 hover:text-blue-400 transition-colors">Stats</a>
          <a href="#docs" className="text-gray-400 hover:text-blue-400 transition-colors">Docs</a>
          <a href="#solana" className="text-gray-400 hover:text-blue-400 transition-colors">Wallet</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-6xl font-black text-blue-400 mb-4" style={{ textShadow: '0px 0px 1px #ffffff' }}>
          Decentralized Trading Platform
        </div>
        <div className="text-2xl text-gray-400 italic mb-8">
          Crypto, forex, stocks, indices, and commodities. Coming Soon.
        </div>
        <div className="flex gap-4 mb-8">
          <button className="py-4 px-8 text-lg font-bold text-white bg-blue-400 border-none rounded-lg cursor-pointer transition-colors hover:bg-blue-600" style={{ textShadow: '0px 0px 7.5px #000000' }}>
            Start Trading
          </button>
          <button className="py-4 px-8 text-lg font-bold text-white bg-blue-400 border-none rounded-lg cursor-pointer transition-colors hover:bg-blue-600" style={{ textShadow: '0px 0px 7.5px #000000' }}>
            New to Crypto?
          </button>
        </div>
        
        {/* Stats */}
        <div className="flex gap-8 justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2" style={{ textShadow: '0px 0px .3px #d2e3f6' }}>
              $100B+
            </div>
            <div className="text-xl text-gray-400">Total Volume</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2" style={{ textShadow: '0px 0px .3px #d2e3f6' }}>
              2M+
            </div>
            <div className="text-xl text-gray-400">Total Trades</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2" style={{ textShadow: '0px 0px .3px #d2e3f6' }}>
              35k+
            </div>
            <div className="text-xl text-gray-400">Total Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2" style={{ textShadow: '0px 0px .3px #d2e3f6' }}>
              260+
            </div>
            <div className="text-xl text-gray-400">Pairs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MfDex;
