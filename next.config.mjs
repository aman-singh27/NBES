/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placeholder.com", "nbes.in"],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
