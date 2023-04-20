/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return {
      beforeFiles: [{
        source: "/api/v1/:path*",
        destination: "https://api.infocat.link/api/v1/:path*"
      }]
    }
  }
}

module.exports = nextConfig
