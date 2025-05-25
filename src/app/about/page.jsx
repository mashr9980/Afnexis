import AboutPage from "@/components/about/about-page";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "About Afnexis - Leading AI Innovation",
  description:
    "Learn about Afnexis, the pioneering AI-powered development platform that's transforming how businesses build intelligent software solutions. Discover our mission, vision, and team.",
  keywords: [
    "about afnexis",
    "AI company",
    "software development company",
    "artificial intelligence platform",
    "tech innovation",
    "company mission",
    "development team",
  ],
  canonical: "/about",
  ogType: "website",
});

const Page = () => {
  return <AboutPage />;
};

export default Page;
