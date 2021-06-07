import styled                                             from '@emotion/styled'
import { ImgHTMLAttributes, createElement }               from 'react'
import { LayoutProps, SpaceProps, layout, space, system } from 'styled-system'

interface ImageProps
  extends SpaceProps,
    Omit<ImgHTMLAttributes<any>, 'width' | 'height'>,
    LayoutProps {
  pointerEvents?: string
  cursor?: string
  height?: any
  width?: any
}

const StyledImage = styled.img<any>(
  system({
    pointerEvents: true,
    cursor: true,
  }),
  layout,
  space
)

export const Image = (props: Partial<ImageProps>) => createElement(StyledImage, { ...props })
