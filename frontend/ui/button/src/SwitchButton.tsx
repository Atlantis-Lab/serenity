import styled                            from '@emotion/styled'
import React, { Children, cloneElement } from 'react'
import { flexbox }                       from 'styled-system'
import { switchProp }                    from 'styled-tools'

const base: any = ({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  border: theme.borders.white,
  borderRadius: theme.radii.extra,
})

const colors = switchProp('color', ({ theme }: any) => ({
  stormdust: {
    background: theme.colors.stormdust,
  },
  transparent: {
    background: 'transparent',
  },
}))

const StyledSwitchButton = styled.div(base, colors)

const SwitchButtonItem = styled.div(flexbox)

const cloneChild = (child, value, onChange = (f) => f) => {
  const active = child.props.value === value

  const props = {
    fill: true,
    bg: active ? null : 'transparent',
    border: active ? null : 'none',
    color: active ? 'white' : 'stormdust',
    onClick: () => onChange(child.props.value),
  }

  return cloneElement(child, props)
}

const SwitchButton = ({ children, color, value, onChange }) => {
  const width = `${100 / Children.count(children)}%`

  return (
    <StyledSwitchButton color={color}>
      {Children.map(children, (child) => (
        <SwitchButtonItem flexBasis={width}>{cloneChild(child, value, onChange)}</SwitchButtonItem>
      ))}
    </StyledSwitchButton>
  )
}

SwitchButton.defaultProps = {
  color: 'stormdust',
}

export { SwitchButton }
