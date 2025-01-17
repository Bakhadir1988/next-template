import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  sassOptions: {
    // includePaths: [path.dirname('styles')],
    includePaths: [path.join(__dirname, 'src/shared/styles')],
    silenceDeprecations: ['legacy-js-api'],
    // prependData: `@import "variables.scss"; @import "mixins.scss";`,
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
