/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensure export mode
  images: {
    unoptimized: true, // Github Pages doesn't support Next.js optimization for images
  },
};

export default nextConfig;
