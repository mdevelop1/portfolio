/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next_build',
  output: 'export',
  images: {
    unoptimized: true,
    domains: [],
  },
}

module.exports = nextConfig