import styled                               from '@emotion/styled'
import { color, space, system, typography } from 'styled-system'

export const Text = styled.span(
  system({
    wordBreak: true,
    whiteSpace: true,
    textTransform: true,
    textOverflow: true,
    cursor: true,
  }),
  color,
  space,
  typography
)

Text.defaultProps = {
  fontFamily: 'primary',
  fontWeight: 'normal',
  fontSize: 'normal',
}
