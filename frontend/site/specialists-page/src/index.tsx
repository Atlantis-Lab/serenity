import React, { useState }                from 'react'
import { useRouter }                      from 'next/router'
import { useIntl }                        from 'react-intl'

import { Seo }                            from './Seo'
import { SpecialistsPage as Specialists } from './SpecialistsPage'

const SpecialistsPage = () => {
  const intl = useIntl()
  const router = useRouter()
  const defaultCategory = (router && router.query && router.query.catId) || ''
  const [activeCategory, setActiveCategory] = useState(defaultCategory)

  const selectCategory = (id) => {
    if (typeof window !== 'undefined') {
      setActiveCategory(id)
      window.history.replaceState({ catId: id }, '', `/specialists?catId=${[id]}`)
    }
  }

  return (
    <>
      <Seo />
      <Specialists intl={intl} activeCategory={activeCategory} selectCategory={selectCategory} />
    </>
  )
}

export default SpecialistsPage
