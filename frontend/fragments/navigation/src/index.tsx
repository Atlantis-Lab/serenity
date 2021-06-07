import React, { useCallback } from 'react'
import { useUser }            from '@atls/react-user'
import { useIntl }            from 'react-intl'

import { useDrawer }          from '@ui/drawer'

import { Navigation }         from './Navigation'
import { useProfile }         from './useProfile'

const NavigationFragment = () => {
  const user = useUser()

  const { visible: visibleMenu, open: openMenu, close: closeMenu } = useDrawer('menu')
  const { visible: visibleCatalog, open: openCatalog, close: closeCatalog } = useDrawer('catalog')

  const intl = useIntl()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const profile = user ? useProfile() : {}

  let endpoint: string | null = null

  if (typeof window !== 'undefined') {
    endpoint = window.location.hostname.includes('atls.tech')
      ? 'serenity.atls.tech'
      : window.location.hostname
  }

  const onLogin = useCallback(() => {
    window.location.href = `https://accounts.${endpoint}/signin?continue=${window.location.href}`
  }, [endpoint])

  const onLogout = useCallback(() => {
    window.location.href = `https://accounts.${endpoint}/signout?continue=${window.location.href}`
  }, [endpoint])

  const onOpenSettings = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/`
  }, [endpoint])

  const onOpenPortfolio = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/portfolio`
  }, [endpoint])

  const onOpenSubscription = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/subscription`
  }, [endpoint])

  const onOpenMyProjects = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/projects`
  }, [endpoint])

  const onOpenNewMyProjects = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/projects/new`
  }, [endpoint])

  const onOpenMyReplies = useCallback(() => {
    window.location.href = `https://cabinet.${endpoint}/replies`
  }, [endpoint])

  return (
    <Navigation
      intl={intl}
      profile={profile}
      visibleMenu={visibleMenu}
      openMenu={openMenu}
      closeMenu={closeMenu}
      visibleCatalog={visibleCatalog}
      openCatalog={openCatalog}
      closeCatalog={closeCatalog}
      onLogin={onLogin}
      onLogout={onLogout}
      onOpenSettings={onOpenSettings}
      onOpenPortfolio={onOpenPortfolio}
      onOpenSubscription={onOpenSubscription}
      onOpenMyProjects={onOpenMyProjects}
      onOpenNewMyProjects={onOpenNewMyProjects}
      onOpenMyReplies={onOpenMyReplies}
    />
  )
}

export default NavigationFragment
