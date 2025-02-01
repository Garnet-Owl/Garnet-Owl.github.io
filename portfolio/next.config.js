/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static exports
  images: {
    unoptimized: true,
  },
  // Configure base path to match your GitHub Pages repository name
  basePath: '/portfolio',
}

module.exports = nextConfig