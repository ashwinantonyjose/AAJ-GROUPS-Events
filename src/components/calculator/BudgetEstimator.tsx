"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calculator,
  Sparkles,
  Users,
  Utensils,
  Music,
  Palette,
  ArrowRight,
  Info
} from "lucide-react";

export default function BudgetEstimator() {
  const [eventType, setEventType] = useState<string>("Wedding");
  const [guestCount, setGuestCount] = useState<number>(300);
  const [decorTier, setDecorTier] = useState<number>(2); // 1: Classic, 2: Premium, 3: Royal
  const [cateringTier, setCateringTier] = useState<number>(2); // 1: Sadya, 2: Multi-Cuisine, 3: Royal Spread
  const [productionTier, setProductionTier] = useState<number>(2); // 1: Standard, 2: High-Def AV, 3: Concert Grade

  // Calculation logic with indicative ranges
  const estimate = useMemo(() => {
    // Base decor cost based on scale
    const decorBase = [150000, 350000, 750000][decorTier - 1];

    // Catering cost per plate * guests
    const perPlateCost = [450, 850, 1400][cateringTier - 1];
    const cateringCost = perPlateCost * guestCount;

    // Production & Sound / Stage
    const productionCost = [100000, 250000, 500000][productionTier - 1];

    // Media & Coordination buffer
    const mediaAndCoordination = [80000, 180000, 320000][decorTier - 1];

    const subtotal = decorBase + cateringCost + productionCost + mediaAndCoordination;
    const lower = Math.round(subtotal * 0.9);
    const upper = Math.round(subtotal * 1.15);

    return {
      decor: decorBase,
      catering: cateringCost,
      production: productionCost,
      media: mediaAndCoordination,
      lower,
      upper
    };
  }, [guestCount, decorTier, cateringTier, productionTier]);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="py-24 bg-[#08080a] relative overflow-hidden" id="budget-estimator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce] mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#d4af37]" />
            Planning Toolkit
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Kerala Event Budget Estimator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Get an instant, transparent ballpark forecast tailored to your guest size, culinary ambition, and production scale.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form (7 Cols) */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-[#d4af37]/20 space-y-6">
            {/* Event Type Selection */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                Event Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  "Wedding",
                  "Destination Wedding",
                  "Corporate Summit",
                  "Birthday / Milestone",
                  "Engagement",
                  "Stage Show"
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEventType(type)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium transition-all text-left truncate ${
                      eventType === type
                        ? "bg-[#d4af37] text-black font-semibold shadow-md"
                        : "bg-white/5 text-zinc-300 hover:bg-white/10"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Count Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#d4af37]" />
                  Expected Guest Count
                </label>
                <span className="text-base font-bold text-[#d4af37] font-mono">
                  {guestCount.toLocaleString("en-IN")} Guests
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="2500"
                step="25"
                value={guestCount}
                onChange={(e) => setGuestCount(Number(e.target.value))}
                className="w-full accent-[#d4af37] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 mt-1 font-mono">
                <span>50</span>
                <span>500</span>
                <span>1,000</span>
                <span>2,500+</span>
              </div>
            </div>

            {/* Decor & Styling Tier */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2 flex items-center gap-1.5">
                <Palette className="w-4 h-4 text-[#d4af37]" />
                Floral & Stage Styling Scale
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { level: 1, name: "Classic Elegant", desc: "Refined florals & stage backdrop" },
                  { level: 2, name: "Premium Luxury", desc: "Grand floral mandap & ambiance" },
                  { level: 3, name: "Royal Bespoke", desc: "Architectural 3D stage & ceiling canopy" }
                ].map((tier) => (
                  <button
                    key={tier.level}
                    type="button"
                    onClick={() => setDecorTier(tier.level)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      decorTier === tier.level
                        ? "border-[#d4af37] bg-[#d4af37]/15 text-white"
                        : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20"
                    }`}
                  >
                    <p className="text-xs font-semibold text-white">{tier.name}</p>
                    <p className="text-[10px] text-zinc-400 mt-0.5 line-clamp-1">{tier.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Catering Spread */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2 flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-[#d4af37]" />
                Culinary Experience
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { level: 1, name: "Authentic Sadya", desc: "28-item traditional banana leaf spread" },
                  { level: 2, name: "Multi-Cuisine Buffet", desc: "Indian, Continental & live counters" },
                  { level: 3, name: "Royal Gourmet", desc: "Live carving, seafood & dessert lounge" }
                ].map((tier) => (
                  <button
                    key={tier.level}
                    type="button"
                    onClick={() => setCateringTier(tier.level)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      cateringTier === tier.level
                        ? "border-[#d4af37] bg-[#d4af37]/15 text-white"
                        : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20"
                    }`}
                  >
                    <p className="text-xs font-semibold text-white">{tier.name}</p>
                    <p className="text-[10px] text-zinc-400 mt-0.5 line-clamp-1">{tier.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Production & Audio-Visual */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2 flex items-center gap-1.5">
                <Music className="w-4 h-4 text-[#d4af37]" />
                AV & Entertainment Scale
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { level: 1, name: "Acoustic / DJ", desc: "Crisp PA sound & moving heads" },
                  { level: 2, name: "P2 LED & Bands", desc: "High-definition videowall & live band" },
                  { level: 3, name: "Concert Arena", desc: "Line arrays, cryo jets & pyro FX" }
                ].map((tier) => (
                  <button
                    key={tier.level}
                    type="button"
                    onClick={() => setProductionTier(tier.level)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      productionTier === tier.level
                        ? "border-[#d4af37] bg-[#d4af37]/15 text-white"
                        : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20"
                    }`}
                  >
                    <p className="text-xs font-semibold text-white">{tier.name}</p>
                    <p className="text-[10px] text-zinc-400 mt-0.5 line-clamp-1">{tier.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card (5 Cols) */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-3xl border border-[#d4af37]/40 shadow-2xl space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#d4af37]">
                Estimated Budget Bracket
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                {formatINR(estimate.lower)} – {formatINR(estimate.upper)}
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Indicative budget for {guestCount} guests ({eventType})
              </p>
            </div>

            {/* Breakdown itemization */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between text-zinc-300">
                <span>Decor & Floral Architecture</span>
                <span className="font-mono text-white font-medium">{formatINR(estimate.decor)}</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Catering & Banquet Service</span>
                <span className="font-mono text-white font-medium">{formatINR(estimate.catering)}</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Audiovisual, Stage & Special FX</span>
                <span className="font-mono text-white font-medium">{formatINR(estimate.production)}</span>
              </div>
              <div className="flex justify-between text-zinc-300">
                <span>Cinematic Media & Day Coordination</span>
                <span className="font-mono text-white font-medium">{formatINR(estimate.media)}</span>
              </div>
            </div>

            {/* Disclaimer box */}
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-2.5 text-[11px] text-amber-200 leading-relaxed">
              <Info className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <span>
                <strong>Indicative Estimate Only:</strong> Actual quotations are customized based on chosen Kerala venue tariff, seasonal rates, bespoke flower imports, and celebrity rider requirements.
              </span>
            </div>

            {/* CTA Transfer to Quote */}
            <Link
              href={`/contact?service=${encodeURIComponent(eventType)}&guests=${guestCount}&budget=${encodeURIComponent(`${formatINR(estimate.lower)} - ${formatINR(estimate.upper)}`)}#quote`}
              className="w-full py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] text-black shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Lock in Custom Quotation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
