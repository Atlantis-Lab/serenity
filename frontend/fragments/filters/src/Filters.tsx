import React                   from 'react'

import { Collapse, Panel }     from '@ui/collapse'
import { CheckIcon }           from '@ui/icons'
import { Box, Column, Layout } from '@ui/layout'
import { Text }                from '@ui/text'

export const Filters = ({
  data = [],
  check,
  title,
  activeCategory,
  selectCategory,
  activeKey,
  onChange,
}) => (
  <Column>
    <Layout flexBasis={48} alignItems='center'>
      <Text fontWeight='medium' fontSize='extra' color='black' lineHeight='extra'>
        {title}
      </Text>
    </Layout>
    <Layout flexBasis={20} />
    <Box border='black' borderRadius='extra' boxSizing='border-box'>
      <Collapse activeKey={activeKey} onChange={onChange}>
        {data.map((item: any) => (
          <Panel
            header={item.name}
            key={item.id}
            check={
              check && (
                <CheckIcon
                  width={16}
                  height={16}
                  color={
                    item.children.some((child) => child.id === activeCategory)
                      ? 'black'
                      : 'rgb(153, 153, 153)'
                  }
                />
              )
            }
          >
            <Column>
              {(item as any).children.map((category: any, num: any) => (
                <Box key={category.id} mt={num === 0 ? 0 : 12} alignItems='center'>
                  <Layout>
                    {check && (
                      <CheckIcon
                        width={16}
                        height={16}
                        color={activeCategory === category.id ? 'black' : 'rgb(153, 153, 153)'}
                      />
                    )}
                  </Layout>
                  <Layout flexBasis={16} flexShrink={0} />
                  <Layout>
                    <Text
                      onClick={() => selectCategory(category.id)}
                      color='stormdust'
                      cursor='pointer'
                    >
                      {category.name}
                    </Text>
                  </Layout>
                </Box>
              ))}
            </Column>
          </Panel>
        ))}
      </Collapse>
    </Box>
  </Column>
)
