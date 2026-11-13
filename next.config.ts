import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  experimental: {
    agentFeedback: true,
    // Ensure ppr: true is NOT set here
  },
  cacheComponents: true,
  // REMOVED: partialPrefetching: true
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
