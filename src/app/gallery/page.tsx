import type { Metadata } from "next";
import PhotoGallery from "@/components/gallery/PhotoGallery";
import VideoGallery from "@/components/gallery/VideoGallery";
import { Sparkles, Camera, Film, Image as ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Photo & Video Gallery | AAJ GROUPS Kerala",
  description:
    "Explore high-resolution photography and cinematic video showreels from luxury Kerala weddings, beach mandaps, corporate galas, and stage shows.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-20 bg-[#0a0a0d] min-h-screen text-[#faf8f5]">
      {/* Header Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce] mb-3">
          <Camera className="w-3.5 h-3.5 text-[#d4af37]" />
          Visual Chronicles
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
          Photo & Video Portfolio
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
          Filter through our curated collection of Kerala wedding mandaps, beach vows, stage show lighting, and cinematic video highlight films.
        </p>

        {/* Quick jump anchors */}
        <div className="mt-8 flex items-center justify-center gap-4 text-xs font-semibold uppercase tracking-wider">
          <a
            href="#photos"
            className="px-5 py-2.5 rounded-full glass-card border border-[#d4af37]/40 text-[#f7e7ce] hover:bg-[#d4af37]/15 transition-all flex items-center gap-1.5"
          >
            <ImageIcon className="w-4 h-4 text-[#d4af37]" />
            Photo Gallery
          </a>
          <a
            href="#videos"
            className="px-5 py-2.5 rounded-full glass-card border border-[#d4af37]/40 text-[#f7e7ce] hover:bg-[#d4af37]/15 transition-all flex items-center gap-1.5"
          >
            <Film className="w-4 h-4 text-[#d4af37]" />
            Video Highlights
          </a>
        </div>
      </section>

      {/* Photo Gallery with Filter & Fullscreen Lightbox */}
      <div id="photos">
        <PhotoGallery showFilters={true} />
      </div>

      {/* Video Highlights with Responsive Player Lightbox */}
      <div id="videos">
        <VideoGallery />
      </div>
    </div>
  );
}
