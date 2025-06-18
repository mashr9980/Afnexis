"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import {
  CloudOff,
  ShieldCheck,
  Zap,
  Lock,
  Server,
} from "lucide-react";

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div ref={sectionRef} className="bg-black-background py-16">
      <div className="container-cards mb-12 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <span className="text-primary uppercase text-sm font-medium tracking-wider">
            Our Proud Product
          </span>
          <h2 className="text-white text-3xl md:text-4xl font-bold mt-2 mb-4 leading-tight">
            VaultMind by AFNEXIS
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Your Data Stays Yours. Your AI Stays Private. The world's first 100% offline AI knowledge base.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="container-cards grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Offline Operation Card */}
        <motion.div
          variants={cardVariants}
          className="bg-gradient-to-br from-[#1A1A25] to-[#1A1A20] rounded-lg p-8 border border-gray-800"
        >
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <CloudOff className="h-6 w-6 text-primary mr-3" />
              <span className="text-primary uppercase text-sm font-medium tracking-wider">
                100% Offline Operation
              </span>
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-bold mt-2 leading-tight">
              No internet required after installation
            </h3>
            <p className="text-gray-400 mt-4 text-sm">
              Your data never leaves your infrastructure. Process sensitive documents with complete privacy and security, even in air-gapped environments.
            </p>
          </div>
          <Link
            href="https://vaultmind.afnexis.com/"
            className="inline-block text-primary border border-primary rounded-full px-6 py-2 text-sm font-medium hover:bg-primary-foreground hover:text-black transition-colors duration-300"
          >
            LEARN MORE
          </Link>
        </motion.div>

        {/* Lightning Fast Card */}
        <motion.div
          variants={cardVariants}
          className="bg-gradient-to-br from-[#1A1A25] to-[#1A1A20] rounded-lg p-8 border border-gray-800"
        >
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-primary mr-3" />
              <span className="text-primary uppercase text-sm font-medium tracking-wider">
                Lightning Fast
              </span>
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-bold mt-2 leading-tight">
              Sub-second responses without network latency
            </h3>
            <p className="text-gray-400 mt-4 text-sm">
              Local processing delivers instant answers from your knowledge base. No waiting for cloud responses or dealing with network delays.
            </p>
          </div>
          <div className="flex justify-between items-end">
            <Link
              href="https://vaultmind.afnexis.com/"
              className="inline-block text-primary border border-primary rounded-full px-6 py-2 text-sm font-medium hover:bg-primary-foreground hover:text-black transition-colors duration-300"
            >
              LEARN MORE
            </Link>
            <div className="relative h-16 w-24">
              <div className="absolute right-0 bottom-0">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-8 bg-primary-foreground rounded-full animate-pulse"></div>
                  <div className="w-2 h-6 bg-primary-foreground rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-10 bg-primary-foreground rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  <div className="w-2 h-4 bg-primary-foreground rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                </div>
                <div className="text-xs text-gray-400 mt-1 text-center">1sec</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enterprise Security Card - Full Width */}
        <motion.div
          variants={cardVariants}
          className="bg-gradient-to-br from-[#1A1A25] to-[#1A1A20] rounded-lg p-8 border border-gray-800 md:col-span-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <div className="bg-[#0D1117] rounded-lg overflow-hidden border border-gray-800 shadow-lg p-4 font-fira-code text-sm">
                <div className="flex items-center mb-4">
                  <ShieldCheck className="w-4 h-4 text-primary mr-2" />
                  <span className="text-gray-400 text-xs">
                    VaultMind Security Dashboard
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2 flex items-center justify-center">
                    <span className="text-[8px] text-white">✓</span>
                  </div>
                  <span className="text-gray-300 text-xs">GDPR Compliant</span>
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2 flex items-center justify-center">
                    <span className="text-[8px] text-white">✓</span>
                  </div>
                  <span className="text-gray-300 text-xs">HIPAA Ready</span>
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 rounded-full bg-green-500 mr-2 flex items-center justify-center">
                    <span className="text-[8px] text-white">✓</span>
                  </div>
                  <span className="text-gray-300 text-xs">SOC 2 Compatible</span>
                </div>
                <div className="bg-[#161B22] p-3 rounded my-3 text-[10px] text-gray-300 border-l-2 border-primary">
                  <div className="flex items-center justify-between mb-2">
                    <span>Data Encryption</span>
                    <span className="text-green-400">AES-256</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span>Network Access</span>
                    <span className="text-red-400">BLOCKED</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Data Location</span>
                    <span className="text-primary">YOUR SERVERS</span>
                  </div>
                </div>
                <div className="bg-[#0A0A0F] border border-primary text-primary text-xs p-2 rounded flex items-center">
                  <Lock className="w-3 h-3 mr-1" />
                  Complete Data Sovereignty
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <ShieldCheck className="h-6 w-6 text-primary mr-3" />
                <span className="text-primary uppercase text-sm font-medium tracking-wider">
                  Enterprise Security
                </span>
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mt-2 leading-tight">
                Built to meet SOC 2, GDPR and HIPAA requirements
              </h3>
              <p className="text-gray-400 mt-4 text-sm mb-6">
                Advanced encryption and complete data control ensure your sensitive documents remain secure. Deploy with confidence knowing your compliance requirements are met.
              </p>
              <Link
                href="https://vaultmind.afnexis.com/"
                className="inline-block text-primary border border-primary rounded-full px-6 py-2 text-sm font-medium hover:bg-primary-foreground hover:text-black transition-colors duration-300"
              >
                LEARN MORE
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Easy Deployment Card */}
        <motion.div
          variants={cardVariants}
          className="bg-gradient-to-br from-[#1A1A25] to-[#1A1A20] rounded-lg p-8 border border-gray-800"
        >
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <Server className="h-6 w-6 text-primary mr-3" />
              <span className="text-primary uppercase text-sm font-medium tracking-wider">
                Easy Deployment
              </span>
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-bold mt-2 leading-tight">
              Install on your existing servers in minutes
            </h3>
            <p className="text-gray-400 mt-4 text-sm">
              Simple management tools and straightforward setup process. Get your private AI knowledge base running without complex infrastructure changes.
            </p>
          </div>
          <Link
            href="https://vaultmind.afnexis.com/"
            className="inline-block text-primary border border-primary rounded-full px-6 py-2 text-sm font-medium hover:bg-primary-foreground hover:text-black transition-colors duration-300"
          >
            LEARN MORE
          </Link>
        </motion.div>

        {/* Complete Data Control Card */}
        <motion.div
          variants={cardVariants}
          className="bg-gradient-to-br from-[#1A1A25] to-[#1A1A20] rounded-lg p-8 border border-gray-800"
        >
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-primary mr-3" />
              <span className="text-primary uppercase text-sm font-medium tracking-wider">
                Data Control
              </span>
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-bold mt-2 leading-tight">
              Maintain full sovereignty over your sensitive documents
            </h3>
            <p className="text-gray-400 mt-4 text-sm">
              Unlike cloud AI solutions, VaultMind gives you complete control over your data and AI models. Fixed pricing with no unpredictable API fees.
            </p>
          </div>
          <Link
            href="https://vaultmind.afnexis.com/"
            className="inline-block text-primary border border-primary rounded-full px-6 py-2 text-sm font-medium hover:bg-primary-foreground hover:text-black transition-colors duration-300"
          >
            LEARN MORE
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}