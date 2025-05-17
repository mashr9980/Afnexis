"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Layers, Lightbulb, Rocket, Search, Star } from "lucide-react";
import CustomTabs from "@/components/custom-tabs";
import PortfolioCard from "@/components/portfolio/portfolio-card";
import CaseStudyCard from "@/components/portfolio/case-study-card";
import { Badge } from "@/components/ui/badge";
import AnimatedCounter from "@/components/animated-counter";
import CTASection from "@/components/home/cta-section";

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

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: "AI-Powered Healthcare Platform",
      description:
        "A machine learning solution that improved diagnostic accuracy by 35% for a leading healthcare provider.",
      image: "/assets/med.jfif",
      category: "AI",
      tags: ["Machine Learning", "Healthcare", "Python", "TensorFlow"],
      featured: true,
      link: "/assets/med.jfif",
    },
    {
      id: 2,
      title: "Cloud Migration for Financial Services",
      description:
        "Migrated legacy systems to AWS cloud, reducing operational costs by 40% and improving system reliability.",
      image: "/assets/med.jfif",
      category: "Cloud",
      tags: ["AWS", "DevOps", "Terraform", "Microservices"],
      featured: true,
      link: "/assets/med.jfif",
    },
    {
      id: 3,
      title: "E-commerce Mobile Application",
      description:
        "Built a cross-platform mobile app that increased customer engagement by 60% and boosted sales by 25%.",
      image: "/assets/med.jfif",
      category: "Mobile",
      tags: ["React Native", "E-commerce", "UI/UX", "Node.js"],
      featured: true,
      link: "/assets/med.jfif",
    },
    {
      id: 4,
      title: "Real-time Analytics Dashboard",
      description:
        "Developed a real-time data visualization platform that processes over 1 million events per minute.",
      image: "/assets/med.jfif",
      category: "Data",
      tags: ["Big Data", "React", "D3.js", "Kafka"],
      featured: false,
      link: "/assets/med.jfif",
    },
    {
      id: 5,
      title: "Smart City IoT Network",
      description:
        "Designed and implemented an IoT network for urban infrastructure monitoring and optimization.",
      image: "/assets/med.jfif",
      category: "IoT",
      tags: ["IoT", "Embedded Systems", "Cloud", "Data Analysis"],
      featured: false,
      link: "/assets/med.jfif",
    },
    {
      id: 6,
      title: "Blockchain Supply Chain Solution",
      description:
        "Created a blockchain-based platform for supply chain transparency and product authenticity verification.",
      image: "/assets/med.jfif",
      category: "Blockchain",
      tags: ["Blockchain", "Ethereum", "Smart Contracts", "Web3"],
      featured: false,
      link: "/assets/med.jfif",
    },
    {
      id: 7,
      title: "Enterprise Resource Planning System",
      description:
        "Custom ERP solution that streamlined operations and increased productivity by 45% for a manufacturing client.",
      image: "/assets/med.jfif",
      category: "Enterprise",
      tags: ["ERP", "Java", "PostgreSQL", "Microservices"],
      featured: false,
      link: "/assets/med.jfif",
    },
    {
      id: 8,
      title: "AR Product Visualization App",
      description:
        "Augmented reality application allowing customers to visualize products in their space before purchasing.",
      image: "/assets/med.jfif",
      category: "AR/VR",
      tags: ["AR", "Unity", "Mobile", "3D Modeling"],
      featured: false,
      link: "/assets/med.jfif",
    },
  ];

  // Case studies data
  const caseStudies = [
    {
      id: 1,
      title: "Transforming Healthcare with AI",
      subtitle: "How we improved diagnostic accuracy by 35%",
      description:
        "This case study explores how we developed and implemented a machine learning solution for a leading healthcare provider, resulting in significantly improved diagnostic accuracy and patient outcomes.",
      image: "/assets/med.jfif",
      results: [
        "35% improvement in diagnostic accuracy",
        "28% reduction in unnecessary tests",
        "22% decrease in patient wait times",
        "$4.2M annual cost savings",
      ],
      link: "/portfolio/case-studies/healthcare-ai",
    },
    {
      id: 2,
      title: "Financial Services Cloud Transformation",
      subtitle: "Modernizing legacy infrastructure for a digital future",
      description:
        "Learn how we helped a major financial institution migrate from outdated on-premises systems to a secure, scalable cloud infrastructure, enabling innovation while reducing operational costs.",
      image: "/assets/med.jfif",
      results: [
        "40% reduction in operational costs",
        "99.99% system uptime achieved",
        "65% faster deployment of new features",
        "Enhanced security and compliance posture",
      ],
      link: "/portfolio/case-studies/finance-cloud",
    },
    {
      id: 3,
      title: "E-commerce Revolution with Mobile",
      subtitle:
        "Driving engagement and sales through innovative mobile experiences",
      description:
        "Discover how our cross-platform mobile application transformed the customer experience for a retail client, leading to dramatic increases in engagement, conversion rates, and overall sales.",
      image: "/assets/med.jfif",
      results: [
        "60% increase in customer engagement",
        "25% boost in overall sales",
        "42% higher average order value",
        "4.8/5 average app store rating",
      ],
      link: "/portfolio/case-studies/ecommerce-mobile",
    },
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

  // Define tabs with their content
  const projectTabs = [
    {
      value: "all",
      label: "All Projects",
      content: createProjectGrid(filteredProjects),
    },
    {
      value: "ai",
      label: "AI",
      content: createProjectGrid(
        filteredProjects.filter((project) => project.category === "AI")
      ),
    },
    {
      value: "cloud",
      label: "Cloud",
      content: createProjectGrid(
        filteredProjects.filter((project) => project.category === "Cloud")
      ),
    },
    {
      value: "mobile",
      label: "Mobile",
      content: createProjectGrid(
        filteredProjects.filter((project) => project.category === "Mobile")
      ),
    },
    {
      value: "data",
      label: "Data",
      content: createProjectGrid(
        filteredProjects.filter((project) => project.category === "Data")
      ),
    },
    {
      value: "enterprise",
      label: "Enterprise",
      content: createProjectGrid(
        filteredProjects.filter((project) => project.category === "Enterprise")
      ),
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
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden"
      >
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-[url('/assets/portfolio-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
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
            Our <span className="text-primary-foreground">Portfolio</span>
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
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-background font-medium rounded-xl px-8 py-6 text-lg"
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
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground rounded-xl px-8 py-6 text-lg transition-all duration-300"
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
        className="py-20 container mx-auto px-4"
      >
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={projectsVisible ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-headings font-['Poppins'] mb-6">
            Featured Projects
          </h2>
          <p className="text-text max-w-3xl mx-auto mb-8">
            Browse our portfolio of innovative solutions across various
            technologies and industries.
          </p>

          <div className="relative max-w-md mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text" />
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full pl-10 py-3 bg-foreground border-none rounded-lg text-text focus:ring-primary-foreground focus:outline-none"
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
      </section>

      {/* Case Studies Section */}
      <section
        id="case-studies"
        ref={caseStudiesRef}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
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
      <section ref={skillsRef} className="py-20 container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate={skillsVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={fadeIn} custom={index * 0.2}>
              <Card className="bg-foreground border-none rounded-xl p-6 h-full hover:shadow-[0_0_20px_rgba(0,255,195,0.15)] transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-background rounded-lg mr-4 text-primary-foreground">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold text-headings font-['Poppins']">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      className="bg-background hover:bg-background/80 text-text px-3 py-1 rounded-full text-sm"
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
      <section ref={statsRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            animate={statsVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="p-8 bg-foreground rounded-xl hover:shadow-[0_0_20px_rgba(0,255,195,0.15)] transition-all duration-300"
            >
              <AnimatedCounter
                end={50}
                suffix="+"
                isVisible={statsVisible}
                delay={0}
                className="text-5xl font-bold text-primary-foreground font-['Poppins'] mb-2 flex items-center justify-center"
              />
              <div className="text-text font-medium">Team Members</div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="p-8 bg-foreground rounded-xl hover:shadow-[0_0_20px_rgba(0,255,195,0.15)] transition-all duration-300"
            >
              <AnimatedCounter
                end={100}
                suffix="+"
                isVisible={statsVisible}
                delay={200}
                className="text-5xl font-bold text-primary-foreground font-['Poppins'] mb-2 flex items-center justify-center"
              />
              <div className="text-text font-medium">Projects Delivered</div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="p-8 bg-foreground rounded-xl hover:shadow-[0_0_20px_rgba(0,255,195,0.15)] transition-all duration-300"
            >
              <AnimatedCounter
                end={5}
                suffix="+"
                isVisible={statsVisible}
                delay={400}
                className="text-5xl font-bold text-primary-foreground font-['Poppins'] mb-2 flex items-center justify-center"
              />
              <div className="text-text font-medium">Years in Business</div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="p-8 bg-foreground rounded-xl hover:shadow-[0_0_20px_rgba(0,255,195,0.15)] transition-all duration-300"
            >
              <AnimatedCounter
                end={12}
                suffix=""
                isVisible={statsVisible}
                delay={600}
                className="text-5xl font-bold text-primary-foreground font-['Poppins'] mb-2 flex items-center justify-center"
              />
              <div className="text-text font-medium">Countries Served</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
