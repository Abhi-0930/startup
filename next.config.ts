import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.codeloom.in',
          },
        ],
        destination: 'https://codeloom.in/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
