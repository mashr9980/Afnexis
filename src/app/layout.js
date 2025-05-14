import "./globals.css";

export const metadata = {
  title: "Afnexis – Innovating Intelligence. Engineering the Future",
  description: "The world's leading AI-powered development platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
