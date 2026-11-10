import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  HelpCircle,
  Users,
  Layers,
  MapPin
} from "lucide-react";
import { siteConfig } from "@/config/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | AAJ GROUPS Kerala`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | AAJ GROUPS`,
      description: service.shortDesc,
      images: [{ url: service.cardImage }],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Find adjacent services for navigation
  const currentIndex = servicesData.findIndex((s) => s.slug === slug);
  const prevService =
    currentIndex > 0 ? servicesData[currentIndex - 1] : servicesData[servicesData.length - 1];
  const nextService =
    currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : servicesData[0];

  return (
    <div className="pt-24 pb-20 bg-[#0a0a0d] min-h-screen text-[#faf8f5]">
      {/* Service Hero Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Title & Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <Link
                href="/services"
                className="text-xs text-[#d4af37] hover:underline flex items-center gap-1 font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                All Services
              </Link>
              <span className="text-zinc-600">/</span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-[#d4af37]/20 text-[#f7e7ce] border border-[#d4af37]/30">
                {service.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              {service.fullDesc}
            </p>

            {/* Quick Summary Pill Box */}
            <div className="p-4 rounded-2xl glass-card border border-white/10 space-y-2">
              <p className="text-[11px] uppercase tracking-wider font-semibold text-[#d4af37]">
                Ideal For:
              </p>
              <p className="text-xs sm:text-sm text-zinc-300">
                {service.idealFor}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}#quote`}
                className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] text-black shadow-lg hover:shadow-2xl transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4" />
                Enquire for {service.title}
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Image Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-2xl">
              <Image
                src={service.heroImage}
                alt={service.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  AAJ GROUPS Signature Production
                </span>
                <p className="text-sm font-semibold text-white mt-1">
                  Operating Across All Kerala Hubs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Inclusions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Key Features */}
          <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#d4af37]/20 text-[#d4af37]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold">
                  Capabilities
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  Signature Features
                </h3>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-300">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Master Inclusions */}
          <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#d4af37]/20 text-[#d4af37]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold">
                  Turnkey Scope
                </span>
                <h3 className="text-xl font-serif font-bold text-white">
                  What We Include
                </h3>
              </div>
            </div>

            <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-300">
              {service.inclusions.map((inclusion, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{inclusion}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service Specific FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-white/10">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              Frequently Asked About {service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card border border-white/10 space-y-2"
              >
                <h4 className="text-sm sm:text-base font-semibold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#d4af37]" />
                  {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Prev / Next Service Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 flex items-center justify-between text-xs sm:text-sm">
        <Link
          href={`/services/${prevService.slug}`}
          className="flex items-center gap-2 text-zinc-400 hover:text-[#d4af37] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>
            Previous: <strong className="text-white font-medium">{prevService.title}</strong>
          </span>
        </Link>

        <Link
          href={`/services/${nextService.slug}`}
          className="flex items-center gap-2 text-zinc-400 hover:text-[#d4af37] transition-colors text-right"
        >
          <span>
            Next: <strong className="text-white font-medium">{nextService.title}</strong>
          </span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}

