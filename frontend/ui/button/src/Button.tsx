import React                                   from 'react'
import styled                                  from '@emotion/styled'
import { createShouldForwardProp }             from '@styled-system/should-forward-prop'
import { border, flexbox, system, typography } from 'styled-system'
import { ifProp, switchProp }                  from 'styled-tools'

import { StyledButtonProps }                   from './types'
import { divideChildren }                      from './utils'

const base: any = ({ theme }: any) => ({
  fontFamily: theme.fonts.primary,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  padding: 0,
  '&:active': {
    transform: 'scale(0.98)',
  },
})

const fill = ifProp('fill', { width: '100%' })

const colors = switchProp('color', ({ theme }: any) => ({
  chicago: {
    background: theme.colors.chicago,
    color: theme.colors.white,
  },
  stormdust: {
    background: theme.colors.stormdust,
    color: theme.colors.white,
  },
  white: {
    border: theme.borders.black,
    color: theme.colors.stardust,
    background: theme.colors.white,
  },
  whiteBlack: {
    color: theme.colors.black,
    background: theme.colors.white,
  },
  chicagolite: {
    background: theme.colors.chicagolite,
    color: theme.colors.white,
  },
}))

const sizes = switchProp('size', ({ theme, equal }: any) => ({
  small: {
    fontSize: theme.fontSizes.tiny,
    padding: equal ? 0 : '0px 16px',
    width: equal ? 36 : null,
    height: 36,
  },
  normal: {
    fontSize: theme.fontSizes.tiny,
    padding: equal ? 0 : '0px 16px',
    width: equal ? 40 : null,
    height: 40,
  },
  large: {
    fontSize: theme.fontSizes.tiny,
    padding: equal ? 0 : '0px 16px',
    width: equal ? 48 : null,
    height: 48,
  },
  huge: {
    fontSize: theme.fontSizes.tiny,
    padding: equal ? 0 : '0px 16px',
    width: equal ? 50 : null,
    height: 50,
  },
}))

const bg = system({
  bg: {
    property: 'backgroundColor',
    scale: 'colors',
  },
})

const shouldForwardProp = createShouldForwardProp(['fill', 'size', 'color', 'equal'])

const StyledButton = styled('button', { shouldForwardProp })<StyledButtonProps>(
  base,
  fill,
  // @ts-ignore
  sizes,
  colors,
  border,
  typography,
  bg,
  flexbox
)

const ContentPart = styled.span({
  marginRight: '12px',
  display: 'flex',
})

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{divideChildren(children, ContentPart)}</StyledButton>
)

Button.defaultProps = {
  borderRadius: 'normal',
  justifyContent: 'center',
  color: 'white',
  size: 'normal',
}

export { Button }
