import React                   from 'react'

import ProjectShort            from '@fragments/project-short'
import { Box, Column, Layout } from '@ui/layout'
import { Option, Search }      from '@ui/search'
import { Text }                from '@ui/text'

import messages                from './messages'

export const Projects = ({ intl, projects = [], searchData = [], onSearch }: any) => (
  <Column>
    <Layout flexBasis={48} alignItems='baseline'>
      <Text fontSize='massive' fontWeight='semiBold'>
        {intl.formatMessage(messages.orders)}
      </Text>
      <Layout flexBasis={32} />
      <Text fontSize='huge' color='silver' fontWeight='medium'>
        {projects.length}
      </Text>
    </Layout>
    <Layout flexBasis={20} />
    <Layout>
      <Search
        placeholder={intl.formatMessage(messages.search)}
        showArrow={false}
        onSearch={onSearch}
      >
        {searchData.map((item) => (
          <Option key={item.id} value={item.name}>
            {item.name}
          </Option>
        ))}
      </Search>
    </Layout>
    <Layout flexBasis={7} />
    <Layout>
      <Column>
        {projects.map((project) => (
          <Box
            key={project.id}
            my='7px'
            pt={13}
            pb={17}
            px={[16, 25]}
            width='100%'
            border='black'
            borderRadius='extra'
          >
            <ProjectShort intl={intl} {...project} />
          </Box>
        ))}
      </Column>
    </Layout>
    <Layout flexBasis={[40, 60, 80]} />
  </Column>
)
