import styled     from '@emotion/styled'
import { ifProp } from 'styled-tools'

interface SidebarProps {
  children: any
  href?: string
  active?: boolean
}

export const SidebarLink = styled.a<SidebarProps>(
  ({ theme }: any) => ({
    display: 'flex',
    alignItems: 'center',
    minHeight: 56,
    width: '100%',
    padding: '5px 24px',
    boxSizing: 'border-box',
    fontFamily: theme.fonts.primary,
    fontWeight: theme.fontWeights.medium,
    fontSize: theme.fontSizes.regular,
    lineHeight: theme.lineHeights.extra,
    textDecoration: 'none',
    outline: 0,
    color: theme.colors.stormdust,
    '&:hover': {
      color: theme.colors.black,
    },
  }),
  ifProp('active', ({ theme }: any) => ({
    color: theme.colors.black,
    cursor: 'auto',
  }))
)
