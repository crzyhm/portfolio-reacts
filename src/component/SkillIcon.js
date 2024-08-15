import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaFigma, FaDatabase } from 'react-icons/fa';
import './SkillIcon.css'; // Make sure to include the CSS for styling

const icons = [
  { component: FaHtml5, color: '#E34F26', title: 'HTML' },
  { component: FaCss3Alt, color: '#1572B6', title: 'CSS' },
  { component: FaJsSquare, color: '#F7E02A', title: 'JavaScript' },
  { component: FaReact, color: '#61DAFB', title: 'React' },
  { component: FaFigma, color: '#F24E1E', title: 'Figma' },
  { component: FaDatabase, color: '#003B57', title: 'MySQL' },
];

const SkillIcon = () => {
  return (
    <div className="skill-icons-container">
      {icons.map((icon, index) => {
        const IconComponent = icon.component;
        return (
          <div key={index} className="skill-icon" title={icon.title}>
            <IconComponent style={{ color: icon.color, fontSize: '40px' }} />
          </div>
        );
      })}
    </div>
  );
};

export default SkillIcon;
