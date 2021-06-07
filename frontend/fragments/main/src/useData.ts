import gql          from 'graphql-tag'

import { useQuery } from '@apollo/client'

export const query = gql`
  query Categories {
    categories {
      rows {
        id
        name
      }
    }
  }
`

export const useData = () => {
  const { data } = useQuery(query)

  return data && data.categories ? data.categories.rows : []
}
