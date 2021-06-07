import React                        from 'react'

import { Avatar }                   from '@ui/avatar'
import { Button }                   from '@ui/button'
import { Carousel }                 from '@ui/carousel'
import { ChatIcon, StarIcon }       from '@ui/icons'
import { Image }                    from '@ui/image'
import { Box, Column, Layout, Row } from '@ui/layout'
import { NextLink as Link }         from '@ui/link'
import { Option, Search }           from '@ui/search'
import { Text }                     from '@ui/text'

import messages                     from './messages'

export const Specialists = ({
  intl,
  specialists = [],
  searchData = [],
  searchDefaultValue = '',
  onSearch,
  onContact,
}: any) => (
  <Column>
    <Layout flexBasis={48} alignItems='baseline'>
      <Text fontSize='massive' fontWeight='semiBold'>
        {intl.formatMessage(messages.specialists)}
      </Text>
      <Layout flexBasis={32} />
      <Text fontSize='huge' color='silver' fontWeight='medium'>
        {specialists.length}
      </Text>
    </Layout>
    <Layout flexBasis={20} />
    <Layout>
      <Search
        defaultValue={searchDefaultValue}
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
        {specialists.map((specialist) => (
          <Box
            key={specialist.id}
            my='7px'
            p='16px 25px 25px 16px'
            pr={['16px', '25px']}
            width='100%'
            border='black'
            borderRadius='extra'
            flexDirection='column'
            overflow='hidden'
          >
            <Layout>
              <Row>
                <Layout>
                  <Column>
                    <Layout>
                      <Avatar
                        width={56}
                        height={56}
                        color='alto'
                        src={(specialist.profile.photo && specialist.profile.photo.url) || null}
                      />
                    </Layout>
                    <Layout flexBasis={13} />
                    <Layout alignItems='center' justifyContent='center'>
                      <Layout>
                        <Text lineHeight='medium'>{specialist.rating}</Text>
                      </Layout>
                      <Layout pl='4px'>
                        <StarIcon width={16} height={16} />
                      </Layout>
                    </Layout>
                  </Column>
                </Layout>
                <Layout flexBasis={16} flexShrink={0} />
                <Layout flexGrow={1} overflow='hidden'>
                  <Column>
                    <Layout flexBasis='7px' />
                    <Layout>
                      <Row justifyContent='space-between'>
                        <Layout>
                          <Column>
                            <Layout>
                              <Link href={`/specialists/${specialist.id}`}>
                                <Text
                                  fontWeight='medium'
                                  fontSize='regular'
                                  lineHeight='medium'
                                  color='black'
                                >
                                  {specialist.interaction.formOfWork === 'company'
                                    ? specialist.interaction.name
                                    : `${specialist.profile.personalInformation.firstName} ${specialist.profile.personalInformation.lastName}`}
                                </Text>
                              </Link>
                            </Layout>
                            <Layout alignItems='center'>
                              <Layout>
                                <Text color='silver' lineHeight='medium' wordBreak='break-word'>
                                  {specialist.specialisation.main
                                    .map((item) => item.name)
                                    .join(', ')}
                                </Text>
                              </Layout>
                              <Layout>
                                {specialist.specialisation.additional &&
                                  specialist.specialisation.additional[0] && (
                                    <Box
                                      bg='alto'
                                      ml='12px'
                                      px='4px'
                                      height={20}
                                      alignItems='center'
                                      display='inline-block'
                                    >
                                      <Text
                                        color='silver'
                                        fontWeight='medium'
                                      >{`+${specialist.specialisation.additional.length}`}</Text>
                                    </Box>
                                  )}
                              </Layout>
                            </Layout>
                          </Column>
                        </Layout>
                        <Layout flexBasis={[0, 20]} flexShrink={0} />
                        <Layout alignItems='center' display={['none', 'none', 'flex']}>
                          <Button
                            borderRadius={20}
                            onClick={() =>
                              onContact({
                                id: specialist.id,
                                photo:
                                  (specialist.profile.photo && specialist.profile.photo.url) ||
                                  null,
                                name:
                                  specialist.interaction.formOfWork === 'company'
                                    ? specialist.interaction.name
                                    : `${specialist.profile.personalInformation.firstName} ${specialist.profile.personalInformation.lastName}`,
                              })
                            }
                          >
                            <ChatIcon width={20} height={20} color='rgb(153, 153, 153)' />
                            {intl.formatMessage(messages.contact)}
                          </Button>
                        </Layout>
                      </Row>
                    </Layout>
                    <Layout flexBasis={18} />
                    <Layout>
                      <Text lineHeight='medium'>
                        {(specialist.description || '').slice(0, 450)}
                      </Text>
                    </Layout>
                    <Layout flexBasis={specialist.portfolio[0] ? 20 : 0} />
                  </Column>
                </Layout>
              </Row>
            </Layout>
            <Layout flexBasis='5px' />
            <Layout ml={72} mr={-25} overflow='hidden'>
              <Layout ml={-16} width='100%'>
                <Carousel disableButton>
                  {specialist.portfolio.map(
                    (item) =>
                      item.images[0] && (
                        <Image
                          key={item.images[0].id}
                          width='auto'
                          height={120}
                          draggable='false'
                          mx={16}
                          src={item.images[0].url}
                        />
                      )
                  )}
                </Carousel>
              </Layout>
            </Layout>
          </Box>
        ))}
      </Column>
    </Layout>
    <Layout flexBasis={[40, 60, 80]} />
  </Column>
)
