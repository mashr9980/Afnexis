"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";

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
    <div ref={sectionRef} className="bg-black-background py-16 px-4 md:px-8">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Productivity Card */}
        <motion.div
          variants={cardVariants}
          className="bg-gradient-to-br from-[#1A1A25] to-[#1A1A20] rounded-lg p-8 border border-gray-800"
        >
          <div className="mb-6">
            <span className="text-primary uppercase text-sm font-medium tracking-wider">
              Productivity
            </span>
            <h3 className="text-white text-2xl md:text-3xl font-bold mt-2 leading-tight">
              Helpful AI Intelligence facilitates productivity in unexpected
              ways
            </h3>
            <p className="text-gray-400 mt-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-block text-primary border border-primary rounded-full px-6 py-2 text-sm font-medium hover:bg-primary-foreground hover:text-black transition-colors duration-300"
          >
            LEARN MORE
          </Link>
        </motion.div>

        {/* Cross Devices Card */}
        <motion.div
          variants={cardVariants}
          className="bg-gradient-to-br from-[#1A1A25] to-[#1A1A20] rounded-lg p-8 border border-gray-800"
        >
          <div className="mb-6">
            <span className="text-primary uppercase text-sm font-medium tracking-wider">
              Cross Devices
            </span>
            <h3 className="text-white text-2xl md:text-3xl font-bold mt-2 leading-tight">
              Use it easily anywhere and anytime from your various types of
              devices
            </h3>
            <p className="text-gray-400 mt-4 text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="flex justify-between items-end">
            <a
              href="/portfolio"
              className="inline-block text-primary border border-primary rounded-full px-6 py-2 text-sm font-medium hover:bg-primary-foreground hover:text-black transition-colors duration-300"
            >
              LEARN MORE
            </a>
            <div className="relative h-32 w-32">
              <div className="absolute right-0 bottom-0 transform translate-x-4">
                <div className="relative w-16 h-28 bg-[#1E1E28] rounded-lg overflow-hidden border border-gray-700 shadow-lg">
                  <div className="h-3 bg-black"></div>
                  <div className="p-1">
                    <div className="h-2 w-10 bg-primary-foreground rounded-full mb-1"></div>
                    <div className="h-1 w-12 bg-gray-600 rounded-full mb-1"></div>
                    <div className="h-1 w-8 bg-gray-600 rounded-full mb-1"></div>
                    <div className="h-1 w-10 bg-gray-600 rounded-full mb-1"></div>
                    <div className="h-1 w-6 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 bottom-0 transform -translate-x-2 translate-y-4">
                <div className="relative w-16 h-28 bg-[#1E1E28] rounded-lg overflow-hidden border border-gray-700 shadow-lg">
                  <div className="h-3 bg-black"></div>
                  <div className="p-1">
                    <div className="h-2 w-10 bg-primary-foreground rounded-full mb-1"></div>
                    <div className="h-1 w-12 bg-gray-600 rounded-full mb-1"></div>
                    <div className="h-1 w-8 bg-gray-600 rounded-full mb-1"></div>
                    <div className="h-1 w-10 bg-gray-600 rounded-full mb-1"></div>
                    <div className="h-1 w-6 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security Card - Full Width */}
        <motion.div
          variants={cardVariants}
          className="bg-gradient-to-br from-[#1A1A25] to-[#1A1A20] rounded-lg p-8 border border-gray-800 md:col-span-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <div className="bg-[#0D1117] rounded-lg overflow-hidden border border-gray-800 shadow-lg p-4 font-fira-code text-sm">
                <div className="flex items-center mb-4">
                  <div className="w-4 h-4 rounded-full bg-gray-500 mr-2 flex items-center justify-center">
                    <span className="text-[8px] text-white">i</span>
                  </div>
                  <span className="text-gray-400 text-xs">
                    Found several vulnerabilities in the codebase...
                  </span>
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 rounded-full bg-primary-foreground mr-2 flex items-center justify-center">
                    <span className="text-[8px] text-black">✓</span>
                  </div>
                  <span className="text-gray-300 text-xs">Critical</span>
                </div>
                <div className="ml-6 mb-4">
                  <div className="flex items-center">
                    <span className="text-red-400">src/auth/</span>
                    <span className="text-blue-400">validate.js</span>
                    <span className="text-gray-400">:21:34</span>
                  </div>
                  <div className="bg-[#161B22] p-2 rounded my-2 text-[10px] text-gray-300 border-l-2 border-red-500">
                    <span className="text-blue-400">function</span>{" "}
                    <span className="text-yellow-400">validateInput</span>
                    <span className="text-gray-400">(input) {"{...}"}</span>
                  </div>
                  <div className="text-[10px] text-gray-400">
                    Unsanitized user input passed directly to SQL query
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2 flex items-center justify-center">
                    <span className="text-[8px] text-black">!</span>
                  </div>
                  <span className="text-gray-300 text-xs">Warning</span>
                </div>
                <div className="ml-6 mb-4">
                  <div className="flex items-center">
                    <span className="text-red-400">src/api/</span>
                    <span className="text-blue-400">endpoints.js</span>
                    <span className="text-gray-400">:45:12</span>
                  </div>
                  <div className="bg-[#161B22] p-2 rounded my-2 text-[10px] text-gray-300 border-l-2 border-yellow-500">
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-green-400">apiKey</span>
                    <span className="text-gray-400"> = </span>
                    <span className="text-orange-400">"sk_test_..."</span>
                  </div>
                </div>
                <div className="bg-[#0A0A0F] border border-primary text-primary text-xs p-2 rounded flex items-center">
                  <span className="mr-1">▶</span> Fix all issues automatically
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-primary uppercase text-sm font-medium tracking-wider">
                Advance Security
              </span>
              <h3 className="text-white text-2xl md:text-3xl font-bold mt-2 leading-tight">
                Enables you to find and fix vulnerabilities with ease and ship
                secure code quickly
              </h3>
              <p className="text-gray-400 mt-4 text-sm mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod.
              </p>
              <a
                href="/portfolio"
                className="inline-block text-primary border border-primary rounded-full px-6 py-2 text-sm font-medium hover:bg-primary-foreground hover:text-black transition-colors duration-300"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
