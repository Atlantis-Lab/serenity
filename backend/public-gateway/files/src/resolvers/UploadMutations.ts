import { Injectable, OnModuleInit }                    from '@nestjs/common'
import { Args, Mutation }                              from '@nestjs/graphql'
import { Client, ClientGrpc }                          from '@nestjs/microservices'

import { clientOptions }                               from '@protos/files'
import { files }                                       from '@protos/interfaces'

import { ConfirmUploadInput, CreateUploadInput }       from '../inputs'
import { ConfirmUploadResponse, CreateUploadResponse } from '../types'

@Injectable()
export class UploadMutations implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private fileService: files.FilesService

  onModuleInit() {
    this.fileService = this.client.getService<files.FilesService>('FilesService')
  }

  @Mutation((returns) => CreateUploadResponse)
  createUpload(
    @Args('input')
    input: CreateUploadInput
  ) {
    return this.fileService.createUpload(input)
  }

  @Mutation((returns) => ConfirmUploadResponse)
  confirmUpload(
    @Args('input')
    input: ConfirmUploadInput
  ) {
    return this.fileService.confirmUpload(input)
  }
}
