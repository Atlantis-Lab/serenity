import styled                          from '@emotion/styled'
import document                        from 'global/document'
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/sort-comp */
import React, { Component }            from 'react'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'
import { Motion, spring }              from 'react-motion'
import { createPortal }                from 'react-dom'

import {
  isClientSide,
  isDirectionBottom,
  isDirectionLeft,
  isDirectionRight,
  isDirectionTop,
} from './helpers'

const StyledDragDrawer = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  display: 'flex',
  justifyContent: 'center',
  flexShrink: 0,
  alignItems: 'center',

  zIndex: 11,
  transition: 'background-color 0.2s linear',

  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
})

interface DragDrawerProps {
  open: boolean
  disable: boolean
  children: object | [] | JSX.Element
  onRequestClose: () => void
  onDrag: (e) => void
  onOpen: () => void
  allowClose: boolean
  notifyWillClose: (e) => void
  direction: string
  modalElementClass: string
  containerElementClass: string
  getContainerRef: () => void
  getModalRef: (e) => {}
  dontApplyListeners: boolean
  id: string
  parentElement: any
}

export default class DragDrawer extends Component<DragDrawerProps> {
  static defaultProps = {
    notifyWillClose: () => {},
    onOpen: () => {},
    onDrag: () => {},
    onRequestClose: () => {},
    getContainerRef: () => {},
    getModalRef: () => {},
    direction: 'bottom',
    parentElement: document.body,
    allowClose: true,
    dontApplyListeners: false,
    containerElementClass: '',
    modalElementClass: '',
  }

  state = {
    /* eslint-disable react/destructuring-assignment */
    open: this.props.open,
    disableDrag: this.props.disable,
    /* eslint-enable react/destructuring-assignment */
    thumb: 0,
    start: 0,
    position: 0,
    listenersAttached: false,
  }

  drawer

  MAX_NEGATIVE_SCROLL = 20

  SCROLL_TO_CLOSE = 75

  ALLOW_DRAWER_TRANSFORM = true

  NEW_POSITION

  MOVING_POSITION

  NEGATIVE_SCROLL

  componentDidUpdate(prevProps) {
    const { open, onOpen } = this.props
    // in the process of closing the drawer
    if (!open && prevProps.open) {
      this.removeListeners()

      setTimeout(() => {
        this.setState(() => ({
          open: false,
        }))
      }, 300)
    }

    if (this.drawer) {
      this.getNegativeScroll(this.drawer)
    }

    // in the process of opening the drawer
    if (open && !prevProps.open) {
      onOpen()
      /* eslint-disable-next-line react/no-did-update-set-state */
      this.setState(() => ({
        open: true,
      }))
    }
  }

  componentWillUnmount() {
    this.removeListeners()
  }

  getPosition(hiddenPosition) {
    const { position } = this.state
    const { direction } = this.props

    if (isDirectionRight(direction)) {
      return hiddenPosition - position
    }
    return position
  }

  attachListeners = (drawer) => {
    const { dontApplyListeners, getModalRef, direction } = this.props
    const { listenersAttached } = this.state

    // only attach listeners once as this function gets called every re-render
    if (!drawer || listenersAttached || dontApplyListeners) return

    this.drawer = drawer
    getModalRef(drawer)

    this.drawer.addEventListener('touchend', this.release)
    this.drawer.addEventListener('touchmove', this.drag)
    this.drawer.addEventListener('touchstart', this.tap)

    let position = 0

    if (isDirectionRight(direction)) {
      position = drawer.scrollWidth
    }

    this.setState({ listenersAttached: true, position }, () => {
      setTimeout(() => {
        // trigger reflow so webkit browsers calculate height properly 😔
        // https://bugs.webkit.org/show_bug.cgi?id=184905
        this.drawer.style.display = 'none'
        void this.drawer.offsetHeight /* eslint-disable-line no-void */
        this.drawer.style.display = ''
      }, 300)
    })
  }

  removeListeners = () => {
    if (!this.drawer) return

    this.drawer.removeEventListener('touchend', this.release)
    this.drawer.removeEventListener('touchmove', this.drag)
    this.drawer.removeEventListener('touchstart', this.tap)

    this.setState({ listenersAttached: false })
  }

  tap = (event) => {
    const { pageY, pageX } = event.touches[0]
    const { direction } = this.props

    const start = isDirectionBottom(direction) || isDirectionTop(direction) ? pageY : pageX

    // reset NEW_POSITION and MOVING_POSITION
    this.NEW_POSITION = 0
    this.MOVING_POSITION = 0

    this.setState(() => ({
      thumb: start,
      start,
    }))
  }

  drag = (event) => {
    const { direction, notifyWillClose, onDrag } = this.props
    const { thumb, position } = this.state
    const { pageY, pageX } = event.touches[0]

    const movingPosition = isDirectionBottom(direction) || isDirectionTop(direction) ? pageY : pageX
    const delta = movingPosition - thumb
    const newPosition = isDirectionBottom(direction) ? position + delta : position - delta

    if (newPosition > 0 && this.ALLOW_DRAWER_TRANSFORM) {
      // stop android's pull to refresh behavior
      event.preventDefault()

      onDrag({ newPosition })
      // we set this, so we can access it in shouldWeCloseDrawer. Since setState is async, we're not guranteed we'll have the
      // value in time
      this.MOVING_POSITION = movingPosition
      this.NEW_POSITION = newPosition

      let positionThreshold = 0

      if (isDirectionRight(direction)) {
        positionThreshold = this.drawer.scrollWidth
      }

      if (newPosition < positionThreshold && this.shouldWeCloseDrawer()) {
        notifyWillClose(true)
      } else {
        notifyWillClose(false)
      }

      // not at the bottom
      if (this.NEGATIVE_SCROLL < newPosition) {
        this.setState(() => ({
          thumb: movingPosition,
          position: positionThreshold > 0 ? Math.min(newPosition, positionThreshold) : newPosition,
        }))
      }
    }
  }

