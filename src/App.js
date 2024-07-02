import React from 'react';
import './App.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import gmd from './assets/gmd.png';
import gme from './assets/gme.png';
import gmg from './assets/gmg.png';
import gmt from './assets/gmt.png';
import jre from './assets/ijr.png';  // Importar la imagen de Jimenez Real Estate

function App() {
  return (
    <div className="bg-gray-600 min-h-screen flex flex-col items-center justify-center text-white p-6">
      <div className="text-center mb-16">
        <div className="bg-white rounded-full p-4 inline-block mb-4 shadow-lg">
          <img src={gmg} alt="GM Group Logo" className="w-24 h-24" />
        </div>
        <h1 className="text-3xl font-bold mb-2">GM GROUP</h1>
        <p className="text-lg mb-4">Innovación y Excelencia en cada proyecto.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600">
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-12">
        <div className="flex flex-wrap justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="bg-white rounded-lg p-6 transition transform hover:scale-105 shadow-lg flex flex-col items-center w-56">
            <img src={gmt} alt="GM Tech Logo" className="w-20 h-20 mb-4" />
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="text-center text-xl text-gray-900">GM Tech</a>
          </div>
          <div className="bg-white rounded-lg p-6 transition transform hover:scale-105 shadow-lg flex flex-col items-center w-56">
            <img src={gmd} alt="GM Details Logo" className="w-20 h-20 mb-4" />
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="text-center text-xl text-gray-900">GM Details</a>
          </div>
          <div className="bg-white rounded-lg p-6 transition transform hover:scale-105 shadow-lg flex flex-col items-center w-56">
            <img src={gme} alt="GM Events Logo" className="w-20 h-20 mb-4" />
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="text-center text-xl text-gray-900">GM Events</a>
          </div>
          <div className="bg-white rounded-lg p-6 transition transform hover:scale-105 shadow-lg flex flex-col items-center w-56">
            <img src={jre} alt="Jimenez Real Estate Logo" className="w-20 h-20 mb-4" />
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="text-center text-xl text-gray-900">Jimenez Real Estate</a>
          </div>
        </div>
        <div className="w-full flex justify-center mt-8">
          <div className="border-t border-gray-400 w-1/2"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
