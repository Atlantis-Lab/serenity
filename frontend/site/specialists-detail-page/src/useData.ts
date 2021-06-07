import gql          from 'graphql-tag'

import { useQuery } from '@apollo/client'

export const query = gql`
  query Specialists($filters: SpecialistsFilter) {
    specialists(filters: $filters) {
      rows {
        id
        reviewCount
        completedProjects
        specialisation {
          main {
            id
            name
          }
          additional {
            id
            name
          }
        }
        description
        interaction {
          numberOfEmployees
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
          contactInformation {
            phone {
              number
            }
          }
          address {
            formatted
          }
          website
        }
        portfolio {
          name
          images {
            id
            url
          }
        }
        rating
        reviews {
          id
          rating
          comment
          customer {
            personalInformation {
              firstName
              lastName
            }
            photo {
              url
            }
          }
        }
      }
    }
  }
`

export const useData = (id) => {
  const { data } = useQuery(query, {
    variables: {
      filters: {
        id,
      },
    },
  })

  return (data && data.specialists && data.specialists.rows[0]) || {}
}
