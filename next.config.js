/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  images: {
    unoptimized: true, // Disables image optimization for compatibility with static hosting
  },
};

module.exports = nextConfig;
