import Contact from "@/components/contact/contact-page";
import { generateMetadata } from "@/lib/seo";
import React from "react";

export const metadata = generateMetadata({
  title: "Contact Afnexis - Get in Touch with Our AI Experts",
  description:
    "Contact Afnexis for AI-powered development solutions. Get in touch with our experts to discuss your project requirements and transform your business with intelligent software.",
  keywords: [
    "contact afnexis",
    "AI consultation",
    "software development inquiry",
    "get in touch",
    "project discussion",
    "AI experts",
    "business transformation",
  ],
  canonical: "/contact",
  ogType: "website",
});

const Page = () => {
  return <Contact />;
};

export default Page;
