/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add a basePath here, corresponding to your project name
  basePath: "/hubertus-pilates-client",

  // Retain or adjust other settings, such as output: 'export'
  output: "export",
  images: {
    unoptimized: true, // Required for static sites or GitHub Pages
  },
};

module.exports = nextConfig;
