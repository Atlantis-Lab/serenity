import React        from 'react'
import { useIntl }  from 'react-intl'

import { Recovery } from './Recovery'

export default () => {
  const intl = useIntl()

  return <Recovery intl={intl} />
}
