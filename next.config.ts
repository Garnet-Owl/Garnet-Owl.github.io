/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Change basePath and assetPrefix based on GITHUB_ACTIONS environment variable
  basePath: process.env.GITHUB_ACTIONS ? '/Garnet-Owl.github.io' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/Garnet-Owl.github.io/' : '',
  // Enable if you need to navigate between pages
  trailingSlash: true,
}

export default nextConfig;