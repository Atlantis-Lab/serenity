/* eslint-disable class-methods-use-this */
import { Injectable, OnModuleInit }  from '@nestjs/common'
import { ResolveProperty, Resolver } from '@nestjs/graphql'
import { Client, ClientGrpc }        from '@nestjs/microservices'
import { map }                       from 'rxjs/operators'

import { clientOptions }             from '@protos/files'
import { files }                     from '@protos/interfaces'

import { Profile }                   from '../types'

@Injectable()
@Resolver((of) => Profile)
export class ProfilePhotoResolver implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private filesService: files.FilesService

  onModuleInit() {
    this.filesService = this.client.getService<files.FilesService>('FilesService')
  }

  @ResolveProperty()
  photo(profile: any) {
    if (!(profile.photo && profile.photo.id)) {
      return null
    }

    return this.filesService
      .getFiles({ filters: { id: [profile.photo.id] } })
      .pipe(map((data) => (data as any).rows[0]))
  }
}
