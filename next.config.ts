import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    viewTransition: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
