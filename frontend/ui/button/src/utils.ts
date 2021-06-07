import { Children, ReactNode, createElement } from 'react'

export const combinePureChildren = (children: ReactNode): ReactNode[] => {
  let isPrevChildPure: boolean = false
  const childList: ReactNode[] = []

  Children.forEach(children, (child) => {
    const isCurrentChildPure = typeof child === 'string' || typeof child === 'number'

    if (isPrevChildPure && isCurrentChildPure) {
      const lastIndex = childList.length - 1
      const lastChild = childList[lastIndex]
      childList[lastIndex] = [lastChild, child].join(' ')
    } else {
      childList.push(child)
    }

    isPrevChildPure = isCurrentChildPure
  })

  return childList
}

export const divideChildren = (
  children: ReactNode,
  Wrapper,
  props = {}
): ReactNode | ReactNode[] => {
  if (Children.count(children) > 1) {
    const combinedChildren = combinePureChildren(children)
    const count = combinedChildren.length

    return Children.map(combinedChildren, (child, index) => {
      if (index < count - 1) {
        return createElement(Wrapper, props, child)
      }

      return child
    })
  }

  return children
}
