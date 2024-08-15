import React from 'react';
import './Card.css'; // Import custom CSS for animations

const Card = ({ number, title, description }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col transform transition-transform duration-500 ease-out hover:scale-105 animate-slide-in">
      {/* Nomor */}
      <div className="flex flex-col items-end text-4xl font-bold text-gray-800">
        {number}
      </div>
      {/* Title */}
      <div className="text-2xl font-bold mb-4 text-gray-800">
        {title}
      </div>
      {/* Description */}
      <p className="text-base text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default Card;
