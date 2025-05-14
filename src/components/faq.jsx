"use client";

import Accordion from "@/components/accordion";
import AnimatedSection from "@/components/animated-section";

export default function FAQ() {
  const faqItems = [
    {
      title: "What is AI-Foundaries and what kind of products do you offer?",
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
          ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at
          augue.
        </p>
      ),
    },
    {
      title: "What process do I need to follow to place an order?",
      content: (
        <p>
          Our ordering process is simple and straightforward. First, browse our
          services and select the one that best fits your needs. Then, click on
          "Get Started" or "Contact Us" to initiate the process. Our team will
          reach out to gather your specific requirements, provide a detailed
          quote, and guide you through the next steps.
        </p>
      ),
    },
    {
      title: "What are the payment methods?",
      content: (
        <div>
          <p>
            We accept various payment methods to accommodate our global clients:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Credit/Debit Cards (Visa, Mastercard, American Express)</li>
            <li>Bank Transfers</li>
            <li>PayPal</li>
            <li>Stripe</li>
          </ul>
          <p className="mt-2">
            For large projects, we typically structure payments in milestones to
            align with project deliverables.
          </p>
        </div>
      ),
    },
    {
      title: "How does AI-Foundaries customer service work?",
      content: (
        <div>
          <p>
            Our customer service team is available Monday through Friday, 9 AM
            to 6 PM EST. You can reach us through:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Email: support@ai-foundaries.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Live Chat on our website</li>
          </ul>
          <p className="mt-2">
            For urgent matters outside business hours, we have an on-call team
            that responds to emergency tickets within 2 hours.
          </p>
        </div>
      ),
    },
    {
      title: "What is AI-Foundaries privacy policy?",
      content: (
        <p>
          We take data privacy seriously. Our privacy policy outlines how we
          collect, use, and protect your information. We comply with GDPR, CCPA,
          and other relevant data protection regulations. We never sell your
          data to third parties, and we implement industry-standard security
          measures to safeguard your information. For a detailed explanation,
          please visit our Privacy Policy page.
        </p>
      ),
    },
  ];

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection animation="slide-up" className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-[var(--body-text)] text-lg mb-12 text-center">
            Find answers to common questions about our services, processes, and
            policies.
          </p>

          <div className="bg-[var(--section-bg)] rounded-xl p-6 md:p-8 shadow-lg">
            <Accordion items={faqItems} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
