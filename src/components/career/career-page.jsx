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
import JobCard from "@/components/job-card";
import BenefitCard from "@/components/benefit-card";
import { Input } from "@/components/ui/input";
import CTASection from "@/components/home/cta-section";
import FAQ from "@/components/faq";
import CustomTabs from "@/components/custom-tabs";
import jobs from "@/data/jobs.json";
import testimonials from "@/data/employee-testimonial.json";

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

  // Filter jobs based on search query
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <div className="absolute inset-0 bg-[url('/assets/career-bg.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/80 via-[#0d1117]/90 to-[#0d1117]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-transparent to-cyan-500/10"></div>
          </div>

          <motion.div
            className="container-wrapper relative z-10 text-center"
            initial="hidden"
            animate={heroVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-6xl font-bold text-headings font-['Poppins'] mb-6"
            >
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Team</span>
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
                className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105"
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
        <section ref={cultureRef} className="py-20 container-wrapper relative">
          <div className="absolute inset-0 bg-radial-teal opacity-20"></div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
            initial="hidden"
            animate={cultureVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent z-10"></div>
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
        <section ref={benefitsRef} className="py-20 bg-mesh-gradient">
          <div className="container-cards">
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
                icon={<Rocket className="h-10 w-10 text-teal-400" />}
                title="Cutting-Edge Projects"
                description="Work on innovative solutions using the latest technologies across AI, cloud, and mobile development."
              />
              <BenefitCard
                icon={
                  <GraduationCap className="h-10 w-10 text-teal-400" />
                }
                title="Continuous Learning"
                description="Professional development budget, regular workshops, and opportunities to attend industry conferences."
              />
              <BenefitCard
                icon={<Coffee className="h-10 w-10 text-teal-400" />}
                title="Work-Life Balance"
                description="Flexible work arrangements, generous PTO, and a culture that respects your time outside of work."
              />
              <BenefitCard
                icon={
                  <HeartHandshake className="h-10 w-10 text-teal-400" />
                }
                title="Comprehensive Benefits"
                description="Competitive health insurance, 401(k) matching, and wellness programs to support your overall wellbeing."
              />
              <BenefitCard
                icon={<Users className="h-10 w-10 text-teal-400" />}
                title="Diverse & Inclusive"
                description="A workplace that celebrates diversity and ensures everyone's voice is heard and valued."
              />
              <BenefitCard
                icon={<Zap className="h-10 w-10 text-teal-400" />}
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
          className="py-20 container-cards relative"
        >
          <div className="absolute inset-0 bg-dots-teal opacity-20"></div>
          <motion.div
            className="text-center mb-16 relative z-10"
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
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-400" />
              <Input
                type="text"
                placeholder="Search positions..."
                className="pl-10 bg-foreground/50 backdrop-blur-sm card-border border-teal-500/20 text-text focus:ring-teal-400 focus:border-teal-400 hover:border-teal-500/40 transition-all duration-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={openingsVisible ? "visible" : "hidden"}
            variants={staggerContainer}
            className="relative z-10"
          >
            {/* Using our new CustomTabs component */}
            <CustomTabs tabs={jobTabs} defaultValue="all" />
          </motion.div>
        </section>

        {/* Application Process Section */}
        <section ref={processRef} className="py-20 bg-teal-gradient">
          <div className="container-cards">
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
                className="bg-foreground/80 backdrop-blur-sm card-border rounded-xl p-6 relative flex flex-col items-center text-center group hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">
                  1
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <Briefcase className="h-12 w-12 text-teal-400 mb-4 mt-4 relative z-10" />
                <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-3 relative z-10">
                  Application Review
                </h3>
                <p className="text-text relative z-10">
                  Submit your resume and cover letter. Our team reviews
                  applications and responds within 1-2 weeks.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-foreground/80 backdrop-blur-sm card-border rounded-xl p-6 relative flex flex-col items-center text-center group hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">
                  2
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <MessageSquare className="h-12 w-12 text-teal-400 mb-4 mt-4 relative z-10" />
                <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-3 relative z-10">
                  Initial Screening
                </h3>
                <p className="text-text relative z-10">
                  A 30-minute call with our recruiting team to discuss your
                  background and the role.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-foreground/80 backdrop-blur-sm card-border rounded-xl p-6 relative flex flex-col items-center text-center group hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">
                  3
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <Laptop className="h-12 w-12 text-teal-400 mb-4 mt-4 relative z-10" />
                <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-3 relative z-10">
                  Technical Assessment
                </h3>
                <p className="text-text relative z-10">
                  Complete a role-specific assessment to demonstrate your skills
                  and problem-solving abilities.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-foreground/80 backdrop-blur-sm card-border rounded-xl p-6 relative flex flex-col items-center text-center group hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">
                  4
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                <Users className="h-12 w-12 text-teal-400 mb-4 mt-4 relative z-10" />
                <h3 className="text-xl font-bold text-headings font-['Poppins'] mb-3 relative z-10">
                  Team Interviews
                </h3>
                <p className="text-text relative z-10">
                  Meet with team members and leadership to discuss your experience
                  and explore if we're a mutual fit.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Employee Testimonials */}
        <section ref={testimonialsRef} className="py-20 container-wrapper relative">
          <div className="absolute inset-0 bg-radial-teal opacity-20"></div>
          <motion.div
            className="text-center mb-16 relative z-10"
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
            initial="hidden"
            animate={testimonialsVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn} custom={index * 0.2}>
                <Card className="bg-foreground/80 backdrop-blur-sm card-border rounded-xl overflow-hidden h-full group hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="p-6 relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-teal-400">
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
                        <p className="text-teal-400 text-sm">
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
        <div className="bg-mesh-gradient">
          <FAQ />
        </div>

        {/* CTA Section */}
        <div className="bg-teal-gradient">
          <CTASection />
        </div>
      </div>
    </main>
  );
}