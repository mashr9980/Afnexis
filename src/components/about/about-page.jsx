"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award, Clock, Code, Globe, Lightbulb, Users } from "lucide-react";
import { useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import TeamMember from "@/components/about/team-member";
import CompanyValue from "@/components/about/company-value";
import CTASection from "@/components/home/cta-section";
import AnimatedCounter from "@/components/animated-counter";
import Link from "next/link";

export default function AboutPage() {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const statsRef = useRef(null);

  const heroVisible = useIntersectionObserver({ ref: heroRef });
  const storyVisible = useIntersectionObserver({ ref: storyRef });
  const valuesVisible = useIntersectionObserver({ ref: valuesRef });
  const teamVisible = useIntersectionObserver({ ref: teamRef });
  const statsVisible = useIntersectionObserver({ ref: statsRef });

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
          <div className="absolute inset-0 bg-[url('/assets/about-ai-1.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/80 via-[#0d1117]/90 to-[#0d1117]"></div>
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Afnexis</span>
            </motion.h1>
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-text max-w-3xl mx-auto mb-8"
            >
              We're a team of innovators, engineers, and problem-solvers dedicated
              to transforming businesses through cutting-edge technology
              solutions.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href={"/contact#contact-form"}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-medium rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section ref={storyRef} className="py-20 container-wrapper mx-auto relative">
          <div className="absolute inset-0 bg-radial-teal opacity-20"></div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10"
            initial="hidden"
            animate={storyVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold text-headings font-['Poppins'] mb-6">
                Our Story
              </h2>
              <p className="text-text mb-6">
                Founded in 2018, Afnexis began with a simple mission: to bridge
                the gap between cutting-edge technology and practical business
                solutions. Our founders, a group of tech enthusiasts with
                backgrounds in AI research and enterprise software development,
                recognized that many businesses were struggling to implement and
                benefit from the latest technological advancements.
              </p>
              <p className="text-text mb-6">
                What started as a small team of five has now grown into a diverse
                group of over 50 specialists across AI, cloud architecture,
                software development, data engineering, and design. Throughout our
                growth, we've maintained our core principle: delivering technology
                solutions that create real business value.
              </p>
              <p className="text-text">
                Today, Afnexis partners with startups, enterprises, and everything
                in between to build scalable, innovative solutions that drive
                growth and efficiency. Our journey continues as we explore new
                technologies and push the boundaries of what's possible in the
                digital landscape.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent z-10"></div>
              <Image
                src="/assets/about.jpg"
                alt="Afnexis team working together"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Our Values Section */}
        <section ref={valuesRef} className="py-20 bg-mesh-gradient">
          <div className="container-cards mx-auto">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              animate={valuesVisible ? "visible" : "hidden"}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-headings font-['Poppins'] mb-6">
                Our Core Values
              </h2>
              <p className="text-text max-w-3xl mx-auto">
                These principles guide everything we do, from how we develop
                solutions to how we interact with our clients and each other.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              animate={valuesVisible ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              <CompanyValue
                icon={<Lightbulb className="h-10 w-10 text-teal-400" />}
                title="Innovation First"
                description="We constantly explore new technologies and approaches to solve complex problems in unique ways."
              />
              <CompanyValue
                icon={<Users className="h-10 w-10 text-teal-400" />}
                title="Client Partnership"
                description="We view ourselves as an extension of our clients' teams, fully invested in their success."
              />
              <CompanyValue
                icon={<Award className="h-10 w-10 text-teal-400" />}
                title="Excellence in Execution"
                description="We hold ourselves to the highest standards in every line of code and every design decision."
              />
              <CompanyValue
                icon={<Code className="h-10 w-10 text-teal-400" />}
                title="Technical Mastery"
                description="We continuously deepen our expertise across technologies to deliver superior solutions."
              />
              <CompanyValue
                icon={<Clock className="h-10 w-10 text-teal-400" />}
                title="Agility & Adaptability"
                description="We embrace change and quickly adjust to evolving requirements and technologies."
              />
              <CompanyValue
                icon={<Globe className="h-10 w-10 text-teal-400" />}
                title="Global Perspective"
                description="We bring diverse viewpoints together to create solutions that work across cultures and markets."
              />
            </motion.div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section
          ref={teamRef}
          className="py-20 bg-background container-cards mx-auto relative"
        >
          <div className="absolute inset-0 bg-dots-teal opacity-20"></div>
          <motion.div
            className="text-center mb-16 relative z-10"
            initial="hidden"
            animate={teamVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-headings font-['Poppins'] mb-6">
              Our Leadership Team
            </h2>
            <p className="text-text max-w-3xl mx-auto">
              Meet the experts and visionaries driving Afnexis forward with their
              passion and expertise.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
            initial="hidden"
            animate={teamVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <TeamMember
              name="Alex Chen"
              position="Chief Executive Officer"
              bio="Former AI research lead with 15+ years in tech leadership, driving innovation and strategic growth."
              image="/assets/member-6.jpg"
            />
            <TeamMember
              name="Sarah Johnson"
              position="Chief Technology Officer"
              bio="Cloud architecture expert who previously led development teams at major tech companies."
              image="/assets/member-1.jpg"
            />
            <TeamMember
              name="Michael Rodriguez"
              position="VP of Engineering"
              bio="Full-stack development specialist with a passion for building scalable, efficient systems."
              image="/assets/member-2.jpg"
            />
            <TeamMember
              name="Priya Patel"
              position="Director of AI Solutions"
              bio="PhD in Machine Learning with experience implementing AI in healthcare and finance sectors."
              image="/assets/member-3.jpg"
            />
            <TeamMember
              name="David Kim"
              position="Head of Product Design"
              bio="Award-winning UX designer focused on creating intuitive, engaging user experiences."
              image="/assets/member-4.jpg"
            />
            <TeamMember
              name="Emma Wilson"
              position="Director of Client Success"
              bio="Dedicated to ensuring our solutions deliver measurable business value for every client."
              image="/assets/member-5.jpg"
            />
          </motion.div>
        </section>

        {/* Company Stats Section with Counter Animation */}
        <section ref={statsRef} className="py-20 bg-teal-gradient">
          <div className="container-cards">
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