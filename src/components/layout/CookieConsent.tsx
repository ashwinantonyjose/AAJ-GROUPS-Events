"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, X } from "lucide-react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem("aaj_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("aaj_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const decline = () => {
    localStorage.setItem("aaj_cookie_consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Cookie & Privacy Preferences"
      className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 max-w-sm glass-card p-4 sm:p-5 rounded-2xl border border-[#d4af37]/35 shadow-2xl backdrop-blur-2xl text-xs space-y-3 animate-fadeIn"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-[#d4af37]">
          <ShieldCheck className="w-4 h-4" />
          <span className="font-semibold uppercase tracking-wider text-[11px] text-white">
            Privacy & Performance
          </span>
        </div>
        <button
          onClick={decline}
          className="text-zinc-400 hover:text-white"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-zinc-300 leading-relaxed text-[11px]">
        We use essential cookies and anonymized telemetry to ensure seamless quotation requests, video playback, and responsive aesthetics.
      </p>

      <div className="flex items-center gap-2 pt-1">
        <button
          onClick={accept}
          className="flex-1 py-1.5 px-3 rounded-lg bg-[#d4af37] text-black font-semibold text-[11px] uppercase tracking-wider shadow-md hover:bg-[#aa7c11] transition-colors"
        >
          Accept
        </button>
        <button
          onClick={decline}
          className="py-1.5 px-3 rounded-lg border border-white/20 text-zinc-300 hover:text-white text-[11px] uppercase tracking-wider transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}

