import React                  from 'react'
import styled                 from '@emotion/styled'
import { styleFn }            from 'styled-system'
import { ifProp, switchProp } from 'styled-tools'

const base: styleFn = ({ theme }) => ({
  width: '100%',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: theme.colors.dimgray,
  zIndex: 10,
})

const sizes: styleFn = switchProp('size', {
  normal: {
    height: 56,
  },
})

const fixedPosition: styleFn = ifProp('fixed', { position: 'fixed' })

const Container = styled.div(
  {
    width: '100%',
  },
  sizes
)

const StyledNavigation = styled.div(base, sizes, fixedPosition)

const Navigation = ({ size, fixed, children }) => (
  <Container size={size}>
    <StyledNavigation fixed={fixed} size={size}>
      {children}
    </StyledNavigation>
  </Container>
)

Navigation.defaultProps = {
  size: 'normal',
  fixed: true,
  lift: false,
}

export { Navigation }
