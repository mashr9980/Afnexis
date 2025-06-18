"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const codeEditorVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <div
      ref={sectionRef}
      className="relative bg- text-white py-20 px-4 md:px-8 overflow-hidden"
    >
      {/* Background circles */}
      <div className="absolute left-0 top-0 w-[600px] h-[600px] opacity-10">
        <div className="absolute w-[600px] h-[600px] rounded-full border border-white"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full border border-white left-[100px] top-[100px]"></div>
        <div className="absolute w-[200px] h-[200px] rounded-full border border-white left-[200px] top-[200px]"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-primary font-fira-code text-sm md:text-base font-medium tracking-wider">
            VAULTMIND
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold max-w-2xl mb-16"
        >
          Keep your data private with the first 100% offline AI knowledge base
        </motion.h2>

        {/* Feature List */}
        <motion.div
          variants={itemVariants}
          className="mb-16 max-w-3xl mx-auto"
        >
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>100% offline operation on your own infrastructure</li>
            <li>Lightning-fast responses without network latency</li>
            <li>Enterprise-grade security and full data control</li>
          </ul>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-2">VaultMind</h3>
          <p className="text-gray-400 mb-6">
            VaultMind turns your sensitive documents into an intelligent knowledge
            base that never touches the cloud. Enjoy lightning-fast answers and
            complete control over your data with enterprise‑grade security.
          </p>
          <Link
            href="/vaultmind"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            LEARN MORE <ArrowRight className="ml-2 size-4" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
