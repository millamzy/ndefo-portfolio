import React from 'react';

const Skills = () => {
  const techSkills = [
    "React.js", "Cisco", "dev developer","software enginneer", 
    "Database management", "IT Support", "Video Editing", "Ai Specialist", 
    "Digital Design", "System enginneer", "Graphic designer"
  ];

  // We double the array to create a seamless infinite loop
  const displaySkills = [...techSkills, ...techSkills];

  return (
    <div className="bg-white border-y border-slate-100 py-10 overflow-hidden select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {displaySkills.map((skill, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-2xl md:text-3xl font-black text-slate-200 hover:text-blue-600 transition-colors duration-300 uppercase tracking-tighter">
              {skill}
            </span>
            <div className="ml-16 w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;