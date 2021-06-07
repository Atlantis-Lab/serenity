/* eslint-disable class-methods-use-this */
import { Injectable }                      from '@nestjs/common'
import { ResolveProperty, Resolver, Root } from '@nestjs/graphql'
import { Client, ClientGrpc }              from '@nestjs/microservices'
import { map }                             from 'rxjs/operators'

import { clientOptions }                   from '@protos/collaboration'
import { collaboration }                   from '@protos/interfaces'

import { User }                            from '../types'

@Injectable()
@Resolver((of) => User)
export class MemberResolver {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')
  }

  @ResolveProperty()
  member(
    @Root()
    user: any
  ) {
    return this.collaborationService
      .getSpecialists({ filters: { id: [user.id] } })
      .pipe(map((data: any) => data.rows[0]))
  }
}
