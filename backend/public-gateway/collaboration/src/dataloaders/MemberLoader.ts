import DataLoader                           from 'dataloader'
import { Injectable, OnModuleInit }         from '@nestjs/common'
import { Client, ClientGrpc }               from '@nestjs/microservices'
import { map }                              from 'rxjs/operators'

import { NestDataLoader, OrderResultByKey } from '@monstrs/nestjs-dataloader'
import { clientOptions }                    from '@protos/collaboration'
import { collaboration }                    from '@protos/interfaces'

@Injectable()
export class MemberLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')
  }

  @OrderResultByKey()
  getMembers(ids: string[]) {
    return this.collaborationService
      .getSpecialists({ filters: { id: ids } })
      .pipe(map((data) => data.rows))
      .toPromise()
  }

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string, collaboration.Specialist>(this.getMembers.bind(this))
  }
}
