/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Build every page as folder/index.html, so Apache (hubertuspilates.ir)
  // and GitHub Pages both open /collections/ and /collections/reformers/.
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static sites or GitHub Pages
  },
};

module.exports = nextConfig;
