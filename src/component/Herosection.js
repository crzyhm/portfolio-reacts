import React from 'react';
import '@fontsource/montserrat'; // Import font Montserrat
import { FaHandPaper } from 'react-icons/fa'; // Import icon melambaikan tangan
import meRemoveBgPreview from '../img/me-removebg-preview 1.png'; // Import gambar lokal
import './SkeletonLoader.css'; // Buat file CSS untuk skeleton loader

const HeroSection = () => {
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 p-8 mt-20">
      {/* 6 Column Text Section */}
      <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
        <div className="text-gray-800">
          <h1 className="text-4xl font-light flex items-center">
            Hello, I’m <FaHandPaper className="ml-3 text-yellow-500 animate-wave" />
          </h1>
          <h2 className="text-5xl font-bold mt-2 animate-typing">
            Muhammad Akbar Cokro P
          </h2>
        </div>
        <p className="mt-6 text-gray-700 text-lg leading-relaxed font-light">
          I am a junior web developer with a strong foundation in full-stack development, honed through extensive external training. Although new to the professional field, I am skilled in both front-end and back-end technologies and passionate about creating dynamic, user-friendly web applications. Eager to contribute and grow, I am ready to bring my enthusiasm and solid skills to new and exciting projects.
        </p>
      </div>

      {/* 6 Column Image Section */}
      <div className="col-span-12 md:col-span-6 flex justify-center items-center">
        <div className="bg-gray-100 skeleton-box main p-4 rounded-l-lg">
          <img
            src={meRemoveBgPreview}
            alt="Muhammad Akbar Cokro Pamungkas"
            className="max-w-full h-auto rounded-l-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
