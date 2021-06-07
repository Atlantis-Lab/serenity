import Cookies                         from 'universal-cookie'
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/sort-comp */
import React, { Component }            from 'react'
import { LocaleProvider, LocaleStore } from '@atls/react-locale'
import { IntlProvider }                from 'react-intl'

const DEFAULT_LOCALE = 'ru'

declare global {
  interface Window {
    // @ts-ignore
    __NEXT_DATA__: any
  }
}

type Props = {
  messages: any
}

type State = {
  locale: string
  messages: any
}

type Options = {
  default?: string
  supported?: string[]
  load?: any
}

export const withIntl =
  ({
    default: defaultLocale = DEFAULT_LOCALE,
    supported: supportedLocales = [],
    load = (locale: string) => ({}),
  }: Options) =>
  (WrapperComponent) =>
    class WithIntl extends Component<Props, State> {
      store: LocaleStore

      static async getInitialProps(context) {
        let props = {}

        const {
          ctx: { req, res },
        } = context

        if (WrapperComponent.getInitialProps) {
          props = await WrapperComponent.getInitialProps(context)
        }

        if (!(process as any).browser) {
          let locale = defaultLocale

          if (!req.acceptsLanguages) {
            return {
              ...props,
              locale: defaultLocale,
              messages: {},
            }
          }

          const acceptLang =
            typeof req.acceptsLanguages === 'function' &&
            req.acceptsLanguages(defaultLocale, ...supportedLocales)

          if (supportedLocales.includes(acceptLang)) {
            locale = acceptLang
          }

          const cookies = new Cookies(typeof req.get === 'function' && req.get('cookie'))

          if (cookies.get('locale')) {
            if (supportedLocales.includes(cookies.get('locale'))) {
              locale = cookies.get('locale')
            }
          } else if (!res.headersSent) {
            res.cookie('locale', locale)
          }

          const messages = load ? await load(locale) : {}

          return {
            ...props,
            locale,
            messages,
          }
        }

        return {
          ...props,
          locale: window.__NEXT_DATA__.props.locale,
          messages: window.__NEXT_DATA__.props.messages,
        }
      }

      constructor(props) {
        super(props)

        this.state = {
          locale: props.locale,
          messages: props.messages,
        }

        this.store = new LocaleStore(props.locale, supportedLocales)
      }

      onChange = async (locale) => {
        const messages = load ? await load(locale) : {}

        const cookies = new Cookies()
        cookies.set('locale', locale)

        this.setState({ locale, messages })
      }

      componentDidMount() {
        this.store.addChangeListener(this.onChange)
      }

      componentWillUnmount() {
        this.store.removeChangeListener(this.onChange)
      }

      render() {
        const { locale, messages } = this.state
        return (
          <LocaleProvider value={this.store}>
            <IntlProvider locale={locale} messages={messages} defaultLocale={defaultLocale}>
              <WrapperComponent {...this.props} locale={locale} />
            </IntlProvider>
          </LocaleProvider>
        )
      }
    }
