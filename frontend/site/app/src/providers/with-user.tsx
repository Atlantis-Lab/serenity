/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react'
import { UserProvider }     from '@atls/react-user'

declare global {
  interface Window {
    // @ts-ignore
    __NEXT_DATA__: any
  }
}

type Props = {
  user?: string
}

export const withUser = () => (WrapperComponent) =>
  class WithUser extends Component<Props> {
    static async getInitialProps(context) {
      let props = {}

      const {
        ctx: { req },
      } = context

      if (WrapperComponent.getInitialProps) {
        props = await WrapperComponent.getInitialProps(context)
      }

      let user = null

      if (req && typeof req.get === 'function' && req.get('x-user')) {
        user = req.get('x-user')
      } else if ((process as any).browser) {
        user = window.__NEXT_DATA__.props.user // eslint-disable-line prefer-destructuring
      }

      return {
        ...props,
        user,
      }
    }

    render() {
      const { user } = this.props

      return (
        <UserProvider value={user}>
          <WrapperComponent {...this.props} user={user} />
        </UserProvider>
      )
    }
  }
