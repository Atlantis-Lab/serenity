import React                     from 'react'
import { useIntl }               from 'react-intl'

import { HomeBuildingWorksheet } from './HomeBuildingWorksheet'

const HomeBuildingWorksheetFragment = ({ id = '', value, onChange = (a) => {} }) => {
  const intl = useIntl()
  if (id !== '354c5f69-5308-4847-bb62-7c6a022d2c16') return null
  const data = {
    houseType: value.houseType || {},
    foundationType: value.foundationType || {},
    roofingType: value.roofingType || {},
    houseArea: value.houseArea || '',
    floorsNumber: value.floorsNumber,
    projectStage: value.projectStage || {},
    requireAdditionally: value.requireAdditionally || {},
    type: 'home-building',
  }

  const onChangeHouseType = (fieldId, fieldValue) => {
    data.houseType.id = fieldId
    data.houseType.name = fieldValue
    onChange(data)
  }

  const onChangeFoundationType = (fieldId, fieldValue) => {
    data.foundationType.id = id
    data.foundationType.name = fieldValue
    onChange(data)
  }

  const onChangeRoofingType = (fieldId, fieldValue) => {
    data.roofingType.id = fieldId
    data.roofingType.name = fieldValue
    onChange(data)
  }

  const onChangeHouseArea = (fieldValue) => {
    data.houseArea = fieldValue
    onChange(data)
  }

  const onChangeFloorsNumber = (fieldValue) => {
    data.floorsNumber = fieldValue
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
    <HomeBuildingWorksheet
      onChangeHouseType={onChangeHouseType}
      onChangeFoundationType={onChangeFoundationType}
      onChangeRoofingType={onChangeRoofingType}
      onChangeHouseArea={onChangeHouseArea}
      onChangeFloorsNumber={onChangeFloorsNumber}
      onChangeProjectStage={onChangeProjectStage}
      onChangeRequireAdditionally={onChangeRequireAdditionally}
      intl={intl}
      {...data}
    />
  )
}

export default HomeBuildingWorksheetFragment
