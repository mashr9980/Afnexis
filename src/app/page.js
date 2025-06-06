import Home from "@/components/home/home-page";
import { generateMetadata } from "@/lib/seo";
import React from "react";

export const metadata = generateMetadata({
  title: "Afnexis – AI, Web & Software Development Services",
  description:
    "Afnexis offers expert AI, machine learning, and full-stack software development services. We turn ideas into intelligent digital solutions for startups and enterprises.",
  keywords: [
    "AI development",
    "machine learning",
    "software development",
    "web development",
    "mobile app development",
    "Next.js developers",
    "AI software company",
    "cloud application",
    "digital transformation",
    "automation solutions",
    "intelligent software development",
    "Pakistan AI companies",
  ],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
  alternates: {
    canonical: "https://www.afnexis.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.afnexis.com/",
    title: "Afnexis – AI, Web & Software Development Services",
    description:
      "Build powerful digital solutions with Afnexis. From AI to mobile apps, we deliver cutting-edge technology for business growth.",
    images: [
      {
        url: "https://www.afnexis.com/public/logo.png",
        width: 1200,
        height: 630,
        alt: "Afnexis – Innovating Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Afnexis – AI, Web & Software Development Services",
    description:
      "Delivering AI-powered, modern software solutions with precision and innovation.",
    images: ["https://www.afnexis.com/public/logo.png"],
  },
});

const Page = () => {
  return <Home />;
};

export default Page;