  release = () => {
    const { direction } = this.props

    if (this.shouldWeCloseDrawer()) {
      this.hideDrawer()
    } else {
      let newPosition = 0

      if (isDirectionRight(direction)) {
        newPosition = this.drawer.scrollWidth
      }

      this.setState(() => ({
        position: newPosition,
      }))
    }
  }

  getNegativeScroll = (element) => {
    const { direction } = this.props
    const size = this.getElementSize()

    if (isDirectionBottom(direction) || isDirectionTop(direction)) {
      // @ts-ignore
      this.NEGATIVE_SCROLL = size - element.scrollHeight - this.MAX_NEGATIVE_SCROLL
    } else {
      // @ts-ignore
      this.NEGATIVE_SCROLL = size - element.scrollWidth - this.MAX_NEGATIVE_SCROLL
    }
  }

  hideDrawer = () => {
    const { allowClose, onRequestClose, direction } = this.props

    let defaultPosition = 0

    if (isDirectionRight(direction)) {
      defaultPosition = this.drawer.scrollWidth
    }

    if (allowClose === false) {
      // if we aren't going to allow close, let's animate back to the default position
      return this.setState(() => ({
        position: defaultPosition,
        thumb: 0,
      }))
    }

    this.setState(() => ({
      position: defaultPosition,
    }))

    // cleanup
    this.removeListeners()
    onRequestClose()
    return undefined
  }

  shouldWeCloseDrawer = () => {
    const { start: touchStart } = this.state
    const { direction } = this.props

    let initialPosition = 0

    if (isDirectionRight(direction)) {
      initialPosition = this.drawer.scrollWidth
    }

    if (this.MOVING_POSITION === initialPosition) return false

    if (isDirectionRight(direction)) {
      return (
        this.NEW_POSITION < initialPosition &&
        this.MOVING_POSITION - touchStart > this.SCROLL_TO_CLOSE
      )
    }
    if (isDirectionLeft(direction)) {
      return (
        this.NEW_POSITION >= initialPosition &&
        touchStart - this.MOVING_POSITION > this.SCROLL_TO_CLOSE
      )
    }
    if (isDirectionTop(direction)) {
      return (
        this.NEW_POSITION >= initialPosition &&
        touchStart - this.MOVING_POSITION > this.SCROLL_TO_CLOSE
      )
    }
    return (
      this.NEW_POSITION >= initialPosition &&
      this.MOVING_POSITION - touchStart > this.SCROLL_TO_CLOSE
    )
  }

  getDrawerTransform = (value) => {
    const { direction } = this.props
    if (isDirectionBottom(direction)) {
      return { transform: `translate3d(0, ${value}px, 0)` }
    }
    if (isDirectionTop(direction)) {
      return { transform: `translate3d(0, -${value}px, 0)` }
    }
    if (isDirectionLeft(direction)) {
      return { transform: `translate3d(-${value}px, 0, 0)` }
    }
    if (isDirectionRight(direction)) {
      return { transform: `translate3d(${value}px, 0, 0)` }
    }
    return undefined
  }

  getElementSize = () => {
    const { direction } = this.props
    if (isClientSide()) {
      return isDirectionBottom(direction) || isDirectionTop(direction)
        ? window.innerHeight
        : window.innerWidth
    }
    return undefined
  }

  preventDefault = (event) => event.preventDefault()

  stopPropagation = (event) => event.stopPropagation()

  render() {
    const {
      containerElementClass,
      id,
      getContainerRef,
      direction,
      parentElement,
      children,
      modalElementClass,
      open,
    } = this.props

    const { open: stateOpen, disableDrag } = this.state

    const opened = stateOpen && open

    // If drawer isn't open or in the process of opening/closing, then remove it from the DOM
    // also, if we're not client side we need to return early because createPortal is only
    // a clientside method
    if ((!stateOpen && !open) || !isClientSide()) {
      return null
    }

    const hiddenPosition = this.getElementSize()

    const position = this.getPosition(hiddenPosition)

    // Style object for the container element
    let containerStyle = {
      backgroundColor: `rgba(55, 56, 56, ${opened ? 0.6 : 0})`,
    } as React.CSSProperties

    // If direction is right, we set the overflowX property to 'hidden' to hide the x scrollbar during
    // the sliding animation
    if (isDirectionRight(direction)) {
      containerStyle = {
        ...containerStyle,
        overflowX: 'hidden',
      }
    }

    return createPortal(
      <ScrollLock>
        <Motion
          style={{
            // @ts-ignore
            translate: spring(opened ? position : hiddenPosition),
          }}
          defaultStyle={{
            // @ts-ignore
            translate: hiddenPosition,
          }}
        >
          {({ translate }) => (
            <StyledDragDrawer
              id={id}
              style={containerStyle}
              onClick={this.hideDrawer}
              onKeyDown={this.hideDrawer}
              className={containerElementClass || ''}
              ref={getContainerRef}
            >
              <div
                onClick={this.stopPropagation}
                onKeyDown={this.stopPropagation}
                style={this.getDrawerTransform(translate)}
                ref={disableDrag ? undefined : this.attachListeners}
                className={modalElementClass || ''}
              >
                {/* @ts-ignore */}
                <TouchScrollable>{children}</TouchScrollable>
              </div>
            </StyledDragDrawer>
          )}
        </Motion>
      </ScrollLock>,
      parentElement
    )
  }
}
