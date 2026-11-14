const { execSync } = require("child_process");
const { version } = require("./package.json");

// Short commit id, shown in the footer to see which build is live.
function commitSha() {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA.slice(0, 7);
  try {
    return execSync("git rev-parse --short HEAD").toString().trim();
  } catch {
    return "dev";
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
    NEXT_PUBLIC_COMMIT_SHA: commitSha(),
  },
  output: "export",
  // Build every page as folder/index.html, so Apache (hubertuspilates.ir)
  // and GitHub Pages both open /collections/ and /collections/reformers/.
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static sites or GitHub Pages
  },
};

module.exports = nextConfig;
