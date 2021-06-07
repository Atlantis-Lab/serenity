import React           from 'react'
import { withRouter }  from 'next/router'

import { Link }        from './Link'
import { NavLink }     from './NavLink'
import { SidebarLink } from './SidebarLink'

interface NextLinkProps {
  fontWeight?: string | number | string[] | number[]
  lineHeight?: string | number | string[] | number[]
  fontSize?: string | number | string[] | number[]
  color?: string
  href: string
  children: any
  router: any
}

interface NextSidebarLinkProps {
  href?: string
  children: any
  router: any
}

export const NextLink = withRouter(({ router, href, children, ...props }: NextLinkProps) => (
  <Link
    {...props}
    href={href}
    onClick={(event) => {
      event.preventDefault()

      if (router) {
        router.push(href)
      }
    }}
  >
    {children}
  </Link>
))

export const NextNavLink = withRouter(({ router, href, children, ...props }: NextLinkProps) => (
  <NavLink
    {...props}
    href={href}
    active={router && router.pathname === href}
    onClick={(event) => {
      event.preventDefault()

      if (router) {
        router.push(href)
      }
    }}
  >
    {children}
  </NavLink>
))

export const NextSidebarLink = withRouter(
  ({ router, href, children, ...props }: NextSidebarLinkProps) => (
    <SidebarLink
      {...props}
      href={href}
      active={router && router.asPath === href}
      onClick={(event) => {
        event.preventDefault()

        if (router && href) {
          router.push(href)
        }
      }}
    >
      {children}
    </SidebarLink>
  )
)
