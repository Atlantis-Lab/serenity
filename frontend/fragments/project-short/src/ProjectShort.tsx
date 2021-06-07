import React                                    from 'react'

import { PersonIcon, VisibilityIcon, WorkIcon } from '@ui/icons'
import { Label }                                from '@ui/label'
import { Box, Column, Layout, Row }             from '@ui/layout'
import { NextLink as Link }                     from '@ui/link'
import { RelativeTime }                         from '@ui/relative-time'
import { Text }                                 from '@ui/text'

import messages                                 from './messages'

export const ProjectShort = ({
  intl,
  id = '',
  name = '',
  status = '',
  budget = '',
  description = '',
  category = {
    name: '',
  },
  replyStatus = '',
  legalEntitiesOnly = false,
  replyCount = 0,
  views = 0,
  type = 'projects',
  short = false,
  publicationDate,
}: any) => (
  <Column>
    <Layout>
      <Row justifyContent='space-between'>
        <Layout>
          {id && (
            <Link href={`/${type}/${id}`}>
              <Text
                fontWeight='medium'
                fontSize={['extra', 'large']}
                lineHeight='extra'
                color='black'
              >
                {name}
              </Text>
            </Link>
          )}
          {!id && (
            <Text
              fontWeight='medium'
              fontSize={['extra', 'large']}
              lineHeight='extra'
              color='black'
            >
              {name}
            </Text>
          )}
        </Layout>
        <Layout flexBasis={20} />
        <Layout alignItems='center'>
          <Text
            fontWeight='medium'
            fontSize='extra'
            lineHeight='extra'
            color='mountainmist'
            whiteSpace='nowrap'
          >
            {intl.formatNumber(budget, {
              style: 'currency',
              currency: 'RUB',
              minimumSignificantDigits: 1,
            })}
          </Text>
        </Layout>
      </Row>
    </Layout>
    <Layout flexBasis='5px' />
    <Layout>
      <Text lineHeight='medium'>{description}</Text>
    </Layout>
    <Layout flexBasis={15} />
    <Layout>
      <Row alignItems={['flex-start', 'flex-start', 'flex-start', 'center']}>
        <Box flexDirection={['column-reverse', 'column-reverse', 'row']} flexGrow={1}>
          <Layout>
            <Text fontWeight='medium' lineHeight='medium' color='silver' px='6px' bg='alto'>
              {category.name}
            </Text>
          </Layout>
          <Layout flexBasis={16} />
          <Layout alignItems='center'>
            {messages[status] && <Label size='small'>{intl.formatMessage(messages[status])}</Label>}
          </Layout>
          <Layout flexGrow={1} />
          {replyStatus && (
            <>
              <Layout flexBasis={[10, 10, 40]} />
              <Layout alignItems='center'>
                <Text fontWeight='semiBold' fontSize='tiny' color='mountainmist'>
                  {intl.formatMessage(
                    (status === 'published' && messages.notSelected) ||
                      ((replyStatus === 'chosen' ||
                        replyStatus === 'performed' ||
                        replyStatus === 'completed') &&
                        messages.selected) ||
                      messages.notYouSelected
                  )}
                </Text>
              </Layout>
            </>
          )}
          {publicationDate && (
            <>
              <Layout flexBasis={[10, 10, 40]} />
              <Layout alignItems='center'>
                <Text fontSize='tiny' color='mountainmist'>
                  <RelativeTime value={publicationDate} />
                </Text>
              </Layout>
            </>
          )}
        </Box>
        <Layout flexBasis={[10, 20, 40]} />
        <Box flexDirection={['column-reverse', 'column-reverse', 'column-reverse', 'row']}>
          {legalEntitiesOnly && (
            <Layout pr={[0, 0, 0, 32]}>
              <WorkIcon width={16} height={16} />
            </Layout>
          )}
          <Layout flexBasis={[10, 10, 10, 0]} />
          <Layout pr={[0, 0, 0, 24]}>
            <PersonIcon width={16} height={16} />
            <Text
              fontWeight='semiBold'
              fontSize='tiny'
              color='mountainmist'
              pl={['4px', '4px', '8px']}
              whiteSpace='nowrap'
            >
              {replyCount}
              {short
                ? intl.formatMessage(messages.replyCount, {
                    сount: replyCount,
                  })
                : ''}
            </Text>
          </Layout>
          <Layout flexBasis={[10, 10, 10, 0]} />
          <Layout>
            <VisibilityIcon width={16} height={16} />
            <Text
              fontWeight='semiBold'
              fontSize='tiny'
              color='mountainmist'
              pl={['4px', '4px', '8px']}
              whiteSpace='nowrap'
            >
              {views}
              {short ? intl.formatMessage(messages.views, { сount: views }) : ''}
            </Text>
          </Layout>
        </Box>
      </Row>
    </Layout>
  </Column>
)
