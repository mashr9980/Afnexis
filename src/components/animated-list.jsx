"use client";

import React from "react";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AnimatedList({
  children,
  className = "",
  staggerDelay = 0.1,
  duration = 0.5,
  once = true,
}) {
  const listRef = useRef < HTMLDivElement > null;
  const isInView = useIntersectionObserver({ ref: listRef });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration },
    },
  };

  return (
    <motion.div
      ref={listRef}
      className={className}
      initial="hidden"
      animate={isInView || !once ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
