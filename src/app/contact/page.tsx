import type { Metadata } from "next";
import { Suspense } from "react";
import EnquiryWizard from "@/components/enquiry/EnquiryWizard";
import FAQSection from "@/components/faq/FAQSection";
import {
  siteConfig,
  hasPhone,
  hasWhatsApp,
  hasEmail,
  hasAddress,
  getWhatsAppUrl
} from "@/config/site";
import {
  Sparkles,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  UserCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Plan Your Event | AAJ GROUPS Kerala",
  description:
    "Get in touch with Ashwin Antony Jose and the AAJ GROUPS team to plan your wedding, destination celebration, or corporate event in Kerala.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-[#0a0a0d] min-h-screen text-[#faf8f5]">
      {/* Header Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-[#d4af37]/30 text-xs uppercase tracking-widest text-[#f7e7ce] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          Direct Inquiries & Quotations
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">
          Let&apos;s Discuss Your Celebration
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
          Begin your journey with our interactive event quotation wizard or connect directly with our director,{" "}
          <strong className="text-white font-medium">{siteConfig.contactPerson}</strong>.
        </p>
      </section>

      {/* Main Grid: Wizard & Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Multi-Step Enquiry Wizard (Wrapped in Suspense for useSearchParams) */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="glass-card rounded-3xl p-12 text-center text-zinc-400">
                  <span className="w-6 h-6 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin inline-block mb-3" />
                  <p>Loading quotation wizard...</p>
                </div>
              }
            >
              <EnquiryWizard />
            </Suspense>
          </div>

          {/* Right Column: Verified Direct Channels & Operational Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Leadership & Identity Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-[#d4af37]/30 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#aa7c11] to-[#d4af37] text-black font-serif font-bold text-xl flex items-center justify-center">
                  AAJ
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white">
                    {siteConfig.legalName}
                  </h3>
                  <p className="text-xs text-[#d4af37] font-medium">
                    {siteConfig.serviceRegion}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-3 text-xs">
                <div className="flex items-start gap-2.5 text-zinc-300">
                  <UserCheck className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">
                      Primary Contact Person
                    </span>
                    <span className="font-semibold text-white">
                      {siteConfig.contactPerson}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-zinc-300">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">
                      Operational Headquarters & Hubs
                    </span>
                    <span>
                      Operating across Kochi, Trivandrum, Thrissur, Calicut, Munnar, Wayanad & Alleppey
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-zinc-300">
                  <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">
                      Client Advisory Hours
                    </span>
                    <span>{siteConfig.contact.workingHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Instant Channels Card (Conditional Render) */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Direct Communication Channels
              </h4>

              <div className="space-y-3">
                {hasWhatsApp() && (
                  <a
                    href={getWhatsAppUrl("Hello Ashwin, I would like to enquire about event services.") || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-500/60 text-emerald-300 text-xs flex items-center justify-between transition-colors group"
                  >
                    <span className="flex items-center gap-2.5">
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Chat Directly on WhatsApp</span>
                    </span>
                    <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </a>
                )}

                {hasPhone() && (
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4af37] text-zinc-200 text-xs flex items-center justify-between transition-colors group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#d4af37]" />
                      <span>Call: {siteConfig.contact.phoneDisplay || siteConfig.contact.phone}</span>
                    </span>
                    <span className="text-[#d4af37] group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </a>
                )}

                {hasEmail() && (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4af37] text-zinc-200 text-xs flex items-center justify-between transition-colors group"
                  >
                    <span className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-[#d4af37]" />
                      <span>Email: {siteConfig.contact.email}</span>
                    </span>
                    <span className="text-[#d4af37] group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </a>
                )}

                {!hasPhone() && !hasWhatsApp() && !hasEmail() && (
                  <p className="text-xs text-zinc-400 italic">
                    Fill out the quotation brief on the left. Ashwin Antony Jose will get in touch with you via your submitted phone number.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded FAQ Accordion */}
      <FAQSection />
    </div>
  );
}

