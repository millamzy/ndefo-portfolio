import React from 'react';

const Skills = () => {
  const techSkills = [
    "React.js", "Cisco Networking", "Full Stack", "System Engineering",
    "Database Management", "IT Support", "Video Editing", "AI Integration",
    "Digital Design", "Cloud Infrastructure"
  ];

  const repeatedSkills = [...techSkills, ...techSkills, ...techSkills];

  return (
    <div className="overflow-hidden py-4 select-none flex items-center bg-[#030712]">
      <div className="flex animate-ticker gap-16 whitespace-nowrap">
        {repeatedSkills.map((skill, index) => (
          <div key={index} className="flex items-center gap-4 text-slate-700 font-black text-4xl md:text-6xl uppercase tracking-tighter opacity-50 hover:opacity-100 hover:text-white transition-all duration-500 cursor-default">
            <span>{skill}</span>
            <span className="text-blue-600 text-2xl">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;