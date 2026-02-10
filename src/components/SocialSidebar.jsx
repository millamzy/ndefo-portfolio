import React from 'react';
import { Linkedin, Github, Mail, Twitter } from 'lucide-react';

const SocialSidebar = () => {
  return (
    <div className="fixed left-8 bottom-0 z-50 hidden xl:flex flex-col items-center gap-6 animate-in slide-in-from-left duration-1000">

      <div className="flex flex-col gap-6 mb-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/agozilim-ndefo-66690214b"
          target="_blank"
          rel="noreferrer"
          className="text-slate-500 hover:text-blue-500 hover:-translate-y-1 transition-all duration-300 bg-white/5 p-2 rounded-lg border border-transparent hover:border-blue-500/20"
          title="LinkedIn"
        >
          <Linkedin size={18} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/millamzy"
          target="_blank"
          rel="noreferrer"
          className="text-slate-500 hover:text-white hover:-translate-y-1 transition-all duration-300 bg-white/5 p-2 rounded-lg border border-transparent hover:border-white/20"
          title="GitHub"
        >
          <Github size={18} />
        </a>

        {/* Email */}
        <a
          href="mailto:agozilim.ndefo@gmail.com"
          className="text-slate-500 hover:text-indigo-400 hover:-translate-y-1 transition-all duration-300 bg-white/5 p-2 rounded-lg border border-transparent hover:border-indigo-500/20"
          title="Email Me"
        >
          <Mail size={18} />
        </a>

        {/* Twitter/X */}
        <a
          href="https://twitter.com/agozilim"
          target="_blank"
          rel="noreferrer"
          className="text-slate-500 hover:text-blue-400 hover:-translate-y-1 transition-all duration-300 bg-white/5 p-2 rounded-lg border border-transparent hover:border-blue-400/20"
          title="Twitter"
        >
          <Twitter size={18} />
        </a>
      </div>

      {/* Decorative Line */}
      <div className="w-[1px] h-24 bg-gradient-to-t from-blue-600 via-slate-800 to-transparent opacity-50"></div>
    </div>
  );
};

export default SocialSidebar;