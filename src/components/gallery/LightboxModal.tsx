"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from "lucide-react";
import { GalleryItem } from "@/types";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNext,
  onPrev
}: LightboxModalProps) {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Image Preview"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 text-white hover:text-[#d4af37] hover:bg-white/20 transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Counter */}
        <div className="absolute top-5 left-5 z-50 px-3.5 py-1.5 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-zinc-300">
          <span className="text-[#d4af37] font-semibold">{currentIndex + 1}</span> / {items.length}
        </div>

        {/* Navigation Controls */}
        <button
          onClick={onPrev}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:text-[#d4af37] hover:border-[#d4af37] transition-all transform hover:scale-110"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/60 border border-white/10 text-white hover:text-[#d4af37] hover:border-[#d4af37] transition-all transform hover:scale-110"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Content Container */}
        <motion.div
          key={currentItem.id}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-[65vh] sm:h-[72vh] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Caption & Location Bar */}
          <div className="mt-4 text-center max-w-2xl px-4">
            <h3 className="text-base sm:text-lg font-serif font-semibold text-white">
              {currentItem.title}
            </h3>
            <div className="mt-1 flex items-center justify-center gap-4 text-xs text-zinc-400">
              <span className="flex items-center gap-1 text-[#f7e7ce]">
                <Tag className="w-3.5 h-3.5 text-[#d4af37]" />
                {currentItem.category}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                {currentItem.location}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

