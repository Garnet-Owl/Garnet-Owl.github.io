/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  trailingSlash: true, // Adds a trailing slash to all routes for better compatibility with static hosting
  images: {
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
