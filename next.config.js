/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforces trailing slashes in URLs
  trailingSlash: true,

  // Disables React strict mode for easier debugging
  reactStrictMode: false,

  // Custom Webpack configuration
  webpack: config => {
    // Define custom aliases for modules
    config.resolve.alias = {
      ...config.resolve.alias,

      // Redirects apexcharts to a specific fork/version
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  }
}

module.exports = nextConfig
