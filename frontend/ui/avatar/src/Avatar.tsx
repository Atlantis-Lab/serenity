import styled     from '@emotion/styled'
import { layout } from 'styled-system'

interface AvatarProps {
  color?: string
  width?: number | string | number[] | string[]
  height?: number | string | number[] | string[]
  src?: string
}

const Avatar = styled.div<AvatarProps>(
  ({ theme, color, src }: any) => ({
    background: src ? `url(${src})` : theme.colors[color],
    borderRadius: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }),
  layout
)

Avatar.defaultProps = {
  // @ts-ignore
  src: null,
  width: 40,
  height: 40,
  color: 'alto',
}

export { Avatar }
