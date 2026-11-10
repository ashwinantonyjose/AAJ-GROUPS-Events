import type { Metadata } from "next";
import BlogSection from "@/components/blog/BlogSection";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Event Stories & Planning Guides | AAJ GROUPS",
  description:
    "Expert insights on destination wedding planning in Kerala, beach wedding decor trends, and high-impact corporate event production.",
};

export default function BlogIndexPage() {
  return (
    <div className="pt-24 pb-20 bg-[#0a0a0d] min-h-screen text-[#faf8f5]">
      {/* Header Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce] mb-3">
          <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
          Editorial & Perspectives
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
          Our Stories & Planning Guides
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
          In-depth guides, trend analyses, and practical advice on orchestrating world-class celebrations across Kerala.
        </p>
      </section>

      {/* Main Blog Grid */}
      <BlogSection />
    </div>
  );
}

