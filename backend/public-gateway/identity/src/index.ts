import { Module } from '@nestjs/common'

import {
  DiscussionsResolver,
  IdentityQueries,
  MemberResolver,
  PortfolioResolver,
  ProfileMutations,
  ProfilePhotoResolver,
  ProjectsResolver,
  RepliesResolver,
} from './resolvers'

export * from './types'

@Module({
  providers: [
    IdentityQueries,
    PortfolioResolver,
    ProfileMutations,
    ProfilePhotoResolver,
    MemberResolver,
    ProjectsResolver,
    RepliesResolver,
    DiscussionsResolver,
  ],
})
export class IdentityModule {}
