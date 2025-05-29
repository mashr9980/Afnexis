"use client";

import { useState, useRef } from "react";
import { Send, CheckCircle, MessageSquare, Clock, Globe } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import AnimatedButton from "@/components/animated-button";
import Link from "next/link";
import FAQ from "@/components/faq";
import { HeroSection } from "@/components/home/hero";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

// EmailJS Configuration
const EMAILJS_SERVICEID = "service_725k5hf";
const EMAILJS_TEMPLATEID = "template_g3zjzwa";
const EMAILJS_PUBLICKEY = "ZnSWMoxvcPsTZQ6bu";

export default function Contact() {
  const heroRef = useRef(null);
  const [formState, setFormState] = useState({
    submitted: false,
    loading: false,
  });

  const formRef = useRef(null);

  const heroVisible = useIntersectionObserver({ ref: heroRef });

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, loading: true }));

    // EmailJS Integration
    emailjs
      .sendForm(EMAILJS_SERVICEID, EMAILJS_TEMPLATEID, formRef.current, {
        publicKey: EMAILJS_PUBLICKEY,
      })
      .then(
        () => {
          console.log("Successfully Sent!");
          toast.success("Message sent successfully", {
            duration: 2000,
          });
          setFormState((prev) => ({
            ...prev,
            loading: false,
            submitted: true,
          }));

          // Scroll to top of form after submission
          if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth" });
            formRef.current.reset(); // Reset form fields
          }
        },
        (error) => {
          console.error("FAILED...", error.text);
          toast.error("Failed to send message", {
            duration: 2000,
          });
          setFormState((prev) => ({ ...prev, loading: false }));
        }
      );
  };

  return (
    <main className="bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Animated teal gradient backgrounds */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-teal-500/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-radial-teal opacity-30"></div>

        {/* Floating elements */}
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-cyan-400/15 rounded-full blur-2xl animate-float-delayed"></div>

        {/* Teal particles */}
        <div className="absolute top-1/5 left-1/6 w-3 h-3 bg-teal-400 rounded-full animate-teal-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-teal-glow opacity-50"></div>
        <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-teal-500 rounded-full animate-teal-pulse animation-delay-1000 opacity-40"></div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section
          className="relative h-screen flex items-center justify-center overflow-hidden"
          ref={heroRef}
        >
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-[url('/assets/contact.jpg')] bg-cover bg-center">
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
              className="text-4xl md:text-6xl font-bold text-headings font-['Poppins'] mb-6"
              variants={fadeIn}
            >
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                Touch
              </span>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-text max-w-3xl mx-auto mb-8"
              variants={fadeIn}
            >
              Transform your ideas into reality with our comprehensive suite of
              development tools and resources.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact#contact-form">
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

        {/* Contact Form Section */}
        <section
          id="contact-form"
          className="py-20 md:py-32 relative overflow-hidden"
        >
          {/* Section background with teal gradient */}
          <div className="absolute inset-0 bg-animated-gradient opacity-30"></div>

          <div className="container-wrapper relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <AnimatedSection
                animation="slide-right"
                className="lg:sticky lg:top-32"
              >
                {/* Enhanced info card with teal styling */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl blur-xl"></div>
                  <div className="relative bg-foreground/80 backdrop-blur-sm rounded-xl p-8 border border-teal-500/20">
                    <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 mb-4 border border-teal-500/30">
                      Start a Project
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-300">
                      Tell Us About Your Project
                    </h2>
                    <p className="text-[var(--body-text)] mb-8">
                      Fill out the form with details about your project, and our
                      team will get back to you to discuss how we can bring your
                      vision to life.
                    </p>

                    <div className="space-y-6 mb-8">
                      <div className="flex items-start group">
                        <div className="mr-4 mt-1">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500/30 to-cyan-500/30 flex items-center justify-center group-hover:from-teal-500/50 group-hover:to-cyan-500/50 transition-all duration-300">
                            <Clock className="w-4 h-4 text-teal-300" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-1 text-white group-hover:text-teal-300 transition-colors duration-300">
                            Quick Response
                          </h4>
                          <p className="text-[var(--body-text)]">
                            We respond to all inquiries within 24 hours on
                            business days.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start group">
                        <div className="mr-4 mt-1">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500/30 to-cyan-500/30 flex items-center justify-center group-hover:from-teal-500/50 group-hover:to-cyan-500/50 transition-all duration-300">
                            <Globe className="w-4 h-4 text-teal-300" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-1 text-white group-hover:text-teal-300 transition-colors duration-300">
                            Global Reach
                          </h4>
                          <p className="text-[var(--body-text)]">
                            We work with clients worldwide across different time
                            zones.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start group">
                        <div className="mr-4 mt-1">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500/30 to-cyan-500/30 flex items-center justify-center group-hover:from-teal-500/50 group-hover:to-cyan-500/50 transition-all duration-300">
                            <MessageSquare className="w-4 h-4 text-teal-300" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-1 text-white group-hover:text-teal-300 transition-colors duration-300">
                            Personalized Approach
                          </h4>
                          <p className="text-[var(--body-text)]">
                            We tailor our solutions to your specific needs and
                            goals.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced office info card */}
                    <div className="p-6 bg-gradient-to-br from-[var(--section-bg)] to-teal-900/20 rounded-xl border border-teal-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent"></div>
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-4 text-teal-300">
                          Our Office
                        </h3>
                        <p className="text-[var(--body-text)] mb-4">
                          123 Tech Plaza, Suite 400
                          <br />
                          San Francisco, CA 94105
                          <br />
                          United States
                        </p>
                        <div className="aspect-video w-full bg-[var(--primary-bg)] rounded-lg overflow-hidden relative border border-teal-500/20">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.8315346225204!2d72.71804247410233!3d33.73917213419928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa710d77828e5%3A0xbd39902baf608901!2sNew%20City%20Phase%202!5e0!3m2!1sen!2s!4v1738166454204!5m2!1sen!2s"
                            style={{ border: 0 }}
                            height={300}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection
                animation="slide-left"
                delay={0.2}
                ref={formRef}
                id="contact-form"
              >
                {/* Enhanced form container */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-2xl blur-xl"></div>
                  <div className="relative bg-[var(--primary-bg)]/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-teal-500/20">
                    {formState.submitted ? (
                      <AnimatedSection
                        animation="fade"
                        className="text-center py-12"
                      >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500/20 to-cyan-500/20 mx-auto mb-6 flex items-center justify-center border border-teal-500/30">
                          <CheckCircle className="w-10 h-10 text-teal-300" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-300">
                          Thank You!
                        </h3>
                        <p className="text-[var(--body-text)] max-w-md mx-auto mb-6">
                          Your message has been received. We'll get back to you
                          within 24 hours to discuss your project in detail.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setFormState((prev) => ({
                                ...prev,
                                submitted: false,
                              }));
                            }}
                            className="btn-primary bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25"
                          >
                            Send Another Message
                          </button>
                          <AnimatedButton href="/" variant="secondary">
                            Back to Home
                          </AnimatedButton>
                        </div>
                      </AnimatedSection>
                    ) : (
                      <form onSubmit={handleSubmit} ref={formRef}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-[var(--headings-text)] mb-2 font-medium"
                            >
                              Full Name <span className="text-teal-400">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="user_name"
                              required
                              className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)]/50 backdrop-blur-sm border border-teal-500/20 text-[var(--headings-text)] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 hover:border-teal-500/40"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-[var(--headings-text)] mb-2 font-medium"
                            >
                              Email Address{" "}
                              <span className="text-teal-400">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="user_email"
                              required
                              className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)]/50 backdrop-blur-sm border border-teal-500/20 text-[var(--headings-text)] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 hover:border-teal-500/40"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label
                              htmlFor="company"
                              className="block text-[var(--headings-text)] mb-2 font-medium"
                            >
                              Company Name
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="user_company"
                              className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)]/50 backdrop-blur-sm border border-teal-500/20 text-[var(--headings-text)] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 hover:border-teal-500/40"
                              placeholder="Your company"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-[var(--headings-text)] mb-2 font-medium"
                            >
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="user_phone"
                              className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)]/50 backdrop-blur-sm border border-teal-500/20 text-[var(--headings-text)] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 hover:border-teal-500/40"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>

                        <div className="mb-6">
                          <label
                            htmlFor="service"
                            className="block text-[var(--headings-text)] mb-2 font-medium"
                          >
                            Service You're Interested In{" "}
                            <span className="text-teal-400">*</span>
                          </label>
                          <select
                            id="service"
                            name="user_service"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)]/50 backdrop-blur-sm border border-teal-500/20 text-[var(--headings-text)] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300 hover:border-teal-500/40"
                          >
                            <option value="" disabled>
                              Select a service
                            </option>
                            <option value="AI Solutions">AI Solutions</option>
                            <option value="Cloud Development">
                              Cloud Development
                            </option>
                            <option value="Web Development">
                              Web Development
                            </option>
                            <option value="Mobile Development">
                              Mobile Development
                            </option>
                            <option value="Data Engineering">
                              Data Engineering
                            </option>
                            <option value="Product Design">
                              Product Design
                            </option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="mb-6">
                          <label
                            htmlFor="message"
                            className="block text-[var(--headings-text)] mb-2 font-medium"
                          >
                            Project Details{" "}
                            <span className="text-teal-400">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="user_project"
                            required
                            rows={6}
                            className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)]/50 backdrop-blur-sm border border-teal-500/20 text-[var(--headings-text)] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 resize-none transition-all duration-300 hover:border-teal-500/40"
                            placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                          ></textarea>
                        </div>

                        <div className="mb-6">
                          <label className="flex items-start">
                            <input
                              type="checkbox"
                              required
                              className="mt-1 mr-3 h-4 w-4 rounded border-teal-500/30 text-teal-400 focus:ring-teal-400 bg-[var(--section-bg)]/50"
                            />
                            <span className="text-[var(--body-text)] text-sm">
                              I agree to the{" "}
                              <Link
                                href="/privacy-policy"
                                className="text-teal-400 hover:text-teal-300 hover:underline transition-colors duration-300"
                              >
                                Privacy Policy
                              </Link>{" "}
                              and consent to Afnexis processing my data for the
                              purpose of contacting me.
                            </span>
                          </label>
                        </div>

                        <button
                          type="submit"
                          disabled={formState.loading}
                          className={`w-full flex items-center justify-center px-6 py-4 rounded-lg font-medium text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 focus:ring-4 focus:ring-teal-500/25 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-500/25 ${
                            formState.loading
                              ? "opacity-70 cursor-not-allowed scale-100"
                              : ""
                          }`}
                        >
                          {formState.loading ? (
                            <span className="inline-block w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></span>
                          ) : (
                            <Send className="w-5 h-5 mr-2" />
                          )}
                          {formState.loading ? "Sending..." : "Submit Request"}
                        </button>
                      </form>
                    )}

                    {/* Enhanced social icons */}
                    <div className="flex space-x-4 py-6 items-center justify-center">
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center text-[var(--body-text)] hover:from-teal-500/20 hover:to-cyan-500/20 hover:text-teal-300 transition-all duration-300 border border-teal-500/20 hover:border-teal-400/40 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center text-[var(--body-text)] hover:from-teal-500/20 hover:to-cyan-500/20 hover:text-teal-300 transition-all duration-300 border border-teal-500/20 hover:border-teal-400/40 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center text-[var(--body-text)] hover:from-teal-500/20 hover:to-cyan-500/20 hover:text-teal-300 transition-all duration-300 border border-teal-500/20 hover:border-teal-400/40 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://wa.me/923148258985"
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500/10 to-cyan-500/10 flex items-center justify-center text-[var(--body-text)] hover:from-teal-500/20 hover:to-cyan-500/20 hover:text-teal-300 transition-all duration-300 border border-teal-500/20 hover:border-teal-400/40 hover:scale-110"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 50 50"
                          width="20px"
                          height="20px"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 17.979688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5"></div>
          <div className="relative z-10">
            <FAQ />
          </div>
        </div>
      </div>
    </main>
  );
}
