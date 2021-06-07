import { HandlesMessage }     from '@monstrs/nestjs-bus'
import { Handler }            from '@node-ts/bus-core'

import { ProjectCreated }     from '@collaboration/domain'

import { ProjectDataService } from '../services'

@HandlesMessage(ProjectCreated)
export class ProjectCreatedHandler implements Handler<ProjectCreated> {
  constructor(private readonly projectDataService: ProjectDataService) {}

  async handle(event: ProjectCreated): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
