import RcSelect                                              from 'rc-select'
import React                                                 from 'react'

import { ArrowDownIcon }                                     from '@ui/icons'

import { dropdownStyles, selectRoundedStyles, selectStyles } from './styles'

export const Select = ({
  children,
  invalid = false,
  multiple = false,
  rounded = false,
  ...props
}) => (
  <RcSelect
    className={`${selectStyles} ${rounded ? selectRoundedStyles : ''}`}
    // @ts-ignore
    dropdownClassName={dropdownStyles}
    showSearch={false}
    multiple={multiple}
    showArrow
    inputIcon={<ArrowDownIcon width={8} height={8} color='rgb(153, 153, 153)' />}
    style={invalid ? { borderColor: 'rgb(236,27,52)' } : {}}
    {...props}
  >
    {children}
  </RcSelect>
)
