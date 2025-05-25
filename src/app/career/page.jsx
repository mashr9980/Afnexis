import CareersPage from "@/components/career/career-page";
import { generateMetadata } from "@/lib/seo";
import React from "react";

export const metadata = generateMetadata({
  title: "Careers at Afnexis - Join Our AI Innovation Team",
  description:
    "Join the Afnexis team and help shape the future of AI-powered development. Explore exciting career opportunities in artificial intelligence, software development, and innovation.",
  keywords: [
    "careers",
    "jobs at afnexis",
    "AI jobs",
    "software developer jobs",
    "machine learning careers",
    "tech careers",
    "remote work",
    "innovation jobs",
  ],
  canonical: "/careers",
  ogType: "website",
});

const Page = () => {
  return <CareersPage />;
};

export default Page;
