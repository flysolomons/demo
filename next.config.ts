/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Required for static site generation
  basePath: '/demo', // Should match your GitHub repo name
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable server-side features since GitHub Pages is static
  trailingSlash: true,
}

module.exports = nextConfig
