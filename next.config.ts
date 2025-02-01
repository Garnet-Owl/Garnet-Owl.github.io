/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  images: {
    unoptimized: true,
    // Remove custom loader configuration as it's causing issues
  },
  reactStrictMode: true,
  trailingSlash: true,
}

export default nextConfig;