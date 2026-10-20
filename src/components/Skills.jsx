import React from 'react';

const Skills = () => {
  const techSkills = [
    "React.js", "Cisco Networking", "Full Stack", "System Engineering",
    "Database Management", "IT Support", "Video Editing", "AI Integration",
    "Digital Design", "Cloud Infrastructure"
  ];

  const repeatedSkills = [...techSkills, ...techSkills, ...techSkills];

  return (
    <div className="overflow-hidden py-4 select-none flex items-center bg-[#05130e] border-y border-emerald-500/15">
      <div className="flex animate-ticker gap-16 whitespace-nowrap">
        {repeatedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-4 text-emerald-800/70 font-black text-3xl md:text-5xl uppercase tracking-tighter hover:text-white transition-all duration-300 cursor-default"
          >
            <span>{skill}</span>
            <span className="text-[#bbf443] text-xl drop-shadow-[0_0_8px_rgba(187,244,67,0.8)]">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;