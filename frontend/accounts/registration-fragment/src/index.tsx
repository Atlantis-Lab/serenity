import React            from 'react'
import { useIntl }      from 'react-intl'

import { Registration } from './Registration'

export default () => {
  const intl = useIntl()

  return <Registration intl={intl} />
}
