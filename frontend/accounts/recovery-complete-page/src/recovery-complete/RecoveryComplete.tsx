import React                   from 'react'

import { Button }              from '@ui/button'
import { Box, Column, Layout } from '@ui/layout'
import { Link }                from '@ui/link'
import { Text }                from '@ui/text'

import messages                from './messages'

export const RecoveryComplete = ({ intl, siteUrl }: any) => (
  <Box width={400} mx={[32, 0]}>
    <Column>
      <Layout>
        <Text color='white' fontWeight='bold' fontSize='giant'>
          {intl.formatMessage(messages.resetPassword)}
        </Text>
      </Layout>
      <Layout flexBasis={[24, 24, 32]} />
      <Layout>
        <Text color='white' fontSize='medium'>
          {intl.formatMessage(messages.description)}
        </Text>
      </Layout>
      <Layout flexBasis={24} />
      <Layout>
        <Button fill size='large' color='white' fontWeight='medium' as={Link} href={siteUrl}>
          {intl.formatMessage(messages.backToMain)}
        </Button>
      </Layout>
    </Column>
  </Box>
)
