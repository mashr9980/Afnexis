import Home from "@/components/home/home-page";
import { generateMetadata } from "@/lib/seo";
import React from "react";

export const metadata = generateMetadata({
  title: "Afnexis ~ Innovating Intelligence",
  icons: {
  icon: [
    { url: "/logo.png", type: "image/png" },
    { url: "/favicon.ico", type: "image/x-icon" },
  ],
},
  description:
    "Transform your ideas into reality with our comprehensive AI-powered development platform. Leading the future of intelligent software solutions with cutting-edge technology.",
  keywords: [
    "AI development platform",
    "artificial intelligence",
    "software development",
    "machine learning",
    "web development",
    "mobile app development",
    "cloud solutions",
    "digital transformation",
    "intelligent software",
    "automation tools",
  ],
  canonical: "/",
  ogType: "website",
});

const Page = () => {
  return <Home />;
};

export default Page;
