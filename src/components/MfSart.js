import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const MfSart = () => {
  const [userAccount, setUserAccount] = useState(null);
  const [ensName, setEnsName] = useState(null);
  const [discoveredProviders, setDiscoveredProviders] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  // Sample photos data
  const samplePhotos = [
    { url: 'https://placehold.co/500x600/1a1a1a/fff?text=future' },
    { url: 'https://placehold.co/500x500/2a2a2a/fff?text=future' },
    { url: 'https://placehold.co/500x550/1c1c1c/fff?text=future' },
    { url: 'https://placehold.co/500x700/2b2b2b/fff?text=future' },
    { url: 'https://placehold.co/500x650/1f1f1f/fff?text=future' },
    { url: 'https://placehold.co/500x450/2c2c2c/fff?text=future' },
    { url: 'https://placehold.co/500x580/1e1e1e/fff?text=future' },
    { url: 'https://placehold.co/500x620/2d2d2d/fff?text=future' },
    { url: 'https://placehold.co/500x480/1b1b1b/fff?text=future' },
    { url: 'https://placehold.co/500x680/2f2f2f/fff?text=future' },
    { url: 'https://placehold.co/500x520/1d1d1d/fff?text=future' },
    { url: 'https://placehold.co/500x720/2e2e2e/fff?text=future' },
    { url: 'https://placehold.co/500x540/1a1a1a/fff?text=future' },
    { url: 'https://placehold.co/500x640/292929/fff?text=future' },
    { url: 'https://placehold.co/500x560/1e1e1e/fff?text=future' },
    { url: 'https://placehold.co/500x660/282828/fff?text=future' },
    { url: 'https://placehold.co/500x510/1f1f1f/fff?text=future' },
    { url: 'https://placehold.co/500x710/2a2a2a/fff?text=future' },
    { url: 'https://placehold.co/500x490/1c1c1c/fff?text=future' },
    { url: 'https://placehold.co/500x690/2b2b2b/fff?text=future' },
    { url: 'https://placehold.co/500x530/1d1d1d/fff?text=future' },
    { url: 'https://placehold.co/500x630/2c2c2c/fff?text=future' },
    { url: 'https://placehold.co/500x570/1b1b1b/fff?text=future' },
    { url: 'https://placehold.co/500x670/2f2f2f/fff?text=future' }
  ];

  const filters = ['All', 'its cold inside', 'pfpcore', 'rantcore', 'roomcore'];

  const handleProviderAnnouncement = useCallback((event) => {
    const { info, provider } = event.detail;
    if (!discoveredProviders.find(p => p.info.uuid === info.uuid)) {
      console.log(`EIP-6963: Discovered ${info.name}`);
      setDiscoveredProviders(prev => [...prev, { info, provider }]);
    }
  }, [discoveredProviders]);

  useEffect(() => {
    // Listen for EIP-6963 wallet announcements
    window.addEventListener('eip6963:announceProvider', handleProviderAnnouncement);
    window.dispatchEvent(new Event('eip6963:requestProvider'));

    return () => {
      window.removeEventListener('eip6963:announceProvider', handleProviderAnnouncement);
    };
  }, [handleProviderAnnouncement]);


  const connectWallet = () => {
    // Simulate wallet connection
    setUserAccount('0x1234567890123456789012345678901234567890');
    setEnsName('mostlyfutures.eth');
  };

  const disconnectWallet = () => {
    setUserAccount(null);
    setEnsName(null);
  };

  const displayName = userAccount 
    ? (ensName || `${userAccount.substring(0, 5)}...${userAccount.substring(userAccount.length - 4)}`)
    : null;

  return (
    <div className="min-h-screen bg-black text-gray-100 pb-24 md:pb-0">
      {/* Header */}
      <header className="p-4 md:fixed md:top-0 md:left-20 md:right-0 md:z-40 bg-gray-900">
        <nav className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-4 overflow-x-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-semibold text-lg py-2 px-4 rounded-full whitespace-nowrap transition-colors ${
                  activeFilter === filter
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="ml-4 flex-shrink-0">
            {!userAccount ? (
              <button
                onClick={connectWallet}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 whitespace-nowrap"
              >
                Connect Wallet
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-400 mr-2 md:mr-4 hidden sm:block">
                  {displayName}
                </span>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 mr-2">
                  Upload
                </button>
                <button
                  onClick={disconnectWallet}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="px-2 sm:px-4 lg:px-8 py-4 md:pt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {samplePhotos.map((photo, index) => (
            <div key={index} className="overflow-hidden rounded-2xl">
              <img
                src={photo.url}
                alt=""
                className="w-full h-auto block hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation Bar (Mobile) / Side Navigation Bar (Desktop) */}
      <footer className="fixed bottom-0 left-0 right-0 h-20 bg-gray-900 bg-opacity-80 backdrop-blur-sm border-t border-gray-800 md:top-0 md:left-0 md:h-full md:w-20 md:border-t-0 md:border-r z-50">
        <div className="flex justify-around items-center h-full md:flex-col md:justify-center md:space-y-10">
          {/* Home Icon */}
          <Link to="/mfExplore" className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </Link>
          
          {/* Search Icon */}
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          
          {/* Add/Upload Icon */}
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
          
          {/* Profile/Connect Wallet Icon */}
          <div className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            {userAccount ? (
              <div className="w-7 h-7 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-full border-2 border-gray-600"></div>
            ) : (
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MfSart;
