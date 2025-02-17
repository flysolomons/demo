/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for static site generation
  basePath: '/demo',
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable server-side features since GitHub Pages is static
  trailingSlash: true,
  eslint: {
    // Temporarily ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Temporarily ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
