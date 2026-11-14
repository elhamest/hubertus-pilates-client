/** @type {import('next').NextConfig} */
const nextConfig = {
  // Retain or adjust other settings, such as output: 'export'
  output: "export",
  images: {
    unoptimized: true, // Required for static sites or GitHub Pages
  },

  webpack: (config, { isServer }) => {
    // Optimize client-side chunks
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        minSize: 20000,
        maxSize: 244000,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: "framework",
            chunks: "all",
            test: /[\\/]node_modules[\\/](react|react-dom|next)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name: "commons",
            chunks: "all",
            priority: 30,
          },
        },
      };
    }
    return config;
  },
};

module.exports = nextConfig;
