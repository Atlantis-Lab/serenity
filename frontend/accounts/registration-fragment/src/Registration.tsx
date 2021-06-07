import React, { useState } from 'react'

import { Form, FormField }            from '@atls/react-kratos-forms'
import { useKratosData }              from '@accounts/utils'
import { Button }                     from '@ui/button'
import { Input }                      from '@ui/input'
import { Box, Column, Layout }        from '@ui/layout'
import { Text }                       from '@ui/text'

import messages                       from './messages'

export const Registration = ({ intl }: any) => {
  const [csrfToken, setCsrfToken] = useState<string>('')
  const [action, setAction] = useState<string>('')
  const fields = [
    { name: 'csrf_token', type: 'hidden' },
    {
      name: 'traits.email',
      type: 'email',
      placeholder: intl.formatMessage(messages.email),
      value: '',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: intl.formatMessage(messages.enterPassword),
      value: '',
    },
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: intl.formatMessage(messages.confirmPassword),
      value: '',
    },
  ]

  useKratosData({ setCsrfToken, setAction })

  return (
    <Form fields={fields} action={action}>
      <Box width={400} mx={[32, 0]}>
        <Column>
          <Layout>
            <Text color='white' fontWeight='bold' fontSize='giant'>
              {intl.formatMessage(messages.signup)}
            </Text>
          </Layout>
          <FormField name='csrf_token'>
            {({ name, type }) => <Input name={name} type={type} value={csrfToken} />}
          </FormField>
          <Layout flexBasis={[32, 32, 32]} />
          <Layout>
            <FormField name='traits.email'>
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
            <FormField name='password'>
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
            <FormField name='confirmPassword'>
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
          <Layout flexBasis={30} />
          <Layout>
            <Button fill size='large' color='chicago' fontWeight='medium'>
              {intl.formatMessage(messages.createAccount)}
            </Button>
          </Layout>
        </Column>
      </Box>
    </Form>
  )
}
