"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver({ ref: sectionRef });

  // Animation variants
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

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <Card className="bg-background border-none rounded-[0px] p-10 md:p-16 text-center">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-headings font-['Poppins'] mb-6"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-text text-lg mb-10"
        >
          Let's discuss how our technology solutions can help you achieve your
          business goals and stay ahead of the competition.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center  sm:flex-row justify-center gap-4"
        >
          <Link href={"/contact"}>
            <Button
              size="lg"
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-[#0d1117] font-medium rounded-xl px-8 py-6 text-lg flex items-center gap-2"
            >
              <Calendar className="h-5 w-5" />
              Book a Free Consultation
            </Button>
          </Link>
          <Link href={"/contact#contact-form"}>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground rounded-xl px-8 py-6 text-lg flex items-center gap-2 transition duration-300 "
            >
              <MessageSquare className="h-5 w-5" />
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </Card>
    </motion.div>
  );
}
