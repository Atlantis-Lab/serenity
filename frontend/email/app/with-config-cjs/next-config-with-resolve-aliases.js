/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */

const withAliases = (aliases) => (nextConfig) => ({
  ...nextConfig,
  webpack(config, options) {
    aliases.forEach(
      (alias) => (config.resolve.alias[alias] = require.resolve(alias.replace('$', '')))
    )

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  },
})

module.exports = { withAliases }
