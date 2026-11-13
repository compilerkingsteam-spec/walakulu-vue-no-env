import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  experimental: {
    agentFeedback: true,
  },
  // REMOVED: cacheComponents: true
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
