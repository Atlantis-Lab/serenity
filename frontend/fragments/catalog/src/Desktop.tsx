import React                   from 'react'
import Masonry                 from 'react-masonry-component'

import { SlideDrawer }         from '@ui/drawer'
import { Box, Column, Layout } from '@ui/layout'
import { NextLink as Link }    from '@ui/link'
import { Text }                from '@ui/text'

export const Desktop = ({ data, visible, linksPath }) => (
  <SlideDrawer visible={visible} top={56}>
    <Box position='absolute' width='100%' flexDirection='column'>
      <Masonry style={{ padding: '60px 20px 0' }}>
        {data.map((item) => (
          <Column key={item.id} maxWidth={260} px={20} pb={60}>
            <Layout>
              <Text fontSize='extra' fontWeight='medium' lineHeight='extra'>
                {item.name}
              </Text>
            </Layout>
            <Layout flexBasis={28} />
            {item.children &&
              item.children.map((links) => (
                <Layout key={links.id} pb={12}>
                  <Link
                    href={`${linksPath}${links.id}`}
                    fontWeight='semiBold'
                    lineHeight='medium'
                    color='stormdust'
                  >
                    {links.name}
                  </Link>
                </Layout>
              ))}
          </Column>
        ))}
      </Masonry>
    </Box>
  </SlideDrawer>
)
