import gql          from 'graphql-tag'

import { useQuery } from '@apollo/client'

export const query = gql`
  query SearchProjects($filters: SearchProjectsFilter, $query: String!) {
    search {
      projects(filters: $filters, query: $query) {
        rows {
          id
          name
          category {
            id
            name
          }
          description
          budget
          legalEntitiesOnly
          views
          replyCount
          publicationDate
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
            categoryId: searchCategory,
          }
        : null,
    },
  })

  return (data && data.search && data.search.projects && data.search.projects.rows) || []
}
