const apiurl = "https://fitbit.walnuts.dev/v1/";

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
