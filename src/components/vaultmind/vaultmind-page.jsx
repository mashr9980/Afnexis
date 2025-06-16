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
    <main className="min-h-screen bg-background relative overflow-hidden">
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
          {/* Background with gradient overlay */}
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
              className="text-4xl md:text-6xl font-bold text-headings font-['Poppins'] mb-6"
            >
              VaultMind{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                by AFNEXIS
              </span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-text max-w-3xl mx-auto mb-8">
              Your Data Stays Yours. Your AI Stays Private. The world's first 100% offline AI knowledge base.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

        {/* Features Section */}
        <section className="py-20 bg-mesh-gradient">
          <div className="container-cards">
            <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-headings font-['Poppins'] mb-6">Why VaultMind?</h2>
              <p className="text-text max-w-3xl mx-auto">
                Transform your sensitive documents into an intelligent knowledge base that never touches the cloud.
              </p>
            </motion.div>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={fadeIn} className="bg-foreground/80 backdrop-blur-sm card-border rounded-xl p-6 relative group hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CloudOff className="h-8 w-8 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-headings">100% Offline Operation</h3>
                <p className="text-text">No internet required after installation. Your data never leaves your infrastructure.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-foreground/80 backdrop-blur-sm card-border rounded-xl p-6 relative group hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Zap className="h-8 w-8 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-headings">Lightning Fast Responses</h3>
                <p className="text-text">Local processing delivers sub-second answers without network latency.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-foreground/80 backdrop-blur-sm card-border rounded-xl p-6 relative group hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ShieldCheck className="h-8 w-8 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-headings">Enterprise-Grade Security</h3>
                <p className="text-text">Built to meet SOC&nbsp;2, GDPR and HIPAA requirements with advanced encryption.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-foreground/80 backdrop-blur-sm card-border rounded-xl p-6 relative group hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Server className="h-8 w-8 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-headings">Easy Deployment</h3>
                <p className="text-text">Install on your existing servers in minutes with simple management tools.</p>
              </motion.div>
              <motion.div variants={fadeIn} className="bg-foreground/80 backdrop-blur-sm card-border rounded-xl p-6 relative group hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Lock className="h-8 w-8 text-teal-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-headings">Complete Data Control</h3>
                <p className="text-text">Maintain full sovereignty over your sensitive documents and AI models.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 container-wrapper relative">
          <div className="absolute inset-0 bg-radial-teal opacity-20" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-headings font-['Poppins'] text-center mb-8">Cloud AI vs. VaultMind</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-text border border-teal-500/20 rounded-xl overflow-hidden">
                <thead className="bg-foreground/70 backdrop-blur-sm">
                  <tr>
                    <th className="p-4">Feature</th>
                    <th className="p-4">Cloud AI Solutions</th>
                    <th className="p-4">VaultMind</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-teal-500/10 bg-background/60 backdrop-blur">
                  <tr>
                    <td className="p-4 font-medium">Data Privacy</td>
                    <td className="p-4">Your data sent to external servers</td>
                    <td className="p-4 text-teal-300">100% local processing</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Internet Dependency</td>
                    <td className="p-4">Requires constant connectivity</td>
                    <td className="p-4 text-teal-300">Works completely offline</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Compliance</td>
                    <td className="p-4">Complex regulatory hurdles</td>
                    <td className="p-4 text-teal-300">Built-in GDPR & HIPAA compliance</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Response Time</td>
                    <td className="p-4">Network latency delays</td>
                    <td className="p-4 text-teal-300">Instant local responses</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Data Control</td>
                    <td className="p-4">Limited control over your data</td>
                    <td className="p-4 text-teal-300">Complete data sovereignty</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Costs</td>
                    <td className="p-4">Unpredictable API usage fees</td>
                    <td className="p-4 text-teal-300">Fixed monthly pricing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-teal-gradient">
          <div className="container-cards text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-headings font-['Poppins'] mb-6">Ready to Keep Your Data Private?</h2>
            <p className="text-text max-w-2xl mx-auto mb-8">
              Join hundreds of organizations that trust VaultMind to analyze their sensitive documents without compromising security.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25">
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="container-wrapper py-8 text-center">
          <p className="text-text text-sm">
            VaultMind is a trademark of AFNEXIS. © {new Date().getFullYear()} Afnexis.
          </p>
        </section>
      </div>
    </main>
  );
}