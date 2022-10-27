/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "picsum.photos", "SOURCE_IMAGE_DOMAIN"],
  },
};

module.exports = nextConfig;
