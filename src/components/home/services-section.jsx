"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card } from "@/components/ui/card";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  BarChart3,
  Palette,
} from "lucide-react";

const services = [
  {
    title: "AI Development",
    description:
      "Custom AI solutions to automate processes and gain insights from your data.",
    icon: <Database className="h-10 w-10 text-primary-foreground" />,
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services for optimal performance.",
    icon: <Cloud className="h-10 w-10 text-primary-foreground" />,
  },
  {
    title: "Web & Mobile Development",
    description:
      "Responsive web applications and native mobile apps for all platforms.",
    icon: <Smartphone className="h-10 w-10 text-primary-foreground" />,
  },
  {
    title: "Data Engineering",
    description:
      "Data pipeline development, ETL processes, and analytics solutions.",
    icon: <BarChart3 className="h-10 w-10 text-primary-foreground" />,
  },
  {
    title: "Product Design",
    description:
      "User-centered design approach for intuitive and engaging digital products.",
    icon: <Palette className="h-10 w-10 text-primary-foreground" />,
  },
  {
    title: "Custom Software",
    description:
      "Tailored software solutions designed to address your specific business needs.",
    icon: <Code className="h-10 w-10 text-primary-foreground" />,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver({ ref: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="py-20  w-full  relative overflow-hidden"
    >
      {/* Purplish gradient overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 pointer-events-none ">
          {/* Main rounded gradient blob */}
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl transform translate-x-1/3 "></div>
        </div>
      </div>

      <div
        className={`transition-all container-wrapper duration-1000 transform relative z-10 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-headings font-['Poppins'] mb-4">
            Services Overview
          </h2>
          <p className="max-w-2xl mx-auto text-text text-lg">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`bg-foreground border-none rounded-xl p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(194,122,255,0.3)] delay-${
                index * 100
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-3">
                  {service.title}
                </h3>
                <p className="text-text">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
