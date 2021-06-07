import React                from 'react'
import { useIntl }          from 'react-intl'

import { WeldingWorksheet } from './WeldingWorksheet'

const WeldingWorksheetFragment = ({ id = '', value, onChange = (a) => {} }) => {
  const intl = useIntl()
  if (id !== 'e6e35fc9-a6f8-4dcd-98f2-87b05e5155c9') return null
  const data = {
    needToWeld: value.needToWeld || {},
    whereToWeld: value.whereToWeld || {},
    task: value.task || {},
    projectStage: value.projectStage || {},
    requireAdditionally: value.requireAdditionally || {},
    type: 'welding',
  }

  const onChangeNeedToWeld = (name) => {
    data.needToWeld[name] = !data.needToWeld[name]
    onChange(data)
  }

  const onChangeWhereToWeld = (name) => {
    data.whereToWeld[name] = !data.whereToWeld[name]
    onChange(data)
  }

  const onChangeTask = (name) => {
    data.task[name] = !data.task[name]
    onChange(data)
  }

  const onChangeProjectStage = (name) => {
    data.projectStage[name] = !data.projectStage[name]
    onChange(data)
  }

  const onChangeRequireAdditionally = (name) => {
    data.requireAdditionally[name] = !data.requireAdditionally[name]
    onChange(data)
  }

  return (
    <WeldingWorksheet
      onChangeNeedToWeld={onChangeNeedToWeld}
      onChangeWhereToWeld={onChangeWhereToWeld}
      onChangeTask={onChangeTask}
      onChangeProjectStage={onChangeProjectStage}
      onChangeRequireAdditionally={onChangeRequireAdditionally}
      intl={intl}
      {...data}
    />
  )
}

export default WeldingWorksheetFragment
