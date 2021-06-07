import React           from 'react'
import styled          from '@emotion/styled'
import { boxShadow }   from 'styled-system'

import { StyledInput } from './parts'

const Input = (props) => (
  <StyledInput
    {...props}
    onChange={({ target }) => props.onChange && props.onChange(target.value)}
  />
)

const Textarea = styled(Input)(
  () => ({
    padding: '17px 20px',
    resize: 'none',
    height: 'auto',
  }),
  boxShadow
)

Textarea.defaultProps = {
  ...StyledInput.defaultProps,
  as: 'textarea',
  size: 'normal',
}

export { Textarea }
