import ScrollLock                     from 'react-scrolllock'
import styled                         from '@emotion/styled'
import document                       from 'global/document'
import React, { useEffect, useState } from 'react'
import { motion }                     from 'framer-motion'
import { createPortal }               from 'react-dom'
import { color, layout, position }    from 'styled-system'

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      default: {
        duration: 0.3,
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
  hidden: ({ direction }) => ({
    y: direction === 'top' ? '-100%' : '100%',
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'linear',
    },
  }),
}

const StyledContainer = styled(motion.div)<any>(
  {
    backgroundColor: 'transparent',
    position: 'fixed',
    opacity: 0,
    display: 'flex',
    justifyContent: 'center',
    WebkitOverflowScrolling: 'touch',
    '@media (max-width: 640px)': {
      zIndex: 11,
    },
  },
  position,
  layout,
  color
)

export const SlideDrawer = ({ children, visible, lockScroll = true, direction = '', ...props }) => {
  const [open, setOpen] = useState(false)
  const [close, setClose] = useState(false)

  useEffect(() => {
    if (visible) setOpen(true)
  }, [visible])

  if (typeof window !== 'undefined') {
    if (!visible && open) {
      setOpen(false)
      setClose(true)
      setTimeout(() => {
        setClose(false)
      }, 300)
    }

    if (visible || close) {
      return createPortal(
        <ScrollLock isActive={lockScroll}>
          <StyledContainer
            animate={open ? 'visible' : 'hidden'}
            variants={variants}
            custom={direction}
            {...props}
          >
            {children}
          </StyledContainer>
        </ScrollLock>,
        document.body
      )
    }
  }
  return null
}

SlideDrawer.defaultProps = {
  visible: 'false',
  direction: 'top',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflowY: 'auto',
  bg: 'white',
}
