import React            from 'react'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import { Input }        from './Input'

const mask = createNumberMask({
  prefix: '',
  suffix: ' ₽',
  thousandsSeparatorSymbol: ' ',
})

export const PriceInput = ({ onChange = (a) => {}, ...props }) => {
  const onChangeFormatted = (value) => {
    onChange(typeof value === 'string' ? Number(value.replace(/\s|₽/g, '')) : value)
  }

  return <Input onChange={onChangeFormatted} mask={mask} {...props} />
}
