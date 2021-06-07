import React, { useCallback, useEffect, useState } from 'react'
import { useIntl }                                 from 'react-intl'

import { ProjectReply }                            from './ProjectReply'
import { useCreate }                               from './useCreate'

const ProjectReplyFragment = ({ id, replies, profile, status = '', ownerName = {} }) => {
  const intl = useIntl()
  const [activeFilter, setActiveFilter] = useState('')
  const { replies: dataReplies, ...data } = useCreate(id, replies)
  const [filteredReplies, setFilteredReplies] = useState([])

  useEffect(() => {
    setFilteredReplies(dataReplies)
  }, [dataReplies])

  let endpoint: string | null = null

  if (typeof window !== 'undefined') {
    endpoint = window.location.hostname.includes('atls.tech')
      ? 'serenity.atls.tech'
      : window.location.hostname
  }

  const onRegistration = useCallback(() => {
    window.location.href = `https://accounts.${endpoint}/signup`
  }, [endpoint])

  const onLogin = useCallback(() => {
    window.location.href = `https://accounts.${endpoint}/signin`
  }, [endpoint])

  const onOpenSpecialist = useCallback(
    (specialistId) => {
      window.location.href = `https://${endpoint}/specialists/${specialistId}`
    },
    [endpoint]
  )

  const onFilterReplies = (filterName) => {
    if (filterName) {
      setFilteredReplies(replies.filter((reply) => reply.status === filterName))
      setActiveFilter(filterName)
    } else {
      setFilteredReplies(dataReplies)
      setActiveFilter('')
    }
  }

  return (
    <ProjectReply
      intl={intl}
      onRegistration={onRegistration}
      onLogin={onLogin}
      onOpenSpecialist={onOpenSpecialist}
      onFilterReplies={onFilterReplies}
      activeFilter={activeFilter}
      profile={profile}
      status={status}
      replies={filteredReplies}
      ownerName={ownerName}
      {...data}
    />
  )
}

export default ProjectReplyFragment
