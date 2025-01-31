/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static HTML export
  images: {
    unoptimized: true, // Required for static HTML export
  },
  // Properly handle GitHub Pages repository path
  basePath:
    process.env.NODE_ENV === "production" ? "/Garnet-Owl.github.io" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/Garnet-Owl.github.io/" : "",
};

export default nextConfig;
