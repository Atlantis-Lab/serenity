import React                                    from 'react'
import { useUser }                              from '@atls/react-user'
import { useRouter }                            from 'next/router'

import { ProjectsDetailPage as ProjectsDetail } from './ProjectsDetailPage'
import { Seo }                                  from './Seo'
import { Track }                                from './Track'
import { useDataProjects, useDataReplies }      from './useData'

const ProjectsDetailPage = () => {
  const router = useRouter()
  const user = useUser()
  const id = (router && router.query && router.query.id) || null
  const project = useDataProjects(id)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const replies = user ? useDataReplies(id) : {}

  return (
    <>
      <Seo />
      <ProjectsDetail project={project} id={id} replies={replies} />
      <Track id={id} />
    </>
  )
}

export default ProjectsDetailPage
