"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Layers, Lightbulb, Search, Star } from "lucide-react";
import CustomTabs from "@/components/custom-tabs";
import PortfolioCard from "@/components/portfolio/portfolio-card";
import CaseStudyCard from "@/components/portfolio/case-study-card";
import { Badge } from "@/components/ui/badge";
import AnimatedCounter from "@/components/animated-counter";
import CTASection from "@/components/home/cta-section";

//  PROJECTS DATA FROM JSON
import projectsData from "@/data/projects.json";
import caseStudies from "@/data/case-studies.json";

export default function PortfolioPage() {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const skillsRef = useRef(null);
  const statsRef = useRef(null);

  const heroVisible = useIntersectionObserver({ ref: heroRef });
  const projectsVisible = useIntersectionObserver({ ref: projectsRef });
  const caseStudiesVisible = useIntersectionObserver({ ref: caseStudiesRef });
  const skillsVisible = useIntersectionObserver({ ref: skillsRef });
  const statsVisible = useIntersectionObserver({ ref: statsRef });

  const [searchQuery, setSearchQuery] = useState("");

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // And then map the data to match your existing structure:
  const projects = projectsData.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    image: project.image || "/assets/med.jfif",
    category: project.category,
    tags: project.tags,
    featured: project.featured,
    link: project.link || "/assets/med.jfif",
  }));

  // Filter projects based on search query
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Create project grid for each category
  const createProjectGrid = (projectList) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectList.map((project) => (
        <motion.div key={project.id} variants={fadeIn}>
          <PortfolioCard project={project} />
        </motion.div>
      ))}
    </div>
  );

  // Extract unique categories from projects
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  // Define tabs with their content
  const projectTabs = [
    {
      value: "all",
      label: "All Projects",
      content: createProjectGrid(filteredProjects),
    },
    ...categories
      .filter((category) => category !== "All")
      .map((category) => ({
        value: category.toLowerCase(),
        label: category,
        content: createProjectGrid(
          filteredProjects.filter((project) => project.category === category)
        ),
      })),
  ];

  // Skills and technologies data
  const skills = [
    {
      category: "AI & Machine Learning",
      technologies: [
        "TensorFlow",
        "PyTorch",
        "Computer Vision",
        "Natural Language Processing",
        "Predictive Analytics",
        "Deep Learning",
      ],
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Kubernetes",
        "Docker",
        "Terraform",
        "CI/CD Pipelines",
      ],
      icon: <Globe className="h-6 w-6" />,
    },
    {
      category: "Web & Mobile Development",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "React Native",
        "Flutter",
        "Angular",
        "Vue.js",
      ],
      icon: <Layers className="h-6 w-6" />,
    },
    {
      category: "Data Engineering",
      technologies: [
        "Apache Kafka",
        "Hadoop",
        "Spark",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Data Warehousing",
      ],
      icon: <Star className="h-6 w-6" />,
    },
  ];

  // Show "No projects found" message if needed
  if (filteredProjects.length === 0) {
    projectTabs.forEach((tab) => {
      tab.content = (
        <div className="text-center py-12">
          <p className="text-text text-lg">
            No projects found matching your search. Please try different
            keywords.
          </p>
        </div>
      );
    });
  }

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated teal gradient orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-teal-gradient rounded-full blur-3xl opacity-30 animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-radial-teal rounded-full blur-2xl opacity-40 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-3/4 w-80 h-80 bg-mesh-gradient rounded-full blur-3xl opacity-25 animate-float"></div>
        
        {/* Floating teal particles */}
        <div className="absolute top-1/5 left-1/3 w-4 h-4 bg-teal-500 rounded-full animate-teal-pulse opacity-60"></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-teal-300 rounded-full animate-teal-pulse animation-delay-1000 opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-teal-400 rounded-full animate-teal-pulse animation-delay-2000 opacity-70"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-teal opacity-10"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-[url('/assets/portfolio-bg.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-cyan-500/10"></div>
          </div>

          <motion.div
            className="container mx-auto px-4 relative z-10 text-center"
            initial="hidden"
            animate={heroVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold text-headings font-['Poppins'] mb-6"
            >
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Portfolio</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-text max-w-3xl mx-auto mb-8"
            >
              Explore our innovative solutions and success stories across
              industries. From AI to cloud, mobile to enterprise, discover how
              we've helped businesses transform and grow.
            </motion.p>
            <motion.div
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105"
                onClick={() => {
                  const element = document.getElementById("featured-projects");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
                onClick={() => {
                  const element = document.getElementById("case-studies");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Case Studies
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Projects Section */}
        <section
          id="featured-projects"
          ref={projectsRef}
          className="py-20 overflow-hidden bg-mesh-gradient"
        >
          <div className="container-cards">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              animate={projectsVisible ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-headings font-['Poppins'] mb-6">
                Projects
              </h2>
              <p className="text-text max-w-3xl mx-auto mb-8">
                Browse our portfolio of innovative solutions across various
                technologies and industries.
              </p>

              <div className="relative max-w-md mx-auto mb-12">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="w-full pl-10 py-3 bg-foreground/50 backdrop-blur-sm card-border border-teal-500/20 rounded-lg text-text focus:ring-2 focus:ring-teal-400 focus:border-teal-400 focus:outline-none hover:border-teal-500/40 transition-all duration-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={projectsVisible ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <CustomTabs tabs={projectTabs} defaultValue="all" />
            </motion.div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section
          id="case-studies"
          ref={caseStudiesRef}
          className="py-20 bg-background relative"
        >
          <div className="absolute inset-0 bg-dots-teal opacity-20"></div>
          <div className="container-cards relative z-10">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              animate={caseStudiesVisible ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-headings font-['Poppins'] mb-6">
                Case Studies
              </h2>
              <p className="text-text max-w-3xl mx-auto">
                Dive deeper into our most impactful projects and discover the
                challenges, solutions, and measurable results we delivered.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-12"
              initial="hidden"
              animate={caseStudiesVisible ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {caseStudies.map((study, index) => (
                <motion.div key={study.id} variants={fadeIn} custom={index * 0.2}>
                  <CaseStudyCard study={study} isEven={index % 2 === 0} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Skills & Technologies Section */}
        <section ref={skillsRef} className="py-20 container-cards mx-auto relative">
          <div className="absolute inset-0 bg-radial-teal opacity-20"></div>
          <motion.div
            className="text-center mb-16 relative z-10"
            initial="hidden"
            animate={skillsVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-headings font-['Poppins'] mb-6">
              Our Skills & Technologies
            </h2>
            <p className="text-text max-w-3xl mx-auto">
              We leverage cutting-edge technologies and methodologies to deliver
              exceptional solutions for our clients.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
            initial="hidden"
            animate={skillsVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={fadeIn} custom={index * 0.2}>
                <Card className="bg-foreground/80 backdrop-blur-sm card-border rounded-xl p-6 h-full hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="flex items-center mb-4 relative z-10">
                    <div className="p-3 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg mr-4 text-teal-400 group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-headings font-['Poppins'] group-hover:text-teal-300 transition-colors duration-300">
                      {skill.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {skill.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-background/50 hover:bg-teal-500/20 text-text hover:text-teal-300 px-3 py-1 rounded-full text-sm transition-all duration-300 border border-teal-500/20 hover:border-teal-400/40"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-20 bg-teal-gradient">
          <div className="container-cards mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
              initial="hidden"
              animate={statsVisible ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeIn}
                className="p-8 bg-foreground/80 backdrop-blur-sm card-border rounded-xl hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <AnimatedCounter
                  end={50}
                  suffix="+"
                  isVisible={statsVisible}
                  delay={0}
                  className="text-5xl font-bold text-teal-400 font-['Poppins'] mb-2 flex items-center justify-center relative z-10"
                />
                <div className="text-text font-medium relative z-10">Team Members</div>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="p-8 bg-foreground/80 backdrop-blur-sm card-border rounded-xl hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <AnimatedCounter
                  end={100}
                  suffix="+"
                  isVisible={statsVisible}
                  delay={200}
                  className="text-5xl font-bold text-teal-400 font-['Poppins'] mb-2 flex items-center justify-center relative z-10"
                />
                <div className="text-text font-medium relative z-10">Projects Delivered</div>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="p-8 bg-foreground/80 backdrop-blur-sm card-border rounded-xl hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <AnimatedCounter
                  end={5}
                  suffix="+"
                  isVisible={statsVisible}
                  delay={400}
                  className="text-5xl font-bold text-teal-400 font-['Poppins'] mb-2 flex items-center justify-center relative z-10"
                />
                <div className="text-text font-medium relative z-10">Years in Business</div>
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="p-8 bg-foreground/80 backdrop-blur-sm card-border rounded-xl hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <AnimatedCounter
                  end={12}
                  suffix=""
                  isVisible={statsVisible}
                  delay={600}
                  className="text-5xl font-bold text-teal-400 font-['Poppins'] mb-2 flex items-center justify-center relative z-10"
                />
                <div className="text-text font-medium relative z-10">Countries Served</div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="bg-mesh-gradient">
          <CTASection />
        </div>
      </div>
    </main>
  );
}