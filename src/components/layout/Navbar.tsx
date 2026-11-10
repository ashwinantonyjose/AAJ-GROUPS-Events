"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  MessageCircle,
  Calendar,
  Sparkles,
  MapPin,
  ArrowRight,
  HeartHandshake,
  Palmtree,
  Waves,
  Briefcase,
  Cake,
  Music,
  Camera,
  Utensils
} from "lucide-react";
import { siteConfig, hasPhone, hasWhatsApp, getWhatsAppUrl } from "@/config/site";
import { servicesData } from "@/data/services";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [galleryDropdownOpen, setGalleryDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setGalleryDropdownOpen(false);
  }, [pathname]);

  const featuredServices = servicesData.slice(0, 8);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake":
        return <HeartHandshake className="w-4 h-4 text-[#d4af37]" />;
      case "Palmtree":
        return <Palmtree className="w-4 h-4 text-[#d4af37]" />;
      case "Waves":
        return <Waves className="w-4 h-4 text-[#d4af37]" />;
      case "Briefcase":
        return <Briefcase className="w-4 h-4 text-[#d4af37]" />;
      case "Cake":
        return <Cake className="w-4 h-4 text-[#d4af37]" />;
      case "Music":
        return <Music className="w-4 h-4 text-[#d4af37]" />;
      case "Camera":
        return <Camera className="w-4 h-4 text-[#d4af37]" />;
      case "Utensils":
        return <Utensils className="w-4 h-4 text-[#d4af37]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#d4af37]" />;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#d4af37] rounded-sm"
              aria-label="AAJ GROUPS Home"
            >
              <div className="relative w-44 sm:w-56 h-11 transition-transform duration-300 group-hover:scale-102">
                <Image
                  src="/images/logo.svg"
                  alt="AAJ GROUPS Luxury Event Management"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-[#d4af37] ${
                  pathname === "/" ? "text-[#d4af37]" : "text-[#faf8f5]/90"
                }`}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-[#d4af37] ${
                  pathname === "/about" ? "text-[#d4af37]" : "text-[#faf8f5]/90"
                }`}
              >
                About Us
              </Link>

              {/* Services Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link
                  href="/services"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-[#d4af37] ${
                    pathname.startsWith("/services")
                      ? "text-[#d4af37]"
                      : "text-[#faf8f5]/90"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-[#d4af37]" : ""
                    }`}
                  />
                </Link>

                {/* Services Mega Menu Dropdown */}
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] rounded-2xl glass-card p-6 shadow-2xl border border-[#d4af37]/20 backdrop-blur-2xl"
                    >
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                        <div>
                          <p className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                            Bespoke Event Experiences
                          </p>
                          <h4 className="text-base font-semibold text-white mt-0.5">
                            Our Signature Services in Kerala
                          </h4>
                        </div>
                        <Link
                          href="/services"
                          className="text-xs text-[#d4af37] hover:underline flex items-center gap-1 font-medium"
                        >
                          View All 14 Services
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {featuredServices.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-all group/item"
                          >
                            <div className="p-2 rounded-lg bg-black/40 border border-[#d4af37]/20 group-hover/item:border-[#d4af37] transition-colors">
                              {getServiceIcon(service.iconName)}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-white group-hover/item:text-[#d4af37] transition-colors">
                                {service.title}
                              </p>
                              <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                                {service.shortDesc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                          Serving Kochi, Trivandrum, Alleppey, Munnar & all Kerala
                        </span>
                        <Link
                          href="/contact"
                          className="text-[#d4af37] hover:text-white font-medium flex items-center gap-1"
                        >
                          Request Custom Proposal &rarr;
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/venues"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-[#d4af37] ${
                  pathname === "/venues" ? "text-[#d4af37]" : "text-[#faf8f5]/90"
                }`}
              >
                Venues
              </Link>

              {/* Gallery Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setGalleryDropdownOpen(true)}
                onMouseLeave={() => setGalleryDropdownOpen(false)}
              >
                <Link
                  href="/gallery"
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-[#d4af37] ${
                    pathname.startsWith("/gallery")
                      ? "text-[#d4af37]"
                      : "text-[#faf8f5]/90"
                  }`}
                >
                  Gallery
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      galleryDropdownOpen ? "rotate-180 text-[#d4af37]" : ""
                    }`}
                  />
                </Link>

                <AnimatePresence>
                  {galleryDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 top-full mt-2 w-52 rounded-xl glass-card py-2 shadow-2xl border border-[#d4af37]/20"
                    >
                      <Link
                        href="/gallery"
                        className="block px-4 py-2 text-xs font-medium text-white hover:text-[#d4af37] hover:bg-white/5 transition-colors"
                      >
                        Photo Gallery
                      </Link>
                      <Link
                        href="/gallery#videos"
                        className="block px-4 py-2 text-xs font-medium text-white hover:text-[#d4af37] hover:bg-white/5 transition-colors"
                      >
                        Video Highlights
                      </Link>
                      <Link
                        href="/gallery#albums"
                        className="block px-4 py-2 text-xs font-medium text-white hover:text-[#d4af37] hover:bg-white/5 transition-colors"
                      >
                        Wedding Albums
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/blog"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-[#d4af37] ${
                  pathname.startsWith("/blog")
                    ? "text-[#d4af37]"
                    : "text-[#faf8f5]/90"
                }`}
              >
                Our Stories
              </Link>

              <Link
                href="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-[#d4af37] ${
                  pathname === "/contact"
                    ? "text-[#d4af37]"
                    : "text-[#faf8f5]/90"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {hasWhatsApp() && (
                <a
                  href={getWhatsAppUrl() || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              )}

              {hasPhone() && (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="p-2.5 rounded-full border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors"
                  aria-label="Call AAJ GROUPS"
                >
                  <Phone className="w-4 h-4" />
                </a>
              )}

              <Link
                href="/contact#quote"
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-full overflow-hidden group bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  Get a Quote
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden space-x-2">
              <Link
                href="/contact#quote"
                className="px-3.5 py-1.5 text-[11px] uppercase tracking-wider font-semibold rounded-full bg-[#d4af37] text-black"
              >
                Quote
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:text-[#d4af37] hover:bg-white/5 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#0a0a0d] flex flex-col justify-between overflow-y-auto px-6 py-6 lg:hidden"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="relative w-44 h-10">
                  <Image
                    src="/images/logo.svg"
                    alt="AAJ GROUPS Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full border border-white/10 text-white hover:text-[#d4af37]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-4 py-8">
                <Link
                  href="/"
                  className={`text-lg font-medium tracking-wide transition-colors ${
                    pathname === "/" ? "text-[#d4af37]" : "text-white"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`text-lg font-medium tracking-wide transition-colors ${
                    pathname === "/about" ? "text-[#d4af37]" : "text-white"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  href="/services"
                  className={`text-lg font-medium tracking-wide transition-colors ${
                    pathname.startsWith("/services") ? "text-[#d4af37]" : "text-white"
                  }`}
                >
                  Services
                </Link>
                <div className="pl-4 space-y-2 border-l border-[#d4af37]/20">
                  <Link
                    href="/services/wedding-planning-management"
                    className="block text-sm text-zinc-400 hover:text-[#d4af37]"
                  >
                    • Wedding Planning
                  </Link>
                  <Link
                    href="/services/destination-weddings-kerala"
                    className="block text-sm text-zinc-400 hover:text-[#d4af37]"
                  >
                    • Destination Weddings
                  </Link>
                  <Link
                    href="/services/corporate-events"
                    className="block text-sm text-zinc-400 hover:text-[#d4af37]"
                  >
                    • Corporate Events
                  </Link>
                  <Link
                    href="/services"
                    className="block text-xs text-[#d4af37] font-semibold pt-1"
                  >
                    View All 14 Services &rarr;
                  </Link>
                </div>

                <Link
                  href="/venues"
                  className={`text-lg font-medium tracking-wide transition-colors ${
                    pathname === "/venues" ? "text-[#d4af37]" : "text-white"
                  }`}
                >
                  Venues in Kerala
                </Link>
                <Link
                  href="/gallery"
                  className={`text-lg font-medium tracking-wide transition-colors ${
                    pathname.startsWith("/gallery") ? "text-[#d4af37]" : "text-white"
                  }`}
                >
                  Gallery & Videos
                </Link>
                <Link
                  href="/blog"
                  className={`text-lg font-medium tracking-wide transition-colors ${
                    pathname.startsWith("/blog") ? "text-[#d4af37]" : "text-white"
                  }`}
                >
                  Our Stories
                </Link>
                <Link
                  href="/contact"
                  className={`text-lg font-medium tracking-wide transition-colors ${
                    pathname === "/contact" ? "text-[#d4af37]" : "text-white"
                  }`}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <Link
                href="/contact#quote"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] text-black font-semibold uppercase tracking-widest text-xs flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Plan Your Event / Get Quote
              </Link>

              {hasWhatsApp() && (
                <a
                  href={getWhatsAppUrl() || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full border border-emerald-500/40 text-emerald-400 font-medium text-xs flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              )}

              <p className="text-center text-[11px] text-zinc-500">
                Ashwin Antony Jose • AAJ GROUPS • Kerala, India
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

