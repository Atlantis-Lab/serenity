/* eslint-disable class-methods-use-this */
import { Injectable, OnModuleInit }              from '@nestjs/common'
import { Args, ResolveProperty, Resolver, Root } from '@nestjs/graphql'
import { Client, ClientGrpc }                    from '@nestjs/microservices'
import { ID }                                    from 'type-graphql'
import { map }                                   from 'rxjs/operators'

import { clientOptions }                         from '@protos/collaboration'
import { collaboration }                         from '@protos/interfaces'

import { User }                                  from '../types'

@Injectable()
@Resolver((of) => User)
export class ProjectsResolver implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')
  }

  @ResolveProperty()
  projects(
    @Root()
    user: any,
    @Args({ name: 'id', nullable: true, type: () => ID })
    id: string
  ) {
    return this.collaborationService
      .getProjects({ filters: { customerId: [user.id], id: id ? [id] : null } })
      .pipe(map((data: any) => data.rows))
  }
}
