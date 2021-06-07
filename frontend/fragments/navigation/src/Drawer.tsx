import React                        from 'react'
import { WithUser, WithoutUser }    from '@atls/react-user'

import { Item, Drawer as UIDrawer } from '@ui/drawer'
import { ArrowRightIcon, LogoIcon } from '@ui/icons'
import { Column, Layout }           from '@ui/layout'
import { NextLink as Link }         from '@ui/link'

import messages                     from './messages'

export const Drawer = ({
  intl,
  type,
  visible,
  onClose,
  onOpenCatalog,
  onLogout,
  onLogin,
  onOpenSettings,
  onOpenPortfolio,
  onOpenSubscription,
  onOpenMyProjects,
  onOpenNewMyProjects,
  onOpenMyReplies,
}) => (
  <UIDrawer visible={visible} onClose={onClose}>
    <Column pt={20}>
      <Layout pl={20}>
        <Link href='/'>
          <LogoIcon width={104} height={40} color='#686868' />
        </Link>
      </Layout>
      <Layout flexBasis={20} />
      <Layout>
        <Item
          icon={<ArrowRightIcon color='rgb(102,102,102)' />}
          onClick={() => {
            onClose()
            onOpenCatalog()
          }}
        >
          {intl.formatMessage(messages.сatalog)}
        </Item>
      </Layout>
      <Layout>
        <Item href='/specialists'>{intl.formatMessage(messages.specialists)}</Item>
      </Layout>
      <Layout>
        <Item href='/projects'>{intl.formatMessage(messages.orders)}</Item>
      </Layout>
      <WithUser>
        {type === 'specialist' && (
          <>
            <Layout>
              <Item onClick={onOpenMyReplies}>{intl.formatMessage(messages.myReplies)}</Item>
            </Layout>
            <Layout>
              <Item onClick={onOpenPortfolio}>{intl.formatMessage(messages.portfolio)}</Item>
            </Layout>
            <Layout>
              <Item onClick={onOpenSubscription}>{intl.formatMessage(messages.subscription)}</Item>
            </Layout>
          </>
        )}
        {type === 'customer' && (
          <>
            <Layout>
              <Item onClick={onOpenMyProjects}>{intl.formatMessage(messages.myProjects)}</Item>
            </Layout>
            <Layout>
              <Item onClick={onOpenNewMyProjects}>
                {intl.formatMessage(messages.newMyProjects)}
              </Item>
            </Layout>
          </>
        )}
        <Layout>
          <Item onClick={onOpenSettings}>{intl.formatMessage(messages.settings)}</Item>
        </Layout>
      </WithUser>
      <Layout>
        <WithUser>
          <Item onClick={onLogout}>{intl.formatMessage(messages.logout)}</Item>
        </WithUser>
        <WithoutUser>
          <Item onClick={onLogin}>{intl.formatMessage(messages.login)}</Item>
        </WithoutUser>
      </Layout>
    </Column>
  </UIDrawer>
)
