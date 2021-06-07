import styled, { StyledComponent } from '@emotion/styled'
import { LinkHTMLAttributes }      from 'react'

import { Text }                    from '@ui/text'

type TextProps = typeof Text.defaultProps

// @ts-ignore
export const Link = styled<StyledComponent<LinkHTMLAttributes<any>, TextProps, any>>(
  Text.withComponent('a')
)({
  textDecoration: 'none',
  cursor: 'pointer',
})

Link.defaultProps = Text.defaultProps
