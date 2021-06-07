import React        from 'react'
import { useIntl }  from 'react-intl'

import { Template } from './Template'

export default ({ url }) => {
  const data = url.query || {}
  const intl = useIntl()

  const link = `${process.env.ACCOUNTS_URL}/verify/${
    data && data.email && data.email.verificationToken
  }`

  return <Template {...data} link={link} intl={intl} />
}
