import { Injectable }       from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository }       from 'typeorm'

import { ProjectId }        from '@collaboration/persistence'

@Injectable()
export class ProjectIdService {
  constructor(
    @InjectRepository(ProjectId)
    private readonly projectIdRepository: Repository<ProjectId>
  ) {}

  async generate(): Promise<string> {
    const projectId = await this.projectIdRepository.save(this.projectIdRepository.create())

    return projectId.build()
  }
}
