/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Trailing slash ensures each route gets its own index.html for static hosts
  trailingSlash: true,
};

module.exports = nextConfig;
