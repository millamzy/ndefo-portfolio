import React from 'react';
import { ArrowUpRight, Database, Terminal, ShieldCheck, FolderGit2, Briefcase } from 'lucide-react';

const ProjectCard = ({ title, description, tags, category, gradient, link = "#" }) => {

  const getIcon = () => {
    const t = title.toLowerCase();
    if (t.includes('digitization') || t.includes('database')) return <Database size={24} />;
    if (t.includes('cisco') || t.includes('network')) return <Terminal size={24} />;
    if (t.includes('security') || t.includes('support')) return <ShieldCheck size={24} />;
    if (t.includes('business') || t.includes('enterprise')) return <Briefcase size={24} />;
    return <FolderGit2 size={24} />;
  };

  return (
    <a href={link} className="group relative flex flex-col h-full bg-[#0b1120] rounded-[2rem] border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2">

      {/* 1. Gradient Accent Header */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${gradient || 'from-blue-600 to-indigo-600'}`}></div>

      {/* 2. Content Container */}
      <div className="p-8 flex flex-col h-full relative z-10">

        {/* Glow Effects */}
        <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${gradient || 'from-blue-500 to-indigo-500'} opacity-[0.05] rounded-full blur-[100px] group-hover:opacity-[0.15] transition-opacity duration-500 pointer-events-none`}></div>

        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
            {getIcon()}
          </div>
          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-300 transition-colors">
            {category || "Project"}
          </div>
        </div>

        {/* Title & Desc */}
        <div className="mb-6 flex-grow">
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags && tags.slice(0, 3).map((tag, i) => (
              <span key={i} className="text-[10px] font-mono font-bold text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                #{tag}
              </span>
            ))}
          </div>

          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-black transition-all duration-300">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;