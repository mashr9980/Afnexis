"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
export default function PortfolioCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="bg-foreground border-none rounded-xl overflow-hidden h-full transition-all duration-500 hover:shadow-[0_0_25px_rgba(194,122,255,0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[220px] overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-primary-foreground text-background text-xs font-bold px-3 py-1 rounded-full">
            Featured
          </div>
        )}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-foreground to-transparent opacity-70 transition-opacity duration-300 ${
            isHovered ? "opacity-90" : ""
          }`}
        ></div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-3">
          <Badge className="bg-background text-primary-foreground hover:bg-background/80">
            {project.category}
          </Badge>
        </div>
        <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-3">
          {project.title}
        </h3>
        <p className="text-text mb-4 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-background text-text"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Link href={project.link}>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:text-primary-foreground hover:bg-background p-0 flex items-center gap-1"
            >
              View Details <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
