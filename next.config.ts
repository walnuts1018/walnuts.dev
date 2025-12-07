import type { NextConfig } from "next";

const apiurl = "https://fitbit.walnuts.dev/v1/";

const nextConfig: NextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${apiurl}:path*`,
      },
    ];
  },
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    qualities: [60, 75],
  },
};

export default nextConfig;
