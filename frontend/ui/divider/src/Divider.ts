import styled     from '@emotion/styled'
import { ifProp } from 'styled-tools'

export interface DividerProps {
  vertical?: boolean
}

export const Divider = styled.div<DividerProps>(
  ({ theme }: any) => ({
    width: '100%',
    height: '1px',
    background: theme.colors.gallery,
  }),
  ifProp('vertical', {
    width: '1px',
    height: 'auto',
  })
)
