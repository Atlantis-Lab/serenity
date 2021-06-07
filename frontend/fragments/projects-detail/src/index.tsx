import React              from 'react'
import { useIntl }        from 'react-intl'

import { ProjectsDetail } from './ProjectsDetail'

const ProjectsDetailFragment = (data) => {
  const intl = useIntl()

  return <ProjectsDetail intl={intl} {...data} />
}

export default ProjectsDetailFragment
