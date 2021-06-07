import styled                                              from '@emotion/styled'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSwipeable }                                    from 'react-swipeable'
import { layout }                                          from 'styled-system'
import { ifProp }                                          from 'styled-tools'

import { ArrowBackwardIcon, ArrowForwardIcon }             from '@ui/icons'
import { contentWidth, widthWithMargin }                   from '@ui/utils'

import { SlideButton }                                     from './SlideButton'

const transition = ifProp('transition', { transition: '0.3s' })

// @ts-ignore
const StyledCarousel = styled.div<any>(
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    '&:focus': {
      pointerEvents: 'none',
    },
  },
  transition
)

const Container = styled.div<any>(({ show }) => ({
  width: '100%',
  display: show ? 'flex' : 'none',
  position: 'relative',
}))

const Screen = styled.div(
  {
    display: 'flex',
  },
  layout
)

export const Carousel = ({ children, disableButton = false }) => {
  const [enableTransition, setEnableTransition] = useState(true)
  const [innerWidth, setInnerWidth] = useState(0)
  const [fullWidth, setFullWidth] = useState(0)
  const [childWidth, setChildWidth] = useState([])
  const [buttonLeftDisabled, setButtonLeftDisabled] = useState(true)
  const [buttonRightDisabled, setButtonRightDisabled] = useState(false)
  const [left, setLeft] = useState(0)
  const containerNode = useRef(null)
  const screenNode = useRef(null)

  const setWidth = useCallback(() => {
    setInnerWidth(contentWidth(containerNode.current))
    setChildWidth(
      // @ts-ignore
      Array.prototype.map.call(screenNode.current.children, (item) => widthWithMargin(item))
    )
    if (!disableButton && innerWidth === fullWidth) {
      setButtonRightDisabled(true)
    }
    if (!disableButton && innerWidth !== fullWidth) {
      setButtonRightDisabled(false)
    }
  }, [disableButton, innerWidth, fullWidth])

  useEffect(() => {
    setFullWidth(contentWidth(screenNode.current))
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setWidth()
    }, 100)
  }, [fullWidth, setWidth])

  useEffect(() => {
    if (!disableButton) {
      window.addEventListener('resize', setWidth)
      return () => window.removeEventListener('resize', setWidth)
    }
    return undefined
  }, [disableButton, setWidth])

  const swiping = (data) => {
    if (innerWidth >= fullWidth) {
      return
    }
    let newLeft = 0
    newLeft = data.event.movementX * 2 + left

    if (!disableButton) {
      if (newLeft >= -10) {
        setButtonLeftDisabled(true)
      } else {
        setButtonLeftDisabled(false)
      }

      if (fullWidth <= innerWidth - newLeft + 10) {
        setButtonRightDisabled(true)
      } else {
        setButtonRightDisabled(false)
      }
    }

    if (newLeft >= 2 || fullWidth <= innerWidth - newLeft - 2) return

    setLeft(data.event.movementX * 2 + left)
    setEnableTransition(false)
  }

  const handleClick = (direction) => {
    let activeSlide = 0
    let activeLeft = 0
    for (;;) {
      if (left >= activeLeft && direction === 'left') break
      if (left > activeLeft && direction === 'right') break
      if (activeSlide > 100) break
      activeLeft -= childWidth[activeSlide]
      activeSlide += 1
    }
    setEnableTransition(true)
    let newLeft = 0
    if (direction === 'left') {
      childWidth.forEach((item, index) => {
        if (activeSlide - 1 > index) {
          newLeft -= item
        }
      })
    }
    if (direction === 'right') {
      childWidth.forEach((item, index) => {
        if (activeSlide > index) {
          newLeft -= item
        }
      })
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
    onSwiping: (data) => swiping(data),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true,
    delta: 15,
  })

  return (
    <Container show={children.length !== 0}>
      <SlideButton
        onClick={() => handleClick('left')}
        disabled={disableButton || buttonLeftDisabled}
        direction='left'
      >
        <ArrowBackwardIcon width={24} height={24} />
      </SlideButton>
      <Screen ref={containerNode} maxWidth='100%'>
        <StyledCarousel
          {...handlers}
          ref={screenNode}
          style={{ left }}
          transition={enableTransition}
        >
          {children}
        </StyledCarousel>
      </Screen>
      <SlideButton
        onClick={() => handleClick('right')}
        disabled={disableButton || buttonRightDisabled}
        direction='right'
      >
        <ArrowForwardIcon width={24} height={24} />
      </SlideButton>
    </Container>
  )
}
