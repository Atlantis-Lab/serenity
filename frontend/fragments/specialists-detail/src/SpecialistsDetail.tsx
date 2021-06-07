import React                                                    from 'react'

import Reviews                                                  from '@fragments/reviews'
import { Avatar }                                               from '@ui/avatar'
import { Button }                                               from '@ui/button'
import { Carousel }                                             from '@ui/carousel'
import { Divider }                                              from '@ui/divider'
import { Gallery }                                              from '@ui/gallery'
import { ChatIcon, CheckIcon, MapIcon, PlusIcon, TurnedInIcon } from '@ui/icons'
import { Image }                                                from '@ui/image'
import { Box, Column, Layout, Row }                             from '@ui/layout'
import { Rating }                                               from '@ui/rating'
import { ReadMore }                                             from '@ui/read-more'
import { Text }                                                 from '@ui/text'

import messages                                                 from './messages'

export const SpecialistsDetail = ({
  intl,
  id,
  specialisation = {},
  description,
  interaction = {},
  profile = {},
  completedProjects,
  reviewCount,
  reviews,
  confirmed = false,
  pro = false,
  portfolio,
  rating,
  visible,
  name,
  images,
  openGallery,
  closeGallery,
  onContact,
}: any) => (
  <Column overflow='hidden'>
    <Layout flexBasis={46} />
    <Layout justifyContent='center'>
      <Layout maxWidth={1200} px={[20, 20, 40]} boxSizing='border-box' width='100%'>
        <Row justifyContent='space-between'>
          <Layout flexBasis={600}>
            <Column>
              <Layout>
                <Box flexDirection={['column', 'row']} width='100%'>
                  <Layout>
                    <Text fontSize={['huge', 'massive']} lineHeight='extra' fontWeight='bold'>
                      {interaction.formOfWork === 'company'
                        ? interaction.name
                        : profile.personalInformation &&
                          `${profile.personalInformation.firstName} ${profile.personalInformation.lastName}`}
                    </Text>
                  </Layout>
                  <Layout flexBasis={pro || confirmed ? [13, 24] : 0} />
                  <Layout alignItems='center'>
                    {pro && (
                      <Box height={32} bg='black' alignItems='center' borderRadius='medium' px={11}>
                        <Text fontSize='increased' fontWeight='bold' color='white'>
                          {intl.formatMessage(messages.pro)}
                        </Text>
                      </Box>
                    )}
                    {confirmed && (
                      <Box
                        ml={pro && confirmed ? 16 : 0}
                        height={32}
                        width={32}
                        borderRadius='50%'
                        bg='silver'
                        justifyContent='center'
                        alignItems='center'
                        flexShrink={0}
                      >
                        <CheckIcon height={20} width={20} color='white' />
                      </Box>
                    )}
                  </Layout>
                </Box>
              </Layout>
              <Layout flexBasis={13} />
              <Layout display='block'>
                <Text
                  fontSize={['extra', 'large', 'giant']}
                  lineHeight='medium'
                  color='stormdust'
                  textTransform='none'
                >
                  {intl.formatMessage(messages.specializes)}
                </Text>
                {specialisation.main &&
                  specialisation.main.map((item, number) => {
                    if (
                      specialisation.main.length <= 1 ||
                      specialisation.main.length === number + 1
                    ) {
                      return (
                        <Text
                          key={item.id}
                          fontSize={['extra', 'large', 'giant']}
                          lineHeight='medium'
                          color='black'
                          textTransform='lowercase'
                          wordBreak='break-word'
                        >
                          {item.name}
                        </Text>
                      )
                    }
                    if (specialisation.main.length === number + 2) {
                      return (
                        <Text
                          key={item.id}
                          fontSize={['extra', 'large', 'giant']}
                          lineHeight='medium'
                          color='black'
                          textTransform='lowercase'
                          wordBreak='break-word'
                        >
                          {item.name}
                          <Text
                            fontSize={['extra', 'large', 'giant']}
                            lineHeight='medium'
                            color='stormdust'
                            wordBreak='break-word'
                          >
                            {` ${intl.formatMessage(messages.and)} `}
                          </Text>
                        </Text>
                      )
                    }
                    return (
                      <Text
                        key={item.id}
                        fontSize={['extra', 'large', 'giant']}
                        lineHeight='medium'
                        color='black'
                        textTransform='lowercase'
                        wordBreak='break-word'
                      >
                        {`${item.name}, `}
                      </Text>
                    )
                  })}
              </Layout>
            </Column>
          </Layout>
          <Layout flexBasis={40} />
          <Layout alignItems='center'>
            <Avatar
              width={[100, 100, 160]}
              height={[100, 100, 160]}
              color='alto'
              src={(profile.photo && profile.photo.url) || null}
            />
          </Layout>
        </Row>
      </Layout>
    </Layout>
    <Layout flexBasis={42} />
    <Divider />
    <Layout bg='alabaster'>
      <Column>
        <Layout flexBasis={32} />
        <Layout justifyContent='center'>
          <Layout maxWidth={1200} px={[20, 20, 40]} boxSizing='border-box' width='100%'>
            <Box flexDirection={['column', 'column', 'row']} width='100%'>
              <Layout>
                <Column alignItems='center'>
                  <Layout>
                    <Text lineHeight='medium' fontWeight='medium' color='stormdust'>
                      {intl.formatMessage(messages.rating)}
                    </Text>
                  </Layout>
                  <Layout flexBasis='8px' />
                  <Layout>
                    <Rating size='large' color='black' rating={rating} />
                  </Layout>
                </Column>
              </Layout>
              <Layout flexBasis={[20, 20, 56]} />
              <Layout flexGrow={1}>
                <Row justifyContent='center'>
                  <Layout>
                    <Column>
                      <Layout>
                        <Text
                          lineHeight='medium'
                          fontWeight='medium'
                          color='stormdust'
                          whiteSpace='nowrap'
                        >
                          {intl.formatMessage(messages.reviewCount)}
                        </Text>
                      </Layout>
                      <Layout flexBasis='6px' />
                      <Layout>
                        <Text fontSize='huge' lineHeight='extra' fontWeight='medium'>
                          {reviewCount}
                        </Text>
                      </Layout>
                    </Column>
                  </Layout>
                  <Layout flexBasis={56} />
                  <Layout>
                    <Column>
                      <Layout>
                        <Text
                          lineHeight='medium'
                          fontWeight='medium'
                          color='stormdust'
                          whiteSpace='nowrap'
                        >
                          {intl.formatMessage(messages.completedProjects)}
                        </Text>
                      </Layout>
                      <Layout flexBasis='6px' />
                      <Layout>
                        <Text fontSize='huge' lineHeight='extra' fontWeight='medium'>
                          {completedProjects}
                        </Text>
                      </Layout>
                    </Column>
                  </Layout>
                  {interaction.formOfWork === 'company' && (
                    <>
                      <Layout flexBasis={56} />
                      <Layout>
                        <Column>
                          <Layout>
                            <Text
                              lineHeight='medium'
                              fontWeight='medium'
                              color='stormdust'
                              whiteSpace='nowrap'
                            >
                              {intl.formatMessage(messages.employees)}
                            </Text>
                          </Layout>
                          <Layout flexBasis='6px' />
                          <Layout>
                            <Text fontSize='huge' lineHeight='extra' fontWeight='medium'>
                              {interaction.numberOfEmployees || 0}
                            </Text>
                          </Layout>
                        </Column>
                      </Layout>
                    </>
                  )}
                  <Layout flexBasis={[0, 0, 56]} />
                </Row>
              </Layout>
              <Layout flexBasis={[20, 20, 0]} />
              <Layout alignItems='center' flexGrow={1}>
                <Row justifyContent={['center', 'center', 'flex-end']}>
                  <Layout>
                    <Button equal borderRadius='large'>
                      <TurnedInIcon width={20} height={20} />
                    </Button>
                  </Layout>
                  <Layout flexBasis={16} />
                  <Layout>
                    <Button borderRadius={20}>
                      <PlusIcon width={24} height={24} />
                      {intl.formatMessage(messages.subscribe)}
                    </Button>
                  </Layout>
                  <Layout flexBasis={16} />
                  <Layout>
                    <Button
                      color='stormdust'
                      borderRadius={28}
                      onClick={() =>
                        onContact({
                          id,
                          photo: (profile.photo && profile.photo.url) || null,
                          firstName:
                            profile.personalInformation && profile.personalInformation.firstName,
                          lastName:
                            profile.personalInformation && profile.personalInformation.lastName,
                        })
                      }
                    >
                      <ChatIcon width={20} height={20} color='white' />
                      {intl.formatMessage(messages.contact)}
                    </Button>
                  </Layout>
                </Row>
              </Layout>
            </Box>
          </Layout>
        </Layout>
        <Layout flexBasis={32} />
      </Column>
    </Layout>
    <Divider />
    <Layout flexBasis={46} />
    <Layout justifyContent='center'>
      <Box
        maxWidth={1200}
        px={[20, 20, 40]}
        boxSizing='border-box'
        width='100%'
        flexDirection={['column-reverse', 'row']}
      >
        <Layout flexGrow={1}>
          <Column>
            {description && (
              <>
                <Layout>
                  <Text fontSize='giant' lineHeight='medium'>
                    {intl.formatMessage(messages.shortInfo)}
                  </Text>
                </Layout>
                <Layout>
                  <ReadMore
                    text={description}
                    activeTitle={intl.formatMessage(messages.readMore)}
                    inactiveTitle={intl.formatMessage(messages.hide)}
                  />
                </Layout>
                <Layout flexBasis={34} />
                <Divider />
                <Layout flexBasis={34} />
              </>
            )}
            {specialisation.additional && specialisation.additional[0] && (
              <>
                <Layout>
                  <Text fontSize='giant' lineHeight='medium'>
                    {intl.formatMessage(messages.additional)}
                  </Text>
                </Layout>
                <Layout flexBasis={34} />
                <Layout marginRight={-20}>
                  <Row flexWrap='wrap' justifyConten='space-between' marginLeft={-20}>
                    {specialisation.additional.map((item) => (
                      <Layout
                        key={item.id}
                        flexBasis={['50%', '50%', '33.3%']}
                        boxSizing='border-box'
                        px={20}
                        mb={12}
                      >
                        <Text fontSize='regular' lineHeight='medium' wordBreak='break-word'>
                          {item.name}
                        </Text>
                      </Layout>
                    ))}
                  </Row>
                </Layout>
                <Layout flexBasis={34} />
                <Divider />
              </>
            )}
          </Column>
        </Layout>
        <Layout flexBasis={[20, 20, 40]} flexShrink={0} />
        <Layout flexBasis={['auto', 200, 256]} flexShrink={0}>
          <Column>
            <Layout>
              <Box
                my='7px'
                p='16px 0 25px'
                width='100%'
                border='black'
                borderRadius='extra'
                flexDirection='column'
              >
                <Layout px={25}>
                  <Text fontSize='regular' lineHeight='medium'>
                    {intl.formatMessage(messages.contacts)}
                  </Text>
                </Layout>
                <Layout flexBasis={16} />
                <Divider />
                <Layout flexBasis={16} />
                <Layout px={25}>
                  <Text color='stormdust' lineHeight='medium' fontWeight='medium'>
                    {intl.formatMessage(messages.phone)}
                  </Text>
                </Layout>
                <Layout px={25}>
                  <Text fontSize='regular' lineHeight='medium' fontWeight='medium'>
                    {profile.contactInformation &&
                      profile.contactInformation.phone &&
                      profile.contactInformation.phone.number}
                  </Text>
                </Layout>
                {profile.website && (
                  <>
                    <Layout flexBasis={16} />
                    <Layout px={25}>
                      <Text color='stormdust' lineHeight='medium' fontWeight='medium'>
                        {intl.formatMessage(messages.website)}
                      </Text>
                    </Layout>
                    <Layout px={25}>
                      <Text fontSize='regular' lineHeight='medium' fontWeight='medium'>
                        {profile.website}
                      </Text>
                    </Layout>
                  </>
                )}
                {profile.address && profile.address.formatted && (
                  <>
                    <Layout flexBasis={16} />
                    <Layout px={25}>
                      <Text color='stormdust' lineHeight='medium' fontWeight='medium'>
                        {intl.formatMessage(messages.address)}
                      </Text>
                    </Layout>
                    <Layout px={25}>
                      <Text fontSize='regular' lineHeight='medium' fontWeight='medium'>
                        {profile.address.formatted}
                      </Text>
                    </Layout>
                  </>
                )}
                <Layout flexBasis={26} />
                <Layout px={25}>
                  <Row alignItems='center'>
                    <Layout>
                      <MapIcon width={20} height={20} />
                    </Layout>
                    <Layout flexBasis={12} />
                    <Layout>
                      <Text
                        color='mountainmist'
                        fontSize='tiny'
                        lineHeight='extra'
                        fontWeight='semiBold'
                      >
                        {intl.formatMessage(messages.geography)}
                      </Text>
                    </Layout>
                  </Row>
                </Layout>
              </Box>
            </Layout>
            <Layout flexGrow={1} />
          </Column>
        </Layout>
      </Box>
    </Layout>
    {portfolio && portfolio[0] && (
      <Layout justifyContent='center'>
        <Column maxWidth={1200} px={[20, 20, 40]} boxSizing='border-box'>
          <Layout flexBasis={34} />
          <Layout flexBasis={48} alignItems='baseline'>
            <Row justifyContent='space-between'>
              <Layout alignItems='center'>
                <Text fontSize='massive' fontWeight='semiBold'>
                  {intl.formatMessage(messages.portfolio)}
                </Text>
                <Layout flexBasis={[16, 32]} flexShrink={0} />
                <Text fontSize='huge' color='silver' fontWeight='medium'>
                  {portfolio.length}
                </Text>
              </Layout>
              <Layout flexBasis={20} />
              <Layout>
                <Button borderRadius={20}>{intl.formatMessage(messages.allWorks)}</Button>
              </Layout>
            </Row>
            <Layout flexBasis={[0, 220, 296]} flexShrink={0} />
          </Layout>
          <Layout flexBasis={34} />
          <Layout ml={[0, -16]}>
            <Carousel>
              {portfolio.map(
                (item) =>
                  item.images[0] && (
                    <Column key={item.images[0].id} mx={16}>
                      <Layout
                        width={['calc(100vw - 72px)', 'auto']}
                        alignItems='center'
                        justifyContent='center'
                        flexGrow={[1, 0]}
                      >
                        <Image
                          maxHeight={[300, 'none']}
                          height={['auto', 300, 480]}
                          maxWidth={['100%', 'none']}
                          src={item.images[0].url}
                          cursor='pointer'
                          draggable='false'
                          onClick={() => openGallery(item.images, item.name)}
                        />
                      </Layout>
                      <Layout flexBasis={15} />
                      <Layout justifyContent={['center', 'normal']}>
                        <Text
                          color='mountainmist'
                          fontSize='regular'
                          fontWeight='medium'
                          lineHeight='medium'
                          wordBreak='break-word'
                          whiteSpace='nowrap'
                        >
                          {item.name}
                        </Text>
                      </Layout>
                    </Column>
                  )
              )}
            </Carousel>
          </Layout>
          <Layout flexBasis={56} />
          <Layout>
            <Divider />
            <Layout flexBasis={[0, 220, 296]} flexShrink={0} />
          </Layout>
        </Column>
      </Layout>
    )}
    {reviews && reviews[0] && (
      <Layout justifyContent='center'>
        <Box maxWidth={1200} px={[20, 20, 40]} width='100%'>
          <Layout flexGrow={1}>
            <Column>
              <Layout flexBasis={34} />
              <Layout flexBasis={48} alignItems='baseline'>
                <Text fontSize='massive' fontWeight='semiBold'>
                  {intl.formatMessage(messages.reviews)}
                </Text>
                <Layout flexBasis={32} />
                <Text fontSize='huge' color='silver' fontWeight='medium'>
                  {reviews.length}
                </Text>
              </Layout>
              <Layout flexBasis={13} />
              <Layout>
                <Reviews reviews={reviews} />
              </Layout>
            </Column>
          </Layout>
          <Layout pt={[0, 68]} flexBasis={['auto', 220, 296]} />
        </Box>
      </Layout>
    )}
    <Gallery visible={visible} name={name} images={images} onClose={closeGallery} />
  </Column>
)
