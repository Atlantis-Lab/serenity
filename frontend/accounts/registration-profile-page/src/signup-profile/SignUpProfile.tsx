import React                    from 'react'

import { Button, SwitchButton } from '@ui/button'
import { Input }                from '@ui/input'
import { Box, Column, Layout }  from '@ui/layout'
import { Text }                 from '@ui/text'

import messages                 from './messages'

export const SignUpProfile = ({
  intl,
  type,
  firstName,
  lastName,
  errors = {},
  onChangeType,
  onChangeFirstName,
  onChangeLastName,
  onCreate,
}: any) => (
  <Box width={400} mx={[32, 0]}>
    <Column>
      <Layout>
        <Text color='white' fontWeight='bold' fontSize='giant'>
          {intl.formatMessage(messages.yourData)}
        </Text>
      </Layout>
      <Layout flexBasis={[24, 32, 32]} />
      <Layout>
        <SwitchButton value={type} onChange={onChangeType}>
          <Button value='specialist' size='large' fontWeight='medium'>
            {intl.formatMessage(messages.specialist)}
          </Button>
          <Button value='customer' size='large' fontWeight='medium'>
            {intl.formatMessage(messages.customer)}
          </Button>
        </SwitchButton>
      </Layout>
      <Layout flexBasis={24} />
      <Layout>
        <Input
          placeholder={intl.formatMessage(messages.firstName)}
          value={firstName}
          invalid={errors.firstName}
          onChange={onChangeFirstName}
          onEnter={onCreate}
        />
      </Layout>
      <Layout flexBasis={24}>
        {errors.firstName && (
          <Column>
            <Layout flexBasis={4} />
            <Layout>
              <Text color='red' fontSize='tiny'>
                {errors.firstName}
              </Text>
            </Layout>
          </Column>
        )}
      </Layout>
      <Layout>
        <Input
          placeholder={intl.formatMessage(messages.lastName)}
          value={lastName}
          invalid={errors.lastName}
          onChange={onChangeLastName}
          onEnter={onCreate}
        />
      </Layout>
      <Layout flexBasis={24}>
        {errors.lastName && (
          <Column>
            <Layout flexBasis={4} />
            <Layout>
              <Text color='red' fontSize='tiny'>
                {errors.lastName}
              </Text>
            </Layout>
          </Column>
        )}
      </Layout>
      <Layout>
        <Button fill size='large' color='chicago' fontWeight='medium' onClick={onCreate}>
          {intl.formatMessage(messages.save)}
        </Button>
      </Layout>
    </Column>
  </Box>
)
