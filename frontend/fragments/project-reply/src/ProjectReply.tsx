import React                        from 'react'
import { WithUser, WithoutUser }    from '@atls/react-user'

import ChooseSpecialistModal        from '@fragments/choose-specialist-modal'
import { Avatar }                   from '@ui/avatar'
import { Button }                   from '@ui/button'
import { Divider }                  from '@ui/divider'
import { StarIcon, ThumbUpIcon }    from '@ui/icons'
import { Input, Textarea }          from '@ui/input'
import { Box, Column, Layout, Row } from '@ui/layout'
import { Link, SidebarLink }        from '@ui/link'
import { Option, Select }           from '@ui/select'
import { Text }                     from '@ui/text'

import messages                     from './messages'

export const ProjectReply = ({
  intl,
  message,
  profile = {},
  replies,
  loading,
  errors,
  comments,
  visible,
  status,
  ownerName,
  replyChooseData,
  activeFilter,
  onChangeMessage,
  onChangeComment,
  onSaveMessage,
  onRegistration,
  onLogin,
  onSaveComment,
  onChangeStatus,
  onChooseSpecialist,
  closeChooseSpecialist,
  onOpenSpecialist,
  onAcceptProject,
  onRejectProject,
  onFilterReplies,
}: any) => (
  <>
    <WithUser>
      {profile && (profile.type === 'specialist' || profile.type === 'owner') && (
        <Box bg='alabaster' alignItems='center' flexDirection='column'>
          <Divider />
          <Layout flexBasis={25} />
          <Box
            maxWidth={1200}
            px={[20, 20, 40]}
            boxSizing='border-box'
            width='100%'
            flexDirection={['column-reverse', 'row']}
          >
            <Layout width='100%'>
              <Column>
                <Layout flexBasis={48} alignItems='baseline'>
                  <Text fontSize='giant' lineHeight='medium'>
                    {intl.formatMessage(
                      profile.type === 'owner' ? messages.responses : messages.yourResponse
                    )}
                  </Text>
                  {profile.type === 'owner' && (
                    <>
                      <Layout flexBasis={32} />
                      <Text fontSize='huge' color='silver' fontWeight='medium'>
                        {replies.length}
                      </Text>
                    </>
                  )}
                </Layout>
                {profile.type === 'specialist' && replies[0] && replies[0].status === 'chosen' && (
                  <Box
                    mt={24}
                    py={24}
                    width='100%'
                    border='black'
                    borderRadius='extra'
                    flexDirection='column'
                    overflow='hidden'
                    bg='wildsand'
                  >
                    <Row>
                      <Layout flexBasis={52} />
                      <Layout>
                        <ThumbUpIcon width={20} height={20} />
                      </Layout>
                      <Layout flexBasis={16} flexShrink={0} />
                      <Layout flexGrow={1}>
                        <Column>
                          <Layout>
                            <Text lineHeight='medium'>
                              <Text fontWeight='bold'>
                                {`${ownerName.firstName} ${ownerName.lastName}`}
                              </Text>
                              {intl.formatMessage(messages.projectOffer)}
                            </Text>
                          </Layout>
                          <Layout flexBasis={26} />
                          <Layout>
                            <Button borderRadius='large' onClick={onRejectProject}>
                              {intl.formatMessage(messages.projectReject)}
                            </Button>
                            <Layout flexBasis={16} flexShrink={0} />
                            <Button color='chicago' borderRadius='large' onClick={onAcceptProject}>
                              {intl.formatMessage(messages.projectAccept)}
                            </Button>
                          </Layout>
                        </Column>
                      </Layout>
                      <Layout flexBasis={24} flexShrink={0} />
                    </Row>
                  </Box>
                )}
                <Layout flexBasis={28} />
                {replies.length === 0 && profile.type !== 'owner' && (
                  <Layout>
                    <Row>
                      <Layout>
                        <Avatar
                          src={profile.photo && profile.photo.url}
                          width={56}
                          height={56}
                          color='alto'
                        />
                      </Layout>
                      <Layout flexBasis={22} />
                      <Layout flexGrow={1}>
                        <Column>
                          {errors.message && (
                            <Layout pb='4px'>
                              <Text color='red'>{errors.message}</Text>
                            </Layout>
                          )}
                          <Layout>
                            <Textarea
                              boxShadow='black'
                              rows={6}
                              value={message}
                              onChange={onChangeMessage}
                              placeholder={intl.formatMessage(messages.messagePlaceholder)}
                            />
                          </Layout>
                          <Layout flexBasis={22} />
                          <Layout>
                            <Button onClick={onSaveMessage} disabled={loading} color='chicago'>
                              {intl.formatMessage(messages.respondButton)}
                            </Button>
                          </Layout>
                        </Column>
                      </Layout>
                    </Row>
                  </Layout>
                )}
                {replies.length > 0 &&
                  replies.map((reply) => (
                    <Box
                      key={reply.id}
                      my='7px'
                      width='100%'
                      border='black'
                      borderRadius='extra'
                      flexDirection='column'
                      overflow='hidden'
                      bg='white'
                    >
                      {reply.discussion.messages.map((replyMessage, index) => (
                        <Column key={replyMessage.id}>
                          <Layout flexBasis={index === 0 ? 16 : 24} />
                          <Layout pr={['16px', '24px']} pl={16}>
                            <Row>
                              <Layout>
                                <Column>
                                  <Layout
                                    width={56}
                                    height={56}
                                    alignItems='center'
                                    justifyContent='flex-end'
                                  >
                                    <Avatar
                                      width={index === 0 ? 56 : 32}
                                      height={index === 0 ? 56 : 32}
                                      color='alto'
                                      src={
                                        (replyMessage.author.photo &&
                                          replyMessage.author.photo.url) ||
                                        null
                                      }
                                    />
                                  </Layout>
                                  <Layout flexBasis={13} />
                                  {index === 0 && (
                                    <Layout alignItems='center' justifyContent='center'>
                                      <Layout>
                                        <Text lineHeight='medium'>
                                          {(replyMessage.member && replyMessage.member.rating) ||
                                            0.0}
                                        </Text>
                                      </Layout>
                                      <Layout pl='4px'>
                                        <StarIcon width={16} height={16} />
                                      </Layout>
                                    </Layout>
                                  )}
                                </Column>
                              </Layout>
                              <Layout flexBasis={16} flexShrink={0} />
                              <Layout flexGrow={1} overflow='hidden'>
                                <Column>
                                  <Layout flexBasis='7px' />
                                  <Layout>
                                    <Row justifyContent='space-between' alignItems='flex-start'>
                                      <Layout>
                                        <Column>
                                          <Layout>
                                            <Text
                                              fontWeight='medium'
                                              fontSize='regular'
                                              lineHeight='medium'
                                              color='black'
                                              as={replyMessage.member ? Link : Text}
                                              onClick={() => {
                                                if (replyMessage.member) {
                                                  onOpenSpecialist(replyMessage.member.id)
                                                }
                                              }}
                                            >
                                              {replyMessage.member &&
                                              replyMessage.member.interaction.formOfWork ===
                                                'company'
                                                ? replyMessage.member.interaction.name
                                                : `${replyMessage.author.personalInformation.firstName} ${replyMessage.author.personalInformation.lastName}`}
                                            </Text>
                                          </Layout>
                                          {index === 0 &&
                                            replyMessage.member &&
                                            replyMessage.member.specialisation.main && (
                                              <Layout alignItems='center'>
                                                <Layout>
                                                  <Text
                                                    color='silver'
                                                    lineHeight='medium'
                                                    wordBreak='break-word'
                                                  >
                                                    {replyMessage.member.specialisation.main
                                                      .map((item) => item.name)
                                                      .join(', ')}
                                                  </Text>
                                                </Layout>
                                                <Layout>
                                                  {replyMessage.member.specialisation.additional &&
                                                    replyMessage.member.specialisation
                                                      .additional[0] && (
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
                                                        >{`+${replyMessage.member.specialisation.additional.length}`}</Text>
                                                      </Box>
                                                    )}
                                                </Layout>
                                              </Layout>
                                            )}
                                        </Column>
                                      </Layout>
                                      <Layout flexBasis={20} flexShrink={0} />
                                      {profile.type === 'owner' && index === 0 && (
                                        <Layout flexBasis={144}>
                                          <Select
                                            rounded
                                            disabled={
                                              status === 'selected' ||
                                              status === 'performed' ||
                                              status === 'completed'
                                            }
                                            value={reply.status}
                                            onChange={(value) =>
                                              onChangeStatus(value, status, {
                                                photo: replyMessage.author.photo,
                                                personalInformation:
                                                  replyMessage.author.personalInformation,
                                                id: reply.id,
                                              })
                                            }
                                            optionLabelProp='label'
                                          >
                                            <Option
                                              className='hidden'
                                              key='new'
                                              value='new'
                                              label={intl.formatMessage(messages.newRequest)}
                                            >
                                              {intl.formatMessage(messages.newRequest)}
                                            </Option>
                                            <Option
                                              className='hidden'
                                              key='rejected'
                                              value='rejected'
                                              label={intl.formatMessage(messages.denied)}
                                            >
                                              {intl.formatMessage(messages.denied)}
                                            </Option>
                                            <Option
                                              key='candidate'
                                              value='candidate'
                                              label={intl.formatMessage(messages.candidate)}
                                            >
                                              {intl.formatMessage(messages.candidate)}
                                            </Option>
                                            <Option
                                              key='chosen'
                                              value='chosen'
                                              label={intl.formatMessage(messages.chosen)}
                                            >
                                              {intl.formatMessage(messages.choose)}
                                            </Option>
                                            <Option
                                              key='denied'
                                              value='denied'
                                              label={intl.formatMessage(messages.denied)}
                                            >
                                              {intl.formatMessage(messages.deny)}
                                            </Option>
                                          </Select>
                                        </Layout>
                                      )}
                                    </Row>
                                  </Layout>
                                  <Layout flexBasis={18} />
                                  <Layout>
                                    <Text lineHeight='medium'>{replyMessage.content}</Text>
                                  </Layout>
                                </Column>
                              </Layout>
                            </Row>
                          </Layout>
                          <Layout flexBasis={24} />
                          {index + 1 < reply.discussion.messages.length && <Divider />}
                        </Column>
                      ))}
                      <Divider />
                      <Layout flexBasis={24} />
                      {errors.message && (
                        <Layout pb='4px'>
                          <Text color='red'>{errors.message}</Text>
                        </Layout>
                      )}
                      <Layout px={24}>
                        <Input
                          size='medium'
                          prefix={
                            <Avatar
                              width={32}
                              height={32}
                              color='alto'
                              src={(profile.photo && profile.photo.url) || null}
                            />
                          }
                          value={comments[reply.id]}
                          placeholder={intl.formatMessage(messages.commentPlaceholder)}
                          onChange={(value) => onChangeComment(value, reply.id)}
                          onEnter={() => onSaveComment(reply.id)}
                        />
                      </Layout>
                      <Layout flexBasis={24} />
                    </Box>
                  ))}
              </Column>
            </Layout>
            <Layout flexBasis={24} flexShrink={0} />
            <Layout pt={[20, 83]} flexBasis={['auto', 206, 256]} flexShrink={0}>
              {profile.type === 'owner' && (
                <Column>
                  <Box border='black' borderRadius='extra' boxSizing='border-box' bg='white'>
                    <Column>
                      <Layout>
                        <SidebarLink
                          active={activeFilter === ''}
                          onClick={() => onFilterReplies('')}
                        >
                          {intl.formatMessage(messages.allResponsesSidebar)}
                        </SidebarLink>
                      </Layout>
                      <Divider />
                      <Layout>
                        <SidebarLink
                          active={activeFilter === 'new'}
                          onClick={() => onFilterReplies('new')}
                        >
                          {intl.formatMessage(messages.newResponsesSidebar)}
                        </SidebarLink>
                      </Layout>
                      <Divider />
                      <Layout>
                        <SidebarLink
                          active={activeFilter === 'candidate'}
                          onClick={() => onFilterReplies('candidate')}
                        >
                          {intl.formatMessage(messages.candidatesSidebar)}
                        </SidebarLink>
                      </Layout>
                      <Divider />
                      <Layout>
                        <SidebarLink
                          active={activeFilter === 'denied'}
                          onClick={() => onFilterReplies('denied')}
                        >
                          {intl.formatMessage(messages.deniedSidebar)}
                        </SidebarLink>
                      </Layout>
                    </Column>
                  </Box>
                </Column>
              )}
            </Layout>
          </Box>
          <Layout flexBasis={[40, 60, 80]} />
        </Box>
      )}
      <ChooseSpecialistModal
        visible={visible}
        data={replyChooseData}
        onClose={closeChooseSpecialist}
        onSave={onChooseSpecialist}
      />
    </WithUser>
    <WithoutUser>
      <Divider />
      <Box justifyContent='center' bg='alabaster'>
        <Row maxWidth={1200} px={[20, 20, 40]} boxSizing='border-box' width='100%'>
          <Layout>
            <Column>
              <Layout flexBasis={25} />
              <Layout>
                <Text fontSize='giant' lineHeight='medium'>
                  {intl.formatMessage(messages.response)}
                </Text>
              </Layout>
              <Layout flexBasis={28} />
              <Box p={24} borderRadius='4px' bg='wildsand' border='black' flexDirection='column'>
                <Layout>
                  <Text lineHeight='medium'>{intl.formatMessage(messages.registration)}</Text>
                </Layout>
                <Layout flexBasis={27} />
                <Layout>
                  <Box width='100%' flexDirection={['column', 'row']}>
                    <Layout>
                      <Button onClick={onRegistration} borderRadius='large' color='chicago' fill>
                        {intl.formatMessage(messages.registrationButton)}
                      </Button>
                    </Layout>
                    <Layout flexBasis={16} />
                    <Layout>
                      <Button onClick={onLogin} borderRadius='large' fill>
                        <Layout px={14}>{intl.formatMessage(messages.loginButton)}</Layout>
                      </Button>
                    </Layout>
                  </Box>
                </Layout>
              </Box>
              <Layout flexBasis={[40, 60, 80]} />
            </Column>
          </Layout>
          <Layout flexBasis={['auto', 220, 296]} flexShrink={0} />
        </Row>
      </Box>
    </WithoutUser>
  </>
)
