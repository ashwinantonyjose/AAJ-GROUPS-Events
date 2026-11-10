"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";
import { VideoItem } from "@/types";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: VideoItem | null;
}

export default function VideoModal({ isOpen, onClose, video }: VideoModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
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

  if (!isOpen || !video) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Video Player"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 text-white hover:text-[#d4af37] hover:bg-white/20 transition-colors"
          aria-label="Close Video"
        >
          <X className="w-6 h-6" />
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl w-full flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Responsive 16:9 Video Embed Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-[#d4af37]/30 bg-black">
            <iframe
              src={video.videoUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

          <div className="mt-4 text-center max-w-2xl px-4">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              {video.category} • {video.duration}
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-white mt-1">
              {video.title}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {video.description}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
