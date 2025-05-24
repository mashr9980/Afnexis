import { Navigation } from "@/components/navigation";
import "./globals.css";
import Footer from "@/components/footer";
import { StructuredData } from "@/components/seo/structured-data";
import { defaultSEO, generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata(defaultSEO);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <StructuredData type="Organization" data={{}} />
        <StructuredData type="WebSite" data={{}} />
      </head>
      <body className={` antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
