import DataLoader                           from 'dataloader'
import { Injectable, OnModuleInit }         from '@nestjs/common'
import { Client, ClientGrpc }               from '@nestjs/microservices'
import { map }                              from 'rxjs/operators'

import { NestDataLoader, OrderResultByKey } from '@monstrs/nestjs-dataloader'
import { clientOptions }                    from '@protos/hits'
import { hits }                             from '@protos/interfaces'

@Injectable()
export class ActivityLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private hitsService: hits.HitsService

  onModuleInit() {
    this.hitsService = this.client.getService<hits.HitsService>('HitsService')
  }

  @OrderResultByKey()
  getActivities(id: string[]) {
    return this.hitsService
      .getActivities({ filters: { id } })
      .pipe(map((data) => data.rows))
      .toPromise()
  }

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string, hits.Activity[]>(this.getActivities.bind(this))
  }
}
