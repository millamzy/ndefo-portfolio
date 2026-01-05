import React from 'react';
import { 
  Terminal, 
  Download, 
  ChevronRight, 
  Code2, 
  Palette, 
  MonitorIcon, 
  Video, 
  Layers, 
  Share2 
} from 'lucide-react';
import profileImg from '../assets/profile.jpg'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#0a0f1a] overflow-hidden flex items-center pt-32 pb-44 px-12 md:px-24 lg:px-32">
      
      {/* --- BACKGROUND ACCENTS --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-blue-600/10 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-0 right-0 w-[35%] h-[35%] bg-indigo-500/10 rounded-full blur-[110px]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* --- LEFT SIDE: SKILL CONTENT --- */}
          <div className="lg:col-span-6 space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Creative Technologist</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              Digital <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-300">Architect.</span>
            </h1>

            {/* --- SKILLS GRID --- */}
            <div className="grid grid-cols-2 gap-y-5 gap-x-8 text-slate-300 pt-2">
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
                  <MonitorIcon size={16} />
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

            <p className="text-slate-400 text-lg leading-relaxed max-w-md border-l-2 border-blue-600 pl-6 pt-4">
              I am <span className="text-white font-bold text-xl block mb-1">Ndefo Agozilim.</span>
              A versatile engineer and creative blending technical IT infrastructure with modern digital storytelling.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 shadow-2xl shadow-blue-500/20">
                Work With Me <ChevronRight size={18} />
              </a>
              <a href="/Ndefo_Agozilim_CV.pdf" download className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3">
                <Download size={18} /> Download CV
              </a>
            </div>
          </div>

          {/* --- RIGHT SIDE: VISUAL STACK --- */}
          <div className="lg:col-span-6 relative flex flex-col md:flex-row items-center gap-8 justify-end">
            
            {/* TERMINAL: Pushed to the side of the profile */}
            <div className="w-full max-w-[260px] bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl order-2 md:order-1 self-center md:self-end md:mb-20">
              <div className="flex gap-1.5 mb-5">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-500"></div>
              </div>
              <div className="font-mono text-[10px] space-y-3 text-slate-300">
                <p className="text-blue-400 font-bold">$ whoami</p>
                <p className="text-indigo-300 italic">"Developer_x_Designer"</p>
                <div className="w-full h-[1px] bg-white/5 my-2"></div>
                <p className="text-[9px]"><span className="text-blue-400">#</span> Support: Active</p>
                <p className="text-[9px]"><span className="text-blue-400">#</span> Creative: Editing...</p>
                <p className="text-[9px]"><span className="text-blue-400">#</span> Social: Strategizing</p>
                <p className="text-green-500 animate-pulse mt-4 text-[9px] tracking-widest">LOADING EXPERTISE...</p>
              </div>
            </div>

            {/* PROFILE IMAGE */}
            <div className="relative z-10 order-1 md:order-2">
              <div className="w-64 h-80 md:w-80 md:h-[480px] rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl group bg-slate-800">
                <img 
                  src={profileImg} 
                  alt="Ndefo" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>

              {/* Video Editor Floating Badge */}
              <div className="absolute -bottom-8 -right-4 bg-indigo-600 px-6 py-4 rounded-3xl shadow-2xl flex items-center gap-4 border border-indigo-400/30 group hover:scale-105 transition-transform">
                <div className="p-2 bg-white/20 rounded-xl text-white">
                  <Video size={20} />
                </div>
                <div className="leading-none">
                  <p className="text-white font-black text-[10px] uppercase tracking-tighter">"Developer_x_Designer"</p>
                  <p className="text-indigo-100 text-[8px] font-bold mt-1">It Professional</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;