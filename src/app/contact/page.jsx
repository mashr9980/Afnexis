"use client";

import { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  MessageSquare,
  Clock,
  Globe,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import AnimatedButton from "@/components/animated-button";
import AnimatedList from "@/components/animated-list";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import FAQ from "@/components/faq";
import { HeroSection } from "@/components/home/hero";
import CTASection from "@/components/home/cta-section";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    submitted: false,
    loading: false,
  });

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, loading: true }));

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormState((prev) => ({
      ...prev,
      loading: false,
      submitted: true,
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    }));

    // Scroll to top of form after submission
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    {
      icon: <Mail className="w-10 h-10 text-[var(--primary-accent)]" />,
      title: "Email Us",
      info: "info@afnexis.com",
      description:
        "Our team typically responds within 24 hours on business days.",
      action: "mailto:info@afnexis.com",
      actionText: "Send Email",
    },
    {
      icon: <Phone className="w-10 h-10 text-[var(--primary-accent)]" />,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      description: "Available Monday to Friday, 9am to 6pm EST.",
      action: "tel:+15551234567",
      actionText: "Call Now",
    },
    {
      icon: (
        <MessageSquare className="w-10 h-10 text-[var(--primary-accent)]" />
      ),
      title: "Live Chat",
      info: "Chat with our team",
      description: "Available for immediate assistance during business hours.",
      action: "#chat",
      actionText: "Start Chat",
    },
  ];

  const faqItems = [
    {
      question: "What information should I include in my project inquiry?",
      answer:
        "To help us understand your needs better, please include your project timeline, budget range, specific requirements, and any relevant background information about your business or project goals.",
    },
    {
      question: "How quickly can I expect a response?",
      answer:
        "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please indicate this in your message and we'll prioritize your request.",
    },
    {
      question: "Do you work with clients internationally?",
      answer:
        "Yes, we work with clients globally. Our team is experienced in remote collaboration and we have flexible scheduling to accommodate different time zones.",
    },
    {
      question: "What is your typical project process?",
      answer:
        "Our process typically includes discovery, planning, design, development, testing, and launch phases. We maintain transparent communication throughout and provide regular updates on progress.",
    },
  ];

  return (
    <main className="bg-background">
      <HeroSection
        title="Contact Us"
        subtitle={{
          regular: " Get in Touch ",
          gradient: " Let's Create Something",
        }}
        description="Transform your ideas into reality with our comprehensive suite of development tools and resources."
        ctaText="Contact Us"
        ctaHref="/contact"
        gridOptions={{
          angle: 65,
          opacity: 0.4,
          cellSize: 50,
          lightLineColor: "#4a4a4a",
          darkLineColor: "#2a2a2a",
        }}
      />

      {/* Contact Form Section */}
      <section
        id="contact-form"
        className="py-20 md:py-32 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[var(--section-bg)] opacity-50"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--primary-accent)] rounded-full filter blur-[150px] opacity-10"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[var(--secondary-accent)] rounded-full filter blur-[150px] opacity-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection
              animation="slide-right"
              className="lg:sticky lg:top-32"
            >
              <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-[rgba(0,255,195,0.1)] text-[var(--primary-accent)] mb-4">
                Start a Project
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tell Us About Your Project
              </h2>
              <p className="text-[var(--body-text)] mb-8">
                Fill out the form with details about your project, and our team
                will get back to you to discuss how we can bring your vision to
                life.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[rgba(0,255,195,0.2)] flex items-center justify-center">
                      <Clock className="w-4 h-4 text-[var(--primary-accent)]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Quick Response</h4>
                    <p className="text-[var(--body-text)]">
                      We respond to all inquiries within 24 hours on business
                      days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[rgba(0,255,195,0.2)] flex items-center justify-center">
                      <Globe className="w-4 h-4 text-[var(--primary-accent)]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Global Reach</h4>
                    <p className="text-[var(--body-text)]">
                      We work with clients worldwide across different time
                      zones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-8 h-8 rounded-full bg-[rgba(0,255,195,0.2)] flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-[var(--primary-accent)]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">
                      Personalized Approach
                    </h4>
                    <p className="text-[var(--body-text)]">
                      We tailor our solutions to your specific needs and goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[var(--section-bg)] rounded-xl">
                <h3 className="text-xl font-bold mb-4">Our Office</h3>
                <p className="text-[var(--body-text)] mb-4">
                  123 Tech Plaza, Suite 400
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </p>
                <div className="aspect-video w-full bg-[var(--primary-bg)] rounded-lg overflow-hidden relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.8315346225204!2d72.71804247410233!3d33.73917213419928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa710d77828e5%3A0xbd39902baf608901!2sNew%20City%20Phase%202!5e0!3m2!1sen!2s!4v1738166454204!5m2!1sen!2s"
                    style={{ border: 0 }}
                    height={300}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className=" w-full"
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left" delay={0.2} ref={formRef}>
              <div className="bg-[var(--primary-bg)] rounded-2xl p-8 shadow-xl border border-[rgba(255,255,255,0.05)]">
                {formState.submitted ? (
                  <AnimatedSection
                    animation="fade"
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-[rgba(0,255,195,0.1)] mx-auto mb-6 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-[var(--primary-accent)]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                    <p className="text-[var(--body-text)] max-w-md mx-auto mb-6">
                      Your message has been received. We'll get back to you
                      within 24 hours to discuss your project in detail.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <AnimatedButton
                        href="#"
                        variant="primary"
                        onClick={(e) => {
                          e.preventDefault();
                          setFormState((prev) => ({
                            ...prev,
                            submitted: false,
                          }));
                        }}
                      >
                        Send Another Message
                      </AnimatedButton>
                      <AnimatedButton href="/" variant="secondary">
                        Back to Home
                      </AnimatedButton>
                    </div>
                  </AnimatedSection>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-[var(--headings-text)] mb-2 font-medium"
                        >
                          Full Name{" "}
                          <span className="text-[var(--primary-accent)]">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)] border border-[rgba(255,255,255,0.1)] text-[var(--headings-text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-accent)] focus:border-transparent transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-[var(--headings-text)] mb-2 font-medium"
                        >
                          Email Address{" "}
                          <span className="text-[var(--primary-accent)]">
                            *
                          </span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)] border border-[rgba(255,255,255,0.1)] text-[var(--headings-text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-accent)] focus:border-transparent transition-all duration-300"
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
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)] border border-[rgba(255,255,255,0.1)] text-[var(--headings-text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-accent)] focus:border-transparent transition-all duration-300"
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
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)] border border-[rgba(255,255,255,0.1)] text-[var(--headings-text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-accent)] focus:border-transparent transition-all duration-300"
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
                        <span className="text-[var(--primary-accent)]">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)] border border-[rgba(255,255,255,0.1)] text-[var(--headings-text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-accent)] focus:border-transparent transition-all duration-300"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="AI Solutions">AI Solutions</option>
                        <option value="Cloud Development">
                          Cloud Development
                        </option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Development">
                          Mobile Development
                        </option>
                        <option value="Data Engineering">
                          Data Engineering
                        </option>
                        <option value="Product Design">Product Design</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="message"
                        className="block text-[var(--headings-text)] mb-2 font-medium"
                      >
                        Project Details{" "}
                        <span className="text-[var(--primary-accent)]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--section-bg)] border border-[rgba(255,255,255,0.1)] text-[var(--headings-text)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-accent)] focus:border-transparent resize-none transition-all duration-300"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      ></textarea>
                    </div>

                    <div className="mb-6">
                      <label className="flex items-start">
                        <input
                          type="checkbox"
                          required
                          className="mt-1 mr-3 h-4 w-4 rounded border-gray-300 text-[var(--primary-accent)] focus:ring-[var(--primary-accent)]"
                        />
                        <span className="text-[var(--body-text)] text-sm">
                          I agree to the{" "}
                          <Link
                            href="/privacy-policy"
                            className="text-[var(--primary-accent)] hover:underline"
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
                      className={`btn-primary w-full flex items-center justify-center ${
                        formState.loading ? "opacity-70 cursor-not-allowed" : ""
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
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <FAQ />
      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
