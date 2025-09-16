/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.frequencyfortress.com',
          },
        ],
        destination: 'https://frequencyfortress.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;