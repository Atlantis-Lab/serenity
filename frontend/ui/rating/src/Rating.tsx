import React          from 'react'
import styled         from '@emotion/styled'
import { switchProp } from 'styled-tools'

import { StarIcon }   from '@ui/icons'

interface StarContainerProps {
  color: string
  size: string
  rating: number
}

const StarContainer = styled.div<StarContainerProps>(
  ({ rating, color }) => ({
    display: 'flex',
    '&:last-of-type': {
      paddingRight: 0,
    },
    '& > svg': {
      fill: '#CCCCCC',
    },
    [`&:nth-of-type(-n+${rating}) > svg`]: {
      fill: color,
    },
  }),
  switchProp('size', {
    normal: {
      paddingRight: '6px',
      width: 16,
      height: 16,
    },
    large: {
      paddingRight: '8px',
      width: 24,
      height: 24,
    },
  })
)

export const Rating = ({ rating = 0, size = 'normal', color = '#999999' }) => (
  <>
    <StarContainer size={size} rating={rating} color={color}>
      <StarIcon width='100%' height='100%' />
    </StarContainer>
    <StarContainer size={size} rating={rating} color={color}>
      <StarIcon width='100%' height='100%' />
    </StarContainer>
    <StarContainer size={size} rating={rating} color={color}>
      <StarIcon width='100%' height='100%' />
    </StarContainer>
    <StarContainer size={size} rating={rating} color={color}>
      <StarIcon width='100%' height='100%' />
    </StarContainer>
    <StarContainer size={size} rating={rating} color={color}>
      <StarIcon width='100%' height='100%' />
    </StarContainer>
  </>
)
