import { Injectable, OnModuleInit }               from '@nestjs/common'
import { Args, Context, Mutation }                from '@nestjs/graphql'
import { Client, ClientGrpc }                     from '@nestjs/microservices'

import { clientOptions }                          from '@protos/collaboration'
import { clientOptions as identityClientOptions } from '@protos/identity'
import { collaboration, identity }                from '@protos/interfaces'

import { AddDiscussionMessageInput }              from '../inputs'
import { AddDiscussionMessageResponse }           from '../types'

@Injectable()
export class DiscussionMutations implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  @Client(identityClientOptions)
  private readonly identityClient: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  private identityService: identity.IdentityService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')

    this.identityService =
      this.identityClient.getService<identity.IdentityService>('IdentityService')
  }

  @Mutation((returns) => AddDiscussionMessageResponse)
  async addDiscussionMessage(
    @Args('input')
    input: AddDiscussionMessageInput,
    @Context('user') authorId: string
  ) {
    const { rows } = await this.identityService
      .getUsers({ filters: { id: [authorId] } })
      .toPromise()

    // @ts-ignore
    const [sender] = rows

    const params: any = { ...input, authorId }

    if ((sender as any).profile.type === 'specialist') {
      params.specialistId = authorId
      params.customerId = input.recipientId
    } else {
      params.customerId = authorId
      params.specialistId = input.recipientId
    }

    return this.collaborationService.addDiscussionMessage(params)
  }
}
