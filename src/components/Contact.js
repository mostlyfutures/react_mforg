import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mf-blue to-mf-light-blue text-white flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <div className="text-2xl mb-4 animate-fadeIn">Contact me at</div>
        <div className="text-4xl md:text-5xl mb-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <span className="bg-gradient-to-r from-mf-gradient-start to-mf-gradient-end bg-clip-text text-transparent font-bold">
            mostlyfutures@gmail.com
          </span>
        </div>
        <Link 
          to="/" 
          className="bg-white bg-opacity-10 text-white border-none py-4 px-8 text-lg cursor-pointer no-underline rounded-xl transition-all duration-300 backdrop-blur-sm hover:bg-opacity-20 hover:-translate-y-0.5 animate-fadeIn"
          style={{ animationDelay: '0.6s' }}
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default Contact;
