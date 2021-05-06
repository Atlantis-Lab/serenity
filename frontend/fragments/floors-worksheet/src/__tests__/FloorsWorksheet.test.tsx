import React                     from 'react'
import { IntlProvider, useIntl } from 'react-intl'
import { render }                from '@testing-library/react'

import { ThemeProvider }         from '@ui/theme'

import { FloorsWorksheet }       from '../FloorsWorksheet'

const TestComponent = () => {
  const intl = useIntl()

  return <FloorsWorksheet intl={intl} />
}

describe('Floors worksheet', () => {
  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const { asFragment } = render(
        <IntlProvider locale='ru' defaultLocale='ru' messages={{}}>
          <ThemeProvider>
            <TestComponent />
          </ThemeProvider>
        </IntlProvider>
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })
})