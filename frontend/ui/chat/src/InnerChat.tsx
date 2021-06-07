import styled                       from '@emotion/styled'
import React, { useEffect, useRef } from 'react'
import { ifProp, switchProp }       from 'styled-tools'

import { Divider }                  from '@ui/divider'
import { SendIcon, ThumbUpIcon }    from '@ui/icons'
import { Input }                    from '@ui/input'
import { Box, Layout }              from '@ui/layout'
import { RelativeTime }             from '@ui/relative-time'
import { Text }                     from '@ui/text'

interface ActiveProps {
  active: boolean
}

interface ChatMessageProps {
  align: 'left' | 'right'
  unread: boolean
}

const activeInnerChat = ifProp('active', { left: 0 })

const StyledInnerChat = styled.div<ActiveProps>(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    position: 'absolute',
    left: '100%',
    top: 0,
    width: '100%',
    minHeight: '100%',
    background: '#fff',
    transition: 'all 0.2s linear',
    zIndex: 1,
    height: '100%',
    overflow: 'auto',
  },
  activeInnerChat
)

const alignment = switchProp('align', ({ theme }: any) => ({
  left: {
    borderRadius: '8px 8px 8px 0',
    backgroundColor: theme.colors.gallery,
    alignSelf: 'flex-start',
  },
  right: {
    borderRadius: '8px 8px 0 8px',
    backgroundColor: theme.colors.whitesmoke,
    alignSelf: 'flex-end',
  },
}))

const ChatMessage = styled.div<ChatMessageProps>(
  ({ theme, align, unread }: any) => ({
    display: 'flex',
    padding: '8px 12px',
    margin: '8px 12px',
    position: 'relative',
    /*
    '&::after': {
      display: unread ? 'block' : 'none',
      content: '""',
      position: 'absolute',
      top: '-3px',
      left: align === 'right' ? '-3px' : 'auto',
      right: align === 'left' ? '-3px' : 'auto',
      width: '10px',
      height: '10px',
      borderRadius: '100%',
      backgroundColor: theme.colors.chicago,
    },
    */
  }),
  alignment
)

export const InnerChat = ({
  item,
  disable,
  activeChat,
  inputValue,
  placeholder,
  owner,
  onSend,
  onChange,
}) => {
  const node = useRef(null)

  useEffect(() => {
    // @ts-ignore
    node.current.scrollTop = node.current.scrollHeight
  }, [item])

  return (
    <StyledInnerChat active={activeChat.id === item.recipient.id}>
      <Box flexDirection='column' width='100%' overflowY='scroll' ref={node}>
        {item.messages.map((message) => (
          <ChatMessage
            align={!message.member || owner === message.member.id ? 'right' : 'left'}
            unread={!message.read}
            key={message.id}
          >
            <Box display='inline'>
              <Text color='stormdust' lineHeight='extra' wordBreak='break-word'>
                {message.content}
              </Text>
              {message.sendDate && (
                <Text color='silver' fontSize='micro' pl='10px' pt='3px' style={{ float: 'right' }}>
                  <RelativeTime value={message.sendDate} />
                </Text>
              )}
            </Box>
          </ChatMessage>
        ))}
      </Box>
      <Layout>
        <Divider />
      </Layout>
      <Layout>
        <Input
          size='normal'
          value={inputValue}
          placeholder={placeholder}
          border='none'
          onEnter={!disable ? onSend : () => {}}
          onChange={onChange}
          prefix={<ThumbUpIcon width={20} height={20} style={{ cursor: 'pointer ' }} />}
          suffix={
            <SendIcon
              width={20}
              height={20}
              onClick={!disable ? onSend : () => {}}
              style={{ cursor: 'pointer ' }}
            />
          }
        />
      </Layout>
    </StyledInnerChat>
  )
}
