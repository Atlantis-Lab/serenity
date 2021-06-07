import React       from 'react'
import { useIntl } from 'react-intl'

import { Login }   from './Login'

export default () => {
  const intl = useIntl()

  return <Login intl={intl} />
}
