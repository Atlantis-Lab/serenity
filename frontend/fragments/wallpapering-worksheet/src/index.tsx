import React                     from 'react'
import { useIntl }               from 'react-intl'

import { WallpaperingWorksheet } from './WallpaperingWorksheet'

const WallpaperingWorksheetFragment = ({ id = '', value, onChange = (a) => {} }) => {
  const intl = useIntl()
  if (id !== '1fd73ea9-c417-4b10-8b1c-cf3664eaa9ba') return null
  const data = {
    surfaceArea: value.surfaceArea || '',
    wallpaperType: value.wallpaperType || {},
    preparingWalls: value.preparingWalls || {},
    additionalWork: value.additionalWork || {},
    type: 'wallpapering',
  }

  const onChangeSurfaceArea = (fieldValue) => {
    data.surfaceArea = fieldValue
    onChange(data)
  }

  const onChangeWallpaperType = (name) => {
    data.wallpaperType[name] = !data.wallpaperType[name]
    onChange(data)
  }

  const onChangePreparingWalls = (name) => {
    data.preparingWalls[name] = !data.preparingWalls[name]
    onChange(data)
  }

  const onChangeAdditionalWork = (name) => {
    data.additionalWork[name] = !data.additionalWork[name]
    onChange(data)
  }

  return (
    <WallpaperingWorksheet
      onChangeSurfaceArea={onChangeSurfaceArea}
      onChangeWallpaperType={onChangeWallpaperType}
      onChangePreparingWalls={onChangePreparingWalls}
      onChangeAdditionalWork={onChangeAdditionalWork}
      intl={intl}
      {...data}
    />
  )
}

export default WallpaperingWorksheetFragment
