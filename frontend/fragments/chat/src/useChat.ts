import gql                                    from 'graphql-tag'
/* eslint-disable no-else-return */
import { useCallback, useEffect, useReducer } from 'react'

import { useMutation, useQuery }              from '@apollo/client' // eslint-disable-line import/no-extraneous-dependencies

export const query = gql`
  query Me {
    me {
      discussions {
        id
        recipient {
          id
          profile {
            photo {
              url
            }
            personalInformation {
              firstName
              lastName
            }
          }
          member {
            interaction {
              formOfWork
              name
            }
          }
        }
        messages {
          id
          content
          read
          sendDate
          member {
            id
          }
        }
      }
    }
  }
`

const mutation = gql`
  mutation AddDiscussionMessage($input: AddDiscussionMessageInput!) {
    addDiscussionMessage(input: $input) {
      result {
        id
      }
    }
  }
`

const initialState = {
  messages: {},
  discussions: [],
}

const reducer = (state, action) => {
  if (action.type === 'CHANGE') {
    return {
      ...state,
      [action.field]: action.value,
    }
  } else if (action.type === 'ADD') {
    const { messages, discussions } = state

    messages[action.newChat.id] = ''
    discussions.push({
      id: action.newChat.id,
      recipient: {
        id: action.newChat.id,
        profile: {
          photo: {
            url: action.newChat.photo || null,
          },
          personalInformation: {
            firstName: action.newChat.firstName,
            lastName: action.newChat.lastName,
          },
        },
      },
      messages: [],
    })

    return {
      ...state,
      messages: { ...state.messages, [action.id]: action.value },
    }
  } else if (action.type === 'CHANGE_MESSAGES') {
    return {
      ...state,
      messages: { ...state.messages, [action.id]: action.value },
    }
  } else if (action.type === 'LOAD') {
    const messages = {}
    const discussions = {}
    action.discussions.forEach((item) => {
      messages[item.recipient.id] = ''
      discussions[item.recipient.id] = item
    })

    return {
      ...state,
      discussions: Object.keys(discussions).map((item) => discussions[item]),
      messages,
    }
  }

  return state
}

const REFETCH_TIMEOUT = 10 * 1000

export const useChat = () => {
  const { data = {}, refetch }: any = useQuery(query)

  useEffect(() => {
    const pool = async () => {
      if (refetch) {
        try {
          await refetch()
        } catch (error) {
          console.log(error) // eslint-disable-line
        }
      }

      setTimeout(() => pool(), REFETCH_TIMEOUT)
    }

    setTimeout(() => pool(), REFETCH_TIMEOUT)
  }, [refetch])

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (data.me) {
      dispatch({ type: 'LOAD', discussions: data.me.discussions })
    }
  }, [data.me])

  const onChangeMessage = useCallback(
    (value, id) => dispatch({ type: 'CHANGE_MESSAGES', id, value }),
    []
  )

  function onAddChat(value) {
    if (value.id && !Object.keys(state.messages).includes(value.id)) {
      dispatch({ type: 'ADD', newChat: value })
    }
  }

  const [saveMessage, { data: messageData, loading }] = useMutation<any>(mutation)

  const onSave = (recipientId) => {
    saveMessage({
      variables: {
        input: {
          recipientId,
          message: state.messages[recipientId],
        },
      },
      refetchQueries: ['Me'],
    })
  }

  const responseMessage = messageData && messageData.addDiscussionMessage

  const errors = (responseMessage && responseMessage.errors) || {}

  return {
    ...state,
    loading,
    errors,
    onChangeMessage,
    onSave,
    onAddChat,
  }
}
