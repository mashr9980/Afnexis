"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import projects from "@/data/projects.json";

const Card = ({ children, className }) => {
  return (
    <div
      className={`bg-foreground border-none rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(194,122,255,0.3)] ${className}`}
    >
      {children}
    </div>
  );
};

const FeaturedProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);

  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver({ ref: sectionRef });

  return (
    <section ref={sectionRef} className="py-12">
      <div className="w-[95%] mx-auto">
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
                  <Card
                    className={`bg-foreground border-none rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(194,122,255,0.3)]`}
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-3">
                        {project.title}
                      </h3>
                      <p className="text-text mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs px-2 py-1 rounded-full bg-[#0d1117] text-primary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        className="text-secondary-foreground hover:text-secondary-foreground/90 hover:bg-[#0d1117] p-0 flex items-center gap-1"
                      >
                        View Details <ArrowRight className="h-4 w-4" />
                      </Button>
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
