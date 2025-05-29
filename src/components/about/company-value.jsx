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
      <Card className="bg-foreground/80 backdrop-blur-sm card-border rounded-xl p-6 h-full transition-all duration-500 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:translate-y-[-5px] hover:scale-105 group relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Teal glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        
        <div className="flex flex-col items-center text-center relative z-10">
          <div className="mb-4 p-3 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 border border-teal-500/20 group-hover:border-teal-400/40">
            <div className="group-hover:animate-teal-pulse">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-3 group-hover:text-teal-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-text group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">{description}</p>
          
          {/* Decorative elements on hover */}
          <div className="absolute top-2 right-2 w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-teal-pulse transition-opacity duration-500"></div>
          <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-teal-glow animation-delay-500 transition-opacity duration-500"></div>
        </div>
      </Card>
    </motion.div>
  );
}