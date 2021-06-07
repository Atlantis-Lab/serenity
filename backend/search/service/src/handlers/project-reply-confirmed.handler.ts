import { HandlesMessage }        from '@monstrs/nestjs-bus'
import { Handler }               from '@node-ts/bus-core'

import { ProjectReplyConfirmed } from '@collaboration/domain'

import { ProjectDataService }    from '../services'

@HandlesMessage(ProjectReplyConfirmed)
export class ProjectReplyConfirmedHandler implements Handler<ProjectReplyConfirmed> {
  constructor(private readonly projectDataService: ProjectDataService) {}

  async handle(event: ProjectReplyConfirmed): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
