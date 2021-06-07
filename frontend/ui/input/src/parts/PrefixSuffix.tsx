import styled                       from '@emotion/styled'
import { styleFn }                  from 'styled-system'
import { switchProp }               from 'styled-tools'

import { PrefixProps, SuffixProps } from './types'

const base: styleFn = () => ({
  position: 'absolute',
  lineHeight: 0,
  zIndex: 2,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
})

const size = switchProp('size', () => ({
  normal: {
    width: 56,
  },
  medium: {
    width: 60,
  },
  large: {
    width: 64,
  },
}))

const offset: styleFn = switchProp('size', ({ prefix, suffix }: any) => ({
  normal: {
    paddingLeft: prefix ? 56 : null,
    paddingRight: suffix ? 56 : null,
  },
  medium: {
    paddingLeft: prefix ? 60 : null,
    paddingRight: suffix ? 60 : null,
  },
  large: {
    paddingLeft: prefix ? 64 : null,
    paddingRight: suffix ? 64 : null,
  },
}))

const Prefix = styled.span<PrefixProps>(
  {
    left: 0,
  },
  base,
  size
)

const Suffix = styled.span<SuffixProps>(
  {
    right: 0,
  },
  base,
  size
)

export { Prefix, Suffix, offset }
