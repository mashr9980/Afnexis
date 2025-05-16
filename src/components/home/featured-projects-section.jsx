"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "AI-Powered Healthcare Platform",
    description:
      "Developed a machine learning solution that improved diagnostic accuracy by 35% for a leading healthcare provider.",
    image: "/assets/med.jfif",
    tags: ["AI", "Healthcare", "Machine Learning"],
  },
  {
    title: "Cloud Migration for Financial Services",
    description:
      "Migrated legacy systems to AWS cloud, reducing operational costs by 40% and improving system reliability.",
    image: "/assets/med.jfif",
    tags: ["Cloud", "AWS", "Finance"],
  },
  {
    title: "E-commerce Mobile Application",
    description:
      "Built a cross-platform mobile app that increased customer engagement by 60% and boosted sales by 25%.",
    image: "/assets/med.jfif",
    tags: ["Mobile", "React Native", "E-commerce"],
  },
];

export default function FeaturedProjectsSection() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver({ ref: sectionRef });

  return (
    <section ref={sectionRef} className="py-20 container-wrapper">
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-headings font-['Poppins'] mb-4">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-text text-lg">
            Explore our successful implementations and the value we've delivered
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`bg-foreground border-none rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,255,195,0.2)] delay-${
                index * 150
              }`}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
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
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
