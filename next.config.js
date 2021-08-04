
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['gWoVqieqfmcK2wUQGV5zj'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  