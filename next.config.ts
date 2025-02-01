/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static exports
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
  trailingSlash: true, // Recommended for GitHub Pages
};

export default nextConfig;
