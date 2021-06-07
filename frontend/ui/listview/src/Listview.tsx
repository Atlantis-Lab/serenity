import styled                            from '@emotion/styled'
import React, { useState }               from 'react'
import { ifProp }                        from 'styled-tools'

import { Item }                          from '@ui/drawer'
import { ArrowLeftIcon, ArrowRightIcon } from '@ui/icons'
import { Box, Column, Layout, Row }      from '@ui/layout'
import { Text }                          from '@ui/text'

interface ActiveProps {
  active: boolean
}

const activeInnerMenu = ifProp('active', { left: 0 })

// @ts-ignore
const InnerMenu = styled.div<ActiveProps>(
  {
    display: 'flex',
    flexDirection: 'column',
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
  activeInnerMenu
)

const activeBackward = ifProp('active', { cursor: 'pointer', opacity: 1 })

// @ts-ignore
const Backward = styled.div<ActiveProps>(
  {
    display: 'flex',
    flexBasis: 56,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
  },
  activeBackward
)

export const Listview = ({ data = [], path = '', closeIcon }) => {
  const [activeMenu, setActiveMenu] = useState('')
  const [activeMenuName, setActiveMenuName] = useState('')

  return (
    <Column>
      <Layout>
        <Row>
          <Backward
            active={activeMenu !== ''}
            onClick={() => {
              setActiveMenu('')
              setActiveMenuName('')
            }}
          >
            <ArrowLeftIcon color='rgb(216, 216, 216)' width={30} height={30} />
          </Backward>
          <Layout flexGrow={1} alignItems='center' justifyContent='center'>
            <Text fontSize='extra'>{activeMenuName === '' ? 'Каталог' : activeMenuName}</Text>
          </Layout>
          <Layout>{closeIcon}</Layout>
        </Row>
      </Layout>
      <Box position='relative' height='100%' width='100%' overflowX='hidden' overflowY='auto'>
        <Box
          bg='white'
          flexDirection='column'
          width='100%'
          height='100%'
          position='absolute'
          overflow='auto'
        >
          {data.map((item: any) => {
            if (!item.children) {
              return (
                <Layout key={item.id} flexShrink={0}>
                  <Item href={`${path}${item.id}`}>{item.name}</Item>
                </Layout>
              )
            }

            return (
              <Layout key={item.id} flexShrink={0}>
                <Item
                  onClick={() => {
                    setActiveMenu(item.id)
                    setActiveMenuName(item.name)
                  }}
                  icon={<ArrowRightIcon color='rgb(102,102,102)' />}
                >
                  {item.name}
                </Item>
              </Layout>
            )
          })}
          <Layout flexBasis={20} flexShrink={0} />
        </Box>
        {data.map((item: any) => {
          if (!item.children) return false

          return (
            <InnerMenu active={activeMenu === item.id} key={item.id}>
              {item.children.map((links) => (
                <Item key={links.id} href={`${path}${links.id}`}>
                  {links.name}
                </Item>
              ))}
              <Layout flexBasis={20} flexShrink={0} />
            </InnerMenu>
          )
        })}
      </Box>
    </Column>
  )
}
