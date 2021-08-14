const withPlugins = require('next-compose-plugins');
const debug = process.env.NODE_ENV !== 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? '/matter/' : '',
  images: {
    disableStaticImages: true,
  },
};

module.exports = withPlugins(
  [
    /* config for plugins */
  ],
  nextConfig,
);
