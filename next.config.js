const { withSentryConfig } = require("@sentry/nextjs");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
  sentry: {
    hideSourceMaps: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: "ads-games",
    project: "duke-adsgames-net",
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: false,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  },
);
