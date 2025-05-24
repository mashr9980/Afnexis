import PortfolioPage from "@/components/portfolio/portfolio-page";
import { generateMetadata } from "@/lib/seo";
import React from "react";

export const metadata = generateMetadata({
  title: "Portfolio - Our AI-Powered Projects & Solutions",
  description:
    "Explore our portfolio of successful AI-powered projects, mobile apps, web applications, and digital solutions. See how we've helped businesses transform with cutting-edge technology.",
  keywords: [
    "portfolio",
    "AI projects",
    "web development projects",
    "mobile app development",
    "software solutions",
    "case studies",
    "client work",
    "development showcase",
  ],
  canonical: "/portfolio",
  ogType: "website",
});

const Page = () => {
  return <PortfolioPage />;
};

export default Page;
