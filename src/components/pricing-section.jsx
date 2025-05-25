"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      price: ".Free Trial",
      period: "/30 Day",
      description:
        "Get started with our free trial to explore core AI features, perfect for individual developers looking to test the platform’s capabilities.",
      features: ["Trial Access Platform", "Trial Tools", "Direct Support: No"],
    },
    {
      tier: "PRO",
      price: ".$39 USD",
      period: "/30 Day",
      description:
        "Unlock advanced AI tools, premium support, and full platform access for professional developers and small teams building innovative projects.",
      features: ["All Access Platform", "Premium Tools", "Direct Support: Yes"],
    },
    {
      tier: "ENTERPRISE",
      price: ".$1,499 USD",
      period: "/30 Day",
      description:
        "Scale your development with enterprise-grade AI tools, priority support, and API access for large teams and mission-critical applications.",
      features: [
        "All Access Platform",
        "Premium Tools + API Access",
        "Direct Support: Priority",
      ],
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-background text-white py-20 px-4 md:px-8"
    >
      <motion.div
        className="w-[90%] mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 md:mb-0"
            variants={itemVariants}
          >
            Try starting for <span className="text-primary">FREE!</span>
          </motion.h2>
          <motion.p className="text-gray-400 max-w-md" variants={itemVariants}>
            Explore our flexible pricing plans to unlock powerful AI tools,
            designed to accelerate your development and enhance your coding
            experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.tier}
              className="border border-gray-800 p-8 flex flex-col h-full"
              variants={itemVariants}
            >
              <h3 className="text-primary-foreground font-bold mb-6">
                {plan.tier}
              </h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-400 text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={"/contact"}>
                <button className="border border-primary text-primary py-2 px-6 rounded-full hover:bg-primary-foreground hover:text-black transition-colors duration-300 mt-auto self-start">
                  LEARN MORE
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
