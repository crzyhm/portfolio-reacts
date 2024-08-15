import React from 'react';
import { FaEnvelope, FaLinkedinIn, FaSlack } from 'react-icons/fa';

const IconBoxes = () => {
  return (
    <div className="h-400px bg-gray-100 flex flex-wrap justify-around items-center p-4 mt-8 lg:mt-0">
      {/* Kotak 1: Gmail */}
      <div className="flex items-center justify-center bg-white p-4 shadow-lg rounded-lg w-80 h-40 mb-4 lg:mb-0 transform transition-transform hover:scale-105">
        <FaEnvelope size={40} className="text-red-600 mr-2" />
        <span className="text-lg font-semibold text-gray-700">Gmail</span>
      </div>

      {/* Kotak 2: LinkedIn */}
      <div className="flex items-center justify-center bg-white p-4 shadow-lg rounded-lg w-80 h-40 mb-4 lg:mb-0 transform transition-transform hover:scale-105">
        <FaLinkedinIn size={40} className="text-blue-700 mr-2" />
        <span className="text-lg font-semibold text-gray-700">LinkedIn</span>
      </div>

      {/* Kotak 3: Slack */}
      <div className="flex items-center justify-center bg-white p-4 shadow-lg rounded-lg w-80 h-40 mb-4 lg:mb-0 transform transition-transform hover:scale-105">
        <FaSlack size={40} className="text-purple-600 mr-2" />
        <span className="text-lg font-semibold text-gray-700">Slack</span>
      </div>

      {/* Kotak 4: Placeholder atau isi lain */}
      <div className="flex items-center justify-center bg-white p-4 shadow-lg rounded-lg w-80 h-40 mb-4 lg:mb-0 transform transition-transform hover:scale-105">
        <FaEnvelope size={40} className="text-gray-600 mr-2" />
        <span className="text-lg font-semibold text-gray-700">Placeholder</span>
      </div>
    </div>
  );
};

export default IconBoxes;
