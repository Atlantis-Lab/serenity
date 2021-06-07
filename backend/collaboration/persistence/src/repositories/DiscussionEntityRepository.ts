import { Bus }                            from '@monstrs/nestjs-bus'
import { Logger }                         from '@monstrs/nestjs-logger'
import { Injectable }                     from '@nestjs/common'
import { Uuid }                           from '@node-ts/ddd-types'
import { Connection }                     from 'typeorm'

import { Discussion as DiscussionEntity } from '@collaboration/domain'
import { WriteRepository }                from '@node-ts/ddd'

import { Discussion }                     from '../entities'

@Injectable()
// @ts-ignore
export class DiscussionEntityRepository extends WriteRepository<DiscussionEntity, Discussion> {
  constructor(
    private readonly connection: Connection,
    private readonly logger: Logger,
    private readonly bus: Bus
  ) {
    // @ts-ignore
    super(DiscussionEntity, Discussion, connection, bus, logger)
  }

  async getByParticipants(customerId: Uuid, specialistId: Uuid): Promise<DiscussionEntity | null> {
    const writeModel = await this.repository.findOne({
      where: {
        customerId,
        specialistId,
      },
    })

    if (writeModel) {
      return this.toAggregateRoot(writeModel)
    }

    return null
  }
}
