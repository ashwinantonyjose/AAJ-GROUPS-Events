"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, MapPin, CheckCircle } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const active = testimonialsData[currentIndex];

  return (
    <section className="py-24 bg-[#08080a] relative overflow-hidden" id="testimonials">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            Client Impressions
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Words from Those We Have Celebrated With
          </h2>
          <p className="mt-2 text-xs text-zinc-500 italic">
            * Sample client feedback templates during platform staging; genuine verified reviews integrate directly.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative glass-card rounded-3xl border border-[#d4af37]/30 p-8 sm:p-12 shadow-2xl">
          <Quote className="w-12 h-12 text-[#d4af37]/25 absolute top-8 right-8" />

          <div className="space-y-6">
            {/* Star Rating */}
            <div className="flex items-center gap-1.5 text-[#d4af37]">
              {[...Array(active.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
              ))}
            </div>

            {/* Quote Body */}
            <blockquote className="text-lg sm:text-xl md:text-2xl font-serif text-white leading-relaxed italic">
              &ldquo;{active.quote}&rdquo;
            </blockquote>

            {/* Reviewer Meta */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-semibold text-white flex items-center gap-2">
                  {active.name}
                  {active.verified && (
                    <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-normal">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      Client Feedback
                    </span>
                  )}
                </h4>
                <p className="text-xs text-[#d4af37] font-medium mt-0.5">
                  {active.eventType}
                </p>
                <p className="text-xs text-zinc-400 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-zinc-500" />
                  {active.location} • {active.date}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="p-2.5 rounded-full border border-white/20 glass-card text-white hover:text-[#d4af37] hover:border-[#d4af37] transition-colors"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-zinc-400 px-2">
                  {currentIndex + 1} / {testimonialsData.length}
                </span>
                <button
                  onClick={next}
                  className="p-2.5 rounded-full border border-white/20 glass-card text-white hover:text-[#d4af37] hover:border-[#d4af37] transition-colors"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
