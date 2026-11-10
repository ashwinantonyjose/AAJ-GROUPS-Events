/**
 * Central Configuration for AAJ GROUPS Event Management
 * 
 * Edit this file to customize company details, contact channels, and social media handles.
 * Leave fields empty ("") if not yet configured. The UI will automatically hide
 * unconfigured contact channels and social icons rather than displaying dummy links.
 */

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  contactPerson: string;
  serviceRegion: string;
  url: string;

  // Contact Info (configurable placeholders)
  contact: {
    // Leave as empty string "" if not configured; UI will gracefully adapt
    phone: string;
    phoneDisplay: string;
    whatsapp: string; // e.g. "919876543210" without '+' or symbols
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
      mapsUrl: string; // Google Maps embed or share URL
    };
    workingHours: string;
  };

  // Social Links (hide if empty)
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
    linkedin: string;
    pinterest: string;
  };

  // Regional Coverage
  hubs: string[];
}

export const siteConfig: SiteConfig = {
  name: "AAJ GROUPS",
  legalName: "AAJ GROUPS Event Management",
  tagline: "Creating Experiences, Crafting Memories.",
  description:
    "Leading luxury event management and destination wedding planning company in Kerala. Bespoke weddings, coastal celebrations, grand corporate galas, and stage productions crafted with immaculate artistry.",
  contactPerson: "Ashwin Antony Jose",
  serviceRegion: "Kerala, India",
  url: "https://aajgroups.com",

  contact: {
    // Placeholders - replace with genuine credentials when provided
    phone: "", // e.g. "+91 98470 00000"
    phoneDisplay: "", // e.g. "+91 98470 00000"
    whatsapp: "", // e.g. "919847000000" (digits only for https://wa.me/...)
    email: "", // e.g. "hello@aajgroups.com"
    address: {
      street: "",
      city: "Kochi",
      state: "Kerala",
      country: "India",
      postalCode: "",
      mapsUrl: "",
    },
    workingHours: "Monday – Saturday: 9:30 AM – 7:30 PM IST",
  },

  social: {
    instagram: "", // e.g. "https://instagram.com/aajgroups"
    facebook: "", // e.g. "https://facebook.com/aajgroups"
    youtube: "", // e.g. "https://youtube.com/@aajgroups"
    linkedin: "",
    pinterest: "",
  },

  hubs: [
    "Kochi (Cochin)",
    "Trivandrum",
    "Thrissur",
    "Kozhikode (Calicut)",
    "Alappuzha (Alleppey)",
    "Kumarakom",
    "Munnar",
    "Wayanad",
    "Kovalam",
    "Varkala",
  ],
};

/**
 * Helper to build a WhatsApp click-to-chat URL with a prefilled message
 */
export function getWhatsAppUrl(message?: string): string | null {
  const num = siteConfig.contact.whatsapp.replace(/\D/g, "");
  if (!num) return null;
  const encodedMsg = encodeURIComponent(
    message ||
      `Hello AAJ GROUPS, I would like to enquire about event management services in Kerala.`
  );
  return `https://wa.me/${num}?text=${encodedMsg}`;
}

/**
 * Check whether direct phone calling is available
 */
export function hasPhone(): boolean {
  return Boolean(siteConfig.contact.phone && siteConfig.contact.phone.trim().length > 0);
}

/**
 * Check whether WhatsApp messaging is available
 */
export function hasWhatsApp(): boolean {
  return Boolean(siteConfig.contact.whatsapp && siteConfig.contact.whatsapp.trim().length > 0);
}

/**
 * Check whether email contact is available
 */
export function hasEmail(): boolean {
  return Boolean(siteConfig.contact.email && siteConfig.contact.email.trim().length > 0);
}

/**
 * Check whether address/maps location is available
 */
export function hasAddress(): boolean {
  return Boolean(siteConfig.contact.address.street && siteConfig.contact.address.street.trim().length > 0);
}
