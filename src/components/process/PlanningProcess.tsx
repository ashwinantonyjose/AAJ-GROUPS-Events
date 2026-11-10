import { Sparkles, MessageSquare, Palette, Building2, Wrench, GlassWater } from "lucide-react";

export default function PlanningProcess() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Vision Alignment",
      desc: "We begin with an in-depth consultation with Ashwin Antony Jose and our planning team to comprehend your aesthetic vision, guest expectations, cultural protocols, and financial framework.",
      icon: <MessageSquare className="w-5 h-5 text-[#d4af37]" />
    },
    {
      num: "02",
      title: "3D Spatial & Moodboard Design",
      desc: "Our scenographers generate bespoke moodboards, color swatches, floral varieties, and 3D architectural stage renderings so you visualize every corner before construction begins.",
      icon: <Palette className="w-5 h-5 text-[#d4af37]" />
    },
    {
      num: "03",
      title: "Venue & Vendor Orchestration",
      desc: "We negotiate premier resort dates across Kerala, lock in top-tier culinary master chefs, curate celebrity talent, and structure transparent contracts with zero hidden buffers.",
      icon: <Building2 className="w-5 h-5 text-[#d4af37]" />
    },
    {
      num: "04",
      title: "Technical Production & Rehearsals",
      desc: "Structural trussing, P2 LED calibrating, sound acoustics, and floral arrivals are deployed under certified engineering standards, followed by dry-run technical rehearsals.",
      icon: <Wrench className="w-5 h-5 text-[#d4af37]" />
    },
    {
      num: "05",
      title: "Flawless Execution & Hospitality",
      desc: "On event day, our dedicated floor directors orchestrate the minute-by-minute timeline, couple entries, and VVIP hospitality, allowing you to be a relaxed guest at your own event.",
      icon: <GlassWater className="w-5 h-5 text-[#d4af37]" />
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0d] relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Our 5-Step Planning Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            A methodical, transparent, and refined workflow engineered to turn complex event logistics into an effortless celebration.
          </p>
        </div>

        {/* 5-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl glass-card border border-[#d4af37]/20 p-6 flex flex-col justify-between space-y-4 group hover:border-[#d4af37]/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between">
                <span className="font-serif text-3xl font-bold text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors">
                  {step.num}
                </span>
                <div className="p-2.5 rounded-xl bg-black/40 border border-[#d4af37]/20 group-hover:border-[#d4af37] transition-colors">
                  {step.icon}
                </div>
              </div>

              {/* Title & Desc */}
              <div className="space-y-2">
                <h3 className="text-base font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Indicator line */}
              <div className="pt-2">
                <div className="h-0.5 w-full bg-white/10 group-hover:bg-[#d4af37] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

