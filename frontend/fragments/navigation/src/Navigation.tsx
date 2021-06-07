import React                                        from 'react'
import { WithUser, WithoutUser }                    from '@atls/react-user'

import Chat                                         from '@fragments/chat'
import { Button }                                   from '@ui/button'
import { DrawerProvider }                           from '@ui/drawer'
import { Hamburger }                                from '@ui/hamburger'
import { ArrowDownIcon, LogoIcon }                  from '@ui/icons'
import { Layout, Row }                              from '@ui/layout'
import { NavLink as BaseNavLink, NextLink as Link } from '@ui/link'
import { NextNavLink as NavLink }                   from '@ui/link'
import { Navigation as UINavigation }               from '@ui/navigation'

import messages                                     from './messages'
import { Drawer }                                   from './Drawer'
import { Profile }                                  from './Profile'

export const Navigation = ({
  intl,
  profile,
  visibleMenu,
  openMenu,
  closeMenu,
  visibleCatalog,
  openCatalog,
  closeCatalog,
  onLogin,
  onLogout,
  onOpenSettings,
  onOpenPortfolio,
  onOpenSubscription,
  onOpenMyProjects,
  onOpenNewMyProjects,
  onOpenMyReplies,
}) => (
  <DrawerProvider>
    <UINavigation>
      <Layout flexBasis={32} />
      <Layout alignItems='center'>
        <Link href='/' fontSize='2px'>
          <LogoIcon width={52} height={20} />
        </Link>
      </Layout>
      <Layout flexGrow={1}>
        <Row display={['none', 'flex']}>
          <Layout flexBasis={68} />
          <Layout alignItems='center'>
            <Button
              color={visibleCatalog ? 'whiteBlack' : 'chicago'}
              fontWeight='bold'
              borderRadius={20}
              onClick={() => (visibleCatalog ? closeCatalog() : openCatalog())}
            >
              {intl.formatMessage(messages.сatalog)}
              <ArrowDownIcon color={visibleCatalog ? '#000000' : '#FFFFFF'} />
            </Button>
          </Layout>
          <Layout flexBasis={32} />
          <Layout>
            <NavLink href='/specialists'>{intl.formatMessage(messages.specialists)}</NavLink>
          </Layout>
          <Layout flexBasis={32} />
          <Layout>
            <NavLink href='/projects'>{intl.formatMessage(messages.orders)}</NavLink>
          </Layout>
        </Row>
      </Layout>
      <Layout display={['none', 'flex']} flexGrow={[0, 1]}>
        <WithUser>
          {profile && (
            <Profile
              {...profile}
              intl={intl}
              onLogout={onLogout}
              onOpenSettings={onOpenSettings}
              onOpenPortfolio={onOpenPortfolio}
              onOpenSubscription={onOpenSubscription}
              onOpenMyProjects={onOpenMyProjects}
              onOpenNewMyProjects={onOpenNewMyProjects}
              onOpenMyReplies={onOpenMyReplies}
            />
          )}
        </WithUser>
      </Layout>
      <Layout>
        <WithoutUser>
          <BaseNavLink onClick={onLogin}>{intl.formatMessage(messages.login)}</BaseNavLink>
        </WithoutUser>
      </Layout>
      <Layout flexBasis={[24, 32, 32]} />
      <Layout display={['flex', 'none']}>
        <Hamburger active={visibleMenu} onOpen={openMenu} onClose={closeMenu} />
      </Layout>
    </UINavigation>
    <Drawer
      {...profile}
      intl={intl}
      visible={visibleMenu}
      onClose={closeMenu}
      onOpenCatalog={openCatalog}
      onLogout={onLogout}
      onLogin={onLogin}
      onOpenSettings={onOpenSettings}
      onOpenPortfolio={onOpenPortfolio}
      onOpenSubscription={onOpenSubscription}
      onOpenMyProjects={onOpenMyProjects}
      onOpenNewMyProjects={onOpenNewMyProjects}
      onOpenMyReplies={onOpenMyReplies}
    />
    {(profile.type === 'customer' || (profile.account && profile.account.type === 'pro')) && (
      <Chat />
    )}
  </DrawerProvider>
)
