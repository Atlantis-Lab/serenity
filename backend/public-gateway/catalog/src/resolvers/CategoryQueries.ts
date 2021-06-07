import { Injectable, OnModuleInit } from '@nestjs/common'
import { Query }                    from '@nestjs/graphql'
import { Client, ClientGrpc }       from '@nestjs/microservices'

import { clientOptions }            from '@protos/catalog'
import { catalog }                  from '@protos/interfaces'

import { CategoriesList }           from '../types'

@Injectable()
export class CategoryQueries implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private catalogService: catalog.CatalogService

  onModuleInit() {
    this.catalogService = this.client.getService<catalog.CatalogService>('CatalogService')
  }

  @Query((returns) => CategoriesList)
  categories() {
    return this.catalogService.getCategories({})
  }
}
