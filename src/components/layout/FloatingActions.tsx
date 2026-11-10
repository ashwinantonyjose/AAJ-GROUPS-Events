"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle, ArrowUp, Calendar } from "lucide-react";
import { hasWhatsApp, getWhatsAppUrl } from "@/config/site";

export default function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const showWhatsApp = hasWhatsApp();

  return (
    <>
      {/* Desktop & Tablet Floating Buttons (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* WhatsApp Floating Button */}
        {showWhatsApp && (
          <a
            href={getWhatsAppUrl("Hello AAJ GROUPS, I would like to plan an event in Kerala.") || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_4px_20px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:scale-110 active:scale-95"
            aria-label="Chat with AAJ GROUPS on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-black/90 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-emerald-500/30">
              Chat on WhatsApp
            </span>
          </a>
        )}

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-11 h-11 rounded-full glass-card text-[#d4af37] hover:text-white hover:border-[#d4af37] shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Sticky Quick-Enquiry Mobile Bar (Bottom of Screen on Mobile Only) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 glass-nav px-4 py-2.5 flex items-center justify-between gap-3 shadow-[0_-5px_20px_rgba(0,0,0,0.8)] border-t border-[#d4af37]/20">
        <Link
          href="/contact#quote"
          className="flex-1 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#aa7c11] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform"
        >
          <Calendar className="w-3.5 h-3.5" />
          Plan Your Event
        </Link>

        {showWhatsApp && (
          <a
            href={getWhatsAppUrl() || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 rounded-full border border-emerald-500/40 text-emerald-400 font-medium text-xs flex items-center justify-center gap-1.5 bg-emerald-950/20 active:scale-98 transition-transform"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        )}
      </div>
    </>
  );
}
