import { Injectable, OnModuleInit } from '@nestjs/common'
import { Args, Context, Mutation }  from '@nestjs/graphql'
import { Client, ClientGrpc }       from '@nestjs/microservices'

import { clientOptions }            from '@protos/collaboration'
import { collaboration }            from '@protos/interfaces'

import {
  CompleteProjectInput,
  CreateProjectInput,
  PublishProjectInput,
  UpdateProjectInput,
} from '../inputs'
import {
  CompleteProjectResponse,
  CreateProjectResponse,
  PublishProjectResponse,
  UpdateProjectResponse,
} from '../types'

@Injectable()
export class ProjectMutations implements OnModuleInit {
  @Client(clientOptions)
  private readonly client: ClientGrpc

  private collaborationService: collaboration.CollaborationService

  onModuleInit() {
    this.collaborationService =
      this.client.getService<collaboration.CollaborationService>('CollaborationService')
  }

  @Mutation((returns) => CreateProjectResponse)
  createProject(
    @Args('input')
    input: CreateProjectInput,
    @Context('user') customerId: string
  ) {
    return this.collaborationService.createProject({ ...input, customerId })
  }

  @Mutation((returns) => UpdateProjectResponse)
  updateProject(
    @Args('input')
    input: UpdateProjectInput,
    @Context('user') customerId: string
  ) {
    return this.collaborationService.updateProject({ ...input, customerId })
  }

  @Mutation((returns) => PublishProjectResponse)
  publishProject(
    @Args('input')
    input: PublishProjectInput,
    @Context('user') customerId: string
  ) {
    return this.collaborationService.publishProject({ ...input, customerId })
  }

  @Mutation((returns) => CompleteProjectResponse)
  completeProject(
    @Args('input')
    input: CompleteProjectInput,
    @Context('user') customerId: string
  ) {
    return this.collaborationService.completeProject({ ...input, customerId })
  }
}
