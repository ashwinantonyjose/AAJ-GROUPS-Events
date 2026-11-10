"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  HeartHandshake,
  Palmtree,
  Waves,
  Briefcase,
  Cake,
  Music,
  Tv,
  Camera,
  Utensils,
  GlassWater,
  Rocket,
  LayoutGrid,
  GraduationCap
} from "lucide-react";
import { servicesData } from "@/data/services";
import { ServiceItem } from "@/types";

interface ServicesGridProps {
  limit?: number;
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
}

export default function ServicesGrid({
  limit,
  showFilters = true,
  title = "Our Signature Services",
  subtitle = "End-to-end luxury event planning, bespoke floral architectures, and concert-grade production across Kerala."
}: ServicesGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Weddings", "Corporate", "Celebrations", "Production", "Hospitality"];

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === "All") return true;
    return service.category === activeCategory;
  });

  const displayedServices = limit ? filteredServices.slice(0, limit) : filteredServices;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-[#d4af37]" />;
      case "Palmtree":
        return <Palmtree className="w-5 h-5 text-[#d4af37]" />;
      case "Waves":
        return <Waves className="w-5 h-5 text-[#d4af37]" />;
      case "Briefcase":
        return <Briefcase className="w-5 h-5 text-[#d4af37]" />;
      case "Cake":
        return <Cake className="w-5 h-5 text-[#d4af37]" />;
      case "Music":
        return <Music className="w-5 h-5 text-[#d4af37]" />;
      case "Tv":
        return <Tv className="w-5 h-5 text-[#d4af37]" />;
      case "Camera":
        return <Camera className="w-5 h-5 text-[#d4af37]" />;
      case "Utensils":
        return <Utensils className="w-5 h-5 text-[#d4af37]" />;
      case "GlassWater":
        return <GlassWater className="w-5 h-5 text-[#d4af37]" />;
      case "Rocket":
        return <Rocket className="w-5 h-5 text-[#d4af37]" />;
      case "LayoutGrid":
        return <LayoutGrid className="w-5 h-5 text-[#d4af37]" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-[#d4af37]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#d4af37]" />;
    }
  };

  return (
    <section className="py-24 bg-[#08080a] relative overflow-hidden" id="services">
      {/* Background Accent */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#d4af37]/5 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Category Filters */}
        {showFilters && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    : "glass-card text-zinc-400 hover:text-white hover:border-[#d4af37]/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedServices.map((service: ServiceItem, index: number) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative rounded-2xl overflow-hidden glass-card border border-[#d4af37]/20 flex flex-col justify-between transition-all duration-300 hover:border-[#d4af37]/50 hover:shadow-[0_15px_35px_-10px_rgba(212,175,55,0.18)]"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={service.cardImage}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-black/40 to-transparent" />

                  {/* Category Badge & Icon */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#f7e7ce] border border-[#d4af37]/30">
                      {service.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 p-2 rounded-xl bg-black/60 backdrop-blur-md border border-[#d4af37]/30">
                    {getServiceIcon(service.iconName)}
                  </div>

                  {/* Highlights Bar at Bottom of Image */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 flex-wrap">
                    {service.highlights.slice(0, 2).map((hl, i) => (
                      <span
                        key={i}
                        className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#d4af37]/20 text-[#f7e7ce] border border-[#d4af37]/30 backdrop-blur-sm"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      Explore Service
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}#quote`}
                      className="text-[11px] uppercase tracking-wider font-medium text-zinc-400 hover:text-[#d4af37] transition-colors"
                    >
                      Quick Quote &rarr;
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All CTAs when limited */}
        {limit && servicesData.length > limit && (
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] text-black shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
            >
              View All 14 Event Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
