import DataLoader                                                  from 'dataloader'
/* eslint-disable class-methods-use-this */
import { Injectable }                                              from '@nestjs/common'
import { ResolveProperty, Resolver, Root }                         from '@nestjs/graphql'

import { Loader }                                                  from '@monstrs/nestjs-dataloader'
import { Category }                                                from '@public-gateway/catalog'
import { File }                                                    from '@public-gateway/files'
import { collaboration }                                           from '@protos/interfaces'

import { CategoryLoader, CounterLoader, FilesLoader, ReplyLoader } from '../dataloaders'
import { Project }                                                 from '../types'

@Injectable()
@Resolver((of) => Project)
export class ProjectResolver {
  @ResolveProperty()
  category(
    @Root() { categoryId }: collaboration.Project,
    @Loader(CategoryLoader.name)
    categoryLoader: DataLoader<any, Category>
  ) {
    if (!categoryId) {
      return null
    }

    return categoryLoader.load(categoryId)
  }

  @ResolveProperty()
  owner(@Root() { customerId }: collaboration.Project) {
    return { customerId }
  }

  @ResolveProperty()
  photos(
    @Root() { photos }: collaboration.Project,
    @Loader(FilesLoader.name)
    filesLoader: DataLoader<any, File>
  ) {
    if (!(photos && photos.length > 0)) {
      return []
    }

    return filesLoader.loadMany(photos)
  }

  @ResolveProperty()
  replies(
    @Root() { id }: collaboration.Reply,
    @Loader(ReplyLoader.name)
    replyLoader: DataLoader<any, File>
  ) {
    return replyLoader.load(id)
  }

  @ResolveProperty()
  async views(
    @Root() { id }: any,
    @Loader(CounterLoader.name)
    counterLoader: DataLoader<any, any>
  ) {
    const counter = await counterLoader.load(id)

    return counter ? counter.value : 0
  }
}
