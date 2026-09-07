import type { NextConfig } from "next";
import { parseAssetsOrigin } from "./config/assets-url";

const assetsOrigin = parseAssetsOrigin(process.env.ASSETS_URL);

const nextConfig: NextConfig = {
  agentRules: false,
  output: "standalone",
  images: {
    qualities: [75, 85],
    remotePatterns: [new URL("/images/**", assetsOrigin)],
  },
};

export default nextConfig;
