import React from 'react';
import { Linkedin, Github, Mail, Twitter } from 'lucide-react';

const SocialSidebar = () => {
  return (
    /* Fixed on the left, hidden on mobile (md:flex), 
       and positioned at the bottom with a slide-in animation 
    */
    <div className="fixed left-8 bottom-0 z-50 hidden md:flex flex-col items-center gap-6 animate-in slide-in-from-left duration-1000">
      
      <div className="flex flex-col gap-8 mb-4">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/agozilim-ndefo-66690214b" 
          target="_blank" 
          rel="noreferrer"
          className="text-slate-400 hover:text-blue-600 hover:-translate-y-1.5 transition-all duration-300"
          title="LinkedIn"
        >
          <Linkedin size={20} />
        </a>

        {/* Email */}
        <a 
          href="mailto:agozilim.ndefo@gmail.com" 
          className="text-slate-400 hover:text-blue-600 hover:-translate-y-1.5 transition-all duration-300"
          title="Email Me"
        >
          <Mail size={20} />
        </a>

        {/* GitHub (Add your link if you have one) */}
        <a 
          href="https://github.com/millamzy" 
          target="_blank" 
          rel="noreferrer"
          className="text-slate-400 hover:text-blue-600 hover:-translate-y-1.5 transition-all duration-300"
          title="GitHub"
        >
          <Github size={20} />
        </a>

        {/* Twitter/X */}
        <a 
          href="@agozilim" 
          target="_blank" 
          rel="noreferrer"
          className="text-slate-400 hover:text-blue-600 hover:-translate-y-1.5 transition-all duration-300"
          title="Twitter"
        >
          <Twitter size={20} />
        </a>
      </div>

      {/* The vertical decorative line */}
      <div className="w-[1.5px] h-32 bg-gradient-to-t from-blue-600 via-slate-300 to-transparent"></div>
    </div>
  );
};

export default SocialSidebar;