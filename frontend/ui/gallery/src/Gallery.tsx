import styled                                             from '@emotion/styled'
import React, { useEffect, useRef, useState }             from 'react'
import { useSwipeable }                                   from 'react-swipeable'
import { ifProp }                                         from 'styled-tools'

import { ArrowBackwardIcon, ArrowForwardIcon, CloseIcon } from '@ui/icons'
import { Modal }                                          from '@ui/modal'
import { contentWidth, useWindowSize }                    from '@ui/utils'

import { CloseButton, SlideButton }                       from './Buttons'

interface GalleryProps {
  transition: boolean
}

const transition = ifProp('transition', { transition: '0.3s' })

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
})

const GalleryContainer = styled.div({
  maxWidth: 1200,
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  position: 'relative',
  paddingTop: 20,
  paddingBottom: 20,
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  '@media screen and (min-width: 40em)': {
    padding: 40,
  },
})

const Screen = styled.div({
  display: 'flex',
  maxWidth: '100%',
  maxHeight: '100%',
})

// @ts-ignore
const StyledGallery = styled.div<GalleryProps>(
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
  },
  transition
)

const Image = styled.img({
  maxWidth: '100%',
  maxHeight: '100%',
  pointerEvents: 'none',
})

const ImageContainer = styled.div({
  height: '100%',
  width: 'calc(100vw - 80px)',
  marginLeft: 40,
  marginRight: 40,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media screen and (min-width: 40em)': {
    width: 'calc(100vw - 220px)',
    maxWidth: 980,
    marginLeft: 70,
    marginRight: 70,
  },
})

const Name = styled.span(({ theme }: any) => ({
  fontFamily: theme.fonts.primary,
  fontSize: theme.fontSizes.regular,
  fontWeight: theme.fontWeights.medium,
  lineHeight: theme.lineHeights.extra,
  color: theme.colors.white,
  marginBottom: 20,
  paddingRight: 20,
  paddingLeft: 20,
  textAlign: 'center',
  '@media screen and (min-width: 40em)': {
    marginBottom: 40,
    paddingRight: 40,
    paddingLeft: 40,
  },
}))

export const BaseGallery = ({ images, name = '', onClose }) => {
  const [enableTransition, setEnableTransition] = useState(true)
  const [innerWidth, setInnerWidth] = useState(0)
  const [fullWidth, setFullWidth] = useState(0)
  const [buttonLeftDisabled, setButtonLeftDisabled] = useState(true)
  const [buttonRightDisabled, setButtonRightDisabled] = useState(images.length <= 1)
  const [left, setLeft] = useState(0)
  const containerNode = useRef(null)
  const screenNode = useRef(null)
  const { innerWidth: widthWindow } = useWindowSize()

  const setWidth = () => {
    setInnerWidth(contentWidth(containerNode.current))
    setFullWidth(contentWidth(screenNode.current))
  }

  useEffect(() => {
    setWidth()
  })

  useEffect(() => {
    window.addEventListener('resize', setWidth)
    return () => window.removeEventListener('resize', setWidth)
  }, [])

  const swiping = (data) => {
    if (innerWidth >= fullWidth) {
      return
    }
    let newLeft = 0
    newLeft = data.event.movementX * 2 + left

    if (newLeft >= -5) {
      setButtonLeftDisabled(true)
    } else {
      setButtonLeftDisabled(false)
    }

    if (fullWidth <= innerWidth - newLeft + 5) {
      setButtonRightDisabled(true)
    } else {
      setButtonRightDisabled(false)
    }

    if (newLeft >= 2 || fullWidth <= innerWidth - newLeft - 2) return

    setLeft(data.event.movementX * 2 + left)
    setEnableTransition(false)
  }

  const handleClick = (direction) => {
    setEnableTransition(true)
    let newLeft = 0
    if (direction === 'left') {
      if (left % innerWidth === 0) {
        newLeft = left + innerWidth
      } else {
        newLeft = left + Math.abs(left % innerWidth)
      }
    }
    if (direction === 'right') {
      if (left % innerWidth === 0) {
        newLeft = left - innerWidth
      } else {
        newLeft = left - (innerWidth - Math.abs(left % innerWidth))
      }
    }
    if (newLeft >= 0) {
      setButtonLeftDisabled(true)
      setButtonRightDisabled(false)
      setLeft(0)
      return
    }
    if (innerWidth - newLeft >= fullWidth) {
      setButtonRightDisabled(true)
      setButtonLeftDisabled(false)
      setLeft(innerWidth - fullWidth)
      return
    }

    setButtonRightDisabled(false)
    setButtonLeftDisabled(false)
    setLeft(newLeft)
  }

  const handlers = useSwipeable({
    onSwiping: (data) => ((widthWindow as any) >= 640 ? {} : swiping(data)),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true,
    delta: 15,
  })

  return (
    <Container>
      <GalleryContainer>
        <SlideButton
          onClick={() => handleClick('left')}
          disabled={buttonLeftDisabled}
          direction='left'
        >
          <ArrowBackwardIcon width={24} height={24} color='#FFF' />
        </SlideButton>
        <Screen ref={containerNode}>
          <StyledGallery
            {...handlers}
            ref={screenNode}
            style={{ left }}
            transition={enableTransition}
          >
            {images.map((image) => (
              <ImageContainer key={image.id}>
                <Image src={image.url} />
              </ImageContainer>
            ))}
          </StyledGallery>
        </Screen>
        <SlideButton
          onClick={() => handleClick('right')}
          disabled={buttonRightDisabled}
          direction='right'
        >
          <ArrowForwardIcon width={24} height={24} color='#FFF' />
        </SlideButton>
        <CloseButton onClick={onClose}>
          <CloseIcon width={24} height={24} />
        </CloseButton>
      </GalleryContainer>
      {name && <Name>{name}</Name>}
    </Container>
  )
}

export const Gallery = ({ images, name, visible, onClose }) => (
  <Modal visible={visible} onClose={onClose}>
    <BaseGallery images={images} name={name} onClose={onClose} />
  </Modal>
)
