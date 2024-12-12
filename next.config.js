/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  devIndicators: {
    buildActivity: false,
  },
  webpack: (config, options) => {
    config.resolve.fallback = {
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;
