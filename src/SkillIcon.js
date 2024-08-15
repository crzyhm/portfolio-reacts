import React, { useEffect, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaFigma, FaDatabase } from 'react-icons/fa';
import './SkillIcon.css'; // Import CSS untuk animasi

const SkillIcon = ({ icon: Icon, label }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(label);
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [label]);

  return (
    <div
      id={label}
      className={`skill-icon ${isVisible ? 'visible' : ''}`}
    >
      <Icon className="icon" />
      <span>{label}</span>
    </div>
  );
};

const SkillIcons = () => {
  return (
    <div className="skill-icons-container">
      <SkillIcon icon={FaHtml5} label="HTML5" />
      <SkillIcon icon={FaCss3Alt} label="CSS3" />
      <SkillIcon icon={FaJsSquare} label="JavaScript" />
      <SkillIcon icon={FaFigma} label="Figma" />
      <SkillIcon icon={FaDatabase} label="MySQL" />
    </div>
  );
};

export default SkillIcons;
