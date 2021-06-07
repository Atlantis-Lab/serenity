import React                   from 'react'

import { CheckButton }         from '@ui/button'
import { Divider }             from '@ui/divider'
import { Input }               from '@ui/input'
import { Box, Column, Layout } from '@ui/layout'
import { Text }                from '@ui/text'

import messages                from './messages'

export const FloorsWorksheet = ({
  intl,
  floorArea = '',
  typeOfFlooring = {},
  foundationPreparation = {},
  additionalWork = {},
  onChangeFloorArea,
  onChangeTypeOfFlooring,
  onChangeFoundationPreparation,
  onChangeAdditionalWork,
}: any) => (
  <Column>
    <Column px={30} boxSizing='border-box'>
      <Layout flexBasis={20} />
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.floorArea)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout maxWidth={180}>
        <Input
          type='number'
          min={0}
          value={floorArea}
          onChange={(value) => onChangeFloorArea(value)}
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
          {intl.formatMessage(messages.typeOfFlooring)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={typeOfFlooring.linoleum}
              name='linoleum'
              text={intl.formatMessage(messages.linoleum)}
              onClick={onChangeTypeOfFlooring}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={typeOfFlooring.laminate}
              name='laminate'
              text={intl.formatMessage(messages.laminate)}
              onClick={onChangeTypeOfFlooring}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={typeOfFlooring.parquet}
              name='parquet'
              text={intl.formatMessage(messages.parquet)}
              onClick={onChangeTypeOfFlooring}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={typeOfFlooring.carpet}
              name='carpet'
              text={intl.formatMessage(messages.carpet)}
              onClick={onChangeTypeOfFlooring}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={typeOfFlooring.batten}
              name='batten'
              text={intl.formatMessage(messages.batten)}
              onClick={onChangeTypeOfFlooring}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={typeOfFlooring.ceramicTile}
              name='ceramicTile'
              text={intl.formatMessage(messages.ceramicTile)}
              onClick={onChangeTypeOfFlooring}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={typeOfFlooring.cork}
              name='cork'
              text={intl.formatMessage(messages.cork)}
              onClick={onChangeTypeOfFlooring}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={typeOfFlooring.marmoleum}
              name='marmoleum'
              text={intl.formatMessage(messages.marmoleum)}
              onClick={onChangeTypeOfFlooring}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={typeOfFlooring.polymerFloor}
              name='polymerFloor'
              text={intl.formatMessage(messages.polymerFloor)}
              onClick={onChangeTypeOfFlooring}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={typeOfFlooring.anotherTypeOfFlooring}
              name='anotherTypeOfFlooring'
              text={intl.formatMessage(messages.anotherTypeOfFlooring)}
              onClick={onChangeTypeOfFlooring}
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
          {intl.formatMessage(messages.foundationPreparation)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={foundationPreparation.floorScreed}
              name='floorScreed'
              text={intl.formatMessage(messages.floorScreed)}
              onClick={onChangeFoundationPreparation}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={foundationPreparation.concreteFloor}
              name='concreteFloor'
              text={intl.formatMessage(messages.concreteFloor)}
              onClick={onChangeFoundationPreparation}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={foundationPreparation.woodenFloor}
              name='woodenFloor'
              text={intl.formatMessage(messages.woodenFloor)}
              onClick={onChangeFoundationPreparation}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={foundationPreparation.notRequired}
              name='notRequired'
              text={intl.formatMessage(messages.notRequired)}
              onClick={onChangeFoundationPreparation}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={foundationPreparation.anotherPreparation}
              name='anotherPreparation'
              text={intl.formatMessage(messages.anotherPreparation)}
              onClick={onChangeFoundationPreparation}
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
          {intl.formatMessage(messages.additionalWork)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={additionalWork.dismantlingFloor}
              name='dismantlingFloor'
              text={intl.formatMessage(messages.dismantlingFloor)}
              onClick={onChangeAdditionalWork}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={additionalWork.installSkirtingBoards}
              name='installSkirtingBoards'
              text={intl.formatMessage(messages.installSkirtingBoards)}
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
              active={additionalWork.installDoorSill}
              name='installDoorSill'
              text={intl.formatMessage(messages.installDoorSill)}
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
