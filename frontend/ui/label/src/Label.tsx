import styled         from '@emotion/styled'
import { typography } from 'styled-system'
import { switchProp } from 'styled-tools'

interface LabelProps {
  fontFamily?: string
  fontWeight?: string
  color?: string
  size?: string
}

const color = switchProp('color', ({ theme }: any) => ({
  black: {
    background: theme.colors.black,
    color: theme.colors.white,
  },
}))

const size = switchProp('size', () => ({
  normal: {
    borderRadius: 6,
    height: 32,
    padding: '0 11px',
    fontSize: 21,
  },
  small: {
    borderRadius: 6,
    height: 24,
    padding: '0 8px',
    fontSize: 14,
  },
}))

const Label = styled.div<LabelProps>(
  () => ({
    display: 'flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    lineHeight: 1,
    whiteSpace: 'nowrap',
  }),
  typography,
  color,
  size
)

Label.defaultProps = {
  color: 'black',
  size: 'normal',
  fontFamily: 'primary',
  fontWeight: 'bold',
}

export { Label }
