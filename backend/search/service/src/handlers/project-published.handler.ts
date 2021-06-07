import { HandlesMessage }     from '@monstrs/nestjs-bus'
import { Handler }            from '@node-ts/bus-core'

import { ProjectPublished }   from '@collaboration/domain'

import { ProjectDataService } from '../services'

@HandlesMessage(ProjectPublished)
export class ProjectPublishedHandler implements Handler<ProjectPublished> {
  constructor(private readonly projectDataService: ProjectDataService) {}

  async handle(event: ProjectPublished): Promise<void> {
    await this.projectDataService.handle(event.projectId)
  }
}
