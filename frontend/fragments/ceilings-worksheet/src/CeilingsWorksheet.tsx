import React                        from 'react'

import { CheckButton }              from '@ui/button'
import { Divider }                  from '@ui/divider'
import { Input }                    from '@ui/input'
import { Box, Column, Layout, Row } from '@ui/layout'
import { Option, Select }           from '@ui/select'
import { Text }                     from '@ui/text'

import messages                     from './messages'

const ceilingTypes = {
  stretch: {
    id: 'stretch',
    name: 'Натяжной потолок',
    children: [
      {
        id: 'stretchFabric',
        name: 'Тканевые',
      },
      {
        id: 'stretchCoatingPVC',
        name: 'ПВХ покрытие',
      },
    ],
  },
}

export const CeilingsWorksheet = ({
  intl,
  ceilingType = {},
  size = {},
  mounting = {},
  installEngineeringSystems = {},
  installationRoom = {},
  projectStage = {},
  requireAdditionally = {},
  onChangeCeilingType,
  onChangeSize,
  onChangeMounting,
  onChangeInstallEngineeringSystems,
  onChangeInstallationRoom,
  onChangeProjectStage,
  onChangeRequireAdditionally,
}: any) => (
  <Column>
    <Column px={30} boxSizing='border-box'>
      <Layout flexBasis={20} />
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.ceilingType)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <Select
              optionLabelProp='label'
              value={ceilingType.group}
              onChange={(value) => onChangeCeilingType('group', value)}
              placeholder={intl.formatMessage(messages.ceilingTypePlaceholder)}
            >
              {Object.keys(ceilingTypes).map((item) => (
                <Option
                  key={ceilingTypes[item].id}
                  value={ceilingTypes[item].id}
                  label={ceilingTypes[item].name}
                >
                  {ceilingTypes[item].name}
                </Option>
              ))}
            </Select>
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <Select
              optionLabelProp='label'
              value={ceilingType.type}
              onChange={(value) => onChangeCeilingType('type', value)}
              placeholder={intl.formatMessage(messages.ceilingTypePlaceholder)}
              disabled={!ceilingType.group}
            >
              {ceilingTypes[ceilingType.group] &&
                ceilingTypes[ceilingType.group].children.map((item) => (
                  <Option key={item.id} value={item.id} label={item.name}>
                    {item.name}
                  </Option>
                ))}
            </Select>
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
          {intl.formatMessage(messages.size)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Row>
          <Layout flexBasis={180}>
            <Input
              type='number'
              min={0}
              value={size.length || ''}
              onChange={(value) => onChangeSize('length', value)}
              placeholder={intl.formatMessage(messages.length)}
              addonAfter={intl.formatMessage(messages.sizeMeter)}
            />
          </Layout>
          <Layout flexBasis={24} />
          <Layout flexBasis={180}>
            <Input
              type='number'
              min={0}
              value={size.width || ''}
              onChange={(value) => onChangeSize('width', value)}
              placeholder={intl.formatMessage(messages.width)}
              addonAfter={intl.formatMessage(messages.sizeMeter)}
            />
          </Layout>
        </Row>
      </Layout>
    </Column>
    <Layout flexBasis={30} />
    <Divider />
    <Layout flexBasis={22} />
    <Column px={30} boxSizing='border-box'>
      <Layout>
        <Text fontWeight='medium' lineHeight='medium'>
          {intl.formatMessage(messages.mounting)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={mounting.heatingAndOtherPipes}
              name='heatingAndOtherPipes'
              text={intl.formatMessage(messages.heatingAndOtherPipes)}
              onClick={onChangeMounting}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={mounting.installCornices}
              name='installCornices'
              text={intl.formatMessage(messages.installCornices)}
              onClick={onChangeMounting}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={mounting.builtinWardrobe}
              name='builtinWardrobe'
              text={intl.formatMessage(messages.builtinWardrobe)}
              onClick={onChangeMounting}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={mounting.complexCeiling}
              name='complexCeiling'
              text={intl.formatMessage(messages.complexCeiling)}
              onClick={onChangeMounting}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={mounting.more3Meters}
              name='more3Meters'
              text={intl.formatMessage(messages.more3Meters)}
              onClick={onChangeMounting}
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
          {intl.formatMessage(messages.installEngineeringSystems)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={installEngineeringSystems.electricalWiring}
              name='electricalWiring'
              text={intl.formatMessage(messages.electricalWiring)}
              onClick={onChangeInstallEngineeringSystems}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={installEngineeringSystems.spotlights}
              name='spotlights'
              text={intl.formatMessage(messages.spotlights)}
              onClick={onChangeInstallEngineeringSystems}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={installEngineeringSystems.pendantChandelier}
              name='pendantChandelier'
              text={intl.formatMessage(messages.pendantChandelier)}
              onClick={onChangeInstallEngineeringSystems}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={installEngineeringSystems.ceilingChandelier}
              name='ceilingChandelier'
              text={intl.formatMessage(messages.ceilingChandelier)}
              onClick={onChangeInstallEngineeringSystems}
            />
          </Layout>
        </Box>
      </Layout>
      <Layout flexBasis={22} />
      <Layout>
        <Box flexDirection={['column', 'row']} width='100%'>
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={installEngineeringSystems.ventilationGrilles}
              name='ventilationGrilles'
              text={intl.formatMessage(messages.ventilationGrilles)}
              onClick={onChangeInstallEngineeringSystems}
            />
          </Layout>
          <Layout flexBasis={22} flexShrink={0} />
          <Layout flexGrow={1} flexBasis={['100%', '100%', '50%']}>
            <CheckButton
              active={installEngineeringSystems.alarmSensors}
              name='alarmSensors'
              text={intl.formatMessage(messages.alarmSensors)}
              onClick={onChangeInstallEngineeringSystems}
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
          {intl.formatMessage(messages.installationRoom)}
        </Text>
      </Layout>
      <Layout flexBasis={16} />
      <Layout>
        <Row flexWrap='wrap'>
          <Layout mr={24} mb={24}>
            <CheckButton
              active={installationRoom.bathroom}
              name='bathroom'
              text={intl.formatMessage(messages.bathroom)}
              onClick={onChangeInstallationRoom}
            />
          </Layout>
          <Layout mr={24} mb={24}>
            <CheckButton
              active={installationRoom.garage}
              name='garage'
              text={intl.formatMessage(messages.garage)}
              onClick={onChangeInstallationRoom}
            />
          </Layout>
          <Layout mr={24} mb={24}>
            <CheckButton
              active={installationRoom.livingRoom}
              name='livingRoom'
              text={intl.formatMessage(messages.livingRoom)}
              onClick={onChangeInstallationRoom}
            />
          </Layout>
          <Layout mr={24} mb={24}>
            <CheckButton
              active={installationRoom.cabinet}
              name='cabinet'
              text={intl.formatMessage(messages.cabinet)}
              onClick={onChangeInstallationRoom}
            />
          </Layout>
          <Layout mr={24} mb={24}>
            <CheckButton
              active={installationRoom.kitchen}
              name='kitchen'
              text={intl.formatMessage(messages.kitchen)}
              onClick={onChangeInstallationRoom}
            />
          </Layout>
          <Layout mr={24} mb={24}>
            <CheckButton
              active={installationRoom.basement}
              name='basement'
              text={intl.formatMessage(messages.basement)}
              onClick={onChangeInstallationRoom}
            />
          </Layout>
          <Layout mr={24} mb={24}>
            <CheckButton
              active={installationRoom.laundry}
              name='laundry'
              text={intl.formatMessage(messages.laundry)}
              onClick={onChangeInstallationRoom}
            />
          </Layout>
          <Layout mr={24} mb={24}>
            <CheckButton
              active={installationRoom.hallway}
              name='hallway'
              text={intl.formatMessage(messages.hallway)}
              onClick={onChangeInstallationRoom}
            />
          </Layout>
          <Layout mr={24} mb={24}>
            <CheckButton
              active={installationRoom.bedroom}
              name='bedroom'
              text={intl.formatMessage(messages.bedroom)}
              onClick={onChangeInstallationRoom}
            />
          </Layout>
          <Layout mr={24} mb={24}>
            <CheckButton
              active={installationRoom.diningRoom}
              name='diningRoom'
              text={intl.formatMessage(messages.diningRoom)}
              onClick={onChangeInstallationRoom}
            />
          </Layout>
          <Layout mr={24} mb={24}>
            <CheckButton
              active={installationRoom.terrace}
              name='terrace'
              text={intl.formatMessage(messages.terrace)}
              onClick={onChangeInstallationRoom}
            />
          </Layout>
          <Layout mr={24} mb={24}>
            <CheckButton
              active={installationRoom.restroom}
              name='restroom'
              text={intl.formatMessage(messages.restroom)}
              onClick={onChangeInstallationRoom}
            />
          </Layout>
          <Layout mr={24} mb={24}>
            <CheckButton
              active={installationRoom.installationRoomAnother}
              name='installationRoomAnother'
              text={intl.formatMessage(messages.installationRoomAnother)}
              onClick={onChangeInstallationRoom}
            />
          </Layout>
        </Row>
      </Layout>
    </Column>
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
