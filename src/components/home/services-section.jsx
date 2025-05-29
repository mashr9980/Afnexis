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
    icon: <Database className="h-10 w-10 text-teal-400" />,
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and migration services for optimal performance.",
    icon: <Cloud className="h-10 w-10 text-teal-400" />,
  },
  {
    title: "Web & Mobile Development",
    description:
      "Responsive web applications and native mobile apps for all platforms.",
    icon: <Smartphone className="h-10 w-10 text-teal-400" />,
  },
  {
    title: "Data Engineering",
    description:
      "Data pipeline development, ETL processes, and analytics solutions.",
    icon: <BarChart3 className="h-10 w-10 text-teal-400" />,
  },
  {
    title: "Product Design",
    description:
      "User-centered design approach for intuitive and engaging digital products.",
    icon: <Palette className="h-10 w-10 text-teal-400" />,
  },
  {
    title: "Custom Software",
    description:
      "Tailored software solutions designed to address your specific business needs.",
    icon: <Code className="h-10 w-10 text-teal-400" />,
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver({ ref: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="py-20 w-full relative overflow-hidden"
    >
      {/* Enhanced background with multiple teal gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main mesh gradient */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-60"></div>
        
        {/* Radial gradients for depth */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-radial-teal opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-teal-500/10 to-transparent"></div>
        
        {/* Animated floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-teal-400/20 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-cyan-400/15 rounded-full blur-xl animate-float-delayed"></div>
        
        {/* Teal particles */}
        <div className="absolute top-1/6 left-1/4 w-3 h-3 bg-teal-400 rounded-full animate-teal-pulse opacity-60"></div>
        <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-cyan-300 rounded-full animate-teal-glow opacity-50"></div>
        <div className="absolute bottom-1/4 left-2/3 w-4 h-4 bg-teal-500 rounded-full animate-teal-pulse animation-delay-1000 opacity-40"></div>
      </div>

      <div
        className={`transition-all container-cards duration-1000 transform relative z-10 ${
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
              className={`bg-foreground/80 backdrop-blur-sm card-border rounded-xl p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:bg-foreground/90 delay-${
                index * 100
              } group relative overflow-hidden`}
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Teal glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              <div className="flex flex-col items-center text-center relative z-10">
                {/* Icon with enhanced styling */}
                <div className="mb-4 p-3 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full group-hover:from-teal-500/20 group-hover:to-cyan-500/20 transition-all duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-3 group-hover:text-teal-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}