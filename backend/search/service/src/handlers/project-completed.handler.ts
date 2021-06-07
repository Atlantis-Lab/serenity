import { HandlesMessage }     from '@monstrs/nestjs-bus'
import { Handler }            from '@node-ts/bus-core'

import { ProjectCompleted }   from '@collaboration/domain'

import { ProjectDataService } from '../services'

@HandlesMessage(ProjectCompleted)
export class ProjectCompletedHandler implements Handler<ProjectCompleted> {
  constructor(private readonly projectDataService: ProjectDataService) {}

  async handle(event: ProjectCompleted): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
