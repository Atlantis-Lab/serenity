import React                        from 'react'

import { Avatar }                   from '@ui/avatar'
import { Box, Column, Layout, Row } from '@ui/layout'
import { Rating }                   from '@ui/rating'
import { Text }                     from '@ui/text'

export const Reviews = ({ reviews = [] }) => (
  <Column>
    {reviews.map((review: any) => (
      <Box
        key={review.id}
        my='7px'
        p='16px 25px 25px 16px'
        pr={['16px', '25px']}
        width='100%'
        border='black'
        borderRadius='extra'
      >
        <Layout>
          <Avatar
            width={56}
            height={56}
            color='alto'
            src={(review.customer.photo && review.customer.photo.url) || null}
          />
        </Layout>
        <Layout flexBasis={16} flexShrink={0} />
        <Layout flexGrow={1}>
          <Column>
            <Layout flexBasis='7px' />
            <Layout>
              <Row justifyContent='space-between' alignItems='center'>
                <Layout>
                  <Text fontWeight='medium' fontSize='regular' lineHeight='medium'>
                    {review.customer.personalInformation.firstName}{' '}
                    {review.customer.personalInformation.lastName}
                  </Text>
                </Layout>
                <Layout flexBasis={20} />
                <Layout>
                  <Rating rating={review.rating} />
                </Layout>
              </Row>
            </Layout>
            <Layout flexBasis={32} />
            <Layout>
              <Text lineHeight='medium'>{review.comment}</Text>
            </Layout>
          </Column>
        </Layout>
      </Box>
    ))}
  </Column>
)
