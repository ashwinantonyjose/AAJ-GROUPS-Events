"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award
} from "lucide-react";
import { siteConfig } from "@/config/site";

interface HeroSlide {
  image: string;
  category: string;
  title: string;
  subtitle: string;
  locationTag: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: "/images/hero/hero-kerala-wedding.jpg",
    category: "Traditional & Royal Mandaps",
    title: "Luxury Kerala Weddings Crafted with Timeless Artistry",
    subtitle:
      "From auspicious traditional ceremonies to majestic palace receptions across God's Own Country.",
    locationTag: "Kumarakom & Bolgatty Palace"
  },
  {
    image: "/images/hero/hero-beach-wedding.jpg",
    category: "Coastal Destination Vows",
    title: "Enchanting Beach Weddings Along Kovalam & Varkala",
    subtitle:
      "Barefoot luxury, starlit oceanfront dinners, and sun-drenched floral aisles beside the Arabian Sea.",
    locationTag: "Kovalam & Marari Shores"
  },
  {
    image: "/images/hero/hero-grand-reception.jpg",
    category: "Architectural Grandeur",
    title: "Spectacular Receptions & Celestial Stage Creations",
    subtitle:
      "Cascading crystal chandeliers, bespoke couple entries, and royal hospitality for thousands of guests.",
    locationTag: "Kochi Grand Convention"
  },
  {
    image: "/images/hero/hero-floral-stage.jpg",
    category: "Artisanal Floral Styling",
    title: "Mesmerizing Floral Stages & Dreamlike Canopies",
    subtitle:
      "Handcrafted jasmine garlands, exotic blooms, and ambient illumination designed to take your breath away.",
    locationTag: "Bespoke Kerala Venues"
  },
  {
    image: "/images/hero/hero-corporate-event.jpg",
    category: "Executive Summit Production",
    title: "High-Impact Corporate Galas & Global Conclaves",
    subtitle:
      "Precision AV engineering, P2 LED videowalls, and flawless execution for visionary enterprises.",
    locationTag: "Infopark & Trade Centres"
  },
  {
    image: "/images/hero/hero-birthday-party.jpg",
    category: "Milestone Celebrations",
    title: "Joyous Milestone Birthdays & Private Soirées",
    subtitle:
      "Immersive custom themes, artisanal dessert artistry, and memories that last for generations.",
    locationTag: "Private Luxury Villas"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Automatic slideshow timer (every 6 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const active = heroSlides[currentSlide];

  return (
    <section
      className="relative w-full h-screen min-h-[680px] max-h-[1080px] overflow-hidden bg-black select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="AAJ GROUPS Event Showcase Carousel"
    >
      {/* Background Slides with Ken Burns Crossfade Effect */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Subtle Ken Burns Zoom Animation */}
          <motion.div
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.08 }}
            transition={{ duration: 7, ease: "linear" }}
            className="relative w-full h-full"
          >
            <Image
              src={active.image}
              alt={active.title}
              fill
              priority
              quality={90}
              className="object-cover object-center"
            />
          </motion.div>

          {/* Cinematic Dark Overlays for Maximum Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d] via-black/55 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0d]/90 via-[#0a0a0d]/50 to-transparent" />
          {/* Subtle Gold Ambient Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d4af37]/10 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-28 pb-12">
        {/* Top Status Pill */}
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#d4af37]/30 text-xs text-[#f7e7ce] backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="font-semibold tracking-wider uppercase text-[11px]">
              {siteConfig.name} • {siteConfig.serviceRegion}
            </span>
          </motion.div>

          {/* Current Slide Counter */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="text-[#d4af37] font-bold text-sm">
              0{currentSlide + 1}
            </span>
            <span className="text-zinc-600">/</span>
            <span>0{heroSlides.length}</span>
          </div>
        </div>

        {/* Central Hero Headline & CTAs */}
        <div className="max-w-3xl space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-4"
            >
              {/* Category & Location Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block px-3 py-1 text-xs uppercase tracking-widest font-semibold rounded-md bg-[#d4af37]/20 text-[#f7e7ce] border border-[#d4af37]/40">
                  {active.category}
                </span>
                <span className="text-xs text-zinc-400 font-medium flex items-center gap-1">
                  • {active.locationTag}
                </span>
              </div>

              {/* Majestic Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]">
                {active.title}
              </h1>

              {/* Subtitle / Description */}
              <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
                {active.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/services"
              className="px-7 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold border border-[#d4af37]/60 text-[#f7e7ce] hover:bg-[#d4af37]/15 hover:border-[#d4af37] transition-all transform hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-sm"
            >
              Explore Our Services
            </Link>

            <Link
              href="/contact#quote"
              className="px-8 py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] text-black shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Plan Your Event
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Trust Highlights Strip */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-zinc-400 border-t border-white/10 max-w-xl">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>Bespoke 3D Event Design</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
              <span>Full Kerala Coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#d4af37]" />
              <span>Turnkey Coordination</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Slide Indicators & Scroll Down Guide */}
        <div className="flex items-center justify-between pt-6">
          {/* Slide Progress Indicators */}
          <div className="flex items-center gap-2.5">
            {heroSlides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Switch to slide ${index + 1}: ${slide.title}`}
                className={`transition-all duration-300 rounded-full h-1.5 focus:outline-none ${
                  currentSlide === index
                    ? "w-10 bg-gradient-to-r from-[#d4af37] to-[#f7e7ce] shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                    : "w-2.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2.5 rounded-full border border-white/20 glass-card text-white hover:text-[#d4af37] hover:border-[#d4af37] transition-all transform hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2.5 rounded-full border border-white/20 glass-card text-white hover:text-[#d4af37] hover:border-[#d4af37] transition-all transform hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Scroll Down Indicator */}
          <div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-400">
            <span>Scroll to Discover</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            >
              <ChevronDown className="w-4 h-4 text-[#d4af37]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
