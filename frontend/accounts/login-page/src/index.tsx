import React, { useCallback } from 'react'

import { LoginPage }          from './LoginPage'
import { Seo }                from './Seo'

export default () => {
  const onBack = useCallback(() => {
    window.location.href = `${window.location.origin.replace('accounts.', '')}`
  }, [])

  return (
    <>
      <Seo />
      <LoginPage onBack={onBack} />
    </>
  )
}
