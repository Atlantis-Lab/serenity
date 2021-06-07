/* eslint-disable @typescript-eslint/no-implied-eval */

import RcSelect                                                            from 'rc-select'
import styled                                                              from '@emotion/styled'
import React, { useState }                                                 from 'react'
import { switchProp }                                                      from 'styled-tools'

import { ArrowForwardIcon, SearchIcon }                                    from '@ui/icons'

import { dropdownStyles, selectSizeLarge, selectSizeNormal, selectStyles } from './styles'

interface IconProps {
  size: 'normal' | 'large'
}

const Container = styled.div({
  display: 'flex',
  position: 'relative',
  width: '100%',
})

const iconSize = switchProp('size', () => ({
  normal: {
    '@media (min-width: 40em)': {
      left: 20,
    },
  },
  large: {
    '@media (min-width: 40em)': {
      left: 24,
    },
  },
}))

const StyledSearchIcon = styled.div<IconProps>(
  {
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: 0,
    left: 16,
  },
  iconSize
)

export const Search = ({
  children,
  size = 'normal',
  multiple = true,
  defaultValue = '',
  onSearch = () => {},
  onSelect = () => {},
  onSelectValue,
  ...props
}: any) => {
  const [interval, setInterval] = useState(null)
  const [value, setValue] = useState(defaultValue)

  const fetchData = (fetchValue) => {
    if (interval) {
      // @ts-ignore
      clearTimeout(interval)
      setInterval(null)
    }

    // @ts-ignore
    setInterval(setTimeout(() => onSearch(fetchValue), 500))
  }

  const onChange = (changValue) => setValue(changValue)

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      if (onSelectValue) {
        onSelectValue(value)
      } else {
        onSelect(value)
      }
    }
  }

  return (
    <Container>
      <RcSelect
        className={`${selectStyles} ${size === 'normal' ? selectSizeNormal : selectSizeLarge}`}
        dropdownClassName={dropdownStyles}
        onSearch={fetchData}
        onSelect={onSelect}
        onChange={onChange}
        inputIcon={
          <ArrowForwardIcon
            width={24}
            height={24}
            onClick={() => (onSelectValue ? onSelectValue(value) : onSelect(value))}
          />
        }
        notFoundContent=''
        defaultActiveFirstOption={false}
        value={value}
        onInputKeyDown={onKeyDown}
        showSearch
        combobox
        {...props}
      >
        {children}
      </RcSelect>
      <StyledSearchIcon size={size}>
        <SearchIcon width={size === 'normal' ? 20 : 24} height={size === 'normal' ? 20 : 24} />
      </StyledSearchIcon>
    </Container>
  )
}
