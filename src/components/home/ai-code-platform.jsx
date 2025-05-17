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
            CODE PLATFORM
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-5xl font-bold max-w-2xl mb-16"
        >
          Extraordinary AI intelligence that can analyze errors and provide
          suggestion codes
        </motion.h2>

        {/* Code Editor */}
        <motion.div
          variants={codeEditorVariants}
          className="bg-[#0D1117] rounded-lg overflow-hidden border border-gray-800 shadow-2xl mb-16 max-w-4xl mx-auto"
        >
          {/* Editor Header */}
          <div className="bg-[#161B22] p-2 flex items-center">
            <div className="flex space-x-2 ml-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex space-x-4 ml-8 text-xs text-gray-400">
              <span className="opacity-50">module.py</span>
              <span className="opacity-50">addresses.js</span>
              <span className="opacity-50">sentiments.ts</span>
            </div>
          </div>

          {/* Code Content */}
          <div className="p-6 font-fira-code text-sm overflow-hidden">
            <div className="text-gray-400">import datetime</div>
            <div className="mt-4">
              <span className="text-[#FF79C6]">def</span>{" "}
              <span className="text-primary">parse_expenses</span>
              <span className="text-[#F8F8F2]">(</span>
              <span className="text-[#FFB86C]">expenses_string</span>
              <span className="text-[#F8F8F2]">):</span>
            </div>
            <div className="ml-4 text-gray-300">
              <div className="mt-2">
                """Parse the list of expenses and return the list of triples
                (date, amount, currency)."""
              </div>
              <div className="mt-2">expenses = []</div>
              <div className="mt-2">
                for line in expenses_string.strip().split('\n'):
              </div>
              <div className="ml-4 mt-1">
                date, value, currency = line.split(' ')
              </div>
              <div className="ml-4 mt-1">
                expenses.append((date, float(value), currency))
              </div>
              <div className="mt-2">return expenses</div>
            </div>

            <div className="mt-6">
              <span className="text-gray-400">expenses_data = """</span>
              <div className="ml-4 text-gray-300">
                <div>2023-01-01 24.51 USD</div>
                <div>2023-01-02 34.18 EUR</div>
                <div>2023-01-02 -15.72 USD</div>
              </div>
              <span className="text-gray-400">"""</span>
            </div>

            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-[#1E2430] p-4 rounded-lg border border-gray-700 w-[280px]">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 rounded-full bg-primary-foreground mr-2"></div>
                <span className="text-xs text-gray-300">Issue</span>
              </div>
              <div className="text-xs text-gray-400 mb-4">
                The code assumes that the datetime module is imported. The test
                cases will fail because the date format is not properly handled.
              </div>
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 rounded-full bg-primary-foreground mr-2"></div>
                <span className="text-xs text-gray-300">
                  Analysis and suggestions
                </span>
              </div>
              <div className="bg-[#0A0A0F] border border-primary text-primary text-xs p-2 rounded">
                Use datetime.strptime() to parse the date strings
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-2">Coding Tools</h3>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore mollis nunc sed id semper.
          </p>
          <Link
            href="portfolio"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            LEARN MORE <ArrowRight className="ml-2 size-4" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
