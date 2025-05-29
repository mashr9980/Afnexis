"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Link from "next/link";

export default function PricingSection() {
  const sectionRef = useRef(null);
  const isInView = useIntersectionObserver({ ref: sectionRef });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const pricingPlans = [
    {
      tier: "BASIC",
      price: "Free Trial",
      period: "/30 Day",
      description:
        "Get started with our free trial to explore core AI features, perfect for individual developers looking to test the platform's capabilities.",
      features: [
        "Trial Access Platform",
        "Basic AI Tools",
        "Community Support",
        "Limited API Calls",
        "Basic Templates"
      ],
      popular: false,
    },
    {
      tier: "PRO",
      price: "$39 USD",
      period: "/30 Day",
      description:
        "Unlock advanced AI tools, premium support, and full platform access for professional developers and small teams building innovative projects.",
      features: [
        "Full Access Platform",
        "Premium AI Tools",
        "Priority Support",
        "Unlimited API Calls",
        "Advanced Templates",
        "Team Collaboration"
      ],
      popular: true,
    },
    {
      tier: "ENTERPRISE",
      price: "$1,499 USD",
      period: "/30 Day",
      description:
        "Scale your development with enterprise-grade AI tools, priority support, and API access for large teams and mission-critical applications.",
      features: [
        "Enterprise Platform",
        "Custom AI Solutions",
        "24/7 Dedicated Support",
        "Custom API Integration",
        "White-label Options",
        "Advanced Analytics",
        "SLA Guarantee"
      ],
      popular: false,
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-background text-white py-20 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-mesh-gradient opacity-30"></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-teal-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-radial-teal opacity-20"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-cyan-400/15 rounded-full blur-xl animate-float-delayed"></div>
        
        {/* Teal particles */}
        <div className="absolute top-1/6 left-1/4 w-3 h-3 bg-teal-400 rounded-full animate-teal-pulse opacity-60"></div>
        <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-cyan-300 rounded-full animate-teal-glow opacity-50"></div>
        <div className="absolute bottom-1/4 left-2/3 w-4 h-4 bg-teal-500 rounded-full animate-teal-pulse animation-delay-1000 opacity-40"></div>
      </div>

      <motion.div
        className="container-cards relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <motion.div variants={itemVariants} className="mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Try starting for <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">FREE!</span>
            </h2>
            <p className="text-gray-400 max-w-md">
              Explore our flexible pricing plans to unlock powerful AI tools,
              designed to accelerate your development and enhance your coding
              experience.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-xl overflow-hidden backdrop-blur-sm">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.tier}
              className={`relative p-8 flex flex-col h-full transition-all duration-300 group
                ${index === 1 
                  ? "bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border-2 border-teal-400 scale-105 z-10" 
                  : "bg-foreground/50 border border-gray-800"
                }
                ${index === 0 ? "rounded-l-xl" : index === 2 ? "rounded-r-xl" : ""}
                hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:scale-105
              `}
              variants={itemVariants}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  MOST POPULAR
                </div>
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <h3 className={`font-bold mb-6 text-lg ${plan.popular ? 'text-teal-300' : 'text-teal-400'}`}>
                  {plan.tier}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{plan.description}</p>
                <div className="mb-6">
                  <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-gray-200'}`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className={`h-5 w-5 mr-3 flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'text-teal-400' : 'text-teal-500'
                      }`} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={"/contact"} className="block">
                  <button className={`w-full py-3 px-6 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2
                    ${plan.popular 
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-teal-500/25" 
                      : "border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white"
                    }
                    hover:scale-105 transform
                  `}>
                    {plan.tier === "BASIC" ? "Start Free Trial" : plan.tier === "ENTERPRISE" ? "Contact Sales" : "Get Started"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-12 p-6 bg-foreground/30 backdrop-blur-sm rounded-xl border border-teal-500/20"
        >
          <p className="text-gray-400 text-sm mb-2">
            All plans include SSL security, regular updates, and access to our growing library of AI tools.
          </p>
          <p className="text-teal-400 text-sm">
            Need a custom solution? <Link href="/contact" className="underline hover:text-teal-300 transition-colors">Contact our sales team</Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}