// @ts-check
import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  turbopack: {},
};

export default withPlaiceholder(nextConfig);
