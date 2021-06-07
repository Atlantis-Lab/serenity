import React                        from 'react'

import { RegistrationCompletePage } from './RegistrationCompletePage'
import { Seo }                      from './Seo'

export default class Page extends React.Component {
  static async getInitialProps(context) {
    if (!(process as any).browser) {
      const host = context.req.headers['x-forwarded-host']

      return {
        accountUrl: `https://${host.replace('accounts.', 'cabinet.')}`,
        siteUrl: `https://${host.replace('accounts.', '')}`,
      }
    }

    return {}
  }

  render() {
    return (
      <>
        <Seo />
        <RegistrationCompletePage {...this.props} />
      </>
    )
  }
}
