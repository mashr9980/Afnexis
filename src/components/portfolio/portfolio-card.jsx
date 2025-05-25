"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Tooltip from "../ui/tooltip";

const TagsDisplay = ({ tags, maxVisible = 4 }) => {
  const [showAllTags, setShowAllTags] = useState(false);
  const visibleTags = showAllTags ? tags : tags.slice(0, maxVisible);
  const hiddenCount = tags.length - maxVisible;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {visibleTags.map((tag, index) => (
        <span
          key={index}
          className="text-xs px-2 py-1 rounded-full bg-background text-text"
        >
          {tag}
        </span>
      ))}
      {!showAllTags && hiddenCount > 0 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowAllTags(true);
          }}
          className="text-xs px-2 py-1 rounded-full bg-background text-text hover:bg-background/80 transition-colors"
        >
          +{hiddenCount} more
        </button>
      )}
      {showAllTags && tags.length > maxVisible && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setShowAllTags(false);
          }}
          className="text-xs px-2 py-1 rounded-full bg-background text-text hover:bg-background/80 transition-colors"
        >
          Show less
        </button>
      )}
    </div>
  );
};

export default function PortfolioCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const isContentTruncated = (text) => {
    return text.length > 120;
  };

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

        <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-3 line-clamp-2">
          {project.title}
        </h3>

        <div
          className="mb-4"
          onMouseEnter={() =>
            setShowTooltip(isContentTruncated(project.description))
          }
          onMouseLeave={() => setShowTooltip(false)}
        >
          <Tooltip content={project.description} show={showTooltip}>
            <p className="text-text line-clamp-3 ">{project.description}</p>
          </Tooltip>
        </div>

        <TagsDisplay tags={project.tags} />

        <div className="flex justify-between items-center">
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
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
