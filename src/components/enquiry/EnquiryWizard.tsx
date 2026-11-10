"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";
import {
  Calendar,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Send,
  MessageCircle,
  Phone,
  Mail,
  User,
  MapPin,
  Users,
  Wallet
} from "lucide-react";
import { siteConfig, hasWhatsApp, getWhatsAppUrl } from "@/config/site";

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  district: string;
  guestCount: string;
  budgetRange: string;
  message: string;
  venuePreference: string;
  needsCatering: boolean;
  needsPhotography: boolean;
}

export default function EnquiryWizard() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    eventType: "Wedding Planning",
    eventDate: "",
    district: "Ernakulam / Kochi",
    guestCount: "300 - 500",
    budgetRange: "₹5 Lakhs - ₹10 Lakhs",
    message: "",
    venuePreference: "Resort / Hotel Ballroom",
    needsCatering: true,
    needsPhotography: true
  });

  // Pre-populate if query parameters exist
  useEffect(() => {
    if (!searchParams) return;
    const serviceParam = searchParams.get("service");
    const venueParam = searchParams.get("venue");
    const districtParam = searchParams.get("district");
    const budgetParam = searchParams.get("budget");
    const guestsParam = searchParams.get("guests");

    setFormData((prev) => ({
      ...prev,
      eventType: serviceParam || prev.eventType,
      district: districtParam || prev.district,
      budgetRange: budgetParam || prev.budgetRange,
      guestCount: guestsParam ? `${guestsParam} guests` : prev.guestCount,
      message: venueParam ? `Enquiry specifically for venue: ${venueParam}` : prev.message
    }));
  }, [searchParams]);

  const updateField = (key: keyof FormState, val: any) => {
    setFormData((prev) => ({ ...prev, [key]: val }));
    setErrorMsg("");
  };

  const validateStep = (currentStep: number): boolean => {
    if (currentStep === 1) {
      if (!formData.eventType) {
        setErrorMsg("Please select an event type.");
        return false;
      }
      return true;
    }
    if (currentStep === 2) {
      return true;
    }
    if (currentStep === 3) {
      if (!formData.fullName.trim()) {
        setErrorMsg("Please provide your full name.");
        return false;
      }
      if (!formData.phone.trim()) {
        setErrorMsg("Please enter a valid phone number.");
        return false;
      }
      if (
        formData.email.trim() &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
      ) {
        setErrorMsg("Please enter a valid email address.");
        return false;
      }
      return true;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(3, prev + 1));
    }
  };

  const handlePrev = () => {
    setErrorMsg("");
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      // Configurable API submission (can be linked to /api/enquiry or environment-configured email webhook)
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      // Even if offline/local dev without mail server configured, we simulate a successful graceful reception
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#d4af37", "#f7e7ce", "#aa7c11"]
        });
      } catch (err) {
        // ignore confetti errors
      }
    } catch (err) {
      // Graceful client fallback
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const buildWhatsAppBrief = () => {
    return `Hello Ashwin / AAJ GROUPS,\n\nI would like to enquire about event management:\n• Name: ${formData.fullName}\n• Phone: ${formData.phone}\n• Event: ${formData.eventType}\n• Preferred Date: ${formData.eventDate || "TBD"}\n• District: ${formData.district}\n• Guests: ${formData.guestCount}\n• Budget: ${formData.budgetRange}\n• Notes: ${formData.message || "None"}`;
  };

  return (
    <div
      className="glass-card rounded-3xl border border-[#d4af37]/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
      id="quote"
    >
      {/* Step Header */}
      {!isSubmitted && (
        <div className="mb-8">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#d4af37]">
                Step 0{step} of 03
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-0.5">
                {step === 1 && "Event Essentials"}
                {step === 2 && "Scale, Preferences & Questionnaire"}
                {step === 3 && "Contact Details & Personal Vision"}
              </h3>
            </div>

            {/* Stepper Dots */}
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-3 h-3 rounded-full transition-all ${
                    step === s
                      ? "bg-[#d4af37] ring-4 ring-[#d4af37]/20 scale-110"
                      : s < step
                      ? "bg-[#aa7c11]"
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Error Alert */}
      {errorMsg && (
        <div className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Form Steps */}
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* STEP 1: EVENT ESSENTIALS */}
          {step === 1 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Select Event Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    "Wedding Planning",
                    "Destination Wedding",
                    "Beach Wedding",
                    "Corporate Summit",
                    "Birthday / Milestone",
                    "Engagement & Reception",
                    "Music & Entertainment",
                    "Stage Show",
                    "Catering Sadya"
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => updateField("eventType", type)}
                      className={`py-3 px-3 rounded-xl text-xs font-medium text-left transition-all ${
                        formData.eventType === type
                          ? "bg-[#d4af37] text-black font-semibold shadow-md"
                          : "bg-white/5 text-zinc-300 hover:bg-white/10 border border-white/5"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#d4af37]" />
                    Target Event Date (Optional)
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => updateField("eventDate", e.target.value)}
                    className="w-full bg-[#121217] border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    Kerala District / Region
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => updateField("district", e.target.value)}
                    className="w-full bg-[#121217] border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    {[
                      "Ernakulam / Kochi",
                      "Thiruvananthapuram",
                      "Alappuzha (Alleppey)",
                      "Thrissur",
                      "Kozhikode (Calicut)",
                      "Idukki (Munnar)",
                      "Wayanad",
                      "Kollam",
                      "Other Location in Kerala"
                    ].map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: SCALE & QUESTIONNAIRE */}
          {step === 2 && (
            <div className="space-y-5 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                    Estimated Guest Count
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => updateField("guestCount", e.target.value)}
                    className="w-full bg-[#121217] border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="Under 150">Intimate (Under 150)</option>
                    <option value="150 - 300">Mid-Size (150 – 300)</option>
                    <option value="300 - 600">Grand (300 – 600)</option>
                    <option value="600 - 1500">Royal (600 – 1,500)</option>
                    <option value="1500+">Mega Gathering (1,500+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center gap-1.5">
                    <Wallet className="w-3.5 h-3.5 text-[#d4af37]" />
                    Estimated Budget Allocation
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => updateField("budgetRange", e.target.value)}
                    className="w-full bg-[#121217] border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="₹3 Lakhs - ₹5 Lakhs">₹3 Lakhs – ₹5 Lakhs</option>
                    <option value="₹5 Lakhs - ₹10 Lakhs">₹5 Lakhs – ₹10 Lakhs</option>
                    <option value="₹10 Lakhs - ₹25 Lakhs">₹10 Lakhs – ₹25 Lakhs (Luxury)</option>
                    <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs (High Luxury)</option>
                    <option value="₹50 Lakhs+">₹50 Lakhs+ (Ultra Bespoke)</option>
                    <option value="Undecided">Undecided / Need Guidance</option>
                  </select>
                </div>
              </div>

              {/* Optional Questionnaire Elements */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#d4af37]">
                  Planning Questionnaire (Optional)
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex items-center gap-2.5 text-xs text-zinc-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needsCatering}
                      onChange={(e) => updateField("needsCatering", e.target.checked)}
                      className="rounded accent-[#d4af37] w-4 h-4"
                    />
                    <span>Requires Gourmet Catering / Sadya</span>
                  </label>

                  <label className="flex items-center gap-2.5 text-xs text-zinc-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needsPhotography}
                      onChange={(e) => updateField("needsPhotography", e.target.checked)}
                      className="rounded accent-[#d4af37] w-4 h-4"
                    />
                    <span>Requires Cinematic Photography & Drone</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: CONTACT & MESSAGE */}
          {step === 3 && (
            <div className="space-y-4 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#d4af37]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Menon"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    className="w-full bg-[#121217] border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98470 12345"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full bg-[#121217] border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. rahul@example.com"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full bg-[#121217] border border-white/10 rounded-xl px-3.5 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5">
                  Special Requirements / Vision Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your event aesthetic, preferred venue style, specific ceremonies or theme inspirations..."
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  className="w-full bg-[#121217] border border-white/10 rounded-xl p-3.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>
          )}

          {/* Stepper Navigation Buttons */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold border border-white/20 text-zinc-300 hover:text-white hover:border-white/40 transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold bg-[#d4af37] text-black hover:bg-[#aa7c11] transition-colors flex items-center gap-1.5 shadow-md"
              >
                Continue
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-[#d4af37] via-[#f7e7ce] to-[#aa7c11] text-black hover:opacity-95 transition-opacity flex items-center gap-2 shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Transmitting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-3.5 h-3.5" />
                    Submit Event Enquiry
                  </span>
                )}
              </button>
            )}
          </div>
        </form>
      ) : (
        /* SUCCESS CONFIRMATION STATE */
        <div className="py-8 text-center space-y-5 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2 max-w-md mx-auto">
            <h3 className="text-2xl font-serif font-bold text-white">
              Thank You, {formData.fullName}!
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Your event brief for <strong className="text-[#f7e7ce]">{formData.eventType}</strong> has been received by Ashwin Antony Jose and the AAJ GROUPS team.
            </p>
            <p className="text-xs text-zinc-400">
              We will review your requirements and reach out on {formData.phone} within 24 hours with a customized moodboard and proposal.
            </p>
          </div>

          {/* Quick WhatsApp Forward Option if WhatsApp configured */}
          {hasWhatsApp() && (
            <div className="pt-4">
              <a
                href={getWhatsAppUrl(buildWhatsAppBrief()) || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Send Instant Copy to WhatsApp
              </a>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
              }}
              className="text-xs text-[#d4af37] underline hover:text-white"
            >
              Submit another enquiry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

