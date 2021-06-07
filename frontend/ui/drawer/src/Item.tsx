import React          from 'react'
import styled         from '@emotion/styled'
import { withRouter } from 'next/router'

import { Link }       from '@ui/link'

interface ItemProps {
  href?: string
  children: any
  router: any
  icon?: any
  onClick?: () => void
}

const StyledItem = styled(Link)(({ theme }: any) => ({
  width: '100%',
  position: 'relative',
  boxSizing: 'border-box',
  padding: '20px',
  borderBottom: theme.borders.mercury,
  fontSize: theme.fontSizes.extra,
  color: theme.colors.stormdust,
  '&::first-letter': {
    textTransform: 'uppercase',
  },
}))

const StyledIcon = styled.div({
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  height: '100%',
  top: 0,
  right: 20,
})

export const Item = withRouter(({ router, href, children, icon, onClick, ...props }: ItemProps) => (
  <StyledItem
    {...props}
    href={href}
    active={router && router.pathname === href}
    onClick={
      onClick ||
      ((event) => {
        event.preventDefault()

        if (router) {
          router.push(href)
        }
      })
    }
  >
    {children}
    {icon && <StyledIcon>{icon}</StyledIcon>}
  </StyledItem>
))
