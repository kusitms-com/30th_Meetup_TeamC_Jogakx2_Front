/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',

  async rewrites() {
    return [
      {
        source: '/api/:path*', 
        destination: 'https://cnergy.p-e.kr/:path*', 
      },
    ]
  },
}

export default nextConfig
