export interface FAQItem {
  id: string;
  category: "General" | "Weddings" | "Pricing & Booking" | "Logistics";
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-01",
    category: "General",
    question: "What regions in Kerala do AAJ GROUPS cover?",
    answer: "We offer full-service event management across all 14 districts of Kerala, with specialized regional operations in Kochi (Ernakulam), Thiruvananthapuram, Thrissur, Kozhikode, Alappuzha, Kumarakom, Munnar, Wayanad, and Kovalam."
  },
  {
    id: "faq-02",
    category: "Pricing & Booking",
    question: "How does the pricing and quotation process work?",
    answer: "Every event is bespoke. We offer an initial consultation to understand your guest count, vision, venue preferences, and desired aesthetic. We then deliver a detailed, itemized transparent quotation covering venue, decor, production, catering, and management fees with zero hidden costs."
  },
  {
    id: "faq-03",
    category: "Weddings",
    question: "Can AAJ GROUPS handle destination wedding guest logistics and accommodation?",
    answer: "Yes, our dedicated destination hospitality team coordinates airport meet-and-greets at Cochin or Trivandrum airports, luxury fleet transfers, hotel room block management, personalized welcome hampers, and 24/7 guest support desks."
  },
  {
    id: "faq-04",
    category: "Logistics",
    question: "How do you handle outdoor weather uncertainties, such as rain or monsoon winds?",
    answer: "We maintain rigorous weather backup protocols. For every open-air beach or backwater celebration, we secure an indoor ballroom standby or construct German waterproof hanger canopies with raised waterproof flooring."
  },
  {
    id: "faq-05",
    category: "Pricing & Booking",
    question: "What are your booking and payment milestones?",
    answer: "To lock in your date on our calendar, we require an initial advance booking deposit. The remaining balance is staged across milestones (moodboard confirmation, vendor lock-in, and pre-event setup) ensuring complete transparency and peace of mind."
  },
  {
    id: "faq-06",
    category: "General",
    question: "Can we hire AAJ GROUPS for specific services like decor or stage only?",
    answer: "While our turnkey end-to-end planning delivers the most cohesive experience, we also provide specialized standalone production packages for luxury floral stage decor, concert audiovisual production, and destination wedding coordination."
  }
];
