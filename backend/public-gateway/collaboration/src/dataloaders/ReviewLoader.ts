import DataLoader                   from 'dataloader'
import { NestDataLoader }           from '@monstrs/nestjs-dataloader'
import { Injectable, OnModuleInit } from '@nestjs/common'
import { Client, ClientGrpc }       from '@nestjs/microservices'
import { map }                      from 'rxjs/operators'

import { clientOptions }            from '@protos/collaboration'
import { collaboration }            from '@protos/interfaces'

@Injectable()
export class ReviewLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')
  }

  getReviews = async (specialistId: string[]) =>
    this.collaborationService
      .getReviews({ filters: { specialistId } })
      .pipe(
        map((data: any) =>
          specialistId.map((id) => data.rows.filter((item) => item.specialistId === id))
        )
      )
      .toPromise()

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string, collaboration.Review>(this.getReviews)
  }
}
