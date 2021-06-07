import gql          from 'graphql-tag'

import { useQuery } from '@apollo/client'

export const query = gql`
  query SearchSpecialists($filters: SearchSpecialistsFilter, $query: String!) {
    search {
      specialists(filters: $filters, query: $query) {
        rows {
          id
          specialisation {
            main {
              name
            }
            additional {
              name
            }
          }
          description
          interaction {
            formOfWork
            name
          }
          profile {
            photo {
              url
            }
            personalInformation {
              firstName
              lastName
            }
          }
          portfolio {
            name
            images {
              id
              url
            }
          }
          rating
        }
      }
    }
  }
`

export const useData = (searchQuery, searchCategory) => {
  const { data = {} }: any = useQuery(query, {
    variables: {
      query: searchQuery,
      filters: searchCategory
        ? {
            specialisationId: searchCategory,
          }
        : null,
    },
  })

  return (data && data.search && data.search.specialists && data.search.specialists.rows) || []
}
