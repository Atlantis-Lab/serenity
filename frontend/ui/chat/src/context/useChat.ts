import { useCallback, useContext, useEffect, useMemo, useState } from 'react'

import { ChatContext }                                           from './ChatContext'
import { ChatStore }                                             from './ChatStore'

export const useChat = (id) => {
  const store: ChatStore = useContext(ChatContext)

  if (!store) {
    throw new Error('Missing <ChatProvider>')
  }

  const [visible, setVisible] = useState(false)
  const [activeChat, setActiveChat] = useState('')

  useEffect(() => {
    store.addListener(id, (visibleChat, active) => {
      setVisible(visibleChat)
      setActiveChat(active)
    })

    return () => {
      store.removeListener(id, setVisible)
    }
  }, [id, store])

  const open = useMemo(() => store.open.bind(store, id), [id, store])
  const close = useMemo(() => store.close.bind(store, id), [id, store])
  const openChat = useCallback(
    (recipientId) => store.openChat.bind(store, id, recipientId)(),
    [id, store]
  )

  return { visible, activeChat, open, close, openChat }
}
