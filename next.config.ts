import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Esta configuração é necessária para GitHub Pages
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '',
    assetPrefix: '',
  }),
};

export default nextConfig;
