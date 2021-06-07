import React, { useState }          from 'react'
import { useRouter }                from 'next/router'
import { useIntl }                  from 'react-intl'

import { ProjectsPage as Projects } from './ProjectsPage'
import { Seo }                      from './Seo'

const ProjectsPage = () => {
  const intl = useIntl()
  const router = useRouter()
  const defaultCategory = (router && router.query && router.query.catId) || ''
  const [activeCategory, setActiveCategory] = useState(defaultCategory)

  const selectCategory = (id) => {
    if (typeof window !== 'undefined') {
      setActiveCategory(id)
      window.history.replaceState({ catId: id }, '', `/projects?catId=${[id]}`)
    }
  }

  return (
    <>
      <Seo />
      <Projects intl={intl} activeCategory={activeCategory} selectCategory={selectCategory} />
    </>
  )
}

export default ProjectsPage
