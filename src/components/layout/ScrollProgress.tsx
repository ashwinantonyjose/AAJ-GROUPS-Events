"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#d4af37] transition-[width] duration-75 ease-out shadow-[0_0_10px_rgba(212,175,55,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

