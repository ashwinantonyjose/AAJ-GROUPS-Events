# AAJ GROUPS — Luxury Event Management & Wedding Planners (Kerala)

> **"Creating Experiences, Crafting Memories."**  
> Leading luxury event management and destination wedding planning company in Kerala, India. Led by **Ashwin Antony Jose**.

[![Live Repository](https://img.shields.io/badge/GitHub-AAJ--GROUPS--Events-gold?style=for-the-badge&logo=github)](https://github.com/ashwinantonyjose/AAJ-GROUPS-Events)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

---

## 🏛️ Brand & Aesthetic Direction

* **Brand Name:** AAJ GROUPS
* **Director & Primary Contact:** Ashwin Antony Jose
* **Service Territory:** Kerala, India (Kochi, Trivandrum, Thrissur, Calicut, Alappuzha, Kumarakom, Munnar, Wayanad, Kovalam, Varkala)
* **Color Palette:**
  * Charcoal Black (`#0A0A0D` / `#121217`)
  * Champagne Gold (`#D4AF37`, `#F7E7CE`, `#AA7C11`)
  * Warm Ivory (`#FAF8F5`)
* **Typography:** Editorial Serif (*Cinzel* & *Playfair Display*) paired with clean Geometric Sans (*Plus Jakarta Sans*).

---

## ⚡ Key Highlights & Features

1. **Fullscreen Cinematic Hero Carousel:**
   * 6 high-definition event backgrounds with crossfades, Ken Burns zoom, and dark gradient overlays.
   * Auto-rotating slideshow (every 6 seconds), slide indicators, pause on hover, keyboard arrow controls, and scroll guides.
2. **Transparent-to-Solid Navigation:**
   * Sticky frosted glass navbar (`glass-nav`) with dynamic scroll transition.
   * Desktop Services Mega Menu featuring custom icons, highlights, and quick links.
   * Mobile slide-in animated navigation drawer.
3. **14 Dedicated Services & Detail Pages (`/services/[slug]`):**
   * Pre-rendered static pages for each service with custom hero imagery, key features, turnkey inclusions, FAQs, and quotation CTA:
     1. Wedding Planning & Management
     2. Destination Weddings in Kerala
     3. Beach Weddings
     4. Corporate Events & Galas
     5. Birthday Parties & Milestones
     6. Engagement & Reception
     7. Music & Entertainment
     8. Stage Shows & Live Performances
     9. Photography & Videography
     10. Catering Services & Sadya
     11. Private Parties & Anniversaries
     12. Inaugurations & Product Launches
     13. Conferences & Exhibitions
     14. College Events & Cultural Festivals
4. **Editorial Destination Wedding Showcase:**
   * Focused spotlights on Kumarakom & Alleppey Backwaters, Kovalam & Varkala Beaches, and Munnar Tea Estates.
   * Turnkey NRI and out-of-state guest hospitality features.
5. **Interactive Kerala Venue Discovery (`/venues`):**
   * Multi-filter discovery by District, Venue Typology, Guest Capacity, and Budget Tier.
6. **Interactive Event Budget Estimator:**
   * Ballpark calculator estimating costs in INR (₹) across decor, catering, production, and media.
7. **Multi-Step Event Quotation Wizard (`/contact#quote`):**
   * Step 1: Event Essentials (Type, Date, District)
   * Step 2: Scale & Questionnaire (Guests, Budget, Inclusions)
   * Step 3: Contact & Vision Notes (Name, Phone, Email, Requirements)
   * Form validation, celebration confetti animation, and instant WhatsApp forwarding.
8. **Masonry Photo Gallery & Lightbox (`/gallery`):**
   * Filterable categories with fullscreen keyboard-navigable Lightbox modal.
9. **Cinematic Video Gallery:**
   * Responsive 16:9 video modal player.
10. **Client Reviews Carousel & 5-Step Planning Process:**
    * Elegant testimonial cards and step-by-step roadmap from discovery to execution.
11. **SEO & Social Optimization:**
    * Auto-generated `sitemap.xml`, `robots.txt`, and LocalBusiness / EventPlanner JSON-LD structured schema.
12. **Curated Royalty-Free Assets:**
    * 40 high-resolution local images stored in `public/images/` with source registry documented in `public/images/ASSET_LICENSES.json`.

---

## 🛠️ Configuration & Personalization

All personal contact channels, social handles, and company particulars are managed in a single central file:

📂 [`src/config/site.ts`](src/config/site.ts)

```typescript
export const siteConfig = {
  name: "AAJ GROUPS",
  legalName: "AAJ GROUPS Event Management",
  tagline: "Creating Experiences, Crafting Memories.",
  contactPerson: "Ashwin Antony Jose",
  serviceRegion: "Kerala, India",
  url: "https://aajgroups.com",

  contact: {
    // Fill in genuine credentials when ready; unconfigured fields automatically hide in UI
    phone: "", // e.g. "+91 98470 00000"
    phoneDisplay: "", // e.g. "+91 98470 00000"
    whatsapp: "", // e.g. "919847000000" (digits only for wa.me link)
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
    facebook: "",
    youtube: "",
    linkedin: "",
    pinterest: "",
  },
};
```

---

## 💻 Getting Started Locally

### 1. Prerequisites
* Node.js v18.17+ or v20+
* npm, pnpm, or yarn

### 2. Installation
```bash
git clone https://github.com/ashwinantonyjose/AAJ-GROUPS-Events.git
cd AAJ-GROUPS-Events
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🚀 One-Click Deployment to Vercel

1. Push this repository to your GitHub account (already linked to `https://github.com/ashwinantonyjose/AAJ-GROUPS-Events`).
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import `AAJ-GROUPS-Events`.
4. Leave build settings as default (Framework Preset: **Next.js**).
5. Click **Deploy**. Your luxury site will be live across worldwide edge networks in under 60 seconds!

---

## 📁 Project Architecture

```
├── public/
│   ├── images/
│   │   ├── hero/               # 6 Full-screen hero backgrounds
│   │   ├── services/           # 14 Service cover images
│   │   ├── venues/             # Kerala venue photographs
│   │   ├── gallery/            # Curated event portfolio photos
│   │   ├── about/              # Brand & leadership photography
│   │   ├── logo.svg            # Custom AAJ GROUPS gold crest logo
│   │   └── ASSET_LICENSES.json # Royalty-free license registry
├── src/
│   ├── app/
│   │   ├── page.tsx            # Main luxury landing experience
│   │   ├── about/page.tsx      # Comprehensive About AAJ GROUPS
│   │   ├── services/           # Services directory & [slug] dynamic pages
│   │   ├── venues/page.tsx     # Kerala venue discovery
│   │   ├── gallery/page.tsx    # Photo & Video portfolio
│   │   ├── blog/               # Stories, guides & [slug] reader
│   │   ├── contact/page.tsx    # Multi-step quotation wizard
│   │   ├── api/enquiry/        # Lead ingestion API endpoint
│   │   ├── layout.tsx          # Root layout & JSON-LD schema
│   │   ├── globals.css         # Tailwind v4, luxury gradients & glassmorphism
│   │   ├── sitemap.ts          # Auto-generating XML sitemap
│   │   └── robots.ts           # SEO crawl directives
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, ScrollProgress, FloatingActions
│   │   ├── hero/               # HeroCarousel with Ken Burns effect
│   │   ├── about/              # Split narrative & values
│   │   ├── services/           # Services grid & category filters
│   │   ├── destination/        # Kerala backwater & beach showcase
│   │   ├── venues/             # Venue explorer with multi-criteria filters
│   │   ├── calculator/         # Event budget estimator
│   │   ├── process/            # 5-Step event planning roadmap
│   │   ├── enquiry/            # Multi-step wizard with confetti
│   │   ├── gallery/            # Masonry grid, LightboxModal, VideoModal
│   │   ├── testimonials/       # Reviews carousel
│   │   ├── blog/               # Editorial articles
│   │   ├── faq/                # Accordion FAQ
│   │   └── home/               # Final call-to-action banner
│   ├── config/
│   │   └── site.ts             # Central configuration file
│   ├── data/                   # Structured TypeScript data models
│   └── types/                  # TypeScript interface definitions
└── package.json
```

---

## 📄 License & Attribution

* **Website Code & Architecture:** Crafted for **AAJ GROUPS**. All rights reserved.
* **Photography & Assets:** Sourced under the [Unsplash License](https://unsplash.com/license) for commercial and non-commercial usage. Full registry maintained in [`public/images/ASSET_LICENSES.json`](public/images/ASSET_LICENSES.json).
