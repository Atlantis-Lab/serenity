import { injectGlobal }    from '@emotion/css'

import { fontFaces }       from './theme'
import { injectFontFaces } from './utils'

export const injectGlobalStyles = () => {
  injectFontFaces(fontFaces as any)

  injectGlobal({
    html: {},
    body: {
      WebkitFontSmoothing: 'antialiased',
      WebkitOverflowScrolling: 'touch',
      height: '100%',
      margin: 0,
    },
  })
}
