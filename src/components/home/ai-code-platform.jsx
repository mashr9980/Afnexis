"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CloudOff, Zap, ShieldCheck, Lock, Server, Star } from "lucide-react";

export default function AiCodePlatform() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const features = [
    {
      icon: <CloudOff className="h-6 w-6" />,
      title: "100% Offline",
      description: "No internet required after installation"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Sub-second responses without latency"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "GDPR, HIPAA & SOC 2 compliant"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Data Sovereignty",
      description: "Complete control over your data"
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Easy Deployment",
      description: "Install on existing infrastructure"
    }
  ];

  return (
    <div
      ref={sectionRef}
      className="relative bg-background text-white py-20 px-4 md:px-8 overflow-hidden"
    >
      {/* Enhanced background with teal theme */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient backgrounds */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-40"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-teal-500/15 via-transparent to-cyan-500/10"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-radial-teal opacity-30"></div>
        
        {/* Animated floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-cyan-400/15 rounded-full blur-2xl animate-float-delayed"></div>
        
        {/* Teal particles */}
        <div className="absolute top-1/6 right-1/4 w-3 h-3 bg-teal-400 rounded-full animate-teal-pulse opacity-60"></div>
        <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-cyan-300 rounded-full animate-teal-glow opacity-50"></div>
        <div className="absolute bottom-1/4 right-2/3 w-4 h-4 bg-teal-500 rounded-full animate-teal-pulse animation-delay-1000 opacity-40"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full border border-teal-400/30 mb-4">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-teal-400" />
                <span className="text-teal-300 text-xs sm:text-sm font-medium tracking-wider uppercase">
                  Our Proud Product
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-200 to-cyan-300 leading-tight">
                VaultMind by AFNEXIS
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 mb-4 lg:mb-6 leading-relaxed">
                Your Data Stays Yours. Your AI Stays Private.
              </p>
              <p className="text-base sm:text-lg text-gray-400 mb-6 lg:mb-8 leading-relaxed">
                The world's first 100% offline AI knowledge base that transforms your sensitive documents into an intelligent, searchable knowledge base that never touches the cloud.
              </p>
            </div>

            {/* Key Features Grid - Mobile Optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 lg:mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  custom={index}
                  className="flex items-start gap-3 p-3 sm:p-4 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-lg border border-teal-500/20 backdrop-blur-sm hover:from-teal-500/15 hover:to-cyan-500/15 transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-1.5 sm:p-2 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg text-teal-400">
                    {feature.icon}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">{feature.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-400 leading-tight">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons - Mobile Optimized */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="https://vaultmind.afnexis.com/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105 group text-sm sm:text-base">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <Link href="/vaultmind" className="w-full sm:w-auto">
                <button className="w-full inline-flex items-center justify-center gap-2 border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 group text-sm sm:text-base">
                  Learn More
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Section - Mobile Optimized */}
          <motion.div variants={cardVariants} className="relative order-1 lg:order-2">
            {/* Main Card */}
            <div className="relative p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-foreground/80 to-foreground/60 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-teal-500/30 shadow-2xl hover:shadow-[0_0_40px_rgba(20,184,166,0.3)] transition-all duration-500 group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl lg:rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              {/* Header - Mobile Optimized */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white truncate">VaultMind Dashboard</h3>
                    <p className="text-xs sm:text-sm text-gray-400 truncate">100% Offline AI Knowledge Base</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-medium hidden sm:inline">SECURE</span>
                </div>
              </div>

              {/* Stats Cards - Mobile Optimized */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-lg border border-teal-500/20">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-400 mb-1">0ms</div>
                  <div className="text-xs text-gray-400">Network Latency</div>
                </div>
                <div className="p-3 sm:p-4 bg-gradient-to-br from-teal-900/30 to-cyan-900/30 rounded-lg border border-teal-500/20">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-teal-400 mb-1">100%</div>
                  <div className="text-xs text-gray-400">Data Privacy</div>
                </div>
              </div>

              {/* Security Features - Mobile Optimized */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-r from-teal-900/20 to-transparent rounded-lg border-l-2 border-teal-400">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-300 truncate">GDPR Compliant</span>
                  </div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-r from-teal-900/20 to-transparent rounded-lg border-l-2 border-teal-400">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-300 truncate">HIPAA Ready</span>
                  </div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-r from-teal-900/20 to-transparent rounded-lg border-l-2 border-teal-400">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                    <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-300 truncate">SOC 2 Compatible</span>
                  </div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                </div>
              </div>

              {/* Bottom highlight - Mobile Optimized */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-lg border border-teal-400/30">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-teal-400 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm font-medium text-white">Complete Data Sovereignty</div>
                    <div className="text-xs text-gray-400">Your data never leaves your infrastructure</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges - Mobile Optimized */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
              Enterprise Ready
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
              Zero Trust
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Key Benefits */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Trusted by Organizations Who Can't Afford Data Breaches</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
              {["Healthcare", "Legal Firms", "Financial Services", "Government", "Manufacturing"].map((industry, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-lg border border-teal-500/20 hover:from-teal-500/15 hover:to-cyan-500/15 transition-all duration-300">
                  <div className="text-sm font-medium text-teal-300">{industry}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}