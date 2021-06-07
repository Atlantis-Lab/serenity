import React, { useState }          from 'react'

import { Form, FormField }          from '@atls/react-kratos-forms'
import { useKratosData }            from '@accounts/utils'
import { Button }                   from '@ui/button'
import { Input }                    from '@ui/input'
import { Box, Column, Layout, Row } from '@ui/layout'
import { Link }                     from '@ui/link'
import { Text }                     from '@ui/text'

import messages                     from './messages'

export const Login = ({ intl }: any) => {
  const [csrfToken, setCsrfToken] = useState<string>('')
  const [action, setAction] = useState<string>('')
  const fields = [
    { name: 'csrf_token', type: 'hidden' },
    {
      name: 'identifier',
      type: 'email',
      placeholder: intl.formatMessage(messages.login),
      value: '',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: intl.formatMessage(messages.password),
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
              {intl.formatMessage(messages.signin)}
            </Text>
          </Layout>
          <Layout flexBasis={[32, 32, 40]} />
          <FormField name='csrf_token'>
            {({ name, type }) => <Input name={name} type={type} value={csrfToken} />}
          </FormField>
          <Layout>
            <FormField name='identifier'>
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
            <FormField name='password'>
              {({ name, type, placeholder }, value, onChange) => (
                <Input
                  name={name}
                  type={type}
                  value={value}
                  onChange={onChange}
                  borderRight='0px !important'
                  placeholder={placeholder}
                  addonAfter={
                    <Link href='/recovery' color='silver'>
                      {intl.formatMessage(messages.restore)}
                    </Link>
                  }
                />
              )}
            </FormField>
          </Layout>
          <Layout flexBasis={30} />
          <Layout>
            <Row justifyContent='space-between'>
              <Layout flexBasis={['auto', 190]}>
                <Button
                  fill
                  size='large'
                  color='chicagolite'
                  fontWeight='bold'
                  as={Link}
                  href='/registration'
                >
                  {intl.formatMessage(messages.signup)}
                </Button>
              </Layout>
              <Layout flexBasis={120}>
                <Button fill size='large' color='chicago' fontWeight='bold'>
                  {intl.formatMessage(messages.signin)}
                </Button>
              </Layout>
            </Row>
          </Layout>
        </Column>
      </Box>
    </Form>
  )
}
