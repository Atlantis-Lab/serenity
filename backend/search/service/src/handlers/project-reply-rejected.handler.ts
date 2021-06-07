import { HandlesMessage }       from '@monstrs/nestjs-bus'
import { Handler }              from '@node-ts/bus-core'

import { ProjectReplyRejected } from '@collaboration/domain'

import { ProjectDataService }   from '../services'

@HandlesMessage(ProjectReplyRejected)
export class ProjectReplyRejectedHandler implements Handler<ProjectReplyRejected> {
  constructor(private readonly projectDataService: ProjectDataService) {}

  async handle(event: ProjectReplyRejected): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
