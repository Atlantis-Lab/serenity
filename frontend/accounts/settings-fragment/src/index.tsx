import React        from 'react'
import { useIntl }  from 'react-intl'

import { Settings } from './Settings'

export default () => {
  const intl = useIntl()

  return <Settings intl={intl} />
}
