import { Metadata } from "next";

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = "/og-image.jpg",
  ogType = "website",
  publishedTime,
  modifiedTime,
  authors = ["Afnexis Team"],
  section,
}) {
  const baseUrl = "https://afnexis.com";
  const fullTitle = title.includes("Afnexis") ? title : `${title} | Afnexis`;
  const url = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const imageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${baseUrl}${ogImage}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    authors: authors.map((name) => ({ name })),
    creator: "Afnexis",
    publisher: "Afnexis",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Afnexis",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: ogType,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: "@afnexis",
      site: "@afnexis",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
  };
}

export const defaultSEO = {
  title: "Afnexis – Innovating Intelligence. Engineering the Future",
  description:
    "Transform your ideas into reality with our comprehensive AI-powered development platform. Leading the future of intelligent software solutions.",
  keywords: [
    "AI development platform",
    "artificial intelligence",
    "software development",
    "machine learning",
    "web development",
    "mobile app development",
    "cloud solutions",
    "digital transformation",
  ],
};
