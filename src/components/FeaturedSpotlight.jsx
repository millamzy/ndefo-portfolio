import React, { useState } from 'react';
import { ArrowRight, SquareArrowOutUpRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';

const spotlightProjects = [
  {
    id: 1,
    name: "Orderly",
    tagline: "Zero Chaos.",
    category: "Featured SaaS",
    description: "Combat crowd chaos with our next-generation queue management system. Real-time slot reservation, telemetry dashboard, and live queue analytics.",
    metric: "78k+ Active Users",
    tags: ["React", "Queue Architecture", "UX/UI"],
    link: "https://orderly-xi-gold.vercel.app/",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "KingsOnly",
    tagline: "Define Altitude.",
    category: "E-Commerce",
    description: "Street Wear: Define your altitude. A premium fashion and merchandise platform for those who replace the standard.",
    metric: "High-Conversion Store",
    tags: ["Shopify", "React", "Branding"],
    link: "https://kingsonly.vercel.app/",
    imageSrc: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Pentecost Bank",
    tagline: "Secure Velocity.",
    category: "Fintech Platform",
    description: "A modern banking interface for digital finance management. Secure encryption, instant transfers, and user-centric ledger experience.",
    metric: "Institutional Security",
    tags: ["Next.js", "Finance", "Security"],
    link: "https://pentecost-bank.vercel.app/",
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop",
  }
];

const FeaturedSpotlight = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = spotlightProjects[activeTab];

  return (
    <section className="py-20 bg-[#071611] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Pill Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[#bbf443] font-mono text-xs uppercase tracking-[0.25em] font-bold block mb-1">
              INNOVATION SPOTLIGHT
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Flagship Solutions.
            </h3>
          </div>

          {/* Interactive Project Pills */}
          <div className="inline-flex p-1.5 rounded-full bg-[#0b2219] border border-emerald-500/20">
            {spotlightProjects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === idx
                    ? 'bg-[#bbf443] text-[#071611] shadow-lg shadow-[#bbf443]/20'
                    : 'text-emerald-300 hover:text-white'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        {/* Wide Spotlight Banner (Matching "NEW ARRIVAL - Small Size. Big Performance." Layout) */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-r from-[#0d2a1f] via-[#081e16] to-[#04120d] border border-emerald-500/20 p-8 sm:p-12 overflow-hidden shadow-2xl">
          
          {/* Glowing Aura Rings inside Banner */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#bbf443]/10 blur-[90px] pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">

            {/* Left: 3D Pedestal Visual Container */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[280px] sm:min-h-[340px]">
              
              {/* Pedestal Base */}
              <div className="absolute bottom-2 w-56 sm:w-64 h-12 rounded-[100%] bg-gradient-to-b from-[#133c2c] to-[#061610] border-t border-[#bbf443]/30 shadow-[0_15px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(187,244,67,0.2)]"></div>

              {/* Glowing Halo Ring */}
              <div className="absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-[#bbf443]/25 shadow-[0_0_40px_rgba(187,244,67,0.15)] pointer-events-none animate-pulse-glow"></div>

              {/* Product Preview Card */}
              <div className="relative z-10 w-full max-w-sm h-64 sm:h-72 rounded-3xl overflow-hidden border-2 border-[#bbf443]/30 shadow-2xl group">
                <img
                  src={current.imageSrc}
                  alt={current.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071611] via-[#071611]/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white px-3 py-1 rounded-full bg-[#0b241b]/90 border border-[#bbf443]/30 backdrop-blur-md">
                    {current.metric}
                  </span>
                </div>
              </div>

            </div>

            {/* Right: Typography & Action */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#bbf443]" />
                <span className="text-[#bbf443] font-mono text-xs uppercase tracking-[0.2em] font-bold">
                  {current.category}
                </span>
              </div>

              <div>
                <h4 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                  {current.name}
                </h4>
                <div className="font-script text-5xl sm:text-6xl text-[#bbf443] -rotate-1 inline-block drop-shadow-[0_0_20px_rgba(187,244,67,0.4)]">
                  {current.tagline}
                </div>
              </div>

              <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed max-w-xl">
                {current.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {current.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-mono font-medium text-emerald-300 px-3 py-1 rounded-full bg-[#103425] border border-emerald-500/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="pt-2 flex items-center gap-4">
                <a
                  href={current.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-8 py-4 bg-[#bbf443] hover:bg-[#cbfd50] text-[#071611] font-black uppercase tracking-wider text-xs rounded-full flex items-center gap-2.5 transition-all shadow-xl shadow-[#bbf443]/20 hover:scale-105 active:scale-95"
                >
                  <span>LAUNCH {current.name.toUpperCase()}</span>
                  <SquareArrowOutUpRight size={14} />
                </a>

                <a
                  href="#projects"
                  className="px-6 py-4 border border-emerald-500/25 hover:border-[#bbf443]/50 text-emerald-200 hover:text-white font-bold uppercase tracking-wider text-xs rounded-full transition-all"
                >
                  View 3D Stack
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedSpotlight;
