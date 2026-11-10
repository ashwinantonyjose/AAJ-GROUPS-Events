"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Clock, Calendar, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function EventCountdown() {
  // Configurable target date (e.g. Next flagship wedding showcase or user-selected date)
  const [targetDate, setTargetDate] = useState<string>("2026-12-18");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (!hasMounted) return null;

  return (
    <section className="py-20 bg-[#08080a] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-[#d4af37]/35 shadow-2xl relative overflow-hidden text-center space-y-8">
          {/* Subtle Ambient Vignette */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#d4af37]/10 blur-3xl pointer-events-none"
          />

          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce]">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
              Event Calendar & Date Lock
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
              Counting Down to Peak Kerala Wedding Season
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
              Kerala&apos;s premier backwater and beach resorts book out 6 to 9 months in advance. Calculate your countdown and reserve your dates before calendar closes.
            </p>
          </div>

          {/* Interactive Date Selector */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-300">
            <span>Calculate Countdown for Your Event:</span>
            <input
              type="date"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
              className="bg-[#121217] border border-[#d4af37]/40 rounded-xl px-3 py-1.5 text-xs text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>

          {/* Real-Time Digit Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds }
            ].map((unit, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl glass-card border border-[#d4af37]/25 space-y-1 shadow-lg flex flex-col items-center justify-center"
              >
                <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#f7e7ce] font-mono">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#d4af37]">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <Link
              href={`/contact?date=${targetDate}#quote`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] text-black shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              Lock in Dates for {targetDate}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

