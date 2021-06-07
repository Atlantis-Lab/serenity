import React, { useEffect, useState } from 'react'

import { Filters }                    from './Filters'
import { useData }                    from './useData'

const FiltersFragment = ({
  title = '',
  activeCategory = '',
  selectCategory = () => {},
  check = false,
}) => {
  const data = useData()
  const [activeKey, setActiveKey] = useState([])

  const onChange = (value) => {
    setActiveKey(value)
  }

  useEffect(() => {
    if (data && activeCategory) {
      const keys = []
      data.map((item) => {
        item.children.map((child: any) => {
          if (child.id === activeCategory) {
            // @ts-ignore
            keys.push(item.id)
          }
          return true
        })
        return true
      })
      setActiveKey(keys)
    }
  }, [data, activeCategory])

  return (
    <Filters
      data={data}
      title={title}
      activeCategory={activeCategory}
      selectCategory={selectCategory}
      activeKey={activeKey}
      check={check}
      onChange={onChange}
    />
  )
}

export default FiltersFragment
