import React from 'react';
import { FaEnvelope, FaLinkedinIn, FaSlack, FaGithub } from 'react-icons/fa';

const IconBoxes = () => {
  return (
    <div className="h-400px bg-gray-100 flex flex-wrap justify-around items-center p-4 mt-8 lg:mt-0">
      {/* Kotak 1: Gmail */}
      <a
        href="mailto:youremail@gmail.com"
        className="flex items-center justify-center bg-white p-4 shadow-lg rounded-lg w-80 h-40 mb-4 lg:mb-0 transform transition-transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope size={40} className="text-red-600 mr-2" />
        <span className="text-lg font-semibold text-gray-700">Gmail</span>
      </a>

      {/* Kotak 2: LinkedIn */}
      <a
        href="https://www.linkedin.com/in/yourprofile"
        className="flex items-center justify-center bg-white p-4 shadow-lg rounded-lg w-80 h-40 mb-4 lg:mb-0 transform transition-transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn size={40} className="text-blue-700 mr-2" />
        <span className="text-lg font-semibold text-gray-700">LinkedIn</span>
      </a>

      {/* Kotak 3: Slack */}
      <a
        href="https://slack.com"
        className="flex items-center justify-center bg-white p-4 shadow-lg rounded-lg w-80 h-40 mb-4 lg:mb-0 transform transition-transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSlack size={40} className="text-purple-600 mr-2" />
        <span className="text-lg font-semibold text-gray-700">Slack</span>
      </a>

      {/* Kotak 4: GitHub */}
      <a
        href="https://github.com/yourusername"
        className="flex items-center justify-center bg-white p-4 shadow-lg rounded-lg w-80 h-40 mb-4 lg:mb-0 transform transition-transform hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={40} className="text-gray-800 mr-2" />
        <span className="text-lg font-semibold text-gray-700">GitHub</span>
      </a>
    </div>
  );
};

export default IconBoxes;
