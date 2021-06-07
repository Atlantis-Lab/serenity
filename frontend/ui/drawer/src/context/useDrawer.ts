import { useContext, useEffect, useMemo, useState } from 'react'

import { DrawerContext }                            from './DrawerContext'
import { DrawerStore }                              from './DrawerStore'

export const useDrawer = (id) => {
  const store: DrawerStore = useContext(DrawerContext)

  if (!store) {
    throw new Error('Missing <DrawerProvider>')
  }

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    store.addListener(id, setVisible)

    return () => {
      store.removeListener(id, setVisible)
    }
  }, [id, store])

  const open = useMemo(() => store.open.bind(store, id), [id, store])
  const close = useMemo(() => store.close.bind(store, id), [id, store])

  return { visible, open, close }
}
