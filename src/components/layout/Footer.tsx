"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import {
  siteConfig,
  hasPhone,
  hasWhatsApp,
  hasEmail,
  hasAddress,
  getWhatsAppUrl
} from "@/config/site";
import { servicesData } from "@/data/services";

export default function Footer() {
  const currentYear = 2026;
  const topServices = servicesData.slice(0, 6);

  return (
    <footer className="bg-[#08080a] border-t border-[#d4af37]/15 text-[#faf8f5] relative overflow-hidden">
      {/* Decorative Gold Glow in Background */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-[#d4af37]/5 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Info (2 Columns on Desktop) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative w-56 h-12">
                <Image
                  src="/images/logo.svg"
                  alt="AAJ GROUPS Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              {siteConfig.description}
            </p>

            <div className="pt-1 space-y-2 text-xs text-zinc-400">
              <p className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-zinc-300 font-medium">Tagline:</span>
                <span className="italic text-[#f7e7ce]">&ldquo;{siteConfig.tagline}&rdquo;</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-zinc-300 font-medium">Lead Director:</span>
                <span>{siteConfig.contactPerson}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-zinc-300 font-medium">Service Region:</span>
                <span>{siteConfig.serviceRegion}</span>
              </p>
            </div>

            {/* Social Icons (Only rendered if URL is set in siteConfig) */}
            <div className="flex items-center gap-3 pt-2">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/10 hover:border-[#d4af37] text-zinc-400 hover:text-[#d4af37] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/10 hover:border-[#d4af37] text-zinc-400 hover:text-[#d4af37] transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              )}
              {siteConfig.social.youtube && (
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/10 hover:border-[#d4af37] text-zinc-400 hover:text-[#d4af37] transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              )}
              {siteConfig.social.linkedin && (
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/10 hover:border-[#d4af37] text-zinc-400 hover:text-[#d4af37] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/" className="hover:text-[#d4af37] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#d4af37] transition-colors">
                  About AAJ GROUPS
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#d4af37] transition-colors">
                  Services Directory
                </Link>
              </li>
              <li>
                <Link href="/venues" className="hover:text-[#d4af37] transition-colors">
                  Kerala Venues
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#d4af37] transition-colors">
                  Photo & Video Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#d4af37] transition-colors">
                  Event Stories & Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4">
              Signature Services
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              {topServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-[#d4af37] transition-colors line-clamp-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#d4af37] hover:underline text-xs flex items-center gap-1 font-medium pt-1"
                >
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Hubs & Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4">
              Kerala Hubs
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-400 mb-5">
              {siteConfig.hubs.slice(0, 7).map((hub) => (
                <li key={hub} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#d4af37]" />
                  {hub}
                </li>
              ))}
            </ul>

            {/* Configured Contact Channels */}
            <div className="space-y-2 pt-2 text-xs">
              {hasPhone() && (
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-zinc-300 hover:text-[#d4af37] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{siteConfig.contact.phoneDisplay || siteConfig.contact.phone}</span>
                </a>
              )}

              {hasWhatsApp() && (
                <a
                  href={getWhatsAppUrl() || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry</span>
                </a>
              )}

              {hasEmail() && (
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-zinc-300 hover:text-[#d4af37] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              )}

              {hasAddress() && (
                <p className="flex items-start gap-2 text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.contact.address.street},{" "}
                    {siteConfig.contact.address.city}, Kerala
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
          <p className="text-zinc-500 flex items-center gap-2">
            <span>Creating Experiences, Crafting Memories</span>
            <span className="hidden md:inline">•</span>
            <span className="text-zinc-400">Lead Contact: {siteConfig.contactPerson}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
