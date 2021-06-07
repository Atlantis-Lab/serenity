import React                   from 'react'

import { Box, Column, Layout } from '@ui/layout'
import { Option, Search }      from '@ui/search'
import { Text }                from '@ui/text'

import messages                from './messages'

export const Main = ({
  intl,
  data = [],
  onChangeSearch = () => {},
  onSelectOption = (v) => {},
  onSelectValue = (v) => {},
}) => (
  <Box justifyContent='center' bg='stardust' height='calc(100vh - 56px)'>
    <Layout maxWidth={1200} px={[20, 20, 40]} boxSizing='border-box' width='100%'>
      <Column justifyContent='center'>
        <Layout maxWidth={760}>
          <Text
            color='white'
            fontSize={['massive', 'massive', 'biggest']}
            fontWeight='bold'
            lineHeight='extra'
          >
            {intl.formatMessage(messages.collected)}
          </Text>
        </Layout>
        <Layout flexBasis={[30, 30, 56]} />
        <Layout>
          <Search
            onSearch={onChangeSearch}
            onSelect={onSelectOption}
            onSelectValue={onSelectValue}
            placeholder={intl.formatMessage(messages.looking)}
            size='large'
            optionFilterProp='label'
            autoFocus
          >
            {data.map((item: any) => (
              <Option key={item.id} value={item.id} label={item.name}>
                {item.name}
              </Option>
            ))}
          </Search>
        </Layout>
        <Layout flexBasis={100} />
      </Column>
    </Layout>
  </Box>
)
