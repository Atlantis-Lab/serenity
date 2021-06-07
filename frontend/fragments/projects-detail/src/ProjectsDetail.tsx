import React              from 'react'

import ProjectsShort      from '@fragments/project-short'
import { Carousel }       from '@ui/carousel'
import { Divider }        from '@ui/divider'
import { Image }          from '@ui/image'
import { Column, Layout } from '@ui/layout'
import { Text }           from '@ui/text'

import Worksheet          from './worksheet'
import messages           from './messages'

export const ProjectsDetail = ({
  intl,
  name,
  status,
  budget,
  category,
  legalEntitiesOnly,
  description,
  beginningOfWork,
  address,
  worksheet,
  views,
  replyCount,
  publicationDate,
  photos,
}: any) => (
  <Column>
    <Layout flexBasis={80}>
      <ProjectsShort
        intl={intl}
        name={name}
        views={views}
        status={status}
        budget={budget}
        category={category}
        replyCount={replyCount}
        publicationDate={publicationDate}
        legalEntitiesOnly={legalEntitiesOnly}
      />
    </Layout>
    <Layout flexBasis={40} />
    <Layout>
      <Text fontSize='regular' lineHeight='large'>
        {description}
      </Text>
    </Layout>
    <Layout flexBasis={45} />
    <Divider />
    <Layout flexBasis={28} />
    <Layout>
      <Text fontSize='regular' lineHeight='large'>
        {intl.formatMessage(messages.info)}
      </Text>
    </Layout>
    <Layout flexBasis={20} />
    <Layout>
      <Worksheet intl={intl} value={worksheet} />
    </Layout>
    <Layout flexBasis={20} />
    <Divider />
    <Layout flexBasis={33} />
    <Layout>
      <Text fontWeight='medium' color='stormdust' lineHeight='medium'>
        {intl.formatMessage(messages.beginningOfWork)}
      </Text>
    </Layout>
    <Layout flexBasis='6px' />
    <Layout>
      <Text fontSize='regular' lineHeight='medium'>
        {beginningOfWork === 'soon' && intl.formatMessage(messages.beginningOfWorkSoon)}
      </Text>
    </Layout>
    <Layout flexBasis={27} />
    <Layout>
      <Text fontWeight='medium' color='stormdust' lineHeight='medium'>
        {intl.formatMessage(messages.address)}
      </Text>
    </Layout>
    <Layout flexBasis='6px' />
    <Layout>
      <Text fontSize='regular' lineHeight='medium'>
        {address && address.formatted}
      </Text>
    </Layout>
    {photos && photos[0] && (
      <>
        <Layout flexBasis={20} />
        <Divider />
        <Layout flexBasis={33} />
        <Layout width='100%'>
          <Layout ml={[0, -16]} width='100%'>
            <Carousel>
              {photos.map((item) => (
                <Layout
                  key={item.id}
                  width={['calc(100vw - 40px)', 'auto']}
                  alignItems='center'
                  justifyContent='center'
                >
                  <Image
                    width='auto'
                    maxWidth={['100%', 'none']}
                    maxHeight={300}
                    draggable='false'
                    mx={16}
                    src={item.url}
                  />
                </Layout>
              ))}
            </Carousel>
          </Layout>
        </Layout>
        <Layout flexBasis={[40, 0]} />
        <Layout display={['flex', 'none']}>
          <Divider />
        </Layout>
      </>
    )}
  </Column>
)
