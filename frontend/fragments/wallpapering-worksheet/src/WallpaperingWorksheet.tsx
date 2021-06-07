import React                   from 'react'

import { CheckButton }         from '@ui/button'
import { Divider }             from '@ui/divider'
import { Input }               from '@ui/input'
import { Box, Column, Layout } from '@ui/layout'
import { Text }                from '@ui/text'

import messages                from './messages'

export const WallpaperingWorksheet = ({
  intl,
  surfaceArea = '',
  wallpaperType = {},
  preparingWalls = {},
  additionalWork = {},
  onChangeSurfaceArea,
  onChangeWallpaperType,
  onChangePreparingWalls,
  onChangeAdditionalWork,
}: any) => (
  <Column>
    <Column px={30} boxSizing='border-box'>
      <Layout flexBasis={20} />
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.surfaceArea)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout maxWidth={180}>
        <Input
          type='number'
          min={0}
          value={surfaceArea}
          onChange={(value) => onChangeSurfaceArea(value)}
          placeholder={intl.formatMessage(messages.enterArea)}
          addonAfter={intl.formatMessage(messages.squareMeter)}
        />
      </Layout>
    </Column>
    <Layout flexBasis={30} />
    <Divider />
    <Layout flexBasis={22} />
    <Column px={30} boxSizing='border-box'>
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.wallpaperType)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={wallpaperType.paper}
              name='paper'
              text={intl.formatMessage(messages.paper)}
              onClick={onChangeWallpaperType}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={wallpaperType.vinyl}
              name='vinyl'
              text={intl.formatMessage(messages.vinyl)}
              onClick={onChangeWallpaperType}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={wallpaperType.nonWoven}
              name='nonWoven'
              text={intl.formatMessage(messages.nonWoven)}
              onClick={onChangeWallpaperType}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={wallpaperType.liquid}
              name='liquid'
              text={intl.formatMessage(messages.liquid)}
              onClick={onChangeWallpaperType}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={wallpaperType.photowallPaper}
              name='photowallPaper'
              text={intl.formatMessage(messages.photowallPaper)}
              onClick={onChangeWallpaperType}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={wallpaperType.glassPaper}
              name='glassPaper'
              text={intl.formatMessage(messages.glassPaper)}
              onClick={onChangeWallpaperType}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={wallpaperType.forPainting}
              name='forPainting'
              text={intl.formatMessage(messages.forPainting)}
              onClick={onChangeWallpaperType}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={wallpaperType.textile}
              name='textile'
              text={intl.formatMessage(messages.textile)}
              onClick={onChangeWallpaperType}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={wallpaperType.wallpaperTypeAnother}
              name='wallpaperTypeAnother'
              text={intl.formatMessage(messages.wallpaperTypeAnother)}
              onClick={onChangeWallpaperType}
            />
          </Layout>
          <Layout flexBasis={[0, 0, 22]} />
          <Layout flexGrow={[0, 0, 1]} flexBasis={[0, 0, '50%']} />
        </Box>
      </Layout>
    </Column>
    <Layout flexBasis={30} />
    <Divider />
    <Layout flexBasis={22} />
    <Column px={30} boxSizing='border-box'>
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.preparingWalls)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={preparingWalls.brickConcrete}
              name='brickConcrete'
              text={intl.formatMessage(messages.brickConcrete)}
              onClick={onChangePreparingWalls}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={preparingWalls.plastered}
              name='plastered'
              text={intl.formatMessage(messages.plastered)}
              onClick={onChangePreparingWalls}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={preparingWalls.gypsum}
              name='gypsum'
              text={intl.formatMessage(messages.gypsum)}
              onClick={onChangePreparingWalls}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={preparingWalls.preparingWallsAnother}
              name='preparingWallsAnother'
              text={intl.formatMessage(messages.preparingWallsAnother)}
              onClick={onChangePreparingWalls}
            />
          </Layout>
        </Box>
      </Layout>
    </Column>
    <Layout flexBasis={30} />
    <Divider />
    <Layout flexBasis={22} />
    <Column px={30} boxSizing='border-box'>
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.additionalWork)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={additionalWork.dismantlingOldFinish}
              name='dismantlingOldFinish'
              text={intl.formatMessage(messages.dismantlingOldFinish)}
              onClick={onChangeAdditionalWork}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={additionalWork.align}
              name='align'
              text={intl.formatMessage(messages.align)}
              onClick={onChangeAdditionalWork}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={additionalWork.installSkirting}
              name='installSkirting'
              text={intl.formatMessage(messages.installSkirting)}
              onClick={onChangeAdditionalWork}
            />
          </Layout>
          <Layout flexBasis={[0, 0, 22]} />
          <Layout flexGrow={[0, 0, 1]} flexBasis={[0, 0, '50%']} />
        </Box>
      </Layout>
    </Column>
    <Layout flexBasis={30} />
    <Divider />
  </Column>
)
