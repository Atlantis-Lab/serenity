import React               from 'react'
import { useIntl }         from 'react-intl'

import { FloorsWorksheet } from './FloorsWorksheet'

const FloorsWorksheetFragment = ({ id = '', value, onChange = (a) => {} }) => {
  const intl = useIntl()
  if (id !== 'e531c703-a16b-4149-a37a-97aacad634a3') return null
  const data = {
    floorArea: value.floorArea || '',
    typeOfFlooring: value.typeOfFlooring || {},
    foundationPreparation: value.foundationPreparation || {},
    additionalWork: value.additionalWork || {},
    type: 'floors',
  }

  const onChangeFloorArea = (fieldValue) => {
    data.floorArea = fieldValue
    onChange(data)
  }

  const onChangeTypeOfFlooring = (name) => {
    data.typeOfFlooring[name] = !data.typeOfFlooring[name]
    onChange(data)
  }

  const onChangeFoundationPreparation = (name) => {
    data.foundationPreparation[name] = !data.foundationPreparation[name]
    onChange(data)
  }

  const onChangeAdditionalWork = (name) => {
    data.additionalWork[name] = !data.additionalWork[name]
    onChange(data)
  }

  return (
    <FloorsWorksheet
      onChangeFloorArea={onChangeFloorArea}
      onChangeTypeOfFlooring={onChangeTypeOfFlooring}
      onChangeFoundationPreparation={onChangeFoundationPreparation}
      onChangeAdditionalWork={onChangeAdditionalWork}
      intl={intl}
      {...data}
    />
  )
}

export default FloorsWorksheetFragment
