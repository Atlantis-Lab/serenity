import React                               from 'react'
import styled                              from '@emotion/styled'
import { ifProp }                          from 'styled-tools'

import { Avatar }                          from '@ui/avatar'
import { CloseIcon, ForwardArrowLeftIcon } from '@ui/icons'
import { Box, Column, Layout, Row }        from '@ui/layout'
import { Text }                            from '@ui/text'

import { InnerChat }                       from './InnerChat'

interface ActiveProps {
  active: boolean
}

interface ItemProps {
  unread: boolean
}

const Container = styled.div(({ theme }: any) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  border: theme.borders.codgray,
  boxShadow: theme.shadows.woodsmoke,
  borderRadius: '4px',
  '@media (min-width: 40em)': {
    width: 320,
    height: 400,
  },
}))

const activeIcon = ifProp('active', {
  cursor: 'pointer',
  opacity: 1,
  width: 24,
  height: 24,
  marginRight: 16,
  marginLeft: 16,
})

const Icons = styled.div<ActiveProps>(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    width: 16,
  },
  activeIcon
)

const unread = ifProp('unread', ({ theme }: any) => ({
  backgroundColor: theme.colors.alabaster,
}))

const ChatItem = styled.div<ItemProps>(
  ({ theme }: any) => ({
    display: 'flex',
    width: '100%',
    boxShadow: theme.shadows['inner-black'],
    padding: '12px 16px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    flexShrink: 0,
    '&:hover': {
      backgroundColor: theme.colors.alabaster,
    },
    '&:last-of-type': {
      boxShadow: 'none',
    },
  }),
  unread
)

export const Chat = ({
  discussions = [],
  messages = {},
  title = 'Диалоги',
  inputPlaceholder = 'Напишите сообщение…',
  disable = false,
  activeChat = {},
  owner = '',
  onClose = () => {},
  onSend = () => {},
  onChange = () => {},
  onOpenChat,
}: any) => (
  <Container>
    <Box bg='whitesmoke' flexBasis={56} boxShadow='inner-black'>
      <Row alignItems='center'>
        <Icons
          active={activeChat.id}
          onClick={() => {
            onOpenChat({ id: '' })
          }}
        >
          <ForwardArrowLeftIcon color='#999999' width={16} height={16} />
        </Icons>
        <Layout flexGrow={1}>
          <Text fontSize='regular' fontWeight='medium' lineHeight='medium' wordBreak='break-word'>
            {!activeChat.id ? title : activeChat.name}
          </Text>
        </Layout>
        <Icons onClick={onClose} active>
          <CloseIcon color='#999999' width={12} height={12} />
        </Icons>
      </Row>
    </Box>
    <Box position='relative' height='100%' width='100%' overflowX='hidden' overflowY='auto'>
      <Box
        bg='white'
        flexDirection='column'
        width='100%'
        height='100%'
        position='absolute'
        overflow='auto'
      >
        {discussions.map((item) => (
          <ChatItem
            key={item.id}
            unread={item.messages[0] && item.messages.some((message) => !message.read)}
            onClick={() => {
              onOpenChat({
                id: item.recipient.id,
                name:
                  item.recipient.member &&
                  item.recipient.member.interaction.formOfWork === 'company'
                    ? item.recipient.member.interaction.name
                    : `${item.recipient.profile.personalInformation.firstName} ${item.recipient.profile.personalInformation.lastName}`,
                photo: (item.recipient.profile.photo && item.recipient.profile.photo.url) || null,
              })
            }}
          >
            <Layout>
              <Avatar
                width={40}
                height={40}
                color='alto'
                src={(item.recipient.profile.photo && item.recipient.profile.photo.url) || null}
              />
            </Layout>
            <Layout flexBasis={16} />
            <Layout>
              <Column>
                <Layout>
                  <Row justifyContent='space-between' alignItems='baseline'>
                    <Layout>
                      <Text fontWeight='medium' lineHeight='medium' wordBreak='break-word'>
                        {item.recipient.member &&
                        item.recipient.member.interaction.formOfWork === 'company'
                          ? item.recipient.member.interaction.name
                          : `${item.recipient.profile.personalInformation.firstName} ${item.recipient.profile.personalInformation.lastName}`}
                      </Text>
                    </Layout>
                    {item.messages[0] && (
                      <>
                        <Layout flexBasis={20} />
                        <Layout>
                          <Text fontSize='micro' color='silver'>
                            {item.messages[item.messages.length - 1].sendDate &&
                              item.messages[item.messages.length - 1].sendDate.toLocaleString(
                                'ru',
                                {
                                  day: 'numeric',
                                  month: 'numeric',
                                  year: 'numeric',
                                }
                              )}
                          </Text>
                        </Layout>
                      </>
                    )}
                  </Row>
                </Layout>
                {item.messages[0] && (
                  <Layout width={232}>
                    <Text
                      color='stormdust'
                      lineHeight='medium'
                      textOverflow='ellipsis'
                      style={{ overflowX: 'hidden', whiteSpace: 'nowrap' }}
                    >
                      {item.messages[item.messages.length - 1].content}
                    </Text>
                  </Layout>
                )}
              </Column>
            </Layout>
          </ChatItem>
        ))}
      </Box>
      {discussions.map((item) => (
        <InnerChat
          item={item}
          inputValue={messages[item.recipient.id]}
          activeChat={activeChat}
          placeholder={inputPlaceholder}
          onSend={() => onSend(item.recipient.id)}
          onChange={(value) => onChange(value, item.recipient.id)}
          key={item.recipient.id}
          disable={disable}
          owner={owner}
        />
      ))}
    </Box>
  </Container>
)
