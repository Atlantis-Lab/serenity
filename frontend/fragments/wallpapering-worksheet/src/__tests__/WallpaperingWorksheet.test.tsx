import React                     from 'react'
import { IntlProvider, useIntl } from 'react-intl'

import { ThemeProvider }         from '@ui/theme'
import { render }                from '@testing-library/react'

import { WallpaperingWorksheet } from '../WallpaperingWorksheet'

const TestComponent = () => {
  const intl = useIntl()

  return <WallpaperingWorksheet intl={intl} />
}

describe('Wallpapering worksheet', () => {
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
