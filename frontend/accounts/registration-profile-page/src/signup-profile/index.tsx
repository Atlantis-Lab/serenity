import React                from 'react'
import { useIntl }          from 'react-intl'

import { SignUpProfile }    from './SignUpProfile'
import { useSignUpProfile } from './useSignUpProfile'

export default () => {
  const intl = useIntl()
  const data = useSignUpProfile()

  return <SignUpProfile intl={intl} {...data} />
}
