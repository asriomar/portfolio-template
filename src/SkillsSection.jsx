import React from 'react';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaMobileAlt,
  FaPalette,
  FaCode,
  FaCheck,
} from 'react-icons/fa';

const SkillsSection = () => {
  // Define your latest and in-demand skills with icons
  const skills = [
    { name: 'React.js', icon: <FaReact /> },
    { name: 'JavaScript (ES6+)', icon: <FaJs /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Tailwind CSS', icon: <FaPalette /> },
    { name: 'Responsive Design', icon: <FaMobileAlt /> },
    { name: 'Git/GitHub', icon: <FaGitAlt /> },
    { name: 'Webpack', icon: <FaCode /> },
    { name: 'UI/UX Design Principles', icon: <FaCode /> },
    { name: 'Next.js', icon: <FaCheck /> },
    { name: 'TypeScript', icon: <FaCheck /> },
    // Add more skills as needed
  ];

  return (
    <section className="py-8 bg-blue-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Latest & In-Demand Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center flex flex-col items-center"
            >
              {skill.icon}
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
