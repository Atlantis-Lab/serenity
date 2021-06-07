import gql                                              from 'graphql-tag'
/* eslint-disable no-else-return */
import { useCallback, useEffect, useReducer, useState } from 'react'

import { useMutation }                                  from '@apollo/client' // eslint-disable-line import/no-extraneous-dependencies

const messageMutation = gql`
  mutation AddProjectReply($input: AddProjectReplyInput!) {
    addProjectReply(input: $input) {
      result {
        id
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
          }
        }
      }
    }
  }
`

const commentMutation = gql`
  mutation AddReplyMessage($input: AddReplyMessageInput!) {
    addReplyMessage(input: $input) {
      result {
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
      }
      errors {
        message
      }
    }
  }
`

const statusMutation = gql`
  mutation ChangeReplyStatus($input: ChangeReplyStatusInput!) {
    changeReplyStatus(input: $input) {
      result {
        id
        status
      }
    }
  }
`

const chooseMutation = gql`
  mutation ChooseSpecialist($input: ChooseSpecialistInput!) {
    chooseSpecialist(input: $input) {
      result {
        id
        status
      }
    }
  }
`

const acceptMutation = gql`
  mutation ConfirmProjectReply($input: ConfirmProjectReplyInput!) {
    confirmProjectReply(input: $input) {
      result {
        id
        status
      }
    }
  }
`

const rejectMutation = gql`
  mutation RejectProjectReply($input: RejectProjectReplyInput!) {
    rejectProjectReply(input: $input) {
      result {
        id
        status
      }
    }
  }
`

const initialState = {
  comments: {},
  message: '',
  replies: [],
  activeId: '',
}

const reducer = (state, action) => {
  if (action.type === 'CHANGE') {
    return {
      ...state,
      [action.field]: action.value,
    }
  } else if (action.type === 'CHANGE_COMMENTS') {
    return {
      ...state,
      comments: { ...state.comments, [action.id]: action.value },
    }
  } else if (action.type === 'LOAD') {
    const comments = {}
    const { length } = Object.keys(state.comments)
    if (length === 0) {
      action.replies.forEach((item) => {
        comments[item.id] = ''
      })
    }

    return {
      ...state,
      replies: action.replies,
      comments: length === 0 ? comments : state.comments,
    }
  }

  return state
}

export const useCreate = (projectId, replies) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [visible, setVisible] = useState(false)
  const [replyChooseData, setReplyChooseData]: any = useState({})

  useEffect(() => {
    if (replies && replies[0]) {
      dispatch({
        type: 'LOAD',
        replies,
      })
    }
  }, [replies])

  const onChangeMessage = useCallback(
    (value) => dispatch({ type: 'CHANGE', field: 'message', value }),
    []
  )

  const onChangeComment = useCallback(
    (value, id) => dispatch({ type: 'CHANGE_COMMENTS', id, value }),
    []
  )

  const [onSaveMessage, { data: messageData, loading }] = useMutation<any>(messageMutation, {
    variables: {
      input: {
        projectId,
        message: state.message,
      },
    },
  })

  const [saveComment, { data: commentData }] = useMutation<any>(commentMutation)

  const onSaveComment = (id) => {
    dispatch({ type: 'CHANGE', field: 'activeId', value: id })
    saveComment({
      variables: {
        input: {
          replyId: id,
          message: state.comments[id],
        },
      },
    })
  }

  const [changeStatus] = useMutation<any>(statusMutation)

  const onChangeStatus = (value, status, replyData) => {
    if (status === 'draft' || status === 'published') {
      if (value === 'chosen') {
        setReplyChooseData(replyData)
        setVisible(true)
      } else {
        changeStatus({
          variables: {
            input: {
              replyId: replyData.id,
              status: value,
            },
          },
        })
      }
    }
  }

  const [chooseSpecialist, { data: chooseData }] = useMutation<any>(chooseMutation, {
    variables: {
      input: {
        replyId: replyChooseData.id,
      },
    },
    refetchQueries: ['Me'],
  })

  const onChooseSpecialist = () => {
    chooseSpecialist()
  }

  const closeChooseSpecialist = () => setVisible(false)

  const [onAcceptProject] = useMutation<any>(acceptMutation, {
    variables: {
      input: {
        projectId,
      },
    },
    refetchQueries: ['Me', 'Projects'],
  })

  const [onRejectProject] = useMutation<any>(rejectMutation, {
    variables: {
      input: {
        projectId,
      },
    },
    refetchQueries: ['Me'],
  })

  const responseMessage = messageData && messageData.addProjectReply
  const responseComment = commentData && commentData.addReplyMessage
  const responseChoose = chooseData && chooseData.chooseSpecialist

  useEffect(() => {
    closeChooseSpecialist()
  }, [responseChoose])

  useEffect(() => {
    if (responseMessage && responseMessage.result) {
      dispatch({
        type: 'LOAD',
        replies: [responseMessage.result],
      })
    }
  }, [responseMessage])

  useEffect(() => {
    if (responseComment && responseComment.result) {
      dispatch({
        type: 'CHANGE',
        field: 'comments',
        value: {
          ...state.comments,
          [state.activeId]: '',
        },
      })

      dispatch({
        type: 'LOAD',
        replies: state.replies.map((item) => {
          if (item.id === state.activeId) {
            item.discussion.messages.push(responseComment.result)
          }
          return item
        }),
      })
    }
  }, [responseComment, state.activeId, state.comments, state.replies])

  const errors =
    (responseMessage && responseMessage.errors) || (responseComment && responseComment.errors) || {}

  return {
    ...state,
    errors,
    loading,
    onChangeMessage,
    onChangeComment,
    onSaveMessage,
    onSaveComment,
    onChangeStatus,
    visible,
    replyChooseData,
    onChooseSpecialist,
    closeChooseSpecialist,
    onAcceptProject,
    onRejectProject,
  }
}
