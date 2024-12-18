import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.dirname('styles')],
    silenceDeprecations: ['legacy-js-api'],
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev.nmcms.ru',
        pathname: '/resources/catalog/images/**',
      },
    ],
  },
};

export default nextConfig;
