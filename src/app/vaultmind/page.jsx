import VaultMindPage from "@/components/vaultmind/vaultmind-page";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "VaultMind - Offline AI Knowledge Base by Afnexis",
  description:
    "Learn how VaultMind keeps your data private with 100% offline AI processing.",
  keywords: [
    "VaultMind",
    "offline AI",
    "AFNEXIS",
    "AI knowledge base",
    "private AI",
    "secure document analysis",
  ],
  canonical: "/vaultmind",
  ogType: "website",
});

const Page = () => {
  return <VaultMindPage />;
};

export default Page;
