import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Award,
  Heart,
  Compass,
  Target,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us | AAJ GROUPS Event Management",
  description:
    "Learn about AAJ GROUPS, Kerala's premier luxury event management and destination wedding company led by Ashwin Antony Jose.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Artisanal Originality",
      desc: "We repudiate cookie-cutter packages. Every stage, backdrop, and floral structure is individually drafted to narrate the host's personal story."
    },
    {
      title: "Integrity & Cost Transparency",
      desc: "Clear itemized proposals, transparent vendor contracts, and zero hidden markups. We honor the trust families place in our stewardship."
    },
    {
      title: "Uncompromising Technical Precision",
      desc: "From decibel-calibrated line array audio to certified wind-resistant trussing and high-definition P2 LED displays."
    },
    {
      title: "Kerala Heritage Harmony",
      desc: "Deep respect for God's Own Country's traditional rituals, temple ceremonies, Sadya culinary standards, and coastal nuances."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-[#0a0a0d] min-h-screen text-[#faf8f5]">
      {/* Editorial Hero Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            The AAJ GROUPS Story
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
            Crafting Celebrations that Resonate for a Lifetime
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Founded in Kerala with a conviction that event planning is not merely logistical assembly, but the curation of profound human emotion and architectural beauty.
          </p>
        </div>
      </section>

      {/* Leadership & Narrative Split */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Leadership Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-2xl">
              <Image
                src="/images/about/about-founder.jpg"
                alt="Ashwin Antony Jose - AAJ GROUPS"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  Founder & Director
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  {siteConfig.contactPerson}
                </h3>
                <p className="text-xs text-zinc-300 mt-1">
                  Lead Creative Director • {siteConfig.serviceRegion}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Story & Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Our Genesis
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                Redefining the Kerala Event Landscape
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                AAJ GROUPS was built upon the vision of providing hosts across Kerala and NRI families worldwide with a sophisticated, stress-free planning sanctuary. Under the direction of{" "}
                <strong className="text-white font-medium">{siteConfig.contactPerson}</strong>, our atelier has brought together Kerala&apos;s finest craftsmen—from traditional wood carvers and master florists to audio engineers and banquet captains.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                We manage events across every district in Kerala: from the colonial ballrooms of Bolgatty Island in Kochi, the seaside cliffs of Kovalam, and the misty hills of Munnar to the tranquil backwater shores of Kumarakom.
              </p>
            </div>

            {/* Vision and Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Compass className="w-5 h-5" />
                  <h4 className="text-base font-serif font-bold text-white">Our Vision</h4>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  To be Kerala&apos;s most sought-after luxury event brand, synonymous with bespoke aesthetic poetry, seamless execution, and genuine heartfelt hospitality.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Target className="w-5 h-5" />
                  <h4 className="text-base font-serif font-bold text-white">Our Mission</h4>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Provide end-to-end turnkey coordination with complete budgetary clarity, honoring both ancient sacred rituals and modern international design trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Excellence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            The AAJ Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
            Our Guiding Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl glass-card border border-[#d4af37]/20 space-y-3 hover:border-[#d4af37]/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-white">{v.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Kerala Presence */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#d4af37]/30 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            Regional Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Available Across All 14 Districts of Kerala
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-zinc-300 leading-relaxed font-light">
            With centralized coordination and robust on-ground vendor networks, we execute celebrations seamlessly across major hubs:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto pt-2">
            {siteConfig.hubs.map((hub) => (
              <span
                key={hub}
                className="px-4 py-2 rounded-full text-xs font-medium glass-card border border-[#d4af37]/30 text-[#f7e7ce] flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                {hub}
              </span>
            ))}
          </div>

          <div className="pt-6">
            <Link
              href="/contact#quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] text-black shadow-xl"
            >
              <Calendar className="w-4 h-4" />
              Plan Your Event with Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
