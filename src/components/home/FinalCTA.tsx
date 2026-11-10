import Link from "next/link";
import Image from "next/image";
import { Calendar, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig, hasWhatsApp, getWhatsAppUrl } from "@/config/site";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-[#0a0a0d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/35 glass-card shadow-2xl">
          {/* Background Image with Dark Vignette */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero/hero-grand-reception.jpg"
              alt="Grand Reception by AAJ GROUPS"
              fill
              className="object-cover object-center filter brightness-[0.25]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0d] via-[#0a0a0d]/80 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-16 lg:p-20 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[#d4af37]/40 text-xs uppercase tracking-widest text-[#f7e7ce]">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              Start Planning Today
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Let Us Craft Your Unforgettable Kerala Celebration
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              Whether you are envisioning a serene backwater destination wedding in Kumarakom or an international corporate summit in Kochi, our bespoke event architects are ready to bring your vision to life.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact#quote"
                className="px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] text-black shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4" />
                Schedule Your Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>

              {hasWhatsApp() && (
                <a
                  href={getWhatsAppUrl("Hello AAJ GROUPS, I would like to schedule a consultation for an event.") || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-full text-xs sm:text-sm uppercase tracking-wider font-semibold border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              )}
            </div>

            <p className="text-xs text-zinc-400 pt-2">
              Personalized Consultations with Lead Director Ashwin Antony Jose • Zero Obligation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
