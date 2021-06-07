import gql                     from 'graphql-tag'
import { useEffect, useState } from 'react'

import { useQuery }            from '@apollo/client'

export const query = gql`
  query Me {
    me {
      profile {
        type
        photo {
          url
        }
        personalInformation {
          firstName
        }
      }
      member {
        interaction {
          formOfWork
          name
        }
        account {
          type
        }
      }
    }
  }
`

export const useProfile = () => {
  const [state, setProfile] = useState({})
  const { data = {} }: any = useQuery(query)

  useEffect(() => {
    if (data.me && data.me.profile) {
      setProfile({
        name:
          data.me.member && data.me.member.interaction.formOfWork === 'company'
            ? data.me.member.interaction.name
            : data.me.profile.personalInformation.firstName,
        account: data.me.member && data.me.member.account,
        type: data.me.profile.type,
        photo: data.me.profile.photo,
      })
    }
  }, [data.me])

  return state
}
