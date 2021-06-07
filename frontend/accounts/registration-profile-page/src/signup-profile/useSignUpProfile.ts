/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-else-return */
import { useCallback, useReducer } from 'react'

const initialState = {
  type: 'specialist',
  firstName: '',
  lastName: '',
  errors: {},
}

const reducer = (state, action) => {
  if (action.type === 'CHANGE') {
    return {
      ...state,
      [action.field]: action.value,
    }
  } else if (action.type === 'SET_ERRORS') {
    return {
      ...state,
      errors: action.errors,
    }
  } else if (action.type === 'RESET') {
    return initialState
  }

  return state
}

export const useSignUpProfile = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onChangeType = useCallback(
    (value) => dispatch({ type: 'CHANGE', field: 'type', value }),
    []
  )

  const onChangeFirstName = useCallback(
    (value) => dispatch({ type: 'CHANGE', field: 'firstName', value }),
    []
  )

  const onChangeLastName = useCallback(
    (value) => dispatch({ type: 'CHANGE', field: 'lastName', value }),
    []
  )

  const onCreate = useCallback(async () => {
    const url = window.location.href.replace(window.location.origin, '')

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: state.type,
        firstName: state.firstName,
        lastName: state.lastName,
      }),
    })

    const body = await response.json()

    if (body.errors) {
      dispatch({ type: 'SET_ERRORS', errors: body.errors })
    } else {
      const { redirect_to } = body

      window.location.href = redirect_to
    }
  }, [state])

  return {
    ...state,
    onChangeType,
    onChangeFirstName,
    onChangeLastName,
    onCreate,
  }
}
