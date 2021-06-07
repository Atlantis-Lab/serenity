/* eslint-disable class-methods-use-this */
import DataLoader                                    from 'dataloader'
import { Loader }                                    from '@monstrs/nestjs-dataloader'
import { Injectable }                                from '@nestjs/common'
import { ResolveProperty, Resolver, Root }           from '@nestjs/graphql'

import { PortfolioLoader, ReviewLoader, UserLoader } from '../dataloaders'
import { Specialist }                                from '../types'

@Injectable()
@Resolver((of) => Specialist)
export class SpecialistResolver {
  @ResolveProperty()
  async profile(
    @Root() { id }: any,
    @Loader(UserLoader.name)
    userLoader: DataLoader<any, any>
  ) {
    const user = await userLoader.load(id)

    return user.profile
  }

  @ResolveProperty()
  portfolio(
    @Root() { id }: any,
    @Loader(PortfolioLoader.name)
    portfolioLoader: DataLoader<any, any>
  ) {
    return portfolioLoader.load(id)
  }

  @ResolveProperty()
  reviews(
    @Root() { id }: any,
    @Loader(ReviewLoader.name)
    reviewLoader: DataLoader<any, any>
  ) {
    return reviewLoader.load(id)
  }
}
