/* eslint-disable class-methods-use-this */
import DataLoader                                     from 'dataloader'
import { Injectable }                                 from '@nestjs/common'
import { ResolveProperty, Resolver, Root }            from '@nestjs/graphql'

import { Loader }                                     from '@monstrs/nestjs-dataloader'

import { ActivityLoader, CustomerLoader, UserLoader } from '../dataloaders'
import { ProjectOwner }                               from '../types'

@Injectable()
@Resolver((of) => ProjectOwner)
export class ProjectOwnerResolver {
  @ResolveProperty()
  async profile(
    @Root() { customerId }: any,
    @Loader(UserLoader.name)
    userLoader: DataLoader<any, any>
  ) {
    const user = await userLoader.load(customerId)

    return user.profile
  }

  @ResolveProperty()
  member(
    @Root() { customerId }: any,
    @Loader(CustomerLoader.name)
    customerLoader: DataLoader<any, any>
  ) {
    if (!customerId) {
      return null
    }

    return customerLoader.load(customerId)
  }

  @ResolveProperty()
  activity(
    @Root() { customerId }: any,
    @Loader(ActivityLoader.name)
    activityLoader: DataLoader<any, any>
  ) {
    if (!customerId) {
      return null
    }

    return activityLoader.load(customerId)
  }
}
