import { Navigation } from "@/components/navigation";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "Afnexis – Innovating Intelligence. Engineering the Future",
  description: "The world's leading AI-powered development platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
