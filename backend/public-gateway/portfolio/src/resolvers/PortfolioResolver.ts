import DataLoader                          from 'dataloader'
import { Loader }                          from '@monstrs/nestjs-dataloader'
import { Injectable }                      from '@nestjs/common'
/* eslint-disable class-methods-use-this */
import { ResolveProperty, Resolver, Root } from '@nestjs/graphql'

import { File }                            from '@public-gateway/files'
import { portfolio }                       from '@protos/interfaces'

import { ImageLoader }                     from '../dataloaders'
import { Portfolio }                       from '../types'

@Injectable()
@Resolver((of) => Portfolio)
export class PortfolioResolver {
  @ResolveProperty()
  images(
    @Root() { images }: portfolio.Portfolio,
    @Loader(ImageLoader.name)
    imageLoader: DataLoader<portfolio.Portfolio['id'], File>
  ) {
    if (!(images && images.length > 0)) {
      return []
    }

    return imageLoader.loadMany(images as any)
  }
}
