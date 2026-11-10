import Image from "next/image";
import Link from "next/link";
import { Sparkles, Palmtree, Waves, Mountain, Calendar, ArrowRight, Check } from "lucide-react";

export default function DestinationShowcase() {
  const destinationLocales = [
    {
      title: "Tranquil Backwaters & Houseboat Nuptials",
      region: "Kumarakom & Alleppey",
      image: "/images/venues/venue-kumarakom-backwaters.jpg",
      tagline: "Serene lakeside lawns, private boat arrivals, and candlelit coconut groves.",
      icon: <Palmtree className="w-5 h-5 text-[#d4af37]" />,
      highlights: [
        "Traditional Kettuvallam couple & guest arrivals",
        "Open-air lakeside mandaps against Vembanad Lake",
        "Sunset cocktail cruises with classical live fusion"
      ]
    },
    {
      title: "Cliffside & Oceanfront Beach Vows",
      region: "Kovalam & Varkala",
      image: "/images/hero/hero-beach-wedding.jpg",
      tagline: "Golden sands, dramatic sea cliffs, and barefoot luxury under coastal palms.",
      icon: <Waves className="w-5 h-5 text-[#d4af37]" />,
      highlights: [
        "Exclusive private resort beach permit arrangements",
        "Wind-engineered floral mandaps and candlelit aisles",
        "Starlit seafood barbecue and beach bonfire soirees"
      ]
    },
    {
      title: "Misty Tea Slopes & Hilltop Mansions",
      region: "Munnar & Wayanad",
      image: "/images/venues/venue-munnar-hills.jpg",
      tagline: "Cool microclimates, emerald tea plantations, and alpine estate romance.",
      icon: <Mountain className="w-5 h-5 text-[#d4af37]" />,
      highlights: [
        "Boutique plantation villa accommodations",
        "Campfire sangeet nights and panoramic valley views",
        "Crisp mountain air and fairy-lit glass house dining"
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0d] relative overflow-hidden" id="destination-weddings">
      {/* Decorative Gold Radial Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 blur-[160px] pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            God&apos;s Own Country Weddings
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
            Destination Weddings in Kerala
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            Ranked among the world&apos;s most romantic landscapes. AAJ GROUPS crafts turnkey destination wedding experiences for NRI families and couples seeking magical Kerala memories.
          </p>
        </div>

        {/* 3 Signature Destinations Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {destinationLocales.map((loc, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden glass-card border border-[#d4af37]/20 flex flex-col justify-between transition-all duration-300 hover:border-[#d4af37]/50"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={loc.image}
                  alt={loc.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-black/40 to-transparent" />
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-[#d4af37]/30">
                  {loc.icon}
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#d4af37]">
                    {loc.region}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white mt-0.5">
                    {loc.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  &ldquo;{loc.tagline}&rdquo;
                </p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-[#d4af37]">
                    Signature Inclusions:
                  </p>
                  <ul className="space-y-1.5 text-xs text-zinc-400">
                    {loc.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/contact?service=Destination+Weddings&location=${encodeURIComponent(loc.region)}#quote`}
                    className="w-full py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold border border-[#d4af37]/40 text-[#f7e7ce] hover:bg-[#d4af37]/15 hover:border-[#d4af37] transition-all flex items-center justify-center gap-1.5"
                  >
                    Enquire for {loc.region.split("&")[0].trim()}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Feature Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/30 glass-card p-8 sm:p-12 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block text-xs uppercase tracking-widest font-semibold text-[#d4af37]">
              Turnkey NRI & Destination Concierge
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white">
              Planning from Abroad or Out-of-State?
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              We manage airport transfers, 5-star resort bookings, English/Malayalam bilingual liaisons, guest welcome hampers, and 3D digital walkthroughs so you experience complete tranquility throughout your planning journey.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact#quote"
              className="px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              Plan Your Dream Wedding
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

