"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

export default function TeamMember({ name, position, bio, image }) {
  const [isHovered, setIsHovered] = useState(false);

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
      <Card
        className="bg-foreground/80 backdrop-blur-sm card-border rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] hover:scale-105 group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Teal glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
        
        <div className="relative h-[300px] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-[#161b22] via-[#161b22]/50 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-90" : "opacity-70"
            }`}
          ></div>
          
          {/* Floating particles on hover */}
          {isHovered && (
            <>
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal-400 rounded-full animate-teal-pulse"></div>
              <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-teal-glow animation-delay-500"></div>
              <div className="absolute bottom-1/4 left-2/3 w-1.5 h-1.5 bg-teal-300 rounded-full animate-teal-pulse animation-delay-1000"></div>
            </>
          )}
        </div>
        
        <div className="p-6 relative z-10">
          <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-1 group-hover:text-teal-300 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-teal-400 text-sm mb-4 font-medium">{position}</p>
          <p className="text-text text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">{bio}</p>

          <div className="flex space-x-3">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center text-text hover:from-teal-500/40 hover:to-cyan-500/40 hover:text-teal-300 transition-all duration-300 border border-teal-500/20 hover:border-teal-400/40 hover:scale-110"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center text-text hover:from-teal-500/40 hover:to-cyan-500/40 hover:text-teal-300 transition-all duration-300 border border-teal-500/20 hover:border-teal-400/40 hover:scale-110"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center text-text hover:from-teal-500/40 hover:to-cyan-500/40 hover:text-teal-300 transition-all duration-300 border border-teal-500/20 hover:border-teal-400/40 hover:scale-110"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}