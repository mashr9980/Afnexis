"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCard({
  icon,
  title,
  description,
  linkText,
  linkHref,
  delay = 0,
}) {
  return (
    <motion.div
      className="bg-[var(--section-bg)] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[rgba(255,255,255,0.05)]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-start">
        <div className="mr-4 mt-1">
          <div className="w-12 h-12 rounded-full bg-[rgba(0,255,195,0.1)] flex items-center justify-center text-[var(--primary-accent)]">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-[var(--body-text)] mb-4">{description}</p>
          <Link
            href={linkHref}
            className="inline-flex items-center text-[var(--primary-accent)] hover:underline group"
          >
            {linkText}{" "}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
