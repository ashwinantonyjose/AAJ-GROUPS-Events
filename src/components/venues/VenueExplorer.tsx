"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Users,
  Sparkles,
  ArrowRight,
  Check,
  Building,
  Info
} from "lucide-react";
import { venuesData } from "@/data/venues";
import { VenueItem, KeralaDistrict, VenueCategory } from "@/types";

export default function VenueExplorer() {
  const [selectedDistrict, setSelectedDistrict] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedCapacity, setSelectedCapacity] = useState<string>("All");
  const [selectedBudget, setSelectedBudget] = useState<string>("All");

  const districts = [
    "All",
    "Ernakulam / Kochi",
    "Thiruvananthapuram",
    "Alappuzha (Alleppey)",
    "Idukki (Munnar)",
    "Wayanad"
  ];

  const categories = [
    "All",
    "Backwater Resort",
    "Beachfront Lawn",
    "Heritage Palace",
    "Luxury Ballroom",
    "Hill Station Retreat"
  ];

  const budgetTiers = ["All", "Premium", "Luxury", "Ultra-Luxury"];

  const filteredVenues = venuesData.filter((venue) => {
    if (selectedDistrict !== "All" && venue.district !== selectedDistrict) {
      return false;
    }
    if (selectedCategory !== "All" && venue.category !== selectedCategory) {
      return false;
    }
    if (selectedBudget !== "All" && venue.budgetTier !== selectedBudget) {
      return false;
    }
    if (selectedCapacity === "<300" && venue.maxGuests > 300) {
      return false;
    }
    if (
      selectedCapacity === "300-1000" &&
      (venue.maxGuests <= 300 || venue.maxGuests > 1000)
    ) {
      return false;
    }
    if (selectedCapacity === ">1000" && venue.maxGuests <= 1000) {
      return false;
    }
    return true;
  });

  return (
    <section className="py-24 bg-[#0a0a0d] relative overflow-hidden" id="venues">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce] mb-3">
            <Building className="w-3.5 h-3.5 text-[#d4af37]" />
            Kerala Destination Discovery
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Discover Exceptional Event Venues
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            From iconic backwater lagoons and cliffside ocean lawns to colonial palaces and pillarless convention halls.
          </p>
        </div>

        {/* Clear Sample Listings Notice */}
        <div className="mb-10 max-w-2xl mx-auto p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3 text-xs text-amber-200">
          <Info className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
          <p>
            <strong className="font-semibold text-white">Curated Venue Portfolio:</strong>{" "}
            These representative listings showcase our signature venue typologies across Kerala. Our concierge negotiates custom block rates and contracts directly for your preferred dates.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="glass-card p-6 rounded-2xl border border-[#d4af37]/20 mb-12 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* District Filter */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                District / Region
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full bg-[#121217] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
              >
                {districts.map((d) => (
                  <option key={d} value={d}>
                    {d === "All" ? "All Kerala Districts" : d}
                  </option>
                ))}
              </select>
            </div>

            {/* Venue Type Filter */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                Venue Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#121217] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c === "All" ? "All Venue Types" : c}
                  </option>
                ))}
              </select>
            </div>

            {/* Guest Capacity Filter */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                Guest Capacity
              </label>
              <select
                value={selectedCapacity}
                onChange={(e) => setSelectedCapacity(e.target.value)}
                className="w-full bg-[#121217] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
              >
                <option value="All">Any Guest Count</option>
                <option value="<300">Intimate (&lt; 300 Guests)</option>
                <option value="300-1000">Grand (300 – 1,000 Guests)</option>
                <option value=">1000">Colossal (1,000+ Guests)</option>
              </select>
            </div>

            {/* Budget Tier */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                Budget Tier
              </label>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full bg-[#121217] border border-white/10 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
              >
                {budgetTiers.map((b) => (
                  <option key={b} value={b}>
                    {b === "All" ? "All Budget Tiers" : b}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVenues.map((venue) => (
            <div
              key={venue.id}
              className="group rounded-2xl overflow-hidden glass-card border border-[#d4af37]/20 flex flex-col justify-between transition-all duration-300 hover:border-[#d4af37]/60 hover:shadow-2xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-black/35 to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-black/75 backdrop-blur-md text-[#f7e7ce] border border-[#d4af37]/40">
                    {venue.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#d4af37] text-black">
                    {venue.budgetTier}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white font-medium">
                  <span className="flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md">
                    <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                    {venue.capacityRange}
                  </span>
                  <span className="flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md text-zinc-300">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    {venue.district}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#d4af37] transition-colors">
                    {venue.name}
                  </h3>
                  <p className="text-xs text-[#f7e7ce] font-medium mt-1">
                    {venue.location}
                  </p>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {venue.description}
                  </p>
                </div>

                {/* Key Amenities */}
                <div className="pt-2 border-t border-white/10 space-y-1.5">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-[#d4af37]">
                    Venue Highlights:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {venue.amenities.slice(0, 3).map((amenity, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enquiry Action */}
                <div className="pt-2">
                  <Link
                    href={`/contact?venue=${encodeURIComponent(venue.name)}&district=${encodeURIComponent(venue.district)}#quote`}
                    className="w-full py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black hover:opacity-95 transition-opacity flex items-center justify-center gap-1.5 shadow-md"
                  >
                    Enquire for this Venue
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVenues.length === 0 && (
          <div className="text-center py-16 text-zinc-400">
            <p className="text-base">No venues matched your selected filters.</p>
            <button
              onClick={() => {
                setSelectedDistrict("All");
                setSelectedCategory("All");
                setSelectedCapacity("All");
                setSelectedBudget("All");
              }}
              className="mt-3 text-xs uppercase tracking-wider text-[#d4af37] underline"
            >
              Reset all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
