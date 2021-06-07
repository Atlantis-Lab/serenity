const withFutureWebpack5 = (nextConfig) => ({
  ...nextConfig,
  future: {
    webpack5: true,
  },
  webpack(config, options) {
    if (!config.resolve.fallback) {
      // eslint-disable-next-line
      config.resolve.fallback = {}
    }

    // eslint-disable-next-line
    config.resolve.fallback.events = require.resolve('events/')

    if (typeof nextConfig.webpack === 'function') {
      return nextConfig.webpack(config, options)
    }

    return config
  },
})

module.exports = { withFutureWebpack5 }
