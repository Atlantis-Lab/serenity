import RcCollapse              from 'rc-collapse'
import React                   from 'react'

import { MinusIcon, PlusIcon } from '@ui/icons'

import { collapseStyles }      from './styles'

const expandIcon = ({ isActive }) => (
  <div className='arrow'>
    {isActive ? <MinusIcon width={16} height={16} /> : <PlusIcon width={16} height={16} />}
  </div>
)

export const Collapse = ({ children, ...props }) => (
  <RcCollapse className={`${collapseStyles}`} expandIcon={expandIcon} {...props}>
    {children}
  </RcCollapse>
)
