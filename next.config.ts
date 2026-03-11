import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://pass-selling-production.up.railway.app/api/:path*", // Proxy to Railway Backend
      },
    ];
  },
};

export default nextConfig;
