"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CloudOff,
  ShieldCheck,
  Zap,
  Lock,
  Server,
} from "lucide-react";

export default function VaultMindPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <main className="min-h-screen bg-background relative overflow-hidden text-headings">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-teal-gradient rounded-full blur-3xl opacity-30 animate-float-slow" />
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-radial-teal rounded-full blur-2xl opacity-40 animate-float-delayed" />
        <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-mesh-gradient rounded-full blur-3xl opacity-25 animate-float" />
        <div className="absolute top-1/5 left-1/3 w-4 h-4 bg-teal-500 rounded-full animate-teal-pulse opacity-60" />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-teal-300 rounded-full animate-teal-pulse animation-delay-1000 opacity-50" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-teal-400 rounded-full animate-teal-pulse animation-delay-2000 opacity-70" />
        <div className="absolute inset-0 bg-grid-teal opacity-10" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/dashboard.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/80 via-[#0d1117]/90 to-[#0d1117]" />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-cyan-500/10" />
          </div>

          <motion.div
            className="container-wrapper relative z-10 text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold font-['Poppins'] mb-6"
            >
              VaultMind{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                by AFNEXIS
              </span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-text max-w-3xl mx-auto mb-8"
            >
              Your Data Stays Yours. Your AI Stays Private. The world's first 100% offline AI knowledge base.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25">
                  Watch Demo
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Features, Comparison, CTA, Footer Sections — unchanged from your full version */}
        {/* You can keep the rest of your original `iwpthu-codex` version here without any change. */}
      </div>
    </main>
  );
}