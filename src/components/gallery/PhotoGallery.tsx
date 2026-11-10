"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Maximize2, MapPin, Tag } from "lucide-react";
import { galleryData } from "@/data/gallery";
import { GalleryItem, EventCategory } from "@/types";
import LightboxModal from "./LightboxModal";

interface PhotoGalleryProps {
  limit?: number;
  showFilters?: boolean;
}

export default function PhotoGallery({
  limit,
  showFilters = true
}: PhotoGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All Events");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterCategories = [
    "All Events",
    "Weddings",
    "Corporate",
    "Birthdays",
    "Stage Shows",
    "Decorations",
    "Destination Weddings"
  ];

  const filteredItems = galleryData.filter((item) => {
    if (activeCategory === "All Events") return true;
    if (activeCategory === "Weddings") {
      return item.category === "Weddings" || item.category === "Destination Weddings";
    }
    return item.category === activeCategory;
  });

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const openLightbox = (item: GalleryItem) => {
    const idx = displayedItems.findIndex((i) => i.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayedItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayedItems.length) % displayedItems.length);
    }
  };

  return (
    <section className="py-24 bg-[#08080a] relative overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            Visual Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Memories Crafted into Reality
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Browse our curated showcase of Kerala destination weddings, coastal mandaps, high-impact summits, and celebratory spectacles.
          </p>
        </div>

        {/* Category Filters */}
        {showFilters && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filterCategories.map((cat) => (
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

        {/* Responsive Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {displayedItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`group relative rounded-2xl overflow-hidden glass-card border border-[#d4af37]/20 cursor-pointer ${
                  item.aspect === "portrait" ? "h-96" : "h-72"
                }`}
                onClick={() => openLightbox(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  {/* Top Zoom Icon */}
                  <div className="self-end p-2.5 rounded-full bg-black/60 border border-[#d4af37]/40 text-[#d4af37] transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Text Information */}
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-1.5">
                    <span className="text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded bg-[#d4af37] text-black inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-base font-serif font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-300 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                      {item.location}
                    </p>
                  </div>
                </div>

                {/* Subtle Permanent Category Badge at Bottom-Left for mobile clarity */}
                <div className="absolute bottom-3 left-3 group-hover:opacity-0 transition-opacity">
                  <span className="text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded bg-black/70 backdrop-blur-md text-zinc-300 border border-white/10">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
          items={displayedItems}
          currentIndex={lightboxIndex ?? 0}
          onNext={nextLightbox}
          onPrev={prevLightbox}
        />
      </div>
    </section>
  );
}
