import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import CoreDisciplines from './components/CoreDisciplines';
import FeaturedSpotlight from './components/FeaturedSpotlight';
import ContactForm from './components/ContactForm';
import { CardStack } from './components/ui/CardStack';
import Skills from './components/Skills';
import SocialSidebar from './components/SocialSidebar';
import {
  Menu, X, Sparkles, GraduationCap, Cpu, BookOpen, ShieldCheck, Briefcase, FileDown, Home
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Projects Data for Card Stack (Preserved completely)
  const projects = [
    {
      id: 1,
      title: "Orderly",
      category: "SaaS Product",
      description: "Combat chaos with our next-gen queue system. Manage crowds efficiently and avoid the drama. 78k+ Active Users.",
      tags: ["React", "Queue System", "UX/UI"],
      gradient: "from-[#bbf443] to-emerald-700",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      link: "https://orderly-xi-gold.vercel.app/"
    },
    {
      id: 2,
      title: "KingsOnly",
      category: "E-Commerce",
      description: "Street Wear: Define your altitude. A premium fashion platform for those who replace the standard.",
      tags: ["Shopify", "Fashion", "Branding"],
      gradient: "from-amber-400 to-emerald-800",
      imageSrc: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2600&auto=format&fit=crop",
      link: "https://kingsonly.vercel.app/"
    },
    {
      id: 3,
      title: "Pentecost Bank",
      category: "Fintech Solution",
      description: "A modern banking interface for digital finance management. Secure, fast, and user-centric banking experience.",
      tags: ["Next.js", "Finance", "Security"],
      gradient: "from-emerald-400 to-[#123829]",
      imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop",
      link: "https://pentecost-bank.vercel.app/"
    }
  ];

  return (
    <div className="bg-[#071611] min-h-screen text-emerald-100 antialiased selection:bg-[#bbf443] selection:text-[#071611] overflow-x-hidden">

      {/* Global Ambient Noise & Lighting Filter */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.025] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>

      {/* 1. Brand Wordmark Header (Matching "ODDAWORLD" at top of Reference Image) */}
      <header className="relative z-40 pt-7 text-center select-none">
        <a href="#about" className="inline-block tracking-[0.35em] text-white/90 font-black text-sm md:text-base hover:text-[#bbf443] transition-colors">
          NDEFO<span className="text-[#bbf443]">WORLD</span>
        </a>
      </header>

      {/* 2. Floating Island Pill Navbar (Exact Pattern from Reference Image) */}
      <nav className={`fixed top-14 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'translate-y-[-10px]' : 'translate-y-0'}`}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex items-center justify-between px-3 md:px-5 py-2 rounded-full bg-white/95 backdrop-blur-2xl border border-white/40 shadow-2xl shadow-black/40 text-slate-800">

            {/* Active Pill: "Home" capsule like reference image */}
            <a
              href="#about"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#071611] text-white font-bold text-xs shadow-md tracking-wide"
            >
              <Home size={13} className="text-[#bbf443]" />
              <span>Home</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-700 tracking-wide">
              <a href="#about" className="hover:text-[#071611] hover:underline underline-offset-4 transition-colors">About</a>
              <a href="#disciplines" className="hover:text-[#071611] hover:underline underline-offset-4 transition-colors">Disciplines</a>
              <a href="#projects" className="hover:text-[#071611] hover:underline underline-offset-4 transition-colors">Work</a>
              <a href="#education" className="hover:text-[#071611] hover:underline underline-offset-4 transition-colors">Education</a>
              <a href="#contact" className="hover:text-[#071611] hover:underline underline-offset-4 transition-colors">Contact</a>
            </div>

            {/* Right Action: Download CV Badge */}
            <div className="flex items-center gap-2">
              <a
                href="/Ndefo_Agozilim_CV.pdf"
                download="Ndefo_Agozilim_CV.pdf"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#071611]/5 hover:bg-[#bbf443] hover:text-[#071611] border border-slate-200 text-slate-800 text-[11px] font-bold transition-all"
                title="Download CV"
              >
                <FileDown size={13} />
                <span>Resume</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden text-slate-900 p-1 rounded-full hover:bg-slate-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Navigation"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#071611] flex flex-col items-center justify-center gap-8 text-2xl font-black text-emerald-200 uppercase tracking-widest animate-in slide-in-from-top duration-300">
          <button
            className="absolute top-8 right-8 text-white p-2 border border-[#bbf443]/30 rounded-full bg-[#0d2a1f]"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#bbf443] transition-colors">Home / About</a>
          <a href="#disciplines" onClick={() => setIsMenuOpen(false)} className="hover:text-[#bbf443] transition-colors">Disciplines</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-[#bbf443] transition-colors">Work</a>
          <a href="#education" onClick={() => setIsMenuOpen(false)} className="hover:text-[#bbf443] transition-colors">Education</a>
          <a href="/Ndefo_Agozilim_CV.pdf" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)} className="hover:text-[#bbf443] transition-colors">Download CV</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-[#bbf443] hover:underline">Contact</a>
        </div>
      )}

      {/* 3. Hero Section (With Ndefo's Picture on Pedestal & Concentric Rings) */}
      <Hero />

      {/* 4. Skills Marquee Ticker */}
      <div className="relative z-10 -mt-10 transform -rotate-1">
        <Skills />
      </div>

      <main className="relative z-10 bg-[#071611]">

        {/* 5. Core Disciplines Section ("Shop By Category" 5-Card Layout) */}
        <CoreDisciplines />

        {/* 6. Featured Innovation Spotlight ("New Arrival" Banner Pattern) */}
        <FeaturedSpotlight />

        {/* 7. 3D Projects Showcase Section */}
        <section id="projects" className="py-24 bg-[#05130e] relative overflow-hidden">
          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#bbf443]/10 blur-[130px] rounded-full pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-14 text-center space-y-2">
              <span className="text-[#bbf443] font-mono font-bold uppercase tracking-[0.25em] text-xs block">
                SELECTED WORKS
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                Interactive <span className="font-script text-5xl md:text-7xl text-[#bbf443] -rotate-1 inline-block">Portfolio.</span>
              </h2>
              <p className="text-emerald-100/70 max-w-lg mx-auto text-sm">
                Explore live web solutions, fintech applications, and SaaS platforms built with precision.
              </p>
            </div>

            <div className="flex justify-center w-full">
              <CardStack
                items={projects}
                cardWidth={500}
                cardHeight={400}
                autoAdvance={true}
                intervalMs={5000}
              />
            </div>
          </div>
        </section>

        {/* 8. Education & Certifications Grid (Preserved Completely in Forest Emerald) */}
        <section id="education" className="py-28 relative bg-[#071611]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-16 gap-3">
              <span className="text-[#bbf443] font-mono font-bold uppercase tracking-[0.25em] text-xs">
                ACADEMIC & INDUSTRY TRACK
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Education & <span className="font-script text-5xl md:text-6xl text-[#bbf443] -rotate-1 inline-block">Credentials.</span>
              </h2>
              <p className="max-w-xl text-emerald-100/70 leading-relaxed text-sm">
                A rigorous academic background combined with specialized industry training in network engineering, digital media, and software architecture.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Primary Degree */}
              <div className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-b from-[#0c261d] to-[#071712] border border-emerald-500/20 hover:border-[#bbf443]/40 transition-all group shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-[#143d2c] border border-[#bbf443]/25 flex items-center justify-center text-[#bbf443] mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1.5">M.Sc. Computer Science</h3>
                <p className="text-emerald-300 text-sm uppercase tracking-wider mb-5 font-mono">University of Nigeria Nsukka</p>
                <div className="flex gap-2 text-xs font-mono text-emerald-300">
                  <span className="px-3 py-1 bg-[#123829] border border-emerald-500/25 rounded-full">Post-Graduate</span>
                  <span className="px-3 py-1 bg-[#123829] border border-emerald-500/25 rounded-full">Research</span>
                </div>
              </div>

              {/* Secondary Degree */}
              <div className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-b from-[#0c261d] to-[#071712] border border-emerald-500/20 hover:border-[#bbf443]/40 transition-all group shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-[#143d2c] border border-[#bbf443]/25 flex items-center justify-center text-[#bbf443] mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1.5">B.Sc. Computer Science</h3>
                <p className="text-emerald-300 text-sm uppercase tracking-wider mb-5 font-mono">Madonna University (Hons)</p>
                <p className="text-emerald-100/70 text-sm leading-relaxed">
                  Foundation in algorithms, data structures, and system analysis. Graduated with honors.
                </p>
              </div>

              {/* Skills Bento Box */}
              <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-6 rounded-3xl bg-[#0c241b] border border-emerald-500/20 flex flex-col items-center text-center gap-2.5 hover:border-[#bbf443]/40 transition-colors">
                  <ShieldCheck className="text-[#bbf443]" size={26} />
                  <span className="text-white font-bold text-sm">Digital Design</span>
                  <span className="text-[10px] text-emerald-300 font-mono uppercase">UM6P Morocco</span>
                </div>
                <div className="p-6 rounded-3xl bg-[#0c241b] border border-emerald-500/20 flex flex-col items-center text-center gap-2.5 hover:border-[#bbf443]/40 transition-colors">
                  <Cpu className="text-[#bbf443]" size={26} />
                  <span className="text-white font-bold text-sm">Cisco Instructor</span>
                  <span className="text-[10px] text-emerald-300 font-mono uppercase">UNN Academy</span>
                </div>
                <div className="p-6 rounded-3xl bg-[#0c241b] border border-emerald-500/20 flex flex-col items-center text-center gap-2.5 hover:border-[#bbf443]/40 transition-colors">
                  <Briefcase className="text-[#bbf443]" size={26} />
                  <span className="text-white font-bold text-sm">Media Expert</span>
                  <span className="text-[10px] text-emerald-300 font-mono uppercase">International</span>
                </div>
                <div className="p-6 rounded-3xl bg-[#0c241b] border border-emerald-500/20 flex flex-col items-center text-center gap-2.5 hover:border-[#bbf443]/40 transition-colors">
                  <Sparkles className="text-[#bbf443]" size={26} />
                  <span className="text-white font-bold text-sm">Full Stack</span>
                  <span className="text-[10px] text-emerald-300 font-mono uppercase">Certified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Contact Section */}
        <ContactForm />

      </main>

      {/* 10. Minimalist Footer */}
      <footer className="py-12 border-t border-emerald-500/15 bg-[#05130e] text-center">
        <p className="text-emerald-400/80 text-xs uppercase tracking-[0.25em] font-bold">
          <span className="text-[#bbf443]">©{new Date().getFullYear()}</span> Ndefo Agozilim • Software Engineer & Cisco Instructor
        </p>
      </footer>

      <SocialSidebar />
    </div>
  );
}

export default App;