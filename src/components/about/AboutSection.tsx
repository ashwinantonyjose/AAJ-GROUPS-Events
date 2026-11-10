"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Compass,
  Target,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight
} from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"story" | "vision" | "mission" | "why">("story");

  const whyChoosePillars = [
    {
      title: "Artisanal Aesthetic Vision",
      desc: "Every stage, mandap, and lighting setup is individually designed to reflect personal identity rather than recycled templates."
    },
    {
      title: "Deep Kerala Rooted Expertise",
      desc: "Seamless logistical mastery across backwater resorts, beachfront zones, heritage palaces, and modern auditoriums statewide."
    },
    {
      title: "Rigorous Technical Production",
      desc: "Concert-grade sound systems, P2 LED videowalls, precision automated lighting, and certified structural safety standards."
    },
    {
      title: "Single-Point Accountability",
      desc: "A dedicated project lead and on-ground floor directors ensuring flawless timelines from preliminary concept to final farewell."
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0d] relative overflow-hidden" id="about">
      {/* Decorative Background Accents */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/5 blur-[120px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-80 h-80 bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            About {siteConfig.name}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Curating Extraordinary Moments Across Kerala
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Founded with an enduring passion for hospitality, aesthetic perfection, and cultural celebration,{" "}
            <span className="text-[#f7e7ce] font-normal">{siteConfig.name}</span> elevates event management into an art form.
          </p>
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Image Showcase with Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#d4af37]/20 shadow-2xl">
              <Image
                src="/images/about/about-craft.jpg"
                alt="AAJ GROUPS Event Craftsmanship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Brand Card */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 w-3/4 max-w-xs glass-card p-5 rounded-2xl border border-[#d4af37]/30 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-[#d4af37]/20 text-[#d4af37]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold">
                    Core Philosophy
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Experience & Emotion
                  </p>
                </div>
              </div>
              <p className="text-xs text-zinc-300 italic leading-snug">
                &ldquo;{siteConfig.tagline}&rdquo;
              </p>
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400">
                <span>Director:</span>
                <span className="text-white font-medium">{siteConfig.contactPerson}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Tabs & Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Tabs */}
            <div className="flex flex-wrap gap-2 pb-2 border-b border-white/10">
              <button
                onClick={() => setActiveTab("story")}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${
                  activeTab === "story"
                    ? "bg-[#d4af37] text-black font-semibold shadow-md"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Our Story
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${
                  activeTab === "vision"
                    ? "bg-[#d4af37] text-black font-semibold shadow-md"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Our Vision
              </button>
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${
                  activeTab === "mission"
                    ? "bg-[#d4af37] text-black font-semibold shadow-md"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab("why")}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all ${
                  activeTab === "why"
                    ? "bg-[#d4af37] text-black font-semibold shadow-md"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Why Choose Us
              </button>
            </div>

            {/* Tab 1: Our Story */}
            {activeTab === "story" && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-2xl font-serif font-bold text-white">
                  Crafting Memories Rooted in Authentic Hospitality
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  AAJ GROUPS was conceived to redefine the event landscape in Kerala. Under the leadership of{" "}
                  <strong className="text-white font-medium">{siteConfig.contactPerson}</strong>, our team brings together seasoned scenographers, culinary maestros, sound architects, and hospitality directors.
                </p>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  We believe that celebrations are emotional milestones that deserve undivided focus, meticulous planning, and bespoke artistry. Whether curating a serene temple wedding, an oceanfront beach aisle, or an international corporate conference, we ensure your story shines in every element.
                </p>
                <div className="pt-2 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl glass-card border border-white/5">
                    <p className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                      Location
                    </p>
                    <p className="text-sm font-medium text-white mt-1">Kerala, India</p>
                    <p className="text-xs text-zinc-400 mt-0.5">Operating Statewide</p>
                  </div>
                  <div className="p-4 rounded-xl glass-card border border-white/5">
                    <p className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                      Approach
                    </p>
                    <p className="text-sm font-medium text-white mt-1">100% Bespoke</p>
                    <p className="text-xs text-zinc-400 mt-0.5">Tailored to Your Vision</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Our Vision */}
            {activeTab === "vision" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#d4af37]/20 text-[#d4af37]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Our Vision
                  </h3>
                </div>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  To be acknowledged as Kerala’s most trusted, imaginative, and refined event management atelier—celebrated for setting benchmark standards in aesthetic sophistication, ethical transparency, and experiential guest delight.
                </p>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  We envision a world where every host can be a guest at their own celebration, secure in the knowledge that every floral stem, sound decibel, and hospitality protocol is orchestrated with perfection.
                </p>
              </div>
            )}

            {/* Tab 3: Our Mission */}
            {activeTab === "mission" && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#d4af37]/20 text-[#d4af37]">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Our Mission
                  </h3>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-zinc-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>
                      Deliver turnkey event execution that seamlessly merges authentic Kerala heritage with contemporary international luxury.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>
                      Maintain complete cost clarity and open communication through detailed proposals and structured milestone management.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>
                      Cultivate premier vendor partnerships across Kerala to ensure world-class cuisine, cinema-grade media, and concert-level production.
                    </span>
                  </li>
                </ul>
              </div>
            )}

            {/* Tab 4: Why Choose Us */}
            {activeTab === "why" && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-2xl font-serif font-bold text-white">
                  The AAJ GROUPS Distinction
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {whyChoosePillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl glass-card border border-white/5 space-y-1.5"
                    >
                      <h4 className="text-sm font-semibold text-[#f7e7ce] flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Section CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#d4af37] hover:text-white transition-colors"
              >
                Learn More About Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-300 hover:text-[#d4af37] transition-colors"
              >
                <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

