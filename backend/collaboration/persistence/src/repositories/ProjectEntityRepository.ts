import { Bus }                      from '@monstrs/nestjs-bus'
import { Logger }                   from '@monstrs/nestjs-logger'
import { Injectable }               from '@nestjs/common'
import { Connection }               from 'typeorm'

import { Project as ProjectEntity } from '@collaboration/domain'
import { WriteRepository }          from '@node-ts/ddd'

import { Project }                  from '../entities'

@Injectable()
// @ts-ignore
export class ProjectEntityRepository extends WriteRepository<ProjectEntity, Project> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(ProjectEntity, Project, connection, bus, logger)
  }
}
