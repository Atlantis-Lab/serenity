import { Injectable, OnModuleInit, ValidationPipe }       from '@nestjs/common'
import { Args, Mutation }                                 from '@nestjs/graphql'
import { Client, ClientGrpc }                             from '@nestjs/microservices'

import { clientOptions }                                  from '@protos/catalog'
import { catalog }                                        from '@protos/interfaces'

import { CreateCategoryInput, DeleteCategoryInput }       from '../inputs'
import { UpdateCategoryInput }                            from '../inputs'
import { CreateCategoryResponse, DeleteCategoryResponse } from '../types'
import { UpdateCategoryResponse }                         from '../types'

@Injectable()
export class CategoryMutations implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private catalogService: catalog.CatalogService

  onModuleInit() {
    this.catalogService = this.client.getService<catalog.CatalogService>('CatalogService')
  }

  @Mutation((returns) => CreateCategoryResponse)
  createCategory(
    @Args('input', new ValidationPipe({ transform: true }))
    input: CreateCategoryInput
  ) {
    return this.catalogService.createCategory(input)
  }

  @Mutation((returns) => UpdateCategoryResponse)
  updateCategory(
    @Args('input', new ValidationPipe({ transform: true }))
    input: UpdateCategoryInput
  ) {
    return this.catalogService.updateCategory(input)
  }

  @Mutation((returns) => DeleteCategoryResponse)
  deleteCategory(
    @Args('input', new ValidationPipe({ transform: true }))
    input: DeleteCategoryInput
  ) {
    return this.catalogService.deleteCategory(input)
  }
}
