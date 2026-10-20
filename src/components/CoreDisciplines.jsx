import React from 'react';
import { Code2, Network, Server, Palette, Video, ArrowRight, ArrowUpRight } from 'lucide-react';

const disciplines = [
  {
    id: 1,
    title: "Web Engineering",
    subtitle: "Full-Stack & React",
    description: "Modern web applications, responsive architectures & performant APIs.",
    tag: "Next.js / Node",
    icon: Code2,
    badge: "Engineering",
  },
  {
    id: 2,
    title: "Cisco Networking",
    subtitle: "Certified Instructor",
    description: "Enterprise network design, routing, switching & infrastructure security.",
    tag: "UNN Academy",
    icon: Network,
    badge: "Certified",
  },
  {
    id: 3,
    title: "Systems & Cloud",
    subtitle: "M.Sc. Research",
    description: "Distributed architectures, scalable databases & algorithm optimization.",
    tag: "Post-Graduate",
    icon: Server,
    badge: "Core Science",
  },
  {
    id: 4,
    title: "Digital Design",
    subtitle: "UM6P Morocco",
    description: "High-conversion UI/UX design, interactive prototypes & brand identity.",
    tag: "Design System",
    icon: Palette,
    badge: "Creative",
  },
  {
    id: 5,
    title: "Media & Strategy",
    subtitle: "International",
    description: "Cinematic video editing, multimedia production & digital audience growth.",
    tag: "Multimedia",
    icon: Video,
    badge: "Production",
  },
];

const CoreDisciplines = () => {
  return (
    <section id="disciplines" className="py-24 bg-[#071611] relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header with rule line and "View All" link (Matches Reference) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-14">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Core Disciplines
            </h2>
            <div className="hidden sm:block w-24 h-[1px] bg-emerald-500/30"></div>
          </div>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 hover:text-[#bbf443] transition-colors group"
          >
            <span>View Selected Work</span>
            <div className="w-6 h-6 rounded-full bg-[#123829] flex items-center justify-center group-hover:bg-[#bbf443] group-hover:text-[#071611] transition-colors">
              <ArrowRight size={13} />
            </div>
          </a>
        </div>

        {/* 5 Column Vertical Cards Grid (Exact "Shop By Category" Pattern) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {disciplines.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-[2rem] bg-gradient-to-b from-[#0d2a1f] to-[#071812] border border-emerald-500/15 p-6 flex flex-col justify-between hover:border-[#bbf443]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#bbf443]/10"
              >
                {/* Visual Pedestal & Glow Top Area */}
                <div className="relative w-full h-40 rounded-2xl bg-[#091f16] border border-emerald-500/10 flex items-center justify-center mb-6 overflow-hidden group-hover:border-[#bbf443]/30 transition-colors">
                  {/* Glowing ambient circle */}
                  <div className="absolute w-28 h-28 rounded-full bg-[#bbf443]/10 blur-xl group-hover:bg-[#bbf443]/25 transition-colors"></div>

                  {/* Circular Pedestal base inside card */}
                  <div className="absolute bottom-2 w-32 h-6 rounded-[100%] bg-gradient-to-b from-[#163f2f] to-[#081a13] border-t border-[#bbf443]/30"></div>

                  {/* Floating Icon with glowing backdrop */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-[#0e2d21] border border-emerald-500/30 flex items-center justify-center text-[#bbf443] group-hover:scale-110 group-hover:border-[#bbf443] transition-all duration-300 shadow-lg">
                    <IconComponent size={28} />
                  </div>

                  {/* Top Badge */}
                  <span className="absolute top-3 right-3 text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#143b2c] border border-emerald-500/20 text-emerald-300">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2 flex-grow">
                  <div className="text-[10px] font-mono text-[#bbf443] font-bold uppercase tracking-wider">
                    {item.tag}
                  </div>
                  <h3 className="text-xl font-black text-white leading-tight group-hover:text-emerald-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Footer Action Link */}
                <div className="pt-6 mt-6 border-t border-emerald-500/10 flex items-center justify-between text-xs font-bold text-white group-hover:text-[#bbf443] transition-colors">
                  <span>Explore Focus</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#bbf443]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CoreDisciplines;
