import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tahurat",
  assetPrefix: "/tahurat/",
  images: { unoptimized: true },
  allowedDevOrigins: ["192.168.31.99"],
};

export default nextConfig;
