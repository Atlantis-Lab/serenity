import gql          from 'graphql-tag'

import { useQuery } from '@apollo/client'

export const queryProjects = gql`
  query Projects($filters: ProjectsFilter) {
    projects(filters: $filters) {
      rows {
        name
        status
        category {
          name
        }
        description
        address {
          formatted
        }
        beginningOfWork
        photos {
          id
          url
        }
        publicationDate
        budget
        worksheet
        legalEntitiesOnly
        views
        replyCount
        owner {
          member {
            openProjects
            completedProjects
          }
          activity {
            last
          }
          profile {
            personalInformation {
              firstName
              lastName
            }
            photo {
              url
            }
            address {
              formatted
            }
          }
        }
      }
    }
  }
`

export const queryReplies = gql`
  query Me($projectId: ID) {
    me {
      profile {
        type
        photo {
          url
        }
      }
      replies(projectId: $projectId) {
        id
        status
        discussion {
          id
          messages {
            id
            content
            author {
              photo {
                url
              }
              personalInformation {
                firstName
                lastName
              }
            }
            member {
              id
              rating
              interaction {
                formOfWork
                name
              }
              specialisation {
                main {
                  name
                }
                additional {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

export const useDataProjects = (id) => {
  const { data } = useQuery(queryProjects, {
    variables: {
      filters: {
        id,
      },
    },
  })

  return (data && data.projects && data.projects.rows[0]) || {}
}

export const useDataReplies = (id) => {
  const { data } = useQuery(queryReplies, {
    variables: {
      projectId: id,
    },
  })

  return (data && data.me && { profile: data.me.profile, replies: data.me.replies }) || {}
}
