"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function CompanyValue({ icon, title, description }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      }}
    >
      <Card className="bg-foreground border-none rounded-xl p-6 h-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,195,0.15)] hover:translate-y-[-5px]">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 bg-[rgba(0,255,195,0.1)] rounded-full">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-3">
            {title}
          </h3>
          <p className="text-text">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
