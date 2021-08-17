const withPlugins = require('next-compose-plugins');

const debug = process.env.NODE_ENV !== 'production';
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? '/matter/' : '',
  images: {
    disableStaticImages: true,
    domains: ['i.postimg.cc'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = withPlugins(
  [
    /* config for plugins */
  ],
  nextConfig,
);
