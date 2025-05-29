"use client";

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
import { StructuredData } from "@/components/seo/structured-data";
import testimonials from "@/data/client-testimonial.json";

export default function Home() {
  return (
    <>
      <StructuredData
        type="Service"
        data={{
          name: "AI-Powered Development Platform",
          description:
            "Comprehensive suite of AI-powered development tools and resources",
          serviceType: "Software Development Platform",
        }}
      />
      <main className="max-w-full overflow-x-hidden relative">
        {/* Background decorative elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Animated teal gradient orbs */}
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-teal-gradient rounded-full blur-3xl opacity-30 animate-float-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-radial-teal rounded-full blur-2xl opacity-40 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-mesh-gradient rounded-full blur-3xl opacity-25 animate-float"></div>
          
          {/* Floating teal particles */}
          <div className="absolute top-1/5 left-1/3 w-4 h-4 bg-teal-500 rounded-full animate-teal-pulse opacity-60"></div>
          <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-teal-300 rounded-full animate-teal-pulse animation-delay-1000 opacity-50"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-teal-400 rounded-full animate-teal-pulse animation-delay-2000 opacity-70"></div>
          <div className="absolute top-1/6 right-1/5 w-5 h-5 bg-teal-600 rounded-full animate-teal-glow opacity-40"></div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-teal opacity-20"></div>
        </div>

        {/* Main content with higher z-index */}
        <div className="relative z-10">
          <HeroSection
            title="Welcome to Our Platform"
            subtitle={{
              regular: "Transform your ideas into ",
              gradient: "beautiful digital experiences",
            }}
            description="Transform your ideas into reality with our comprehensive suite of development tools and resources."
            ctaText="Get Started"
            ctaHref="/contact#contact-form"
            gridOptions={{
              angle: 65,
              opacity: 0.4,
              cellSize: 50,
              lightLineColor: "#14b8a6",
              darkLineColor: "#0d9488",
            }}
          />
          
          {/* Enhanced section backgrounds */}
          <div className="bg-animated-gradient">
            <AiCodePlatform />
          </div>
          
          <div className="bg-mesh-gradient">
            <FeaturesSection />
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-radial-teal opacity-20"></div>
            <div className="relative z-10">
              <ServicesSection />
            </div>
          </div>
          
          <div className="bg-dots-teal bg-background">
            <WhyChooseUsSection />
          </div>
          
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-teal-gradient opacity-30"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-500/10 to-transparent"></div>
            <div className="relative z-10">
              <FeaturedProjectsSection />
            </div>
          </div>
          
          <div className="bg-grid-teal bg-background">
            <TechStackSection />
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-animated-gradient opacity-40"></div>
            <div className="relative z-10">
              <TestimonialsSection
                title="Trusted by developers worldwide"
                description="Join thousands of developers who are already building the future with our AI platform"
                testimonials={testimonials}
              />
            </div>
          </div>
          
          {/* <div className="bg-mesh-gradient">
            <PricingSection />
          </div> */}
          
          <div className="relative">
            <div className="absolute inset-0 bg-radial-teal opacity-25"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-teal-500/5 to-transparent"></div>
            <div className="relative z-10">
              <IndustriesSection />
            </div>
          </div>
          
          <div className="bg-teal-gradient">
            <CTASection />
          </div>
        </div>
      </main>
    </>
  );
}