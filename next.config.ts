/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
  images: {
    loader: 'custom',
    loaderFile: './app/image-loader.ts',
  },
  reactStrictMode: true,
  trailingSlash: true,
}

export default nextConfig;