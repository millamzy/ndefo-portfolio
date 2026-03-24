import React from 'react';
import { ArrowRight, Code2, Layers, Cpu, Video, Monitor, Palette, Share2 } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#030712] flex items-center pt-32 pb-20 overflow-hidden">

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: Typography & Skills */}
        <div className="space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 font-mono text-xs tracking-widest uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Available for Hire
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
            Digital<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 animate-gradient">Architect.</span>
          </h1>

          {/* --- SKILLS GRID (Re-inserted) --- */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-slate-300 py-2">
            <div className="flex items-center gap-3 text-sm group">
              <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Code2 size={16} />
              </div>
              Web Developer
            </div>
            <div className="flex items-center gap-3 text-sm group">
              <div className="p-2 bg-indigo-500/10 rounded-lg group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <Video size={16} />
              </div>
              Video Editor
            </div>
            <div className="flex items-center gap-3 text-sm group">
              <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                <Monitor size={16} />
              </div>
              IT Support
            </div>
            <div className="flex items-center gap-3 text-sm group">
              <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <Palette size={16} />
              </div>
              Graphic Designer
            </div>
            <div className="flex items-center gap-3 text-sm group">
              <div className="p-2 bg-blue-400/10 rounded-lg group-hover:bg-blue-400 group-hover:text-white transition-colors">
                <Layers size={16} />
              </div>
              Digital Designer
            </div>
            <div className="flex items-center gap-3 text-sm group">
              <div className="p-2 bg-pink-500/10 rounded-lg group-hover:bg-pink-500 group-hover:text-white transition-colors">
                <Share2 size={16} />
              </div>
              Social Media
            </div>
          </div>

          <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-blue-500/30 pl-6">
            Hi, I'm <span className="text-white font-bold">Ndefo Agozilim</span>.
            I engineer robust digital infrastructure and craft immersive web experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="group relative px-8 py-4 bg-white text-slate-950 font-black uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </a>
            <a href="#contact" className="px-8 py-4 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-white/5 transition-all">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Profile Visual Stack & Terminal */}
        <div className="relative flex items-center justify-center h-[400px] lg:h-[600px] mt-12 lg:mt-0">

          {/* Main Image Container */}
          <div className="relative w-72 h-[380px] lg:w-80 lg:h-[450px] rounded-[3rem] p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-sm z-10 transform rotate-[-2deg] hover:rotate-0 transition-all duration-500 lg:mr-20">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
              <img src={profileImg} alt="Ndefo Profile" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Floating 'Stats' Card 1 */}
          <div className="absolute top-20 right-0 w-48 bg-[#0b1120]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl z-20 animate-float hidden lg:block">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400"><Code2 size={16} /></div>
              <span className="text-white font-bold text-xs">Developer</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full w-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[90%]"></div>
            </div>
          </div>

          {/* --- TERMINAL CARD (Re-inserted) --- */}
          <div className="absolute bottom-20 -right-10 w-[280px] bg-[#0b1120]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl z-30 animate-float hidden lg:block" style={{ animationDelay: '1.5s' }}>
            <div className="flex gap-1.5 mb-5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
            </div>
            <div className="font-mono text-[10px] space-y-3 text-slate-300">
              <p className="text-blue-400 font-bold flex items-center gap-2"><span className="text-pink-500">$</span> whoami</p>
              <p className="text-indigo-300 italic pl-4">"Developer_x_Designer"</p>
              <div className="w-full h-[1px] bg-white/5 my-2"></div>
              <div className="space-y-1.5 opacity-80">
                <p><span className="text-blue-500">#</span> Support: <span className="text-green-400">Active</span></p>
                <p><span className="text-blue-500">#</span> Creative: <span className="text-yellow-400">Editing...</span></p>
                <p><span className="text-blue-500">#</span> Social: <span className="text-purple-400">Strategizing</span></p>
              </div>
              <p className="text-green-500 animate-pulse mt-4 tracking-widest text-[9px] pt-2 border-t border-white/5">LOADING EXPERTISE...</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;