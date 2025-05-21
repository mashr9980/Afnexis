"use client";

import Footer from "@/components/footer";
import AiCodePlatform from "@/components/home/ai-code-platform";
import CTASection from "@/components/home/cta-section";
import FeaturedProjectsSection from "@/components/home/featured-projects-section";
import FeaturesSection from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero";
import IndustriesSection from "@/components/home/industries-section";
import ServicesSection from "@/components/home/services-section";
import TechStackSection from "@/components/home/tech-stack-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import WhyChooseUsSection from "@/components/home/why-choose-us-section";
import PricingSection from "@/components/pricing-section";
import testimonials from "@/data/client-testimonial.json";

export default function Home() {
  return (
    <main className="max-w-full overflow-x-hidden">
      <HeroSection
        title="Welcome to Our Platform"
        subtitle={{
          regular: "Transform your ideas into ",
          gradient: "beautiful digital experiences",
        }}
        description="Transform your ideas into reality with our comprehensive suite of development tools and resources."
        ctaText="Get Started"
        ctaHref="/contact"
        gridOptions={{
          angle: 65,
          opacity: 0.4,
          cellSize: 50,
          lightLineColor: "#4a4a4a",
          darkLineColor: "#2a2a2a",
        }}
      />
      <AiCodePlatform />
      <FeaturesSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <FeaturedProjectsSection />
      <TechStackSection />
      <TestimonialsSection
        title="Trusted by developers worldwide"
        description="Join thousands of developers who are already building the future with our AI platform"
        testimonials={testimonials}
      />
      <PricingSection />
      <IndustriesSection />
      <CTASection />
    </main>
  );
}
