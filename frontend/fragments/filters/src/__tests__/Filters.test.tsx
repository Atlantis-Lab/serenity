import React              from 'react'

import { MockedProvider } from '@apollo/react-testing'
import { ThemeProvider }  from '@ui/theme'
import { render }         from '@testing-library/react'

import Filters            from '..'
import { query }          from '../useData'

const mocks = [
  {
    request: { query },
    result: {
      data: {
        categoryGroups: {
          rows: [
            {
              id: 1,
              name: 'name',
              children: [
                {
                  id: 1,
                  name: 'name',
                },
              ],
            },
          ],
        },
      },
    },
  },
]

describe('Filters fragment', () => {
  describe('snapshots', () => {
    it('should match latest render snapshot', () => {
      const { asFragment } = render(
        <MockedProvider mocks={mocks} addTypename={false}>
          <ThemeProvider>
            <Filters />
          </ThemeProvider>
        </MockedProvider>
      )

      expect(asFragment()).toMatchSnapshot()
    })
  })
})
