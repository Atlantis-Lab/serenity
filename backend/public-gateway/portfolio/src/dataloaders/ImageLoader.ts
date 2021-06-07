import DataLoader                           from 'dataloader'
import { NestDataLoader, OrderResultByKey } from '@monstrs/nestjs-dataloader'
import { Injectable, OnModuleInit }         from '@nestjs/common'
import { Client, ClientGrpc }               from '@nestjs/microservices'
import { map }                              from 'rxjs/operators'

import { clientOptions }                    from '@protos/files'
import { files }                            from '@protos/interfaces'

@Injectable()
export class ImageLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private filesService: files.FilesService

  onModuleInit() {
    this.filesService = this.client.getService<files.FilesService>('FilesService')
  }

  @OrderResultByKey()
  getImages(id: string[]) {
    return this.filesService
      .getFiles({ filters: { id } })
      .pipe(map((data) => data.rows))
      .toPromise()
  }

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string[], files.File[]>(this.getImages.bind(this))
  }
}
