import React                    from 'react'
import { useIntl }              from 'react-intl'

import { RegistrationComplete } from './RegistrationComplete'

export default (props: any) => {
  const intl = useIntl()

  return <RegistrationComplete intl={intl} {...props} />
}
