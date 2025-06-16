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
      <div className="container-wrapper mx-auto ">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            className="md:col-span-1 flex flex-col items-center"
            variants={columnVariants}
          >
            <div className="text-[var(--headings-text)] text-2xl font-bold mb-4">
              <Link href="/" className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Afnexis Logo"
                  className="h-24 w-auto hover:scale-[1.1] transition-transform duration-500"
                />
              </Link>
            </div>
            <p className="text-[var(--body-text)] mb-4">
              Innovating Intelligence.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--body-text)] hover:bg-[rgba(194,122,255,0.1)] hover:text-[var(--primary-accent)] transition-all duration-300"
                aria-label="Facebook"
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
              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--body-text)] hover:bg-[rgba(194,122,255,0.1)] hover:text-[var(--primary-accent)] transition-all duration-300"
                aria-label="LinkedIn"
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
              {/* Twitter */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--body-text)] hover:bg-[rgba(194,122,255,0.1)] hover:text-[var(--primary-accent)] transition-all duration-300"
                aria-label="Twitter"
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
              {/* WhatsApp */}
              <a
                href="https://wa.me/16463797856"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-[var(--body-text)] hover:bg-[rgba(37,211,102,0.1)] hover:text-[#25D366] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div variants={columnVariants}>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/portfolio"
                  className="text-[var(--body-text)] hover:text-[var(--primary-accent)] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2" /> AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-[var(--body-text)] hover:text-[var(--primary-accent)] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2" /> Cloud Development
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-[var(--body-text)] hover:text-[var(--primary-accent)] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2" /> Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
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
                  href="/career"
                  className="text-[var(--body-text)] hover:text-[var(--primary-accent)] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2" /> Career
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
                  href="/portfolio"
                  className="text-[var(--body-text)] hover:text-[var(--primary-accent)] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3 h-3 mr-2" /> Portfolio
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
                +1 (646) 379-7856
              </li>
              <li className="text-[var(--body-text)] flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5 text-[var(--primary-accent)]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                </svg>
                <a 
                  href="https://wa.me/16463797856" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  +1 (646) 379-7856
                </a>
              </li>
              <li className="text-[var(--body-text)] flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-[var(--primary-accent)]" />
                <div>
                  <div className="font-medium">AFNEXIS LLC</div>
                  <div>117 S Lexington St, Suite 100</div>
                  <div>Harrisonville, MO 64701</div>
                  <div className="text-xs mt-1 opacity-75">EIN: 98-1861559</div>
                </div>
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
            © {new Date().getFullYear()} AFNEXIS LLC. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;