/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-empty */
import { injectGlobal } from '@emotion/css'

const fontFace = (family, type, weight, style = 'normal') => ({
  '@font-face': {
    fontFamily: family,
    fontWeight: weight,
    fontStyle: style,
    src: `local('${family}-${type}'),
          url('${require(`../fonts/${family}-${type}.woff`)}') format('woff'),
          url('${require(`../fonts/${family}-${type}.woff2`)}') format('woff2')`,
  },
})

export const injectFontFaces = (fontFaces = []) =>
  fontFaces.forEach(({ family, type, weight }) => {
    try {
      injectGlobal(fontFace(family, type, weight))
    } catch (error) {
      console.log(error) // eslint-disable-line
    }
  })
