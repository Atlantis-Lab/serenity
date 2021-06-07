import { Injectable, OnModuleInit } from '@nestjs/common'
import { Context, Query }           from '@nestjs/graphql'
import { Client, ClientGrpc }       from '@nestjs/microservices'
import { map }                      from 'rxjs/operators'

import { clientOptions }            from '@protos/identity'
import { identity }                 from '@protos/interfaces'

import { User }                     from '../types'

@Injectable()
export class IdentityQueries implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private identityService: identity.IdentityService

  onModuleInit() {
    this.identityService = this.client.getService<identity.IdentityService>('IdentityService')
  }

  @Query((returns) => User)
  me(@Context('user') user: string) {
    return this.identityService
      .getUsers({ filters: { id: [user] } })
      .pipe(map((data) => (data as any).rows[0]))
  }
}
