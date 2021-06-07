import styled                 from '@emotion/styled'
import { ifProp, switchProp } from 'styled-tools'

const disabled = ifProp('disabled', { display: 'none' })

const directions = switchProp('direction', () => ({
  left: {
    left: 0,
    '@media screen and (min-width: 40em)': {
      left: '20px',
    },
  },
  right: {
    right: 0,
    '@media screen and (min-width: 40em)': {
      right: '20px',
    },
  },
}))

// @ts-ignore
export const SlideButton = styled.div<any>(
  {
    position: 'absolute',
    top: 'calc(50% - 20px)',
    width: 40,
    height: 40,
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
  },
  disabled,
  directions
)

export const CloseButton = styled.div({
  position: 'absolute',
  right: 20,
  top: 20,
  width: 40,
  height: 40,
  zIndex: 10,
  display: 'flex',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.8,
  },
})
