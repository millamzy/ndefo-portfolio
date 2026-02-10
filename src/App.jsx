import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import Skills from './components/Skills';
import SocialSidebar from './components/SocialSidebar';
import {
  Menu, X, Sparkles, GraduationCap, Cpu, BookOpen, ShieldCheck, Briefcase
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Institutional Digitization System",
      category: "Development",
      description: "Secure transformation framework for UNN ICT Unit. Migrated 10,000+ analog records to centralized SQL, boosting retrieval speed by 85%.",
      tags: ["Full-Stack", "SQL", "Architecture"],
      gradient: "from-blue-600 to-indigo-600",
      link: "#"
    },
    {
      title: "Cisco Academy Infrastructure",
      category: "Network Engineering",
      description: "Deployed enterprise-grade network infrastructure. Orchestrated training modules resulting in a 40% rise in certification pass rates.",
      tags: ["Cisco", "Networking", "Design"],
      gradient: "from-emerald-500 to-teal-600",
      link: "#"
    },
    {
      title: "Acesped IT Automation",
      category: "IT Operations",
      description: "Custom software modules for workflow automation. Delivered 24/7 technical support, maintaining 99.9% system uptime.",
      tags: ["Automation", "Support", "DevOps"],
      gradient: "from-orange-500 to-pink-600",
      link: "#"
    }
  ];

  return (
    <div className="bg-[#030712] min-h-screen text-slate-300 antialiased selection:bg-blue-500 selection:text-white overflow-x-hidden">

      {/* 1. Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>

      {/* 2. Floating Navbar */}
      <nav className={`fixed top-6 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'translate-y-0' : 'translate-y-2'}`}>
        <div className="max-w-5xl mx-auto px-6">
          <div className={`flex items-center justify-between px-6 py-4 rounded-full border border-white/10 ${scrolled ? 'bg-[#030712]/80 backdrop-blur-xl shadow-2xl shadow-blue-500/10' : 'bg-transparent border-transparent'}`}>

            {/* Logo */}
            <a href="#" className="font-bold text-xl tracking-tight text-white flex items-center gap-2 group">
              <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-xs group-hover:rotate-12 transition-transform">N.</span>
              <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-sm font-medium text-slate-400">Ndefo Agozilim</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-slate-400">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Work</a>
              <a href="#contact" className="px-5 py-2 rounded-full bg-white text-slate-950 hover:bg-blue-500 hover:text-white transition-all shadow-lg shadow-white/10">
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center gap-8 text-2xl font-black text-slate-400 uppercase tracking-widest animate-in slide-in-from-top duration-300">
          <button className="absolute top-8 right-8 text-white p-2 border border-white/10 rounded-full" onClick={() => setIsMenuOpen(false)}><X /></button>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">About</a>
          <a href="#education" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Education</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-white transition-colors">Work</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-blue-500 hover:text-blue-400">Contact</a>
        </div>
      )}

      {/* 3. Hero Section */}
      <Hero />

      {/* 4. Skills Marquee */}
      <div className="relative z-10 -mt-20 transform rotate-1 bg-[#030712] py-8 border-y border-white/5">
        <Skills />
      </div>

      <main className="relative z-10 bg-[#030712]">

        {/* 5. Education Grid */}
        <section id="education" className="py-32 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-20 gap-4">
              <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">My Journey</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Education & <span className="text-slate-500">Certifications.</span></h2>
              <p className="max-w-xl text-slate-400 leading-relaxed text-sm">
                A rigorous academic background combined with specialized industry training in network engineering, media, and software development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Primary Degree */}
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all group">
                <GraduationCap className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">M.Sc. Computer Science</h3>
                <p className="text-slate-400 text-sm uppercase tracking-wider mb-6">University of Nigeria Nsukka</p>
                <div className="flex gap-2 text-xs font-mono text-slate-500">
                  <span className="px-2 py-1 bg-white/5 rounded">Post-Graduate</span>
                  <span className="px-2 py-1 bg-white/5 rounded">Research</span>
                </div>
              </div>

              {/* Secondary Degree (with hover effect) */}
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all group">
                <BookOpen className="text-indigo-500 mb-6" size={40} />
                <h3 className="text-2xl font-bold text-white mb-2">B.Sc. Computer Science</h3>
                <p className="text-slate-400 text-sm uppercase tracking-wider mb-6">Madonna University (Hons)</p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Foundation in algorithms, data structures, and system analysis. Graduated with honors.
                </p>
              </div>

              {/* Skills Bento Box */}
              <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-6 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex flex-col items-center text-center gap-3 hover:bg-blue-600/20 transition-colors">
                  <ShieldCheck className="text-blue-400" />
                  <span className="text-white font-bold text-sm">Digital Design</span>
                  <span className="text-[10px] text-blue-300 uppercase">UM6P Morocco</span>
                </div>
                <div className="p-6 rounded-3xl bg-emerald-600/10 border border-emerald-500/20 flex flex-col items-center text-center gap-3 hover:bg-emerald-600/20 transition-colors">
                  <Cpu className="text-emerald-400" />
                  <span className="text-white font-bold text-sm">Cisco Instructor</span>
                  <span className="text-[10px] text-emerald-300 uppercase">UNN Academy</span>
                </div>
                <div className="p-6 rounded-3xl bg-purple-600/10 border border-purple-500/20 flex flex-col items-center text-center gap-3 hover:bg-purple-600/20 transition-colors">
                  <Briefcase className="text-purple-400" />
                  <span className="text-white font-bold text-sm">Media Expert</span>
                  <span className="text-[10px] text-purple-300 uppercase">International</span>
                </div>
                <div className="p-6 rounded-3xl bg-orange-600/10 border border-orange-500/20 flex flex-col items-center text-center gap-3 hover:bg-orange-600/20 transition-colors">
                  <Sparkles className="text-orange-400" />
                  <span className="text-white font-bold text-sm">Full Stack</span>
                  <span className="text-[10px] text-orange-300 uppercase">Certified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Projects Section */}
        <section id="projects" className="py-32 bg-slate-950 relative overflow-hidden">
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-20 text-center">
              <span className="text-indigo-500 font-bold uppercase tracking-widest text-xs mb-2 block">Selected Works</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Projects.</span></h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((proj, i) => (
                <div key={i} className="h-[450px]">
                  <ProjectCard {...proj} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Contact Section */}
        <ContactForm />

      </main>

      {/* 8. Minimalist Footer */}
      <footer className="py-12 border-t border-white/5 bg-[#030712] text-center">
        <p className="text-slate-600 text-xs uppercase tracking-[0.3em] font-bold">
          <span className="text-blue-500">©{new Date().getFullYear()}</span> Ndefo Agozilim • Built with React
        </p>
      </footer>

      <SocialSidebar />
    </div>
  );
}

export default App;