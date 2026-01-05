import React, { useState } from 'react';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import Skills from './components/Skills';
import SocialSidebar from './components/SocialSidebar';
import { 
  GraduationCap, 
  Award, 
  Cpu, 
  BookOpen, 
  Menu, 
  X, 
  Briefcase,
  ShieldCheck,
  Globe,
  Clock
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper to close mobile menu
  const closeMenu = () => setIsMenuOpen(false);

  // High-Impact Project Data
  const projects = [
    { 
      title: "Institutional Digitization System", 
      description: "Architected a secure digital transformation framework for the UNN ICT Unit, migrating over 10,000+ analog records to a centralized SQL database. Reduced retrieval time by 85%.", 
      tags: ["Full-Stack Dev", "Video Editing", "Graphics design"] 
    },
    { 
      title: "Cisco Academy Lab Infrastructure", 
      description: "Managed the deployment of enterprise-grade network infrastructure. Orchestrated training modules that resulted in a 40% increase in student certification pass rates.", 
      tags: ["Network Engineering", "Instructional Design", "Cisco"] 
    },
    { 
      title: "Acesped Enterprise IT Solutions", 
      description: "Developed and maintained custom software modules for organizational workflow automation. Provided 24/7 technical support, maintaining 99.9% system uptime.", 
      tags: ["Operations", "Software Development", "IT Support"] 
    }
  ];

  return (
    <div className="bg-white min-h-screen scroll-smooth font-sans antialiased text-slate-900">
      
      {/* 1. FLOATING SOCIAL SIDEBAR (Visible on Desktop) */}
      <SocialSidebar />

      {/* 2. STICKY NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black text-blue-700 tracking-tighter">
            AGOZILIM<span className="text-slate-900">.</span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-blue-600 transition">Home</a>
            <a href="#education" className="hover:text-blue-600 transition">Education</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="px-5 py-2 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition ml-4">Hire Me</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-900 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-8 space-y-6 text-center font-bold text-slate-700 uppercase tracking-widest text-xs">
              <a href="#" onClick={closeMenu}>Home</a>
              <a href="#education" onClick={closeMenu}>Education</a>
              <a href="#projects" onClick={closeMenu}>Projects</a>
              <a href="#contact" onClick={closeMenu} className="py-4 bg-blue-600 text-white rounded-2xl shadow-lg shadow-blue-200">Contact Me</a>
            </div>
          </div>
        )}
      </nav>

      {/* 3. HERO SECTION (Light Background) */}
      <section className="pt-24 bg-gradient-to-br from-blue-50/50 via-white to-slate-50">
        <Hero />
      </section>

      {/* 4. SKILLS MARQUEE */}
      <Skills />

      {/* 5. MAIN CONTENT AREA */}
      <main className="space-y-0">
        
        {/* EDUCATION SECTION (Deep Slate Background) */}
        <section id="education" className="py-24 bg-slate-950 text-white scroll-mt-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                <GraduationCap size={14} /> Academic Journey
              </div>
              <h2 className="text-4xl font-black tracking-tight">Education & Expertise</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Academic Degrees */}
              <div className="space-y-6">
                <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <span className="text-blue-400 font-bold text-xs tracking-[0.2em] uppercase">M.Sc. Computer Science</span>
                  <h3 className="text-2xl font-black mt-2">University of Nigeria Nsukka</h3>
                  <div className="mt-4 flex items-center gap-2 text-slate-400 text-sm">
                    <Globe size={14} /> Post-Graduate Specialization
                  </div>
                </div>
                <div className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-slate-500/50 transition-all duration-300">
                  <span className="text-slate-400 font-bold text-xs tracking-[0.2em] uppercase">B.Sc. Computer Science</span>
                  <h3 className="text-2xl font-black mt-2">Madonna University</h3>
                  <p className="text-slate-500 mt-2 italic text-sm">(Hons) Degree</p>
                </div>
              </div>

              {/* Training Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-blue-600 rounded-3xl shadow-xl shadow-blue-900/40">
                  <ShieldCheck className="mb-4 text-white" size={32} />
                  <h4 className="font-black text-white leading-tight">Digital Designing</h4>
                  <p className="text-[10px] text-blue-100 mt-2 uppercase font-bold">UM6P, Morocco</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                  <Cpu className="mb-4 text-blue-400" size={32} />
                  <h4 className="font-black text-white leading-tight">Cisco Instructor</h4>
                  <p className="text-[10px] text-slate-500 mt-2 uppercase font-bold">UNN Academy</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                  <BookOpen className="mb-4 text-blue-400" size={32} />
                  <h4 className="font-black text-white leading-tight">Media and Communication expert</h4>
                  <p className="text-[10px] text-slate-500 mt-2 uppercase font-bold">Abidjan, Côte d'Ivoire / Ghana / Seychelles</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-white">
                  <Briefcase className="mb-4 text-blue-400" size={32} />
                  <h4 className="font-black leading-tight"> Full stack developer</h4>
                  <p className="text-[10px] text-slate-500 mt-2 uppercase font-bold">Trained</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION (Clean Light Background) */}
        <section id="projects" className="py-24 bg-white scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900">Featured Projects</h2>
              <div className="w-20 h-2 bg-blue-600 rounded-full mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((proj, i) => (
                <ProjectCard key={i} {...proj} />
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION (High Visibility Dark Background) */}
        <ContactForm />

      </main>

      {/* 6. FOOTER (Deep Black) */}
      <footer className="bg-slate-950 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-left">
            <div className="text-2xl font-black text-white tracking-tighter">
              NDEFO AGOZILIM<span className="text-blue-600">.</span>
            </div>
            <p className="text-slate-500 text-sm mt-2 font-medium">Software Engineer • M.Sc. CS • Cisco Instructor</p>
          </div>
          
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-400">
            <Clock size={16} className="text-blue-500" />
            <span className="text-xs font-bold uppercase tracking-widest">Available for Remote Roles</span>
          </div>

          <div className="flex gap-8 text-[10px] font-black text-slate-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition">Back to Top</a>
            <a href="#contact" className="hover:text-white transition">Hire Me</a>
          </div>
        </div>
        <div className="mt-16 text-center text-slate-700 text-[10px] uppercase font-bold tracking-[0.3em]">
          © {new Date().getFullYear()} Ndefo Agozilim •  Enugu, Nigeria
        </div>
      </footer>
    </div>
  );
}

export default App;