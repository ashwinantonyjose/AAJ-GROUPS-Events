import HeroCarousel from "@/components/hero/HeroCarousel";
import AboutSection from "@/components/about/AboutSection";
import ServicesGrid from "@/components/services/ServicesGrid";
import DestinationShowcase from "@/components/destination/DestinationShowcase";
import VenueExplorer from "@/components/venues/VenueExplorer";
import BudgetEstimator from "@/components/calculator/BudgetEstimator";
import PlanningProcess from "@/components/process/PlanningProcess";
import PhotoGallery from "@/components/gallery/PhotoGallery";
import VideoGallery from "@/components/gallery/VideoGallery";
import TestimonialsCarousel from "@/components/testimonials/TestimonialsCarousel";
import BlogSection from "@/components/blog/BlogSection";
import FAQSection from "@/components/faq/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Fullscreen Cinematic Hero Carousel */}
      <HeroCarousel />

      {/* 2. Brand Identity & About Section */}
      <AboutSection />

      {/* 3. Signature Event Services Grid (With View All) */}
      <ServicesGrid
        limit={6}
        title="Our Signature Services"
        subtitle="Turnkey event architecture, bespoke florals, and concert-grade technical staging crafted across Kerala."
      />

      {/* 4. Kerala Destination Weddings Editorial Showcase */}
      <DestinationShowcase />

      {/* 5. Kerala Venue Discovery Explorer */}
      <VenueExplorer />

      {/* 6. Interactive Event Budget Estimator */}
      <BudgetEstimator />

      {/* 7. The 5-Step Event Planning Process */}
      <PlanningProcess />

      {/* 8. Responsive Masonry Photo Gallery & Lightbox */}
      <PhotoGallery limit={6} />

      {/* 9. Cinematic Video Showreels & Modals */}
      <VideoGallery />

      {/* 10. Client Testimonials & Reviews */}
      <TestimonialsCarousel />

      {/* 11. Planning Insights & Blog Stories */}
      <BlogSection />

      {/* 12. Frequently Asked Questions */}
      <FAQSection />

      {/* 13. High-Impact Final Call to Action */}
      <FinalCTA />
    </div>
  );
}
