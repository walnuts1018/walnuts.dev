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
};

export default nextConfig;
