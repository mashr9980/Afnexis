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
    <Card className="bg-foreground border-none rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(194,122,255,0.3)]">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-headings font-['Poppins']">
            {job.title}
          </h3>
          <span className="bg-[rgba(194,122,255,0.1)] text-primary-foreground text-xs px-3 py-1 rounded-full">
            {job.type}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 mb-4 text-sm text-text">
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-2 text-primary-foreground" />
            {job.department}
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-primary-foreground" />
            {job.location}
          </div>
        </div>

        <p className="text-text mb-4">{job.description}</p>

        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="mb-4">
            <h4 className="font-bold text-headings mb-2">Requirements:</h4>
            <ul className="list-disc pl-5 text-text">
              {job.requirements.map((req, index) => (
                <li key={index} className="mb-1">
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="flex justify-between items-center">
          <Button
            variant="ghost"
            className="text-primary-foreground hover:text-primary-foreground hover:bg-[rgba(194,122,255,0.1)] p-2"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show Less" : "Show More"}
          </Button>
          <Link href={"/contact"}>
            <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-[#0d1117]">
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
