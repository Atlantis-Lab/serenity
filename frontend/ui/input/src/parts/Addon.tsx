import styled                                 from '@emotion/styled'
import { border, color, styleFn, typography } from 'styled-system'
import { switchProp }                         from 'styled-tools'

import { AddonProps }                         from './types'

const base: styleFn = () => ({
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
})

const size: styleFn = switchProp('size', ({ theme }: any) => ({
  normal: {
    fontSize: theme.fontSizes.tiny,
    paddingRight: 20,
    paddingLeft: 20,
    height: 50,
  },
  medium: {
    fontSize: theme.fontSizes.normal,
    paddingRight: 24,
    paddingLeft: 24,
    height: 58,
  },
  large: {
    fontSize: theme.fontSizes.regular,
    paddingRight: 28,
    paddingLeft: 28,
    height: 64,
  },
}))

const position: styleFn = switchProp('position', () => ({
  before: {
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    borderRightWidth: 0,
  },
  after: {
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    borderLeftWidth: 0,
  },
}))

const Addon = styled.span<AddonProps | any>(base, typography, border, color, size, position)

Addon.defaultProps = {
  position: 'before',
  fontFamily: 'primary',
  fontWeight: 'medium',
  borderRadius: 'extra',
  border: 'black',
  color: 'black',
  bg: 'white',
}

export { Addon }
