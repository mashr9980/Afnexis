"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver({ ref: sectionRef });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 relative overflow-hidden"
    >
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-animated-gradient opacity-40"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-teal-500/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-radial-teal opacity-30"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-cyan-400/15 rounded-full blur-2xl animate-float-delayed"></div>
        
        {/* Animated particles */}
        <div className="absolute top-1/6 right-1/4 w-3 h-3 bg-teal-400 rounded-full animate-teal-pulse opacity-60"></div>
        <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-teal-glow opacity-50"></div>
        <div className="absolute top-1/2 right-1/6 w-4 h-4 bg-teal-500 rounded-full animate-teal-pulse animation-delay-1000 opacity-40"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-dots-teal opacity-10"></div>
      </div>

      <div className="container-cards relative z-10">
        <Card className="bg-foreground/80 backdrop-blur-sm card-border rounded-2xl p-10 md:p-16 text-center relative overflow-hidden group hover:shadow-[0_0_40px_rgba(20,184,166,0.3)] transition-all duration-500">
          {/* Card gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Teal glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          
          <div className="relative z-10">
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full border border-teal-400/30 mb-6">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span className="text-teal-300 text-sm font-medium">Ready to Get Started?</span>
              </div>
            </motion.div>
            
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-headings font-['Poppins'] mb-6"
            >
              Ready to Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Business?
              </span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto text-text text-lg mb-10"
            >
              Let's discuss how our technology solutions can help you achieve your
              business goals and stay ahead of the competition with cutting-edge AI
              and development services.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center sm:flex-row justify-center gap-4"
            >
              <Link href={"/contact"}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium rounded-xl px-8 py-6 text-lg flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105 group"
                >
                  <Calendar className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href={"/contact#contact-form"}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white rounded-xl px-8 py-6 text-lg flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105 group backdrop-blur-sm"
                >
                  <MessageSquare className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Contact Us
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
            </motion.div>

            {/* Additional trust indicators */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-teal-500/20"
            >
              <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  <span>24/7 Support Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse animation-delay-500"></div>
                  <span>Free Initial Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse animation-delay-1000"></div>
                  <span>No Long-term Commitments</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}