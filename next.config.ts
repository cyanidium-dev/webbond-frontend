import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [60, 75, 80, 100],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nashkiev.ua',
      },
    ],
    // minimumCacheTTL: 2592000,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
