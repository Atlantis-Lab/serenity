/* eslint-disable no-else-return */
import React                     from 'react'
import { FormattedRelativeTime } from 'react-intl'

const getValueUnit = (diff) => {
  if (diff <= -86400) {
    return [Math.round(diff / 86400), 'day']
  } else if (diff <= -3600) {
    return [Math.round(diff / 3600), 'hour']
  }

  return [Math.round(diff / 60), 'minute']
}

export const RelativeTime = ({ value: relativeTime }) => {
  if (!relativeTime) {
    return null
  }

  const [value, unit]: any = getValueUnit((new Date(relativeTime).getTime() - Date.now()) / 1000)

  return <FormattedRelativeTime value={value} unit={unit} />
}
