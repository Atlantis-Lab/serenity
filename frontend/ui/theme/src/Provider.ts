import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { createElement }                         from 'react'

import * as theme                                from './theme'

export const ThemeProvider = (props) =>
  createElement(EmotionThemeProvider, {
    ...props,
    theme,
  })
