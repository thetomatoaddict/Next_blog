/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode : true,
  webpack5: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  
};

module.exports = nextConfig;
const removeImports = require("next-remove-imports")();

module.exports = removeImports(nextConfig)