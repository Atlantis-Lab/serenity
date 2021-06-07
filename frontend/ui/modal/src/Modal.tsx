import ScrollLock             from 'react-scrolllock'
import styled                 from '@emotion/styled'
import document               from 'global/document'
import React, { useRef }      from 'react'
import { motion }             from 'framer-motion'
import { createPortal }       from 'react-dom'
import { ifProp, switchProp } from 'styled-tools'

interface ContainerProps {
  visible: boolean
  opacity: string
}

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const isVisible = ifProp('visible', { display: 'flex', zIndex: 10 })

const opacities = switchProp('opacity', () => ({
  small: {
    background: 'rgba(0, 0, 0, 0.2)',
  },
  large: {
    background: 'rgba(0, 0, 0, 0.8)',
  },
}))

// @ts-ignore
const StyledContainer = styled(motion.nav)<ContainerProps>(
  {
    width: '100%',
    height: '100%',
    position: 'fixed',
    display: 'none',
    background: 'rgba(0, 0, 0, 0.8)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'scroll',
    justifyContent: 'center',
    alignItems: 'center',
  },
  isVisible,
  opacities
)

export const Modal = ({ children, visible, onClose, opacity = 'large' }) => {
  const node = useRef(null)
  if (typeof window !== 'undefined') {
    const handleClick = (event) => {
      if (!(node.current && node.current.children[0].contains(event.target))) {
        onClose()
      }
    }

    if (visible) {
      return createPortal(
        <ScrollLock>
          <StyledContainer
            onClick={handleClick}
            animate={visible ? 'visible' : 'hidden'}
            variants={variants}
            visible={visible}
            opacity={opacity}
            ref={node}
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
