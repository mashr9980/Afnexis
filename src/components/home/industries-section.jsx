"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card } from "@/components/ui/card";
import {
  Heart,
  DollarSign,
  ShoppingBag,
  Building,
  Factory,
} from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    description:
      "Innovative solutions for patient care, medical records, and healthcare operations.",
    icon: <Heart className="h-8 w-8 text-secondary-foreground" />,
  },
  {
    name: "Fintech",
    description:
      "Secure and efficient systems for financial services and banking operations.",
    icon: <DollarSign className="h-8 w-8 text-secondary-foreground" />,
  },
  {
    name: "E-commerce",
    description:
      "Scalable platforms for online retail, inventory management, and customer engagement.",
    icon: <ShoppingBag className="h-8 w-8 text-secondary-foreground" />,
  },
  {
    name: "Real Estate",
    description:
      "Digital solutions for property management, listings, and client relationships.",
    icon: <Building className="h-8 w-8 text-secondary-foreground" />,
  },
  {
    name: "Manufacturing",
    description:
      "Automation and optimization systems for production and supply chain management.",
    icon: <Factory className="h-8 w-8 text-secondary-foreground" />,
  },
];

export default function IndustriesSection() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver({ ref: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 container-wrapper">
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-headings font-['Poppins'] mb-4">
            Industries Served
          </h2>
          <p className="max-w-2xl mx-auto text-text text-lg">
            We deliver specialized solutions across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className={`bg-foreground border-none rounded-xl p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(194,122,255,0.3)] delay-${
                index * 100
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-[#0d1117] rounded-lg mr-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-headings font-['Poppins']">
                  {industry.name}
                </h3>
              </div>
              <p className="text-text">{industry.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
