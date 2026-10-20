import React from 'react';
import { Linkedin, Github, Mail, Twitter } from 'lucide-react';

const SocialSidebar = () => {
  return (
    <div className="fixed left-8 bottom-0 z-50 hidden xl:flex flex-col items-center gap-6 animate-in slide-in-from-left duration-1000">

      <div className="flex flex-col gap-5 mb-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/agozilim-ndefo-66690214b"
          target="_blank"
          rel="noreferrer"
          className="text-emerald-400 hover:text-[#071611] hover:bg-[#bbf443] hover:-translate-y-1 transition-all duration-300 bg-[#0c241b] p-2.5 rounded-xl border border-emerald-500/25 shadow-lg shadow-black/40 hover:shadow-[#bbf443]/30"
          title="LinkedIn"
        >
          <Linkedin size={18} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/millamzy"
          target="_blank"
          rel="noreferrer"
          className="text-emerald-400 hover:text-[#071611] hover:bg-[#bbf443] hover:-translate-y-1 transition-all duration-300 bg-[#0c241b] p-2.5 rounded-xl border border-emerald-500/25 shadow-lg shadow-black/40 hover:shadow-[#bbf443]/30"
          title="GitHub"
        >
          <Github size={18} />
        </a>

        {/* Email */}
        <a
          href="mailto:agozilim.ndefo@gmail.com"
          className="text-emerald-400 hover:text-[#071611] hover:bg-[#bbf443] hover:-translate-y-1 transition-all duration-300 bg-[#0c241b] p-2.5 rounded-xl border border-emerald-500/25 shadow-lg shadow-black/40 hover:shadow-[#bbf443]/30"
          title="Email Me"
        >
          <Mail size={18} />
        </a>

        {/* Twitter/X */}
        <a
          href="https://twitter.com/agozilim"
          target="_blank"
          rel="noreferrer"
          className="text-emerald-400 hover:text-[#071611] hover:bg-[#bbf443] hover:-translate-y-1 transition-all duration-300 bg-[#0c241b] p-2.5 rounded-xl border border-emerald-500/25 shadow-lg shadow-black/40 hover:shadow-[#bbf443]/30"
          title="Twitter / X"
        >
          <Twitter size={18} />
        </a>
      </div>

      {/* Decorative Line */}
      <div className="w-[1.5px] h-24 bg-gradient-to-t from-[#bbf443] via-emerald-800 to-transparent opacity-60"></div>
    </div>
  );
};

export default SocialSidebar;