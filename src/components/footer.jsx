"use client";

import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { motion } from "framer-motion";

const Footer = () => {
  const footerRef = useRef(null);
  const isVisible = useIntersectionObserver({
    ref: footerRef,
    options: { threshold: 0.1 },
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const columnVariants = {
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

  const copyrightVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.5,
      },
    },
  };

  return (
    <footer ref={footerRef} className="bg-[var(--section-bg)] py-12">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="md:col-span-1" variants={columnVariants}>
            <div className="text-[var(--headings-text)] text-2xl font-bold mb-4">
              <span className="text-[var(--primary-accent)]">Afnexis</span>
            </div>
            <p className="text-[var(--body-text)] mb-4">
              Innovating Intelligence. Engineering the Future.
            </p>
            <div className="flex space-x-4">
              {/* Social icons would go here */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--body-text)] hover:bg-[rgba(0,255,195,0.1)] hover:text-[var(--primary-accent)] transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--body-text)] hover:bg-[rgba(0,255,195,0.1)] hover:text-[var(--primary-accent)] transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--body-text)] hover:bg-[rgba(0,255,195,0.1)] hover:text-[var(--primary-accent)] transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div variants={columnVariants}>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#services"
                  className="text-[var(--body-text)] hover:text-[var(--primary-accent)] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2" /> AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-[var(--body-text)] hover:text-[var(--primary-accent)] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2" /> Cloud Development
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-[var(--body-text)] hover:text-[var(--primary-accent)] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2" /> Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-[var(--body-text)] hover:text-[var(--primary-accent)] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2" /> Mobile Development
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={columnVariants}>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-[var(--body-text)] hover:text-[var(--primary-accent)] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2" /> About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[var(--body-text)] hover:text-[var(--primary-accent)] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2" /> Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--body-text)] hover:text-[var(--primary-accent)] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2" /> Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[var(--body-text)] hover:text-[var(--primary-accent)] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2" /> Blog
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={columnVariants}>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-[var(--body-text)] flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5 text-[var(--primary-accent)]" />{" "}
                info@afnexis.com
              </li>
              <li className="text-[var(--body-text)] flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 text-[var(--primary-accent)]" />{" "}
                +1 (555) 123-4567
              </li>
              <li className="text-[var(--body-text)] flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-[var(--primary-accent)]" />{" "}
                123 Tech Plaza, Suite 400
                <br />
                San Francisco, CA 94105
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-t border-[rgba(255,255,255,0.1)] mt-12 pt-8 text-center"
          variants={copyrightVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <p className="text-[var(--body-text)] text-sm">
            © {new Date().getFullYear()} Afnexis. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
