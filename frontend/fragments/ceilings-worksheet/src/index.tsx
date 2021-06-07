import React                 from 'react'
import { useIntl }           from 'react-intl'

import { CeilingsWorksheet } from './CeilingsWorksheet'

const CeilingsWorksheetFragment = ({ id = '', value, onChange = (a) => {} }) => {
  const intl = useIntl()
  if (id !== '2abd818f-cae3-4941-97dd-a1187fc47cdd') return null
  const data = {
    ceilingType: value.ceilingType || {},
    size: value.size || {},
    task: value.task || {},
    mounting: value.mounting || {},
    installEngineeringSystems: value.installEngineeringSystems || {},
    installationRoom: value.installationRoom || {},
    projectStage: value.projectStage || {},
    requireAdditionally: value.requireAdditionally || {},
    type: 'ceilings',
  }

  const onChangeCeilingType = (name, fieldValue) => {
    data.ceilingType[name] = fieldValue
    if (name === 'group') {
      data.ceilingType.type = undefined
    }
    onChange(data)
  }

  const onChangeSize = (name, fieldValue) => {
    data.size[name] = fieldValue
    onChange(data)
  }

  const onChangeMounting = (name) => {
    data.mounting[name] = !data.mounting[name]
    onChange(data)
  }

  const onChangeInstallEngineeringSystems = (name) => {
    data.installEngineeringSystems[name] = !data.installEngineeringSystems[name]
    onChange(data)
  }

  const onChangeInstallationRoom = (name) => {
    data.installationRoom[name] = !data.installationRoom[name]
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
    <CeilingsWorksheet
      onChangeCeilingType={onChangeCeilingType}
      onChangeSize={onChangeSize}
      onChangeMounting={onChangeMounting}
      onChangeInstallEngineeringSystems={onChangeInstallEngineeringSystems}
      onChangeInstallationRoom={onChangeInstallationRoom}
      onChangeProjectStage={onChangeProjectStage}
      onChangeRequireAdditionally={onChangeRequireAdditionally}
      intl={intl}
      {...data}
    />
  )
}

export default CeilingsWorksheetFragment
