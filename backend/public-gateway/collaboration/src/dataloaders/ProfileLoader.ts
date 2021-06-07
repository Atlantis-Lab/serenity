import DataLoader                           from 'dataloader'
import { Injectable, OnModuleInit }         from '@nestjs/common'
import { Client, ClientGrpc }               from '@nestjs/microservices'
import { map }                              from 'rxjs/operators'

import { NestDataLoader, OrderResultByKey } from '@monstrs/nestjs-dataloader'
import { clientOptions }                    from '@protos/identity'
import { identity }                         from '@protos/interfaces'

@Injectable()
export class ProfileLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private identityService: identity.IdentityService

  onModuleInit() {
    this.identityService = this.client.getService<identity.IdentityService>('IdentityService')
  }

  @OrderResultByKey()
  getProfiles(id: string[]) {
    return this.identityService
      .getUsers({ filters: { id } })
      .pipe(map((data) => (data as any).rows.map((row) => row.profile)))
      .toPromise()
  }

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string, identity.Profile>(this.getProfiles.bind(this))
  }
}
