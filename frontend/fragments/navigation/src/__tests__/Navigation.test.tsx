import React             from 'react'
import { IntlProvider }  from 'react-intl'

import { ThemeProvider } from '@ui/theme'
import { render }        from '@testing-library/react'

import Navigation        from '..'

describe('Navigation fragment', () => {
  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const { asFragment } = render(
        <IntlProvider locale='ru' defaultLocale='ru' messages={{}}>
          <ThemeProvider>
            <Navigation />
          </ThemeProvider>
        </IntlProvider>
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
