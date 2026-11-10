import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import ScrollProgress from "@/components/layout/ScrollProgress";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Luxury Event Management & Wedding Planning in Kerala`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Event Management Kerala",
    "Luxury Wedding Planners Kerala",
    "Destination Weddings Kerala",
    "AAJ GROUPS",
    "Beach Weddings Kovalam",
    "Backwater Wedding Kumarakom",
    "Corporate Events Kochi",
    "Stage Shows Kerala",
    "Catering Sadya Kerala",
  ],
  authors: [{ name: siteConfig.contactPerson }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero/hero-kerala-wedding.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Luxury Event Management`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/hero/hero-kerala-wedding.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Kerala, India",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.contactPerson,
    },
    serviceArea: siteConfig.hubs.map((hub) => ({
      "@type": "Place",
      name: hub,
    })),
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo-icon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0a0d] text-[#faf8f5] font-sans antialiased selection:bg-[#d4af37] selection:text-black min-h-screen flex flex-col">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
