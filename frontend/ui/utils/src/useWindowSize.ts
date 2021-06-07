/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'

interface WindowDimensions {
  innerWidth: number | null
  innerHeight: number | null
  outerWidth: number | null
  outerHeight: number | null
}

const initialValue: WindowDimensions = {
  innerWidth: null,
  innerHeight: null,
  outerWidth: null,
  outerHeight: null,
}

export function useWindowSize(): WindowDimensions {
  const [windowSize, setWindowSize] = useState<WindowDimensions>(initialValue)

  const isClient = typeof window !== 'undefined'

  const fetchWindowDimensionsAndSave = () => {
    if (isClient) {
      setWindowSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
      })
    }
  }

  useEffect(() => {
    fetchWindowDimensionsAndSave()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', fetchWindowDimensionsAndSave)
    return () => {
      window.removeEventListener('resize', fetchWindowDimensionsAndSave)
    }
  }, [])

  return windowSize
}
