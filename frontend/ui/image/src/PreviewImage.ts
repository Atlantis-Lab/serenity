import styled                        from '@emotion/styled'
import { background, layout, space } from 'styled-system'

export const PreviewImage = styled.div(
  ({ theme }) => ({
    width: 120,
    height: 120,
    border: theme.borders.gallery,
    boxSizing: 'border-box',
    display: 'flex',
    marginBottom: 10,
  }),
  layout,
  space,
  background
)

export const PreviewImageContainer = styled.div({
  boxSizing: 'border-box',
  flexDirection: 'column',
  display: 'flex',
  marginBottom: 15,
  marginRight: 24,
  '&:last-of-type': {
    marginRight: 0,
  },
})

PreviewImage.defaultProps = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}
