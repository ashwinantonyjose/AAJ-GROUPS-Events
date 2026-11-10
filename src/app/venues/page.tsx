import type { Metadata } from "next";
import VenueExplorer from "@/components/venues/VenueExplorer";
import { Sparkles, MapPin, Building, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Event Venues in Kerala | AAJ GROUPS Destination Discovery",
  description:
    "Explore luxury event venues across Kerala: Backwater resorts in Kumarakom, beachfront lawns in Kovalam, heritage palaces in Kochi, and tea estates in Munnar.",
};

export default function VenuesPage() {
  return (
    <div className="pt-24 pb-20 bg-[#0a0a0d] min-h-screen text-[#faf8f5]">
      {/* Header Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce] mb-3">
          <Building className="w-3.5 h-3.5 text-[#d4af37]" />
          Kerala Venue Concierge
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
          Explore Curated Kerala Venues
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
          Filter by district, typology, guest capacity, and budget tier. Our venue concierge secures preferential block dates, room allotments, and turnkey staging permits.
        </p>
      </section>

      {/* Interactive Venue Explorer Component */}
      <VenueExplorer />

      {/* Scouting Assistance CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#d4af37]/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Bespoke Venue Scouting
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Have a Specific Location in Mind?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
              Whether you have already chosen your family ancestral home, an exclusive backwater villa, or need us to negotiate rates at 5-star properties, our team handles all technical feasibility audits.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact#quote"
              className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] text-black shadow-xl flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Request Venue Scouting
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
