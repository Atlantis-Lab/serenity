import React, { useState } from 'react'
import { useRouter }       from 'next/router'
import { useIntl }         from 'react-intl'

import { Seo }             from './Seo'
import { SpecialistsPage } from './SpecialistsPage'

export default () => {
  const intl = useIntl()
  const router = useRouter()
  const defaultCategory = (router && router.query && router.query.catId) || ''
  const [activeCategory, setActiveCategory] = useState(defaultCategory)

  const selectCategory = id => {
    if (typeof window !== 'undefined') {
      setActiveCategory(id)
      window.history.replaceState({ catId: id }, null, `/specialists?catId=${[id]}`)
    }
  }

  return (
    <>
      <Seo />
      <SpecialistsPage
        intl={intl}
        activeCategory={activeCategory}
        selectCategory={selectCategory}
      />
    </>
  )
}
