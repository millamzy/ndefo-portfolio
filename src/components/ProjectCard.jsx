import React from 'react';
import { ExternalLink, Terminal, ShieldCheck, Database } from 'lucide-react';

const ProjectCard = ({ title, description, tags }) => {
  // Logic to pick icons based on title keywords
  const getIcon = () => {
    if (title.toLowerCase().includes('digitization')) return <Database size={22} />;
    if (title.toLowerCase().includes('cisco')) return <Terminal size={22} />;
    return <ShieldCheck size={22} />;
  };

  return (
    <div className="group bg-white rounded-[2rem] border border-slate-100 p-8 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 flex flex-col h-full relative overflow-hidden">
      {/* Background Accent Gradient */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[4rem] -z-0 group-hover:bg-blue-600/10 transition-colors"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header Icon */}
        <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:rotate-6 transition-all duration-300 shadow-lg">
          {getIcon()}
        </div>

        {/* Content */}
        <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        {/* Impact Tags */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;