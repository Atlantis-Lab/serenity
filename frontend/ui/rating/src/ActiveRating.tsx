import React          from 'react'
import styled         from '@emotion/styled'
import { switchProp } from 'styled-tools'

import { StarIcon }   from '@ui/icons'

interface ContainerProps {
  color: string
}

interface StarContainerProps extends ContainerProps {
  size: string
  rating: number
}

const Container = styled.div<ContainerProps>(({ color }) => ({
  display: 'flex',
  '&:hover svg': {
    fill: color,
  },
  '& > div:hover ~ div > svg': {
    fill: '#CCCCCC',
  },
}))

const StarContainer = styled.div<StarContainerProps>(
  ({ rating, color }) => ({
    display: 'flex',
    '&:last-of-type': {
      paddingRight: 0,
    },
    '& > svg': {
      fill: '#CCCCCC',
      cursor: 'pointer',
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

export const ActiveRating = ({
  rating = 0,
  onChange = (el) => el,
  size = 'normal',
  color = '#999999',
}) => (
  <Container color={color}>
    <StarContainer size={size} rating={rating} color={color}>
      <StarIcon width='100%' height='100%' onClick={() => onChange(1)} />
    </StarContainer>
    <StarContainer size={size} rating={rating} color={color}>
      <StarIcon width='100%' height='100%' onClick={() => onChange(2)} />
    </StarContainer>
    <StarContainer size={size} rating={rating} color={color}>
      <StarIcon width='100%' height='100%' onClick={() => onChange(3)} />
    </StarContainer>
    <StarContainer size={size} rating={rating} color={color}>
      <StarIcon width='100%' height='100%' onClick={() => onChange(4)} />
    </StarContainer>
    <StarContainer size={size} rating={rating} color={color}>
      <StarIcon width='100%' height='100%' onClick={() => onChange(5)} />
    </StarContainer>
  </Container>
)
