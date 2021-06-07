import styled                                                                 from '@emotion/styled'
import { border, boxShadow, color, flexbox, layout, position, space, system } from 'styled-system'

export const Box = styled.div(
  system({
    boxSizing: true,
    overflowX: true,
    overflowY: true,
  }),
  layout,
  space,
  color,
  flexbox,
  boxShadow,
  position,
  border
)

Box.defaultProps = {
  display: 'flex',
  boxSizing: 'border-box',
}
