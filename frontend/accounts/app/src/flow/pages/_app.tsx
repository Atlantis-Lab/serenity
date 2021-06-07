import App                                   from 'next/app'
import React                                 from 'react'
import compose                               from 'recompose/compose'
import { withHelmet }                        from '@atls/next-app-with-helmet'

import { withEmotion }                       from '../../providers'
import { withIntl }                          from '../../providers'

import { ThemeProvider, injectGlobalStyles } from '@ui/theme'

class AccountsApp extends App {
  static async getInitialProps({ Component, ctx }: any): Promise<any> {
    let props: any = {}

    if (Component.getInitialProps) {
      props = await Component.getInitialProps(ctx)
    }

    if (!(process as any).browser) {
      const host = ctx.req.headers['x-forwarded-host']

      props.accountUrl = `https://${host.replace('accounts.', 'cabinet.')}`
      props.siteUrl = `https://${host.replace('accounts.', '')}`
    }

    return props
  }

  render() {
    const { Component, ...props } = this.props

    return <Component {...props} />
  }
}

export const withProviders = compose(
  withIntl({
    default: 'ru',
  }),
  withEmotion({
    Provider: ThemeProvider,
    injectGlobalStyles,
  }),
  withHelmet()
)

export default withProviders(AccountsApp)
