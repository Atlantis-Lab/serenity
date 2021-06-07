import { LoggerModule }   from '@monstrs/nestjs-logger'
import { Global, Module } from '@nestjs/common'
import { TypeOrmModule }  from '@nestjs/typeorm'

import config             from './config'
import {
  Chat,
  Customer,
  Discussion,
  Message,
  Project,
  ProjectId,
  Reply,
  Review,
  Specialist,
} from './entities'
import {
  ChatEntityRepository,
  CustomerEntityRepository,
  DiscussionEntityRepository,
  MessageEntityRepository,
  ProjectEntityRepository,
  ReplyEntityRepository,
  ReviewEntityRepository,
  SpecialistEntityRepository,
} from './repositories'

const feature = TypeOrmModule.forFeature([
  Specialist,
  Customer,
  Project,
  Message,
  Discussion,
  Reply,
  Review,
  Chat,
  ProjectId,
])

@Global()
@Module({
  imports: [LoggerModule, feature.module, TypeOrmModule.forRoot(config)],
  providers: [
    // @ts-ignore
    ...feature.providers,
    SpecialistEntityRepository,
    CustomerEntityRepository,
    ProjectEntityRepository,
    MessageEntityRepository,
    DiscussionEntityRepository,
    ReplyEntityRepository,
    ReviewEntityRepository,
    ChatEntityRepository,
  ],
  exports: [
    // @ts-ignore
    ...feature.exports,
    SpecialistEntityRepository,
    CustomerEntityRepository,
    ProjectEntityRepository,
    MessageEntityRepository,
    DiscussionEntityRepository,
    ReplyEntityRepository,
    ReviewEntityRepository,
    ChatEntityRepository,
  ],
})
export class PersistenceModule {}
