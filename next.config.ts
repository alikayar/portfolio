import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  output: "standalone",
  images: {
    qualities: [75, 85],
  },
};

export default nextConfig;
