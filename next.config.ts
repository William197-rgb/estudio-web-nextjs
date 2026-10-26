import type { NextConfig } from "next";

// Static export: the whole site is prerendered into out/ so it can live on any free static host.
const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
