import DataLoader                           from 'dataloader'
import { Injectable, OnModuleInit }         from '@nestjs/common'
import { Client, ClientGrpc }               from '@nestjs/microservices'
import { map }                              from 'rxjs/operators'

import { NestDataLoader, OrderResultByKey } from '@monstrs/nestjs-dataloader'
import { clientOptions }                    from '@protos/catalog'
import { catalog }                          from '@protos/interfaces'

@Injectable()
export class CategoryLoader implements NestDataLoader, OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private catalogService: catalog.CatalogService

  onModuleInit() {
    this.catalogService = this.client.getService<catalog.CatalogService>('CatalogService')
  }

  @OrderResultByKey()
  getCategories(id: string[]) {
    return this.catalogService
      .getCategories({ filters: { id } })
      .pipe(map((data) => data.rows))
      .toPromise()
  }

  generateDataLoader(): DataLoader<any, any> {
    // @ts-ignore
    return new DataLoader<string, catalog.Category>(this.getCategories.bind(this))
  }
}
