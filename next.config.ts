/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Disable basePath and assetPrefix
  // basePath: '',
  // assetPrefix: '',
  trailingSlash: true,
}

export default nextConfig;