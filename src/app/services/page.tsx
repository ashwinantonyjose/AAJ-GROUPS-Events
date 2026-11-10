import type { Metadata } from "next";
import ServicesGrid from "@/components/services/ServicesGrid";
import { siteConfig } from "@/config/site";
import { Sparkles, CheckCircle2, ShieldCheck, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Management Services in Kerala | AAJ GROUPS",
  description:
    "Explore our full suite of 14 bespoke event management services: Weddings, Destination Weddings, Corporate Galas, Stage Shows, Catering Sadya, and Private Parties.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20 bg-[#0a0a0d] min-h-screen text-[#faf8f5]">
      {/* Header Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          Comprehensive Event Capabilities
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
          Bespoke Event Services Across Kerala
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
          From intimate coastal vows and 28-dish traditional Kerala Sadyas to colossal corporate summits and celebrity arena productions.
        </p>
      </section>

      {/* Complete Grid of 14 Services */}
      <ServicesGrid
        showFilters={true}
        title="Complete Services Directory"
        subtitle="Select any service to view dedicated inclusions, workflow protocols, photographs, and custom quotation options."
      />

      {/* Turnkey Assurance Strip */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Tailored Proposals
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Need a Combined or Custom Event Package?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
              We frequently bundle multiple capabilities—such as destination resort booking, traditional Sadya catering, floral mandaps, and drone cinematography—into one synchronized master contract.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact#quote"
              className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] text-black shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Request Custom Package
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
