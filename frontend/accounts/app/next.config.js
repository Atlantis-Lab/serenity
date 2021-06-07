const { withWorkspaces } = require('@atls/next-config-with-pnp-workspaces')
const { withExtractIntlMessages } = require('@atls/next-config-with-extract-intl-messages')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withFonts = require('next-fonts')

const { withAliases } = require('./with-config-cjs')
const { withFutureWebpack5 } = require('./with-config-cjs')

module.exports = withPlugins([
  withFutureWebpack5,
  withExtractIntlMessages,
  withWorkspaces,
  withImages,
  withFonts,
  withAliases(['@emotion/react', '@emotion/styled', 'react-intl', '@ory/kratos-client']),
])
