/* eslint-disable class-methods-use-this */
import DataLoader                          from 'dataloader'
import { Injectable }                      from '@nestjs/common'
import { ResolveProperty, Resolver, Root } from '@nestjs/graphql'

import { Loader }                          from '@monstrs/nestjs-dataloader'

import { MemberLoader, UserLoader }        from '../dataloaders'
import { Message }                         from '../types'

@Injectable()
@Resolver((of) => Message)
export class MessageResolver {
  @ResolveProperty()
  async author(
    @Root() { authorId }: any,
    @Loader(UserLoader.name)
    userLoader: DataLoader<any, any>
  ) {
    const user = await userLoader.load(authorId)

    return user.profile
  }

  @ResolveProperty()
  member(
    @Root() { authorId }: any,
    @Loader(MemberLoader.name)
    memberLoader: DataLoader<any, any>
  ) {
    if (!authorId) {
      return null
    }

    return memberLoader.load(authorId)
  }
}
