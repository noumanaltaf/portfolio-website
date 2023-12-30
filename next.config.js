/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Add basePath
  basePath: '/portfolio-website',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
