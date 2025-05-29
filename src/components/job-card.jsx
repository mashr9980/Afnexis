"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function JobCard({ job }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="bg-foreground/80 backdrop-blur-sm card-border rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:scale-105 group relative">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Teal glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-headings font-['Poppins'] group-hover:text-teal-300 transition-colors duration-300">
            {job.title}
          </h3>
          <span className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 text-xs px-3 py-1 rounded-full border border-teal-500/30 font-medium">
            {job.type}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 mb-4 text-sm text-text">
          <div className="flex items-center group/item hover:text-teal-300 transition-colors duration-300">
            <Briefcase className="h-4 w-4 mr-2 text-teal-400 group-hover/item:scale-110 transition-transform duration-300" />
            {job.department}
          </div>
          <div className="flex items-center group/item hover:text-teal-300 transition-colors duration-300">
            <MapPin className="h-4 w-4 mr-2 text-teal-400 group-hover/item:scale-110 transition-transform duration-300" />
            {job.location}
          </div>
        </div>

        <p className="text-text mb-4 group-hover:text-gray-300 transition-colors duration-300">{job.description}</p>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="mb-4 p-4 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-lg border border-teal-500/20">
            <h4 className="font-bold text-headings mb-2 text-teal-300">Requirements:</h4>
            <ul className="list-disc pl-5 text-text space-y-1">
              {job.requirements.map((req, index) => (
                <li key={index} className="leading-relaxed">
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            className="text-teal-400 hover:text-teal-300 hover:bg-teal-500/10 p-2 transition-all duration-300 hover:scale-105"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </Button>
          <Link href={"/contact"}>
            <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105 group/btn">
              Apply Now{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-teal-pulse transition-opacity duration-500"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-cyan-300 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-teal-glow animation-delay-500 transition-opacity duration-500"></div>
      </div>
    </Card>
  );
}