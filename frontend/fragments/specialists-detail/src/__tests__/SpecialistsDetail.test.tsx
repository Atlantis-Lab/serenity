import React                     from 'react'
import { IntlProvider, useIntl } from 'react-intl'

import { ThemeProvider }         from '@ui/theme'
import { render }                from '@testing-library/react'

import { SpecialistsDetail }     from '../SpecialistsDetail'

const TestComponent = () => {
  const intl = useIntl()

  return <SpecialistsDetail intl={intl} />
}

describe('Specialists detail', () => {
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
