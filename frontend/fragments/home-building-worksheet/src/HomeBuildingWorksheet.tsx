import React                        from 'react'

import { CheckButton }              from '@ui/button'
import { Divider }                  from '@ui/divider'
import { Input }                    from '@ui/input'
import { Box, Column, Layout, Row } from '@ui/layout'
import { Option, Select }           from '@ui/select'
import { Text }                     from '@ui/text'

import messages                     from './messages'

const houseTypes = [
  {
    id: 'brick',
    name: 'Кирпичный',
  },
  {
    id: 'foamBlocks',
    name: 'Из пеноблоков',
  },
]

const foundationTypes = [
  {
    id: 'pile',
    name: 'Свайный',
  },
  {
    id: 'slab',
    name: 'Плитный',
  },
]

const roofingTypes = [
  {
    id: 'metalTile',
    name: 'Металлочерепица',
  },
  {
    id: 'ceramic',
    name: 'Керамическая',
  },
]

export const HomeBuildingWorksheet = ({
  intl,
  houseType = {},
  foundationType = {},
  roofingType = {},
  houseArea,
  floorsNumber,
  projectStage = {},
  requireAdditionally = {},
  onChangeHouseType,
  onChangeFoundationType,
  onChangeRoofingType,
  onChangeHouseArea,
  onChangeFloorsNumber,
  onChangeProjectStage,
  onChangeRequireAdditionally,
}: any) => (
  <Column>
    <Column px={30} boxSizing='border-box'>
      <Layout flexBasis={20} />
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.houseType)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Select
          optionLabelProp='label'
          value={houseType.id}
          onChange={(value, option) => onChangeHouseType(value, option.props.label)}
          placeholder={intl.formatMessage(messages.houseTypePlaceholder)}
        >
          {houseTypes.map((item) => (
            <Option key={item.id} value={item.id} label={item.name}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Layout>
    </Column>
    <Layout flexBasis={30} />
    <Divider />
    <Layout flexBasis={22} />
    <Column px={30} boxSizing='border-box'>
      <Layout flexBasis={20} />
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.foundationType)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Select
          optionLabelProp='label'
          value={foundationType.id}
          onChange={(value, option) => onChangeFoundationType(value, option.props.label)}
          placeholder={intl.formatMessage(messages.foundationTypePlaceholder)}
        >
          {foundationTypes.map((item) => (
            <Option key={item.id} value={item.id} label={item.name}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Layout>
    </Column>
    <Layout flexBasis={30} />
    <Divider />
    <Layout flexBasis={22} />
    <Column px={30} boxSizing='border-box'>
      <Layout flexBasis={20} />
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.roofingType)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Select
          optionLabelProp='label'
          value={roofingType.id}
          onChange={(value, option) => onChangeRoofingType(value, option.props.label)}
          placeholder={intl.formatMessage(messages.roofingTypePlaceholder)}
        >
          {roofingTypes.map((item) => (
            <Option key={item.id} value={item.id} label={item.name}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Layout>
    </Column>
    <Layout flexBasis={30} />
    <Divider />
    <Layout flexBasis={22} />
    <Row px={30} boxSizing='border-box'>
      <Layout>
        <Column>
          <Layout>
            <Text fontWeight='medium' lineHeight='medium'>
              {intl.formatMessage(messages.houseArea)}
            </Text>
          </Layout>
          <Layout flexBasis={16} />
          <Layout>
            <Layout maxWidth={180}>
              <Input
                type='number'
                min={0}
                value={houseArea}
                onChange={onChangeHouseArea}
                placeholder={intl.formatMessage(messages.houseAreaPlaceholder)}
                addonAfter={intl.formatMessage(messages.squareMeter)}
              />
            </Layout>
          </Layout>
        </Column>
      </Layout>
      <Layout flexBasis={23} />
      <Layout>
        <Column>
          <Layout>
            <Text fontWeight='medium' lineHeight='medium'>
              {intl.formatMessage(messages.floorsNumber)}
            </Text>
          </Layout>
          <Layout flexBasis={16} />
          <Layout minWidth={180}>
            <Select
              value={floorsNumber}
              onChange={onChangeFloorsNumber}
              placeholder={intl.formatMessage(messages.floorsNumberPlaceholder)}
            >
              <Option value={1}>1</Option>
              <Option value={2}>2</Option>
              <Option value={3}>3</Option>
              <Option value={4}>4</Option>
              <Option value={5}>5</Option>
            </Select>
          </Layout>
        </Column>
      </Layout>
    </Row>
    <Layout flexBasis={30} />
    <Divider />
    <Layout flexBasis={22} />
    <Column px={30} boxSizing='border-box'>
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.projectStage)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={projectStage.planning}
              name='planning'
              text={intl.formatMessage(messages.planning)}
              onClick={onChangeProjectStage}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={projectStage.budgeting}
              name='budgeting'
              text={intl.formatMessage(messages.budgeting)}
              onClick={onChangeProjectStage}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={projectStage.executorSearching}
              name='executorSearching'
              text={intl.formatMessage(messages.executorSearching)}
              onClick={onChangeProjectStage}
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
          {intl.formatMessage(messages.requireAdditionally)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={requireAdditionally.purchaseMaterials}
              name='purchaseMaterials'
              text={intl.formatMessage(messages.purchaseMaterials)}
              onClick={onChangeRequireAdditionally}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={requireAdditionally.unloadingAndLifting}
              name='unloadingAndLifting'
              text={intl.formatMessage(messages.unloadingAndLifting)}
              onClick={onChangeRequireAdditionally}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={requireAdditionally.dismantling}
              name='dismantling'
              text={intl.formatMessage(messages.dismantling)}
              onClick={onChangeRequireAdditionally}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={requireAdditionally.garbageRemoval}
              name='garbageRemoval'
              text={intl.formatMessage(messages.garbageRemoval)}
              onClick={onChangeRequireAdditionally}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={requireAdditionally.cleaning}
              name='cleaning'
              text={intl.formatMessage(messages.cleaning)}
              onClick={onChangeRequireAdditionally}
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
