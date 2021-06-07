import App                                   from 'next/app'
import compose                               from 'recompose/compose'

import { ThemeProvider, injectGlobalStyles } from '@ui/theme'

import { withEmotion }                       from '../providers'
import { withIntl }                          from '../providers'

export const withProviders = compose(
  withIntl({
    default: 'ru',
  }),
  withEmotion({
    Provider: ThemeProvider,
    injectGlobalStyles,
  })
)

export default withProviders(App)
