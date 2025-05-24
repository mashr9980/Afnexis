/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // Optional, leave empty for default HTTPS port (443)
        pathname: "/**", // Allow all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
