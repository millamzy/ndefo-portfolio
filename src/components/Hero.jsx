import React from 'react';
import { ArrowRight, Code2, Layers, Cpu, Video, Monitor, Palette, Share2, FileDown, ShieldCheck, GraduationCap, Users, Play } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen bg-[#071611] flex flex-col justify-center pt-36 pb-24 overflow-hidden">

      {/* 1. Cinematic Ambient Lighting & Palm Leaf Shadow Simulation */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#bbf443]/15 via-[#164131]/25 to-transparent rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-10 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-[#0e3325]/30 to-transparent rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* Soft Palm Leaf Shadow Projection Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#bbf443]/10 via-[#0a2319] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Typography & CTAs (Exact Layout Pattern) */}
          <div className="lg:col-span-7 space-y-8 relative z-10">
            
            {/* Top Kicker with rule line */}
            <div className="flex items-center gap-3">
              <span className="text-[#bbf443] font-mono text-[11px] md:text-xs font-bold uppercase tracking-[0.25em]">
                NEXT-GEN SYSTEMS
              </span>
              <div className="w-12 h-[1px] bg-[#bbf443]/60"></div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123829] border border-[#bbf443]/30 text-[#bbf443] text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#bbf443] animate-pulse"></span>
                Available for Hire
              </div>
            </div>

            {/* Display Headline: Bold Sans + Script Accent (Matches "Digital Architect.") */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight">
                Digital
              </h1>
              <div className="flex items-baseline gap-4 flex-wrap">
                <span className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#bbf443] -rotate-2 inline-block drop-shadow-[0_0_35px_rgba(187,244,67,0.45)] select-none">
                  Architect.
                </span>
              </div>
            </div>

            {/* Subtitle & Bio */}
            <div className="space-y-3 max-w-xl">
              <p className="text-emerald-100/90 text-base md:text-lg font-medium leading-snug">
                Smart. Resilient. Scalable.
                <br />
                <span className="text-emerald-400/90 text-sm md:text-base font-normal">
                  High-performance software and network architecture that keeps you ahead.
                </span>
              </p>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed border-l-2 border-[#bbf443]/40 pl-4 py-0.5">
                Hi, I'm <span className="text-white font-bold">Ndefo Agozilim</span>. I engineer robust digital infrastructure and craft immersive web experiences.
              </p>
            </div>

            {/* Skills Grid - Forest Emerald Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-lg pt-1">
              {[
                { icon: Code2, label: 'Web Developer' },
                { icon: Video, label: 'Video Editor' },
                { icon: Monitor, label: 'IT Support' },
                { icon: Palette, label: 'Graphic Designer' },
                { icon: Layers, label: 'Digital Designer' },
                { icon: Share2, label: 'Social Media' }
              ].map((skill, i) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#0c241b]/80 border border-emerald-500/15 hover:border-[#bbf443]/50 hover:bg-[#103024] text-xs font-medium text-emerald-200 transition-all group cursor-default"
                  >
                    <div className="p-1 rounded-md bg-[#163d2e] text-[#bbf443] group-hover:bg-[#bbf443] group-hover:text-[#071611] transition-colors">
                      <IconComponent size={13} />
                    </div>
                    <span>{skill.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons: Primary Lime Pill + Secondary Circular Action Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Primary: Solid Neon Lime Pill */}
              <a
                href="#projects"
                className="group px-8 py-4 bg-[#bbf443] hover:bg-[#cbfd50] text-[#071611] font-black uppercase tracking-wider text-xs rounded-full flex items-center gap-3 transition-all duration-300 shadow-xl shadow-[#bbf443]/20 hover:shadow-2xl hover:shadow-[#bbf443]/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
              </a>

              {/* Secondary: Circular Action Button Matching Reference */}
              <a
                href="/Ndefo_Agozilim_CV.pdf"
                download="Ndefo_Agozilim_CV.pdf"
                className="group flex items-center gap-3 px-4 py-2 rounded-full bg-[#0d281e]/80 border border-emerald-500/20 hover:border-[#bbf443]/40 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-white text-[#071611] flex items-center justify-center group-hover:bg-[#bbf443] transition-colors shadow-md">
                  <FileDown size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-left">
                  <div className="text-white text-xs font-bold leading-tight group-hover:text-[#bbf443] transition-colors">
                    Download CV
                  </div>
                  <div className="text-emerald-400/80 text-[10px] font-mono leading-tight">
                    PDF Resume
                  </div>
                </div>
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 border border-emerald-500/25 hover:border-[#bbf443]/60 text-emerald-200 hover:text-white font-bold uppercase tracking-wider text-xs rounded-full transition-all"
              >
                Contact Me
              </a>
            </div>

            {/* Metric / Trust Badges Row (Exact match to 4 icons in reference image) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-emerald-500/15">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#0e2a20] border border-[#bbf443]/25 text-[#bbf443]">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div className="text-white text-xs font-bold leading-tight">Cisco Certified</div>
                  <div className="text-emerald-400/70 text-[10px]">UNN Academy</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#0e2a20] border border-[#bbf443]/25 text-[#bbf443]">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <div className="text-white text-xs font-bold leading-tight">M.Sc. Honors</div>
                  <div className="text-emerald-400/70 text-[10px]">Comp Science</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#0e2a20] border border-[#bbf443]/25 text-[#bbf443]">
                  <Cpu size={16} />
                </div>
                <div>
                  <div className="text-white text-xs font-bold leading-tight">Full-Stack Dev</div>
                  <div className="text-emerald-400/70 text-[10px]">React & Next.js</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#0e2a20] border border-[#bbf443]/25 text-[#bbf443]">
                  <Users size={16} />
                </div>
                <div>
                  <div className="text-white text-xs font-bold leading-tight">78k+ Users</div>
                  <div className="text-emerald-400/70 text-[10px]">Active in SaaS</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Pedestal with Concentric Glowing Aura Rings & User's Picture */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] lg:min-h-[560px]">
            
            {/* Concentric Halo Aura Rings (Inspired by Reference Design) */}
            <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-[#bbf443]/30 shadow-[0_0_60px_rgba(187,244,67,0.15)] pointer-events-none animate-pulse-glow"></div>
            <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full border border-[#bbf443]/20 pointer-events-none"></div>

            {/* Glowing Backdrop Radial Aura */}
            <div className="absolute w-[320px] h-[320px] bg-gradient-to-tr from-[#164131] via-[#bbf443]/20 to-transparent rounded-full blur-[80px] pointer-events-none"></div>

            {/* Dark Pedestal Base */}
            <div className="absolute bottom-4 sm:bottom-8 w-64 sm:w-80 h-16 rounded-[100%] bg-gradient-to-b from-[#133829] to-[#071611] border-t border-[#bbf443]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(187,244,67,0.2)]"></div>

            {/* Main Picture Container - Standing proudly on the pedestal */}
            <div className="relative z-20 group">
              <div className="relative w-64 sm:w-72 lg:w-80 h-[380px] sm:h-[430px] rounded-[3rem] p-2 bg-gradient-to-b from-[#184634] via-[#0d271d] to-[#081a13] border-2 border-[#bbf443]/40 shadow-[0_15px_50px_rgba(0,0,0,0.7),0_0_40px_rgba(187,244,67,0.2)] transition-all duration-500 group-hover:border-[#bbf443] group-hover:shadow-[0_0_50px_rgba(187,244,67,0.35)]">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                  {/* Subtle Forest Green Lighting Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071611] via-transparent to-[#bbf443]/10 mix-blend-overlay pointer-events-none z-10"></div>
                  <img
                    src={profileImg}
                    alt="Ndefo Agozilim"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Status Pill: "Available for Hire" */}
              <div className="absolute -top-4 -left-4 sm:-left-6 px-4 py-2 rounded-full bg-[#091f17]/95 border border-[#bbf443]/40 shadow-xl backdrop-blur-xl flex items-center gap-2 z-30 animate-float">
                <span className="w-2.5 h-2.5 rounded-full bg-[#bbf443] animate-ping"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#bbf443] -ml-4.5"></span>
                <span className="text-white text-xs font-bold tracking-wide">Engineer & Instructor</span>
              </div>

              {/* Floating Terminal Card in Forest Glass */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 w-60 sm:w-64 bg-[#081c14]/95 backdrop-blur-2xl border border-emerald-500/25 rounded-2xl p-4 shadow-2xl z-30 animate-float-slow">
                <div className="flex gap-1.5 mb-2.5">
                  <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2 h-2 rounded-full bg-[#bbf443]"></div>
                </div>
                <div className="font-mono text-[10px] space-y-1.5 text-emerald-200">
                  <p className="text-[#bbf443] font-bold flex items-center gap-1.5">
                    <span className="text-white">$</span> whoami
                  </p>
                  <p className="text-white font-medium pl-3">"Ndefo_Agozilim"</p>
                  <div className="w-full h-[1px] bg-emerald-500/20 my-1"></div>
                  <p className="text-emerald-400"># Cisco CCNA / CCNP: Active</p>
                  <p className="text-emerald-400"># M.Sc. Comp Sci: Completed</p>
                  <p className="text-[#bbf443] font-bold animate-pulse pt-1 text-[9px] uppercase tracking-wider">
                    ● SYSTEMS OPERATIONAL
                  </p>
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