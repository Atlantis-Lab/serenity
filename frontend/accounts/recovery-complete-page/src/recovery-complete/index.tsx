import React                from 'react'
import { useIntl }          from 'react-intl'

import { RecoveryComplete } from './RecoveryComplete'

export default (props: any) => {
  const intl = useIntl()

  return <RecoveryComplete intl={intl} {...props} />
}
