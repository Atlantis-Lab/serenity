import { Injectable, OnModuleInit, ValidationPipe } from '@nestjs/common'
import { Args, Mutation }                           from '@nestjs/graphql'
import { Client, ClientGrpc }                       from '@nestjs/microservices'

import { clientOptions }                            from '@protos/catalog'
import { catalog }                                  from '@protos/interfaces'

import {
  CreateCategoryGroupInput,
  DeleteCategoryGroupInput,
  UpdateCategoryGroupInput,
} from '../inputs'
import {
  CreateCategoryGroupResponse,
  DeleteCategoryGroupResponse,
  UpdateCategoryGroupResponse,
} from '../types'

@Injectable()
export class CategoryGroupMutations implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private catalogService: catalog.CatalogService

  onModuleInit() {
    this.catalogService = this.client.getService<catalog.CatalogService>('CatalogService')
  }

  @Mutation((returns) => CreateCategoryGroupResponse)
  createCategoryGroup(
    @Args('input', new ValidationPipe({ transform: true }))
    input: CreateCategoryGroupInput
  ) {
    return this.catalogService.createCategoryGroup(input)
  }

  @Mutation((returns) => UpdateCategoryGroupResponse)
  updateCategoryGroup(
    @Args('input', new ValidationPipe({ transform: true }))
    input: UpdateCategoryGroupInput
  ) {
    return this.catalogService.updateCategoryGroup(input)
  }

  @Mutation((returns) => DeleteCategoryGroupResponse)
  deleteCategoryGroup(
    @Args('input', new ValidationPipe({ transform: true }))
    input: DeleteCategoryGroupInput
  ) {
    return this.catalogService.deleteCategoryGroup(input)
  }
}
