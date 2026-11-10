import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPostsData } from "@/data/blog";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Tag,
  Sparkles,
  ArrowRight
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | AAJ GROUPS`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-24 pb-20 bg-[#0a0a0d] min-h-screen text-[#faf8f5]">
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 space-y-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:underline font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to All Articles
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#d4af37]/20 text-[#f7e7ce] border border-[#d4af37]/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Metadata Bar */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pb-6 border-b border-white/10">
          <span className="flex items-center gap-1.5 text-zinc-300">
            <User className="w-3.5 h-3.5 text-[#d4af37]" />
            {post.author}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Featured Cover Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-2xl">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Body Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-zinc-300 font-light text-base sm:text-lg leading-relaxed">
        {post.content.map((paragraph, idx) => (
          <p key={idx} className="leading-relaxed">
            {paragraph}
          </p>
        ))}

        {/* Call to action inside blog */}
        <div className="mt-12 p-8 rounded-3xl glass-card border border-[#d4af37]/30 text-center space-y-4">
          <Sparkles className="w-6 h-6 text-[#d4af37] mx-auto" />
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Plan Your Kerala Celebration with AAJ GROUPS
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
            Discuss your date, vision, and Kerala venue options with our senior event team.
          </p>
          <div className="pt-2">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] text-black shadow-lg"
            >
              Get a Bespoke Proposal
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

