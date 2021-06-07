import React, { useEffect, useState } from 'react'
import { useUser }                    from '@atlantis-lab/react-user'
import { useIntl }                    from 'react-intl'

import { useChat as useUiChat }       from '@ui/chat'

import { Chat }                       from './Chat'
import { useChat }                    from './useChat'

const ChatFragment = () => {
  const intl = useIntl()
  const { onAddChat, discussions, ...data } = useChat()
  const [unread, setUnread] = useState(false)
  const owner = useUser()

  const { visible, activeChat, open, close, openChat } = useUiChat('chat')

  useEffect(() => {
    if (activeChat) {
      onAddChat(activeChat)
    }
  }, [activeChat, onAddChat])

  useEffect(() => {
    if (discussions && discussions[0]) {
      setUnread(
        discussions.some((discussion) => discussion.messages.some((message) => !message.read))
      )
    }
  }, [discussions])

  return (
    <Chat
      visible={visible}
      intl={intl}
      activeChat={activeChat}
      unread={unread}
      discussions={discussions}
      {...data}
      onOpen={open}
      onClose={close}
      onOpenChat={openChat}
      owner={owner}
    />
  )
}

export default ChatFragment
