"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Briefcase,
  Coffee,
  GraduationCap,
  HeartHandshake,
  Laptop,
  MessageSquare,
  Rocket,
  Search,
  Users,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Footer from "@/components/footer";
import JobCard from "@/components/job-card";
import BenefitCard from "@/components/benefit-card";

import { Input } from "@/components/ui/input";
import CTASection from "@/components/home/cta-section";
import FAQ from "@/components/faq";
import CustomTabs from "@/components/custom-tabs";

export default function CareersPage() {
  const heroRef = useRef(null);
  const cultureRef = useRef(null);
  const benefitsRef = useRef(null);
  const openingsRef = useRef(null);
  const processRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);

  const heroVisible = useIntersectionObserver({ ref: heroRef });
  const cultureVisible = useIntersectionObserver({ ref: cultureRef });
  const benefitsVisible = useIntersectionObserver({ ref: benefitsRef });
  const openingsVisible = useIntersectionObserver({ ref: openingsRef });
  const processVisible = useIntersectionObserver({ ref: processRef });
  const testimonialsVisible = useIntersectionObserver({ ref: testimonialsRef });
  const faqVisible = useIntersectionObserver({ ref: faqRef });

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

  // Job listings data
  const jobs = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-time",
      description:
        "Design and implement machine learning models and AI solutions for our enterprise clients. Work with cutting-edge technologies to solve complex business problems.",
      requirements: [
        "5+ years of experience in machine learning and AI development",
        "Proficiency in Python, TensorFlow, and PyTorch",
        "Experience with NLP and computer vision applications",
        "Strong mathematical background in statistics and algorithms",
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description:
        "Build robust, scalable web applications using modern JavaScript frameworks. Collaborate with cross-functional teams to deliver exceptional user experiences.",
      requirements: [
        "3+ years of experience with React, Node.js, and modern JavaScript",
        "Experience with database design and ORM frameworks",
        "Knowledge of cloud services (AWS, Azure, or GCP)",
        "Understanding of CI/CD pipelines and DevOps practices",
      ],
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "New York, NY (On-site)",
      type: "Full-time",
      description:
        "Create intuitive, engaging user experiences for web and mobile applications. Translate complex requirements into elegant design solutions.",
      requirements: [
        "3+ years of experience in UX/UI design for digital products",
        "Proficiency in Figma, Sketch, and Adobe Creative Suite",
        "Portfolio demonstrating strong visual design skills",
        "Experience conducting user research and usability testing",
      ],
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description:
        "Build and maintain our cloud infrastructure and deployment pipelines. Ensure reliability, security, and scalability of our systems.",
      requirements: [
        "4+ years of experience in cloud infrastructure and DevOps",
        "Strong knowledge of AWS or Azure services",
        "Experience with containerization (Docker, Kubernetes)",
        "Proficiency in infrastructure as code (Terraform, CloudFormation)",
      ],
    },
    {
      id: 5,
      title: "Product Manager",
      department: "Product",
      location: "Austin, TX (Hybrid)",
      type: "Full-time",
      description:
        "Lead the development of innovative products from conception to launch. Work closely with engineering, design, and business teams to deliver value to customers.",
      requirements: [
        "4+ years of experience in product management for technology products",
        "Strong analytical skills and data-driven decision making",
        "Excellent communication and stakeholder management abilities",
        "Experience with agile development methodologies",
      ],
    },
    {
      id: 6,
      title: "Data Scientist",
      department: "Data",
      location: "Remote",
      type: "Full-time",
      description:
        "Extract insights from complex datasets to drive business decisions. Develop predictive models and data visualization solutions.",
      requirements: [
        "3+ years of experience in data science or related field",
        "Proficiency in Python, R, and SQL",
        "Experience with data visualization tools (Tableau, Power BI)",
        "Strong statistical analysis and modeling skills",
      ],
    },
  ];

  // Filter jobs based on search query
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Employee testimonials
  const testimonials = [
    {
      name: "David Chen",
      role: "Senior AI Engineer",
      image: "/assets/picture.jpg",
      quote:
        "Working at Afnexis has been the highlight of my career. I get to solve challenging problems with cutting-edge technology while collaborating with some of the brightest minds in the industry.",
      years: "3 years at Afnexis",
    },
    {
      name: "Sophia Rodriguez",
      role: "Product Designer",
      image: "/assets/picture.jpg",
      quote:
        "The culture at Afnexis truly values creativity and innovation. I've grown tremendously as a designer here, and I appreciate how my ideas are always heard and respected.",
      years: "2 years at Afnexis",
    },
    {
      name: "Marcus Johnson",
      role: "Full Stack Developer",
      image: "/assets/picture.jpg",
      quote:
        "The work-life balance and remote flexibility at Afnexis is unmatched. I can do my best work while still having time for my family and personal interests.",
      years: "4 years at Afnexis",
    },
  ];

  // Create tab content for each category
  const createJobGrid = (jobList) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {jobList.map((job, index) => (
        <motion.div key={job.id} variants={fadeIn} custom={index * 0.1}>
          <JobCard job={job} />
        </motion.div>
      ))}
    </div>
  );

  // Define tabs with their content
  const jobTabs = [
    {
      value: "all",
      label: "All",
      content: createJobGrid(filteredJobs),
    },
    {
      value: "engineering",
      label: "Engineering",
      content: createJobGrid(
        filteredJobs.filter((job) => job.department === "Engineering")
      ),
    },
    {
      value: "design",
      label: "Design",
      content: createJobGrid(
        filteredJobs.filter((job) => job.department === "Design")
      ),
    },
    {
      value: "product",
      label: "Product",
      content: createJobGrid(
        filteredJobs.filter((job) => job.department === "Product")
      ),
    },
    {
      value: "data",
      label: "Data",
      content: createJobGrid(
        filteredJobs.filter((job) => job.department === "Data")
      ),
    },
    {
      value: "operations",
      label: "Operations",
      content: createJobGrid(
        filteredJobs.filter((job) => job.department === "Operations")
      ),
    },
  ];

  // Show "No positions found" message if needed
  if (filteredJobs.length === 0) {
    jobTabs.forEach((tab) => {
      tab.content = (
        <div className="text-center py-12">
          <p className="text-text text-lg">
            No positions found matching your search. Please try different
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
        <div className="absolute inset-0 bg-[url('/assets/career-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/80 via-[#0d1117]/90 to-[#0d1117]"></div>
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
            Join Our Team
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-lg md:text-xl text-text max-w-3xl mx-auto mb-8"
          >
            Build the future with us. Discover exciting career opportunities at
            Afnexis where innovation meets impact.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button
              size="lg"
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-[#0d1117] font-medium rounded-xl px-8 py-6 text-lg"
              onClick={() => {
                const element = document.getElementById("open-positions");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Open Positions
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Our Culture Section */}
      <section ref={cultureRef} className="py-20 container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={cultureVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeIn}
            className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden"
          >
            <Image
              src="/assets/about.jpg"
              alt="Afnexis team collaborating"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold text-headings font-['Poppins'] mb-6">
              Our Culture
            </h2>
            <p className="text-text mb-6">
              At Afnexis, we've built a culture that celebrates innovation,
              collaboration, and continuous growth. We believe that the best
              solutions come from diverse perspectives working together toward
              common goals.
            </p>
            <p className="text-text mb-6">
              Our teams operate with a high degree of autonomy and trust. We
              value results over rigid processes, and we encourage everyone to
              contribute ideas regardless of their role or experience level.
            </p>
            <p className="text-text">
              We're committed to creating an inclusive environment where
              everyone feels welcome and can do their best work. We celebrate
              our successes together and learn from our challenges as a team.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={benefitsVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-headings font-['Poppins'] mb-6">
              Why Work With Us
            </h2>
            <p className="text-text max-w-3xl mx-auto">
              We offer competitive compensation and benefits, but we know that
              great talent looks for more than just a paycheck. Here's what
              makes Afnexis special:
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={benefitsVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <BenefitCard
              icon={<Rocket className="h-10 w-10 text-primary-foreground" />}
              title="Cutting-Edge Projects"
              description="Work on innovative solutions using the latest technologies across AI, cloud, and mobile development."
            />
            <BenefitCard
              icon={
                <GraduationCap className="h-10 w-10 text-primary-foreground" />
              }
              title="Continuous Learning"
              description="Professional development budget, regular workshops, and opportunities to attend industry conferences."
            />
            <BenefitCard
              icon={<Coffee className="h-10 w-10 text-primary-foreground" />}
              title="Work-Life Balance"
              description="Flexible work arrangements, generous PTO, and a culture that respects your time outside of work."
            />
            <BenefitCard
              icon={
                <HeartHandshake className="h-10 w-10 text-primary-foreground" />
              }
              title="Comprehensive Benefits"
              description="Competitive health insurance, 401(k) matching, and wellness programs to support your overall wellbeing."
            />
            <BenefitCard
              icon={<Users className="h-10 w-10 text-primary-foreground" />}
              title="Diverse & Inclusive"
              description="A workplace that celebrates diversity and ensures everyone's voice is heard and valued."
            />
            <BenefitCard
              icon={<Zap className="h-10 w-10 text-primary-foreground" />}
              title="Career Growth"
              description="Clear advancement paths and mentorship opportunities to help you achieve your professional goals."
            />
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section
        id="open-positions"
        ref={openingsRef}
        className="py-20 container mx-auto px-4"
      >
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={openingsVisible ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-headings font-['Poppins'] mb-6">
            Open Positions
          </h2>
          <p className="text-text max-w-3xl mx-auto mb-8">
            Join our team of innovators and problem-solvers. Explore our current
            openings and find your next opportunity.
          </p>

          <div className="relative max-w-md mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text" />
            <Input
              type="text"
              placeholder="Search positions..."
              className="pl-10 bg-foreground border-none text-text focus:ring-primary-foreground"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={openingsVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Using our new CustomTabs component */}
          <CustomTabs tabs={jobTabs} defaultValue="all" />
        </motion.div>
      </section>

      {/* Application Process Section */}
      <section ref={processRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={processVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-headings font-['Poppins'] mb-6">
              Our Hiring Process
            </h2>
            <p className="text-text max-w-3xl mx-auto">
              We've designed our hiring process to be thorough yet efficient,
              giving you multiple opportunities to showcase your skills and
              learn about us.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial="hidden"
            animate={processVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="bg-foreground rounded-xl p-6 relative flex flex-col items-center text-center"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-foreground text-[#0d1117] w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <Briefcase className="h-12 w-12 text-primary-foreground mb-4 mt-4" />
              <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-3">
                Application Review
              </h3>
              <p className="text-text">
                Submit your resume and cover letter. Our team reviews
                applications and responds within 1-2 weeks.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-foreground rounded-xl p-6 relative flex flex-col items-center text-center"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-foreground text-[#0d1117] w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <MessageSquare className="h-12 w-12 text-primary-foreground mb-4 mt-4" />
              <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-3">
                Initial Screening
              </h3>
              <p className="text-text">
                A 30-minute call with our recruiting team to discuss your
                background and the role.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-foreground rounded-xl p-6 relative flex flex-col items-center text-center"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-foreground text-[#0d1117] w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <Laptop className="h-12 w-12 text-primary-foreground mb-4 mt-4" />
              <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-3">
                Technical Assessment
              </h3>
              <p className="text-text">
                Complete a role-specific assessment to demonstrate your skills
                and problem-solving abilities.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-foreground rounded-xl p-6 relative flex flex-col items-center text-center"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-foreground text-[#0d1117] w-8 h-8 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <Users className="h-12 w-12 text-primary-foreground mb-4 mt-4" />
              <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-3">
                Team Interviews
              </h3>
              <p className="text-text">
                Meet with team members and leadership to discuss your experience
                and explore if we're a mutual fit.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Employee Testimonials */}
      <section ref={testimonialsRef} className="py-20 container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={testimonialsVisible ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-headings font-['Poppins'] mb-6">
            Life at Afnexis
          </h2>
          <p className="text-text max-w-3xl mx-auto">
            Hear directly from our team about their experiences working here.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate={testimonialsVisible ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeIn} custom={index * 0.2}>
              <Card className="bg-foreground border-none rounded-xl overflow-hidden h-full">
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-primary-foreground">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-headings">
                        {testimonial.name}
                      </h3>
                      <p className="text-primary-foreground text-sm">
                        {testimonial.role}
                      </p>
                      <p className="text-text text-xs">{testimonial.years}</p>
                    </div>
                  </div>
                  <p className="text-text italic">"{testimonial.quote}"</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
