import React, { useState }     from 'react'

import { Form, FormField }     from '@atls/react-kratos-forms'
import { useKratosData }       from '@accounts/utils'
import { Button }              from '@ui/button'
import { Input }               from '@ui/input'
import { Box, Column, Layout } from '@ui/layout'
import { Text }                from '@ui/text'

import messages                from './messages'

export const Recovery = ({ intl }: any) => {
  const [csrfToken, setCsrfToken] = useState<string>('')
  const [action, setAction] = useState<string>('')
  const fields = [
    { name: 'csrf_token', type: 'hidden' },
    { name: 'email', type: 'email', placeholder: intl.formatMessage(messages.email), value: '' },
  ]

  useKratosData({ setCsrfToken, setAction })

  return (
    <Form fields={fields} action={action}>
      <Box width={400} mx={[32, 0]}>
        <Column>
          <Layout>
            <Text color='white' fontWeight='bold' fontSize='giant'>
              {intl.formatMessage(messages.resetPassword)}
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 32]} />
          <FormField name='csrf_token'>
            {({ name, type }) => <Input name={name} type={type} value={csrfToken} />}
          </FormField>
          <Layout>
            <FormField name='email'>
              {({ name, type, placeholder }, value, onChange) => (
                <Input
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  value={value}
                  onChange={onChange}
                />
              )}
            </FormField>
          </Layout>
          <Layout flexBasis={24} />
          <Layout>
            <Button fill size='large' color='chicago' fontWeight='medium'>
              {intl.formatMessage(messages.sendMail)}
            </Button>
          </Layout>
        </Column>
      </Box>
    </Form>
  )
}
