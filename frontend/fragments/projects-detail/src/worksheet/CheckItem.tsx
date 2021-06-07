import React              from 'react'

import { Column, Layout } from '@ui/layout'
import { Text }           from '@ui/text'

export const CheckItem = ({ caption, data, values }) => {
  const keys = Object.keys(data)
  const filtered = keys.filter((key) => data[key])

  if (filtered.length !== 0) {
    return (
      <Layout>
        <Column>
          <Layout>
            <Text fontWeight='medium' color='stormdust' lineHeight='medium'>
              {caption}
            </Text>
          </Layout>
          <Layout flexBasis='6px' />
          <Layout>
            <Text fontSize='regular' lineHeight='medium'>
              {filtered.map((item) => values[item]).join(', ')}
            </Text>
          </Layout>
          <Layout flexBasis={27} />
        </Column>
      </Layout>
    )
  }
  return null
}
