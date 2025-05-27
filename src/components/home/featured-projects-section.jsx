"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import projects from "@/data/projects.json";
import Link from "next/link";

const Tooltip = ({ content, children, show }) => {
  if (!show) return children;

  return (
    <div className="relative group">
      {children}
      <div className="absolute z-50 bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg max-w-xs w-max opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="max-h-32 overflow-y-auto text-left">{content}</div>
        <div className="absolute top-full left-4 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

const TagsDisplay = ({ tags }) => {
  const [showAllTags, setShowAllTags] = useState(false);
  const visibleTags = showAllTags ? tags : tags.slice(0, 3);
  const hiddenCount = tags.length - 3;

  return (
    <div className="min-h-[4rem] mb-4">
      <div className="flex flex-wrap gap-2">
        {visibleTags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="text-xs px-2 py-1 rounded-full bg-[#0d1117] text-primary-foreground whitespace-nowrap"
          >
            {tag}
          </span>
        ))}
        {!showAllTags && hiddenCount > 0 && (
          <button
            onClick={() => setShowAllTags(true)}
            className="text-xs px-2 py-1 rounded-full bg-[#0d1117] text-primary-foreground whitespace-nowrap hover:bg-[#1a1a1a] transition-colors"
          >
            +{hiddenCount} more
          </button>
        )}
        {showAllTags && tags.length > 3 && (
          <button
            onClick={() => setShowAllTags(false)}
            className="text-xs px-2 py-1 rounded-full bg-[#0d1117] text-primary-foreground whitespace-nowrap hover:bg-[#1a1a1a] transition-colors"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-foreground border-none rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(194,122,255,0.3)] h-[530px] flex flex-col ${className}`}
    >
      {children}
    </div>
  );
};

const FeaturedProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver({ ref: sectionRef });

  const isContentTruncated = (text) => {
    return text.length > 120;
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 relative overflow-hidden bg-card-container-gradient"
    >
      {/* Purplish gradient overlay */}
      {/* <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 pointer-events-none "> */}
      {/* Main rounded gradient blob */}
      {/* <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl transform translate-x-1/3 "></div>
        </div>
      </div> */}
      <div className="container-cards">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-headings font-['Poppins'] text-center mb-8">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <AnimatePresence>
            {projects
              .filter((project) => project.featured)
              .slice(0, showAll ? projects.length : 6)
              .map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: showAll ? 0.1 * (index % 6) : 0.1 * index,
                  }}
                >
                  <Card>
                    {/* Image Section - Fixed Height */}
                    <div className="relative h-48 w-full flex-shrink-0">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Title Section */}
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-headings font-['Poppins'] line-clamp-2 min-h-[3.5rem] leading-tight">
                          {project.title}
                        </h3>
                      </div>

                      {/* Description Section */}
                      <div className="flex-grow mb-4">
                        <div
                          onMouseEnter={() =>
                            setHoveredCard(
                              isContentTruncated(project.description)
                                ? index
                                : null
                            )
                          }
                          onMouseLeave={() => setHoveredCard(null)}
                          className="h-full"
                        >
                          <Tooltip
                            content={project.description}
                            show={hoveredCard === index}
                          >
                            <p className="text-text line-clamp-4 text-sm leading-relaxed ">
                              {project.description}
                            </p>
                          </Tooltip>
                        </div>
                      </div>

                      {/* Tags Section with Dynamic Display */}
                      <TagsDisplay tags={project.tags} />

                      {/* Button Section - Always at Bottom */}
                      <div className="mt-auto">
                        <Link href={project.link} target="_blank">
                          <Button
                            variant="ghost"
                            className="text-secondary-foreground hover:text-secondary-foreground/90 hover:bg-[#0d1117] p-0 flex items-center gap-1"
                          >
                            View Details <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-center"
        >
          {projects.length > 6 && (
            <Button
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground transition-all duration-300"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View All Projects"}
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
