/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.42.214', 'localhost', '*.loca.lt'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
