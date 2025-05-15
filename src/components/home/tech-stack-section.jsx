"use client";

import { useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Database,
  Code,
  Cpu,
  Box,
  Workflow,
  BrainCircuit,
  Layers,
  Globe,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  {
    name: "AWS",
    category: "Cloud",
    icon: <Cloud className="h-10 w-10 text-[#FF9900]" />,
    description: "Scalable cloud infrastructure services",
  },
  {
    name: "Azure",
    category: "Cloud",
    icon: <Cloud className="h-10 w-10 text-[#0089D6]" />,
    description: "Microsoft's cloud computing platform",
  },
  {
    name: "React",
    category: "Frontend",
    icon: <Code className="h-10 w-10 text-[#61DAFB]" />,
    description: "UI library for building user interfaces",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <Server className="h-10 w-10 text-[#339933]" />,
    description: "JavaScript runtime for server-side applications",
  },
  {
    name: "TensorFlow",
    category: "AI",
    icon: <BrainCircuit className="h-10 w-10 text-[#FF6F00]" />,
    description: "Open-source machine learning framework",
  },
  {
    name: "PyTorch",
    category: "AI",
    icon: <Cpu className="h-10 w-10 text-[#EE4C2C]" />,
    description: "Deep learning platform for research and production",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: <Database className="h-10 w-10 text-[#47A248]" />,
    description: "NoSQL document database for modern applications",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: <Database className="h-10 w-10 text-[#336791]" />,
    description: "Advanced open-source relational database",
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: <Box className="h-10 w-10 text-[#2496ED]" />,
    description: "Platform for developing and deploying applications",
  },
  {
    name: "Kubernetes",
    category: "DevOps",
    icon: <Workflow className="h-10 w-10 text-[#326CE5]" />,
    description: "Container orchestration platform",
  },
  {
    name: "GraphQL",
    category: "API",
    icon: <Layers className="h-10 w-10 text-[#E535AB]" />,
    description: "API query language and runtime",
  },
  {
    name: "Cloudflare",
    category: "Security",
    icon: <ShieldCheck className="h-10 w-10 text-[#F38020]" />,
    description: "Web infrastructure and security services",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: <Globe className="h-10 w-10 text-white" />,
    description: "React framework for production-grade applications",
  },
  {
    name: "Redis",
    category: "Database",
    icon: <Database className="h-10 w-10 text-[#DC382D]" />,
    description: "In-memory data structure store",
  },
  {
    name: "Terraform",
    category: "DevOps",
    icon: <Box className="h-10 w-10 text-[#7B42BC]" />,
    description: "Infrastructure as code software tool",
  },
];

const categories = [
  "All",
  "Cloud",
  "Frontend",
  "Backend",
  "AI",
  "Database",
  "DevOps",
  "API",
  "Security",
];

export default function TechStackSection() {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver({ ref: sectionRef });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredTech, setHoveredTech] = useState(null);

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-20 container-wrapper">
      <div
        className={`transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-headings font-['Poppins'] mb-4">
            Technology Stack
          </h2>
          <p className="max-w-2xl mx-auto text-text text-lg mb-8">
            We leverage cutting-edge technologies to deliver powerful, scalable
            solutions
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    activeCategory === category
                      ? "bg-primary-foreground text-background"
                      : "bg-foreground text-text hover:text-primary-foreground"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {filteredTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-foreground rounded-xl p-6 flex flex-col items-center text-center
                transition-all duration-300 transform 
                ${
                  hoveredTech === index
                    ? "scale-110 shadow-[0_0_25px_rgba(0,255,195,0.3)]"
                    : "hover:translate-y-[-5px] hover:shadow-[0_0_15px_rgba(0,255,195,0.15)]"
                }
              `}
              onMouseEnter={() => setHoveredTech(index)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div
                className={`mb-4 transition-transform duration-500 ${
                  hoveredTech === index ? "scale-110 animate-pulse" : ""
                }`}
              >
                {tech.icon}
              </div>
              <h3 className="text-lg font-medium text-headings mb-1">
                {tech.name}
              </h3>
              <p className="text-sm text-primary-foreground mb-2">
                {tech.category}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
