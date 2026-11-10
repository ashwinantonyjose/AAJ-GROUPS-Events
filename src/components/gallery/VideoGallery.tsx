"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, Clock, Film } from "lucide-react";
import { videosData } from "@/data/videos";
import { VideoItem } from "@/types";
import VideoModal from "./VideoModal";

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <section className="py-20 bg-[#0a0a0d] relative overflow-hidden" id="videos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce] mb-3">
            <Film className="w-3.5 h-3.5 text-[#d4af37]" />
            Cinematic Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Watch Our Stories Unfold
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Experience the motion, emotion, and musical grandeur of our live destination weddings and arena productions.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videosData.map((video) => (
            <div
              key={video.id}
              className="group relative rounded-2xl overflow-hidden glass-card border border-[#d4af37]/20 cursor-pointer transition-all duration-300 hover:border-[#d4af37]/60 hover:shadow-[0_15px_35px_-10px_rgba(212,175,55,0.2)]"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/25 transition-colors" />

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-[11px] font-mono text-white flex items-center gap-1.5 border border-white/10">
                  <Clock className="w-3 h-3 text-[#d4af37]" />
                  {video.duration}
                </div>

                {/* Category Pill */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f7e7ce] text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md">
                  {video.category}
                </div>

                {/* Center Play Button Pulse */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#aa7c11] to-[#d4af37] text-black flex items-center justify-center shadow-2xl transform group-hover:scale-115 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-black ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Video Info Footer */}
              <div className="p-5 space-y-1.5">
                <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors">
                  {video.title}
                </h3>
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Lightbox Modal */}
        <VideoModal
          isOpen={selectedVideo !== null}
          onClose={() => setSelectedVideo(null)}
          video={selectedVideo}
        />
      </div>
    </section>
  );
}
