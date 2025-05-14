"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade",
  delay = 0,
  duration = 0.5,
  once = true,
}) {
  const sectionRef = useRef(null);
  const isInView = useIntersectionObserver({ ref: sectionRef });

  // Define animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: animation === "slide-up" ? 30 : 0,
      x:
        animation === "slide-left" ? -30 : animation === "slide-right" ? 30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className={className}
      initial="hidden"
      animate={isInView || !once ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
