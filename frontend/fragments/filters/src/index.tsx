import React, { useEffect, useState } from 'react'

import { Filters }                    from './Filters'
import { useData }                    from './useData'

const FiltersFragment = ({ title = '', activeCategory = '', selectCategory = () => {}, check = false }) => {
  const data = useData()
  const [activeKey, setActiveKey] = useState([])

  const onChange = value => {
    setActiveKey(value)
  }

  useEffect(() => {
    if (data && activeCategory) {
      const keys = []
      data.map(item => {
        item.children.map(child => {
          if (child.id === activeCategory) {
            keys.push(item.id)
          }
          return true
        })
        return true
      })
      setActiveKey(keys)
    }
  }, [data])

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
