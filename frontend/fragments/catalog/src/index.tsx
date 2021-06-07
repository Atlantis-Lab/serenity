import React             from 'react'

import { Box }           from '@ui/layout'
import { useDrawer }     from '@ui/drawer'
import { useWindowSize } from '@ui/utils'

import { Desktop }       from './Desktop'
import { useData }       from './useData'

const CatalogFragment = () => {
  const { visible } = useDrawer('catalog')
  const { innerWidth } = useWindowSize()
  const data = useData()
  const linksPath = '/specialists?catId='

  return (
    <Box height='100%'>
      <Desktop
        data={data}
        visible={visible && innerWidth ? innerWidth : 0 >= 640}
        linksPath={linksPath}
      />
    </Box>
  )
}

export default CatalogFragment
