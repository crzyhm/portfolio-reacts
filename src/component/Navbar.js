import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import '@fontsource/montserrat'; // Import font Montserrat

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent  w-full z-10 font-montserrat ">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <span className="text-xl font-bold text-gray-800">Akbar</span>
        </div>

        {/* Links */}
        <div className={`flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:flex md:space-x-6`}>
          <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Project</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Service</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Boatman</a>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a href="mailto:example@example.com" className="text-gray-600 hover:text-gray-800">
            <FaEnvelope size={20} />
          </a>
          <a href="https://www.linkedin.com" className="text-gray-600 hover:text-gray-800">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://www.facebook.com" className="text-gray-600 hover:text-gray-800">
            <FaFacebookF size={20} />
          </a>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 p-2 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-105">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-105">Project</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-105">Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-105">Boatman</a>
            <div className="flex space-x-4">
              <a href="mailto:example@example.com" className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                <FaEnvelope size={20} />
              </a>
              <a href="https://www.linkedin.com" className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://www.facebook.com" className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
