import Image from "next/image";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPostsData } from "@/data/blog";

export default function BlogSection() {
  return (
    <section className="py-24 bg-[#08080a] relative overflow-hidden" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce] mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#d4af37]" />
              Event Insights & Editorial
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Stories, Trends & Planning Guides
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 font-light">
              Expert advice on navigating Kerala venues, decor aesthetics, and celebration logistics.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#d4af37] hover:text-white transition-colors self-start md:self-auto"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl overflow-hidden glass-card border border-[#d4af37]/20 flex flex-col justify-between transition-all duration-300 hover:border-[#d4af37]/50"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#f7e7ce] border border-[#d4af37]/30">
                    {post.tags[0]}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-zinc-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#d4af37]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#d4af37]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs uppercase tracking-wider font-semibold text-[#d4af37] hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    Read Full Story
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

