export type EventCategory =
  | "All Events"
  | "Weddings"
  | "Destination Weddings"
  | "Corporate"
  | "Birthdays"
  | "Stage Shows"
  | "Decorations";

export interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: "Weddings" | "Corporate" | "Celebrations" | "Production" | "Hospitality";
  heroImage: string;
  cardImage: string;
  iconName: string;
  features: string[];
  inclusions: string[];
  highlights: string[];
  idealFor: string;
  faqs: { question: string; answer: string }[];
}

export type KeralaDistrict =
  | "Ernakulam / Kochi"
  | "Thiruvananthapuram"
  | "Alappuzha (Alleppey)"
  | "Thrissur"
  | "Kozhikode (Calicut)"
  | "Idukki (Munnar)"
  | "Wayanad"
  | "Kollam";

export type VenueCategory =
  | "All Types"
  | "Backwater Resort"
  | "Beachfront Lawn"
  | "Heritage Palace"
  | "Luxury Ballroom"
  | "Hill Station Retreat";

export interface VenueItem {
  id: string;
  name: string;
  district: KeralaDistrict;
  category: "Backwater Resort" | "Beachfront Lawn" | "Heritage Palace" | "Luxury Ballroom" | "Hill Station Retreat";
  location: string;
  capacityRange: string;
  maxGuests: number;
  budgetTier: "Premium" | "Luxury" | "Ultra-Luxury";
  image: string;
  description: string;
  amenities: string[];
  idealEvents: string[];
  isFeatured?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: EventCategory;
  image: string;
  location: string;
  aspect?: "square" | "portrait" | "landscape";
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  videoUrl: string; // YouTube embed or self-hosted mp4
  description: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  eventType: string;
  rating: number;
  quote: string;
  date: string;
  verified: boolean;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  content: string[];
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  guestCount: string;
  budgetRange: string;
  message: string;
  preferredContact: "WhatsApp" | "Call" | "Email";
}

