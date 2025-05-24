export function StructuredData({ type, data }) {
  const baseUrl = "https://afnexis.com";

  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": type,
    };

    switch (type) {
      case "Organization":
        return {
          ...baseData,
          name: "Afnexis",
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          description:
            "Leading AI-powered development platform innovating the future of software solutions",
          foundingDate: "2020",
          founders: [
            {
              "@type": "Person",
              name: "Afnexis Team",
            },
          ],
          address: {
            "@type": "PostalAddress",
            addressCountry: "US",
            addressRegion: "CA",
            addressLocality: "San Francisco",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-0123",
            contactType: "customer service",
            email: "contact@afnexis.com",
          },
          sameAs: [
            "https://twitter.com/afnexis",
            "https://linkedin.com/company/afnexis",
            "https://github.com/afnexis",
          ],
          ...data,
        };

      case "WebSite":
        return {
          ...baseData,
          name: "Afnexis",
          url: baseUrl,
          description: "AI-powered development platform for the future",
          publisher: {
            "@type": "Organization",
            name: "Afnexis",
          },
          potentialAction: {
            "@type": "SearchAction",
            target: `${baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
          ...data,
        };

      case "Article":
        return {
          ...baseData,
          headline: data.title,
          description: data.description,
          image: data.image || `${baseUrl}/og-image.jpg`,
          datePublished: data.publishedTime,
          dateModified: data.modifiedTime || data.publishedTime,
          author: {
            "@type": "Organization",
            name: "Afnexis",
          },
          publisher: {
            "@type": "Organization",
            name: "Afnexis",
            logo: {
              "@type": "ImageObject",
              url: `${baseUrl}/logo.png`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data.url || baseUrl,
          },
          ...data,
        };

      case "Service":
        return {
          ...baseData,
          name: data.name,
          description: data.description,
          provider: {
            "@type": "Organization",
            name: "Afnexis",
          },
          areaServed: "Worldwide",
          serviceType: data.serviceType || "Software Development",
          ...data,
        };

      default:
        return { ...baseData, ...data };
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
}
