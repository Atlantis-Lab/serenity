import React, { useCallback } from 'react'
import { useRouter }          from 'next/router'
import { useIntl }            from 'react-intl'

import { Main }               from './Main'
import { useData }            from './useData'

const MainFragment = () => {
  const intl = useIntl()
  const data = useData()
  const router = useRouter()

  const onSelectOption = useCallback(
    (value) => {
      router.push(value ? `/specialists?catId=${value}` : '/specialists')
    },
    [router]
  )

  const onSelectValue = useCallback(
    (value) => {
      router.push(value ? `/specialists?q=${value}` : '/specialists')
    },
    [router]
  )

  return (
    <Main intl={intl} data={data} onSelectOption={onSelectOption} onSelectValue={onSelectValue} />
  )
}

export default MainFragment
