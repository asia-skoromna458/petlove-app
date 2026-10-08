import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ftp.goit.study",
      },
      {
        protocol: "https",
        hostname: "www.nytimes.com",
      },
      {
        protocol: "https",
        hostname: "media4.giphy.com",
      },
    ],
  },
};

export default nextConfig;
