"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedButton({
  href,
  className = "",
  children,
  variant = "primary",
}) {
  const baseClass = variant === "primary" ? "btn-primary" : "btn-secondary";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <Link href={href} className={`${baseClass} ${className} rounded-[8px]`}>
        {children}
      </Link>
    </motion.div>
  );
}
