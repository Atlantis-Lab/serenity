import { useEffect } from 'react'

const getHitsUrl = (id) => {
  const endpoint = window.location.hostname.includes('atls.tech')
    ? 'serenity.atls.tech'
    : window.location.hostname

  return `https://hits.${endpoint}/track/${Date.now()}.js?resource=${id}`
}

export const Track = ({ id }: any) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = getHitsUrl(id)
      document.head.appendChild(script)
    }
  }, [id])

  return null
}
