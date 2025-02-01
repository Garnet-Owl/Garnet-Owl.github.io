/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Required for static HTML export
  },
  // Configure paths for GitHub Pages
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio/" : "",
  // Add output directory configuration
  distDir: "out",
  // Enable app directory
  experimental: {
    appDir: true,
  },
  // Disable server-side features as we're doing static export
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
