/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, OnModuleInit } from '@nestjs/common'
import { Args, Query }              from '@nestjs/graphql'
import { Client, ClientGrpc }       from '@nestjs/microservices'

import { clientOptions }            from '@protos/catalog'
import { catalog }                  from '@protos/interfaces'

import { CategoryGroupsFilter }     from '../inputs'
import { CategoryGroupsList }       from '../types'

@Injectable()
export class CategoryGroupQueries implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private catalogService: catalog.CatalogService

  onModuleInit() {
    this.catalogService = this.client.getService<catalog.CatalogService>('CatalogService')
  }

  @Query((returns) => CategoryGroupsList)
  categoryGroups(
    @Args({ name: 'filters', nullable: true, type: () => CategoryGroupsFilter })
    filters: CategoryGroupsFilter = {}
  ) {
    return this.catalogService.getCategoryGroups({ filters })
  }
}
