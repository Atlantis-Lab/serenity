import { useEffect } from 'react'

export const useKratosData = ({ setCsrfToken, setAction }) =>
  useEffect(() => {
    const cookieToken = document.cookie
      .split(';')
      .filter((cookie) => cookie.split('=')[0].trim() === 'csrf_token')[0]
      .split('=')[1]
      .trim()
    setCsrfToken(decodeURIComponent(cookieToken))
    setAction(
      `${window.location.origin.replace(
        'accounts',
        'kratos'
      )}/self-service/login/methods/password?flow=${window.location.search
        .split('=')[1]
        .replace('?', '')}`
    )
  }, [setCsrfToken, setAction])
