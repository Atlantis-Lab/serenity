import DataLoader                          from 'dataloader'
/* eslint-disable class-methods-use-this */
import { Injectable }                      from '@nestjs/common'
import { ResolveProperty, Resolver, Root } from '@nestjs/graphql'

import { Loader }                          from '@monstrs/nestjs-dataloader'
import { collaboration }                   from '@protos/interfaces'

import { ProjectLoader }                   from '../dataloaders'
import { Reply }                           from '../types'

@Injectable()
@Resolver((of) => Reply)
export class ReplyResolver {
  @ResolveProperty()
  project(
    @Root() { projectId }: collaboration.Reply,
    @Loader(ProjectLoader.name)
    projectLoader: DataLoader<any, any>
  ) {
    return projectLoader.load(projectId)
  }
}
