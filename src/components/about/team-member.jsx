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
        className="bg-foreground border-none rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,195,0.2)]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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
            className={`absolute inset-0 bg-gradient-to-t from-[#161b22] to-transparent opacity-70 transition-opacity duration-300 ${
              isHovered ? "opacity-90" : ""
            }`}
          ></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-1">
            {name}
          </h3>
          <p className="text-primary-foreground text-sm mb-4">{position}</p>
          <p className="text-text text-sm mb-4">{bio}</p>

          <div className="flex space-x-3">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-text hover:bg-primary-foreground hover:text-[#0d1117] transition-all duration-300"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-text hover:bg-primary-foreground hover:text-[#0d1117] transition-all duration-300"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-text hover:bg-primary-foreground hover:text-[#0d1117] transition-all duration-300"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
